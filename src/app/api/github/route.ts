import { NextResponse } from 'next/server';

// Rate Limit Config
const rateLimitMap = new Map<string, { count: number; lastTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora
const RATE_LIMIT_MAX_REQUESTS = 30; // 30 buscas por hora por IP (mais generoso que email)

export async function GET(request: Request) {
  try {
    // 1. Identificação do IP
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // 2. Rate Limiting
    const now = Date.now();
    const clientData = rateLimitMap.get(ip) || { count: 0, lastTime: now };

    if (now - clientData.lastTime > RATE_LIMIT_WINDOW) {
      clientData.count = 1;
      clientData.lastTime = now;
    } else {
      clientData.count++;
    }
    rateLimitMap.set(ip, clientData);

    if (clientData.count > RATE_LIMIT_MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Limite de requisições excedido. Tente novamente mais tarde.' },
        { status: 429 }
      );
    }

    // 3. Obter parâmetros da URL
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json({ error: 'Username é obrigatório.' }, { status: 400 });
    }

    // Validação básica do username GitHub
    if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(username)) {
      return NextResponse.json({ error: 'Username inválido.' }, { status: 400 });
    }

    // 4. Configurar Headers com Token (se disponível)
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Adiciona token se existir no .env (Aumenta rate limit do GitHub de 60 para 5000)
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    // 5. Chamadas Paralelas ao GitHub
    // Usamos Promise.all para buscar perfil e repositórios simultaneamente
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }), // Cache de 1h
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers, next: { revalidate: 3600 } })
    ]);

    if (!userRes.ok) {
      if (userRes.status === 404) {
        return NextResponse.json({ error: 'Usuário não encontrado.' }, { status: 404 });
      }
      return NextResponse.json({ error: 'Erro ao buscar usuário no GitHub.' }, { status: userRes.status });
    }

    if (!reposRes.ok) {
       // Se falhar repositórios mas tiver usuário, retornamos erro mas poderíamos retornar array vazio.
       // Vamos assumir erro por enquanto.
       return NextResponse.json({ error: 'Erro ao buscar repositórios.' }, { status: reposRes.status });
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    // 6. Retorno Unificado
    return NextResponse.json({
      gitUser: userData,
      gitRepositories: reposData
    });

  } catch (error) {
    console.error('Erro na API GitHub:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor.' },
      { status: 500 }
    );
  }
}
