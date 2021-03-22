/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { StyleWrapperContainer } from '../wrappers';
import Header from '../commos/Header';
import Footer from '../commos/Footer';
import TitleCard from '../commos/TitleCard';
import {
  WapperProject, CardProject, DescriptionProject, MyLink,
} from './StyleCard';

function ProjectCard({
  image, title, description, link,
}) {
  return (
    <>
      <Header />
      <StyleWrapperContainer>
        <h1>Project reporte</h1>
        <WapperProject>
          <CardProject>
            <Image
              src={image}
              alt="texto alternativo"
              width="800"
              height="800"
            />
            <TitleCard description={description} title={title} />
          </CardProject>
          <DescriptionProject>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </DescriptionProject>
        </WapperProject>
        <MyLink href={link} target="_blank">
          Visite o site
          {' '}
          {link}
        </MyLink>
      </StyleWrapperContainer>
      <Footer />
    </>
  );
}

ProjectCard.prototype = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectCard;
