import React from 'react';
import Capa from './../src/components/Capa';
import Header from '../src/components/Header';
import {StyleWrapperContainer} from './../src/components/ProjectsWrapper';
import SectionTitle from './../src/components/SectionTitle';
import Image from './../src/components/CardImage';
import Footer from './../src/components/Footer';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/forms';
import Lottie from 'lottie-react-web';
import addUser from  '../public/image/addUser.json';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <>
        <Capa />
        <Header />

        <StyleWrapperContainer>
          <SectionTitle />
          <Image />
          
        <StyleWrapperContainer.ButtonModal
          onClick={() => {
            setModalState(!isModalOpen)
          }}
        >
          Entrar em Contato 
          <StyleWrapperContainer.IconButtonModal>
          <Lottie
            options={{
              animationData: addUser,

            }}
          />
          </StyleWrapperContainer.IconButtonModal>
        </StyleWrapperContainer.ButtonModal>
        </StyleWrapperContainer>

          <Modal
            isOpen={isModalOpen}
            onClose={() =>{{
              setModalState(false);
            }}}
          >
            {(propsDoModal) => (
              <FormCadastro propsDoModal={propsDoModal}  onClose={() => {
                setModalState(false);
              }} />
            )}
          </Modal>
        <Footer />
    </> 
  )

}
