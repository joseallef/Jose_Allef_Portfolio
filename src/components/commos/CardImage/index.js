import React from 'react';
import { Card } from '../Card';
import db from '../../../../db.json';
import Link from '../Link';

export default function Image() {
  return (
    <>
      {db.projects.map((project, index) => (
        <Link href={`/project/${project.title}`}>
          <Card
            href={`/project/${index}`}
            url={project.image}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        </Link>
      ))}
    </>
  );
}
