import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../../src/components/ProjectCard';

export default function Projects({
  title, description, link, img,
}) {
  return (
    <>
      <ProjectCard
        image={img}
        title={title}
        description={description}
        link={link}
      />
    </>
  );
}
Projects.defaultProps = {
  title: '',
  description: '',
  link: '',
  img: '',
};

Projects.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string,
};
