import Card from '@components/commons/Card';
import { WrapperMain } from '@components/commons/Main';
import { getProjectsContent } from '@services/cms';

export default async function Projects() {
  const allProjects = await getProjectsContent();
  const { allPageProjects } = allProjects;

  return (
    <WrapperMain>
      <Card
        allPageProjects={allPageProjects}
      />
    </WrapperMain>
  );
}
