import { ExperienceSection } from "@components/commons/ExperienceSection";
import { WrapperMain } from "@components/commons/Main";
import Link from "next/link";

export default function Home() {
  return (
    <WrapperMain>
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          
          <div className="flex max-w-[980px] flex-col items-start gap-4 md:w-1/2">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              👋 Bem-vindo ao meu portfólio
            </div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Olá, sou <span className="text-primary">José Allef</span> <br className="hidden sm:inline" />
              Desenvolvedor Front-end
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Especialista em construir experiências digitais excepcionais. 
              Foco em acessibilidade, performance e design moderno usando React, Next.js e Tailwind CSS.
            </p>
            
            <div className="flex gap-4 mt-4">
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Ver Projetos
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Contato
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end md:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                 src="/image/foto-perfil.jpeg"
                alt="José Allef"
                className="object-cover w-full h-full" 
              />
            </div>
          </div>

        </div>
      </div>
      
      <ExperienceSection />
    </WrapperMain>
  );
}
