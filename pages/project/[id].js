import React from 'react';
import PropTypes from 'prop-types';
import { getContent } from '../../src/components/screens/ContentProjects';
import Projects from '.';

export default function PageProject({ project }) {
  const {
    title, description, link,
  } = project;
  const img = project.img[0].url;
  return (
    <Projects
      title={title}
      description={description}
      link={link}
      img={img}
    />
  );
}

export async function getStaticProps({ params }) {
  const res = await getContent();

  const projects = res.allPageProjects.reduce((start, project) => {
    if (project.title === params.id) {
      // eslint-disable-next-line no-param-reassign
      start = project;
    }
    return start;
  }, []);
  return {
    props: {
      project: projects,
    }, // will be passed to the page component as props
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const response = await getContent();
  const id = response.allPageProjects.reduce((project, start) => {
    const model = [{ params: { id: start.title } }];
    return [...project, ...model];
  }, []);
  return {
    paths: id,
    fallback: true, // See the "fallback" section below
  };
}
PageProject.defaultProps = {
  project: PropTypes.shape({
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

PageProject.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string.isRequired,
    img: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })),
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
