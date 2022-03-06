/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Link from '../Link';
import TitleCard from '../TitleCard';
import { StyleCard, StyleImage } from './StyledCard';

export default function Card({ projects }) {
  useEffect(() => {
    const card = document.querySelectorAll('#card');
    card.forEach((repository) => {
      repository.addEventListener('mouseenter', () => {
        const audioCard = document.querySelector('#audioCard');
        audioCard.muted = false;
        audioCard.play();
      });
    });
  }, []);
  return (
    <>
      {projects.map((project) => (
        <Link href={`/project/${project.title}`} key={project.title}>
          <StyleCard id="card">
            <ReactAudioPlayer
              src="/audio/efeito-repo.wav"
              id="audioCard"
              volume={0.05}
            />
            <StyleImage src={project.img[0].url} />
            <TitleCard title={project.title} />
          </StyleCard>
        </Link>
      ))}
    </>
  );
}
