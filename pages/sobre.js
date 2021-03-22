import React from 'react';
import About from '../src/components/pages/about';

// eslint-disable-next-line react/prop-types
export default function Sobre({ repositories }) {
  return (
    <About repositories={repositories} />
  );
}

export async function getStaticProps() {
  const repository = await fetch('https://api.github.com/users/joseallef/repos')
    .then((res) => res.json());

  const repositories = repository.filter((myRepositorys) => !myRepositorys.fork)
    .map((myRepository) => ({
      name: myRepository.name,
      url: myRepository.html_url,
    }));

  return {
    props: {
      repositories,
    },
  };
}
