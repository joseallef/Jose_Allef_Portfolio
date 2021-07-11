/* eslint-disable react/prop-types */
import React from 'react';
import WapperRepositorys from './StyleAbout';

// eslint-disable-next-line react/prop-types
export default function About({ repositories }) {
  return (
    <>
      <WapperRepositorys.AboutTitle>
        Meus repositórios
      </WapperRepositorys.AboutTitle>
      <WapperRepositorys>
        {repositories.map((repository) => (
          <WapperRepositorys.Repository key={repository.name}>
            <WapperRepositorys.Name>
              {repository.name}
            </WapperRepositorys.Name>
            <WapperRepositorys.Link href={repository.url} target="_blank">
              {repository.url}
            </WapperRepositorys.Link>
          </WapperRepositorys.Repository>
        ))}
      </WapperRepositorys>
    </>
  );
}
