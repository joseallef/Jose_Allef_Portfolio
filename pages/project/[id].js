/* eslint-disable no-param-reassign */
import React from 'react';
import db from '../../db.json';
import Projects from '.';

const { projects } = db;

export default function PageProject(props) {
  return (
    <Projects
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

export async function getStaticProps({ params }) {
  const projecDb = projects.reduce((start, project) => {
    if (project.title === params.id) {
      start = project;
    }
    return start;
  }, []);
  return {
    props: {
      project: projecDb,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const id = projects.reduce((start, project) => {
    const model = [{ params: { id: project.title } }];
    return [...start, ...model];
  }, []);
  return {
    paths: id,
    fallback: false, // See the "fallback" section below
  };
}
