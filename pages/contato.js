import React from 'react';
import SEO from '../src/components/commons/SEO';
import Header from '../src/components/commons/Header';
import { PropsModal } from '../src/components/wrappers/StyleWrapperContainer';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/forms';
import { Grid } from '../src/components/foundation/layout/Grid';

export default function PageContato(props) {
  const [isModalOpen, setModalState] = React.useState(true);
  return (
    <>
      <SEO headTitle="Contato" />
      <Header />
      <PropsModal.WrapperSvg>
        <img src="/image/wrapper-perfiel.svg" alt="Wrapper-perfiel" />
        <img src="/image/wrapper-perfiel.svg" alt="Wrapper-perfiel" />
      </PropsModal.WrapperSvg>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <FormCadastro
            propsDoModal={propsDoModal}
            onClose={() => {
              setModalState(false);
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />
        )}
      </Modal>
      <Grid.Container
        display="flex"
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <PropsModal.WrapperModal>
          <PropsModal.ButtonModal
            onClick={() => {
              setModalState(!isModalOpen);
            }}
          >
            <img src="https://camo.githubusercontent.com/571384769c09e0c66b45e39b5be70f68f552db3e2b2311bc2064f0d4a9f5983b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476d61696c2d4431343833363f7374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" alt="" />
          </PropsModal.ButtonModal>
          <a href="https://github.com/joseallef" target="_blanck" style={{ display: 'flex', margin: '10px' }}>
            <PropsModal.Links>
              <img src="/image/githubIcon.svg" alt="Github" width="30" />
            </PropsModal.Links>
          </a>
          <a href="https://www.linkedin.com/in/josé-allef-17b508170/" target="_blanck" style={{ display: 'flex', margin: '10px' }}>
            <PropsModal.Links>
              <img src="/image/linkedinIcon.svg" alt="Linkedin" width="30" />
            </PropsModal.Links>
          </a>
        </PropsModal.WrapperModal>
      </Grid.Container>
    </>
  );
}

export async function getStaticProps() {
  const { SERVICE_ID } = process.env;
  const { TEMPLATE } = process.env;
  const { USER_ID } = process.env;
  return {
    props: {
      SERVICE_ID,
      TEMPLATE,
      USER_ID,
    },
  };
}
