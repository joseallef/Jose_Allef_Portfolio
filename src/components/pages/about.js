/* eslint-disable react/prop-types */
import React from 'react';
import WrapperRepository from './StyleAbout';

// eslint-disable-next-line react/prop-types
export default function About({ repositories }) {
  return (
    <>
      <WrapperRepository.BoxProfile>
        <img src={repositories[0].avatar} alt="Foto do perfil" />
      </WrapperRepository.BoxProfile>
      <WrapperRepository.AboutTitle>
        Repositórios
      </WrapperRepository.AboutTitle>
      <WrapperRepository>
        {repositories.map((repository) => (
          <WrapperRepository.Repository key={repository.name}>
            <WrapperRepository.NameLink>
              <WrapperRepository.Name>
                {repository.name}
              </WrapperRepository.Name>
              <WrapperRepository.Link>
                {!repository.description && <div>Não há descrição</div>}
                {repository.description && repository.description}
              </WrapperRepository.Link>
            </WrapperRepository.NameLink>
            <WrapperRepository.Info>
              <WrapperRepository.Box>
                <WrapperRepository.Icon>
                  <WrapperRepository.IconFirst>
                    <img src="/image/icon-visivel.png" alt="Watchs Github" />
                  </WrapperRepository.IconFirst>
                </WrapperRepository.Icon>
                <div>
                  {repository.watchers}
                </div>
                <WrapperRepository.Watch>
                  Watchers
                </WrapperRepository.Watch>
              </WrapperRepository.Box>
              <WrapperRepository.Box>
                <WrapperRepository.Icon>
                  <img src="/image/star.svg" alt="Stars Github" />
                </WrapperRepository.Icon>
                <div>
                  {repository.watchers}
                </div>
                <WrapperRepository.Watch>
                  Stars
                </WrapperRepository.Watch>
              </WrapperRepository.Box>
              <WrapperRepository.Box>
                <WrapperRepository.Icon>
                  <img src="/image/icon-fork-black.svg" alt="Forks Github" />
                </WrapperRepository.Icon>
                <div>
                  {repository.forks}
                </div>
                <WrapperRepository.Watch>
                  Forks
                </WrapperRepository.Watch>
              </WrapperRepository.Box>
              <WrapperRepository.Box>
                <a href={repository.url} rel="noreferrer" target="_blank">
                  <img src="/image/next-right.png" alt="Link do repositorio" />
                </a>
              </WrapperRepository.Box>
            </WrapperRepository.Info>
          </WrapperRepository.Repository>
        ))}
      </WrapperRepository>
    </>
  );
}
