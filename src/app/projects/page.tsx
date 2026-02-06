import Card from '@components/commons/Card';
import { WrapperMain } from '@components/commons/Main';
import { getProjectsContent } from '@services/cms';

export default async function Projects() {
  const allProjects = await getProjectsContent();
  const { allPageProjects } = allProjects;

  return (
    <WrapperMain>
      <div className="flex flex-col items-center justify-center space-y-4 text-center py-8">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Meus Projetos</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Uma coleção dos trabalhos desenvolvidos ao longo da minha jornada.
        </p>
      </div>
      <div className="border-b border-border w-full mb-8"></div>
      <Card
        allPageProjects={allPageProjects}
      />
    </WrapperMain>
  );
}
