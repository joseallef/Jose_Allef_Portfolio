/* eslint-disable react/prop-types */
import React from 'react';
import Link from '../Link';
import TitleCard from '../TitleCard';
import { StyleCard, StyleImage } from './StyledCard';

export default function Card({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <Link href={`/project/${project.title}`} key={project.title}>
          <StyleCard>
            <StyleImage src={project.img[0].url} />
            <TitleCard title={project.title} />
          </StyleCard>
        </Link>
      ))}
    </>
  );
}
