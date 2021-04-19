/* eslint-disable no-param-reassign */
import React from 'react';
import { getContent } from '../../src/components/screens/ContentProjects';
import Projects from '.';

export default function PageProject(props) {
  return (
    <Projects
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

export async function getStaticProps({ params }) {
  const res = await getContent();

  const projects = res.allPageProjects.reduce((start, project) => {
    if (project.title === params.id) {
      start = project;
    }
    return start;
  }, []);
  return {
    props: {
      project: projects,
    }, // will be passed to the page component as props
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
    fallback: false, // See the "fallback" section below
  };
}
