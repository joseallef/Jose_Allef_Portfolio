import React from 'react';
import Lottie from 'lottie-react-web';
import SEO from '../src/components/commons/SEO';
import Header from '../src/components/commons/Header';
import { PropsModal } from '../src/components/wrappers/StyleWrapperContainer';
import addUser from '../public/icon/addUser.json';
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
            Entrar em Contato
            <PropsModal.IconButtonModal>
              <Lottie
                options={{
                  animationData: addUser,
                  loop: false,
                }}
              />
            </PropsModal.IconButtonModal>
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
        {/* <PropsModal.WrapperSvg>
          <img src="/image/wrapper-perfiel.svg" alt="Wrapper-perfiel" />
        </PropsModal.WrapperSvg> */}
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
