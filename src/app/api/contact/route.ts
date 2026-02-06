import { NextResponse } from 'next/server';

// Simples Rate Limiter em memória (Token Bucket simplificado)
// Nota: Em serverless (Vercel), isso reseta quando o lambda reinicia, mas ajuda contra floods rápidos.
const rateLimitMap = new Map<string, { count: number; lastTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 emails por hora por IP

export async function POST(request: Request) {
  try {
    // 1. Identificação do IP (X-Forwarded-For para proxies/Vercel ou socket)
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // 2. Lógica de Rate Limit
    const now = Date.now();
    const clientData = rateLimitMap.get(ip) || { count: 0, lastTime: now };

    if (now - clientData.lastTime > RATE_LIMIT_WINDOW) {
      // Resetar janela se passou do tempo
      clientData.count = 1;
      clientData.lastTime = now;
    } else {
      // Incrementar contador
      clientData.count++;
    }

    rateLimitMap.set(ip, clientData);

    if (clientData.count > RATE_LIMIT_MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Muitas tentativas. Por favor, aguarde uma hora antes de enviar novamente.' },
        { status: 429 }
      );
    }

    const { name, email, message } = await request.json();

    // 3. Validação Robusta e Sanitização
    if (!name || typeof name !== 'string' || name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: 'Nome inválido (2-100 caracteres).' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.length < 3 || message.length > 5000) {
      return NextResponse.json({ error: 'Mensagem inválida (3-5000 caracteres).' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email) || email.length > 100) {
      return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
    }

    // Sanitização básica (remover tags HTML)
    const sanitize = (str: string) => str.replace(/<[^>]*>?/gm, '');
    const cleanName = sanitize(name);
    const cleanMessage = sanitize(message);
    const cleanEmail = sanitize(email); // Embora regex já valide estrutura, bom garantir

    // Recupera credenciais do ambiente (Server-Side Only)
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY; // Private Key para autenticação segura

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.error('ERRO CRÍTICO: Configurações de ambiente do EmailJS incompletas.');
      return NextResponse.json(
        { error: 'Erro interno de configuração do servidor.' },
        { status: 500 }
      );
    }

    // Prepara payload para a API REST do EmailJS
    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey, // Garante que a requisição é autorizada pelo servidor
      template_params: {
        name: cleanName,
        from_name: cleanName, // Compatibilidade com templates padrão
        email: cleanEmail,
        reply_to: cleanEmail, // Compatibilidade para resposta
        message: cleanMessage,
      },
    };

    // Chamada à API externa
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Falha no envio EmailJS: [${response.status}] ${errorText}`);
      throw new Error(`Erro no serviço de e-mail: ${response.statusText}`);
    }

    return NextResponse.json(
      { message: 'E-mail enviado com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro não tratado na rota /api/contact:', error);
    return NextResponse.json(
      { error: 'Falha interna ao processar sua solicitação.' },
      { status: 500 }
    );
  }
}
