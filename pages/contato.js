import React from 'react';
import Lottie from 'lottie-react-web';
import SEO from '../src/components/commos/SEO';
import { PropsModal } from '../src/components/wrappers/StyleWrapperContainer';
import addUser from '../public/icon/addUser.json';
import Header from '../src/components/commos/Header';
import Modal from '../src/components/commos/Modal';
import FormCadastro from '../src/components/forms';
import { Grid } from '../src/components/foundation/layout/Grid';

export default function PageContato() {
  const [isModalOpen, setModalState] = React.useState(true);
  return (
    <>
      <SEO headTitle="Contato" />
      <Header />
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
      </Grid.Container>
    </>
  );
}
