/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { StyleWrapperContainer } from '../wrappers/StyleWrapperContainer';
import Header from '../commons/Header';
import {
  WapperProject, CardProject, DescriptionProject, MyLink, Title,
} from './StyleCard';
import SEO from '../commons/SEO';

function ProjectCard({
  image, description, link,
}) {
  return (
    <>
      <SEO headTitle="Projeto" />
      <Header />
      <StyleWrapperContainer>
        <Title>Project reporte</Title>
        <WapperProject>
          <CardProject>
            <Image
              src={image}
              alt="texto alternativo"
              width="500"
              height="450"
            />
          </CardProject>
          <DescriptionProject>
            {description}
          </DescriptionProject>
        </WapperProject>
        <MyLink href={link} target="_blank">
          Visite o site
          {' '}
          {link}
        </MyLink>
      </StyleWrapperContainer>
      {/* <Footer /> */}
    </>
  );
}

ProjectCard.defaultProps = {
  image: '',
  description: '',
  link: '',
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectCard;
