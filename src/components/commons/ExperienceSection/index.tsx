import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Desenvolvedor Front-end Junior",
      company: "Portal do Servidor (Secretaria de Agricultura)",
      period: "Ago 2023 - Atualmente",
      location: "São Paulo, Brasil · Híbrido",
      description: "Integro o time de sustentação de um dos módulos do Portal do Servidor, sistema governamental da Secretaria de Agricultura e Abastecimento. Atendo demandas de manutenção e desenvolvimento de novas funcionalidades, incluindo atualizações críticas do DOE (Diário Oficial do Estado de São Paulo).",
      achievements: [
        "Responsável pela migração crítica do front-end para novo ambiente sem downtime.",
        "Resolução de problemas de alto impacto em produção.",
        "Foco em melhoria contínua e experiência do usuário."
      ],
      skills: ["Git", "JavaScript", "TypeScript", "React.js", "Material-UI", "Node.js", "GitFlow", "API REST", "Jest", "Front-end", "Scrum"]
    },
    {
      title: "Analista Trainee",
      company: "Secretaria de Agricultura (AGRO)",
      period: "Set 2022 - Ago 2023",
      location: "São Paulo, Brasil · Remoto",
      description: "Participei do desenvolvimento de sistemas críticos para o estado de SP, como o SIC-LGPD (atendimento à Lei Geral de Proteção de Dados) e o GEDAVE 2.0 (Gestão de Defesa Animal e Vegetal).",
      achievements: [
        "Desenvolvimento full stack com foco em entregas robustas.",
        "Colaboração ativa em equipes ágeis.",
        "Implementação de requisitos complexos de negócio."
      ],
      skills: ["C#", ".NET", "SQL", "Git", "Desenvolvimento Web", "JQuery", "HTML5", "CSS3", "Bootstrap", "Redis", "Microsoft SQL Server"]
    },
    {
      title: "Trainee",
      company: "Programa de Formação",
      period: "Mar 2022 - Set 2022",
      location: "São Paulo, Brasil · Presencial",
      description: "Programa intensivo focado no desenvolvimento de fundamentos de engenharia de software, lógica de programação e trabalho em equipe.",
      achievements: [
        "Consolidação de base técnica em algoritmos e estruturas de dados.",
        "Desenvolvimento de projetos práticos em equipe.",
        "Aprendizado acelerado de boas práticas de desenvolvimento."
      ],
      skills: ["Lógica de Programação", "JavaScript", "HTML/CSS", "Git"]
    }
  ];

  return (
    <section className="container py-12 md:py-16 space-y-12">
      
      {/* Sobre Mim */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-12 items-start">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Sobre Mim
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <div className="md:w-2/3 text-lg text-muted-foreground space-y-4">
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas pela UNICID. Programo desde 2018 e iniciei minha carreira profissional em 2022. 
            Desde então, venho mergulhando continuamente no universo do desenvolvimento de software.
          </p>
          <p>
            Sou conhecido pelos mais próximos como uma pessoa centrada e focada na tarefa do momento, executando-a com determinação. 
            Estou sempre pronto para ajudar e contribuir, visando crescimento pessoal e profissional.
          </p>
        </div>
      </div>

      <div className="border-t border-border/40"></div>

      {/* Experiência */}
      <div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-primary" />
          Experiência Profissional
        </h2>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12 pb-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/80">{exp.company}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 max-w-3xl">
                {exp.description}
              </p>

              {exp.achievements && (
                <ul className="mb-4 space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
