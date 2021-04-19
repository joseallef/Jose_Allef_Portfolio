import React from 'react';
import db from '../../../../db.json';
import Link from '../Link';

// eslint-disable-next-line react/prop-types
export default function Image() {
  return (
    <>
      {db.projects.map((project, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Link href={`/project/${project.title}`} key={index}>
          {/* <Card
            url={project.image}
            title={project.title}
            link={project.link}
            description={project.description}
          /> */}
          {/* <pre>
            {JSON.stringify(props.data)}
          </pre> */}
        </Link>
      ))}
    </>
  );
}
