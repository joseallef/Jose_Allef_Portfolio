import React from 'react';
import styled from 'styled-components';
import { StyleWrapperContainer } from '../src/components/wrappers/StyleWrapperContainer';
import Header from '../src/components/commons/Header';
import Footer from '../src/components/commons/Footer';
import SEO from '../src/components/commons/SEO';

const Span = styled.span`
  display: block;
  margin-top: 25%;
  width: 100%;
  z-index: 10;
  text-align: center;
  font-size: 4em;
  color: #aaa;

`;

const SvgPage = styled.img`
  position: absolute;
  margin: auto;
  top: 20%;
  width: 70vw;
  height: 70vh;
  z-index: 0;
`;

export default function Page404() {
  return (
    <>
      <SEO headTitle="Not found" />
      <Header />
      <StyleWrapperContainer>
        <Span>404 Page Not Found</Span>
        <SvgPage src="/image/404.svg" alt="Page Not Found" />
      </StyleWrapperContainer>
      <Footer />
    </>
  );
}
