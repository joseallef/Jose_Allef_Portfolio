/* eslint-disable max-len */
import React from 'react';
import SEO from '../src/components/commons/SEO';
import Header from '../src/components/commons/Header';

import { Grid } from '../src/components/foundation/layout/Grid';
import { Wrapper } from '../src/components/commons/Main/StyleMain';
import Text from '../src/components/foundation/Text';

export default function Home() {
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
                <svg width="656" height="656" viewBox="0 0 656 656" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M547 0C547 0 534.5 74 502.5 116.5C470.5 159 439 172.5 348.5 218.5C258 264.5 236 262.5 134 332.5C32 402.5 -26 530 -26 530" stroke="#454666" />
                  <path d="M596 0C596 0 582.431 84.1925 547.695 132.546C512.958 180.9 478.764 196.259 380.525 248.595C282.286 300.931 258.405 298.656 147.682 378.297C36.9599 457.939 -26 603 -26 603" stroke="#454666" />
                  <path d="M655 0C655 0 640.711 91.4528 604.132 143.976C567.552 196.5 531.545 213.184 428.093 270.033C324.642 326.882 299.494 324.41 182.897 410.92C66.3002 497.429 0 655 0 655" stroke="#454666" />
                </svg>

                <img src="/image/avatar.jpg" alt="" />
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
                <svg width="785" height="742" viewBox="0 0 785 742" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M409.331 15.2652C216.836 58.524 294.331 -32.4561 142.564 15.2654C-9.20377 62.9868 14.8303 196.357 45.3391 296.143C75.8478 395.929 -21.209 410.751 4.33121 500.044C29.8714 589.336 81.9435 526.848 123.831 673.544C165.719 820.239 317.331 675.044 456.831 724.044C596.331 773.044 759.553 633.215 718.831 537.544C678.11 441.873 766.331 341.044 766.331 341.044C766.331 341.044 836.831 169.802 697.331 98.5437C557.831 27.2852 601.827 -27.9936 409.331 15.2652Z" fill="#2F2D4B" />
                </svg>
                <Wrapper.Paragrath>
                  <Text
                    tag="h2"
                    variant="title"
                  >
                    Olá, sou o José Allef!
                  </Text>
                </Wrapper.Paragrath>
                <Wrapper.Paragrath>
                  <Text
                    tag="p"
                    variant="paragraph1"
                  >
                    Sou formado em análise e desenvolvimento de sistemas pela UNICID, participo com frequência de imersões, treinamentos e desafios como o ignite da Rocketseat participei também do Bootcamp JAMStack da Alura imersões e etc. Sou apaixonado por tecnologia criar/desenvolver é fascinante não costumo desistir fácil diante de obstáculos, persistência faz parte de mim, geralmente venço os empecilhos diante de tentativas e erros.
                  </Text>
                </Wrapper.Paragrath>
              </Wrapper.Vector>
            </Grid.Col>
          </Grid.Row>
        </Wrapper.Main>
      </Grid.Container>
    </>
  );
}
