/* eslint-disable max-len */
import React, { useContext } from 'react';
import SEO from '../src/components/commons/SEO';
import Header from '../src/components/commons/Header';

import { Grid } from '../src/components/foundation/layout/Grid';
import { Wrapper } from '../src/components/commons/Main/StyleMain';
import Text from '../src/components/foundation/Text';
import HomeBio from '../src/components/pages/Home';
import { ThemeApp } from '../src/components/wrappers/context';

export default function Home() {
  const { themeApp } = useContext(ThemeApp);
  return (
    <>
      <SEO headTitle="Home" />
      <Header />

      <Grid.Container
        display="flex"
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <Wrapper.Main>
          <Grid.Row
            display="flex"
            flex="1"
            justifyContent="center"
            alignItems="center"
          >
            <Grid.Col
              value={{
                xs: 12,
                md: 6,
              }}
              display="flex"
              flex="1"
            >
              {' '}
              <Wrapper.WrapperImg>
                <img src="/image/wrapper-perfiel.svg" alt="Wrapper-perfiel" />
                <img src="/image/avatar.jpg" alt="Foto de perfiel" />
              </Wrapper.WrapperImg>
            </Grid.Col>
            <Grid.Col
              value={{
                xs: 12,
                md: 6,
              }}
              display="flex"
              flex="1"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Wrapper.Vector>
                <HomeBio />
                <Wrapper.Paragraph
                  themeApp={themeApp}
                >
                  <Text
                    tag="h2"
                    variant="title"
                  >
                    <div>
                      Olá, sou o José Allef!
                    </div>
                  </Text>
                </Wrapper.Paragraph>
                <Wrapper.Paragraph>
                  <Text
                    tag="p"
                    variant="paragraph1"
                  >
                    Sou formado em análise e desenvolvimento de sistemas pela UNICID, participo com frequência de treinamentos e desafios como o ignite da Rocketseat, participei também do Bootcamp JAMStack da Alura e etc. Sou apaixonado por tecnologia criar/desenvolver é fascinante não costumo desistir fácil diante de obstáculos, persistência faz parte de mim, geralmente venço os empecilhos diante de tentativas e erros.
                  </Text>
                </Wrapper.Paragraph>
              </Wrapper.Vector>
            </Grid.Col>
          </Grid.Row>
        </Wrapper.Main>
      </Grid.Container>
    </>
  );
}
