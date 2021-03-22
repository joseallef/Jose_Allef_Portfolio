/* eslint-disable no-lone-blocks */
import React from 'react';
import Lottie from 'lottie-react-web';
import Capa from '../src/components/Capa';
import Header from '../src/components/commos/Header';
import { StyleWrapperContainer } from '../src/components/wrappers';
import SectionTitle from '../src/components/commos/SectionTitle';
import Image from '../src/components/commos/CardImage';
import Footer from '../src/components/commos/Footer';
import Modal from '../src/components/commos/Modal';
import FormCadastro from '../src/components/forms';
import addUser from '../public/image/addUser.json';
import SEO from '../src/components/commos/SEO';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <>
      <SEO headTitle="Home" />
      <Capa />
      <Header />

      <StyleWrapperContainer>
        <SectionTitle />
        <Image />

        <StyleWrapperContainer.Div>
          <StyleWrapperContainer.ButtonModal
            onClick={() => {
              setModalState(!isModalOpen);
            }}
          >
            Entrar em Contato
            <StyleWrapperContainer.IconButtonModal>
              <Lottie
                options={{
                  animationData: addUser,
                  loop: false,
                }}
              />
            </StyleWrapperContainer.IconButtonModal>
          </StyleWrapperContainer.ButtonModal>
        </StyleWrapperContainer.Div>
      </StyleWrapperContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          {
            setModalState(false);
          }
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
      <Footer />
    </>
  );
}
