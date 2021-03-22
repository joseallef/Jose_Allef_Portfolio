import React from 'react';
import { Card } from '../Card';
import db from '../../../../db.json';
import Link from '../Link';

export default function Image() {
  return (
    <>
      {db.projects.map((project, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Link href={`/project/${project.title}`} key={index}>
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
