/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import WrapperRepository from './StyleAbout';

// eslint-disable-next-line react/prop-types
export default function About({ repositories, clientUser }) {
  useEffect(() => {
    const rep1 = document.querySelectorAll('#rep1');
    rep1.forEach((repository) => {
      repository.addEventListener('mouseenter', () => {
        const audio = document.querySelector('#audio');
        audio.muted = false;
        audio.play();
      });
    });
  }, []);

  return (
    <>
      <WrapperRepository.BoxProfile>
        <img src={clientUser.avatar_url} alt="Foto do perfil" />
        <WrapperRepository.InfoUser>
          <WrapperRepository.InfoUserNames>
            <span>
              <p>Usuário:</p>
            </span>
            <span>
              <p>Repos publicos:</p>
            </span>
            <span>
              <p>Seguidores:</p>
            </span>
            <span>
              <p>Seguindo:</p>
            </span>
          </WrapperRepository.InfoUserNames>
          <WrapperRepository.InfoUserRepoNames>
            <span>
              {clientUser.login}
            </span>
            <span>
              {clientUser.public_repos}
            </span>
            <span>
              {clientUser.followers}
            </span>
            <span>
              {clientUser.following}
            </span>
          </WrapperRepository.InfoUserRepoNames>
        </WrapperRepository.InfoUser>
      </WrapperRepository.BoxProfile>
      <WrapperRepository.AboutTitle>
        Repositórios
      </WrapperRepository.AboutTitle>
      <WrapperRepository id="rep">
        {repositories.map((repository) => (
          <WrapperRepository.Repository key={repository.name} id="rep1">
            {/* <audio autoPlay id="audio">
              <source src="/audio/efeito-repo.wav" type="audio/ogg" />
              <source src="/audio/efeito-repo.wav" type="audio/mpeg" />
            </audio> */}
            <ReactAudioPlayer
              src="/audio/efeito-repo2.wav"
              id="audio"
              volume={0.1}
            />
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
