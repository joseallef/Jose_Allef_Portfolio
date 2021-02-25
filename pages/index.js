import React from 'react';
import styled from 'styled-components';
import Capa from './../src/components/Capa';
import Header from '../src/components/Header';
import {StyleWrapperContainer} from './../src/components/ProjectsWrapper';
import Footer from './../src/components/Footer';
import Image from './../src/components/CardImage';
import SectionTitle from './../src/components/SectionTitle';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;


export default function Home() {
  return (    
    <>
        <Capa />
        <Header />

        <StyleWrapperContainer>
          <SectionTitle />
          <Image />
        </StyleWrapperContainer>
        
        <Footer />
    </> 
  )

}
