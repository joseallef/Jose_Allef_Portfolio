/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../../src/components/ProjectCard';

export default function Projects({ project }) {
  const {
    img, description, link,
  } = project;
  return (
    <>
      <ProjectCard
        image={img[0].url}
        description={description}
        link={link}
      />
    </>
  );
}
Projects.defaultProps = {
  project: {},
};

Projects.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object,
};
