import React from 'react';
import styled from 'styled-components';
import Capa from './../src/components/Capa';
import Header from '../src/components/Header';
import WrapperProjects from './../src/components/ProjectsWrapper';
import Footer from './../src/components/Footer';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;


export default function Home() {
  return (    
    <>
        <Capa />
        <Header />

        <WrapperProjects>
        </WrapperProjects>

        <Footer />
    </> 
  )

}
