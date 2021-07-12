import React from 'react';
import PropTypes, { shape } from 'prop-types';
import SEO from '../src/components/commos/SEO';
import Header from '../src/components/commos/Header';
import Card from '../src/components/commos/Card';

import { getContent } from '../src/components/screens/ContentProjects';
import SectionTitle from '../src/components/commos/SectionTitle';
import About from '../src/components/pages/about';
import { WrapperMain } from '../src/components/commos/Main/StyleMain';
import { Grid } from '../src/components/foundation/layout/Grid';

export const getStaticProps = async () => {
  const allProjects = await getContent();
  const repository = await fetch('https://api.github.com/users/joseallef/repos')
    .then((res) => res.json());

  const repositories = repository.filter((myRepositorys) => !myRepositorys.fork)
    .map((myRepository) => ({
      name: myRepository.name,
      url: myRepository.html_url,
    }));

  return {
    props: {
      allProjects,
      repositories,
    },
    revalidate: 30,
  };
};

export default function Projects({ allProjects, repositories }) {
  return (
    <>
      <SEO headTitle="Projetos" />
      <Header />

      <Grid.Container
        display="flex"
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <WrapperMain>
          <SectionTitle />
          <Card
            projects={allProjects.allPageProjects}
          />
          <About repositories={repositories} />
        </WrapperMain>
      </Grid.Container>
    </>
  );
}

Projects.defaultProps = {
  allProjects: PropTypes.shape({
    allPageProjects: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.arrayOf(shape({
        id: PropTypes.string,
        url: PropTypes.string,
      })),
    })),
  }),
  repositories: PropTypes.arrayOf(shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
};

Projects.propTypes = {
  allProjects: PropTypes.shape({
    allPageProjects: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.arrayOf(shape({
        id: PropTypes.string,
        url: PropTypes.string,
      })),
    })),
  }),
  repositories: PropTypes.arrayOf(shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
};
