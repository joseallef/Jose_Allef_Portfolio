/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ProjectCard from '../../src/components/ProjectCard';

export default function Projects(
  props,
) {
  return (
    <>
      <ProjectCard
        image={props.project.image}
        title={props.project.title}
        description={props.project.description}
        link={props.project.link}
      />
    </>
  );
}
