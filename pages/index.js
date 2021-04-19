/* eslint-disable no-lone-blocks */
import React from 'react';
import Lottie from 'lottie-react-web';
import Capa from '../src/components/Capa';
import Header from '../src/components/commos/Header';
import { StyleWrapperContainer } from '../src/components/wrappers/StyleWrapperContainer';
import SectionTitle from '../src/components/commos/SectionTitle';
import Footer from '../src/components/commos/Footer';
import Modal from '../src/components/commos/Modal';
import FormCadastro from '../src/components/forms';
import addUser from '../public/icon/addUser.json';
import SEO from '../src/components/commos/SEO';
import Card from '../src/components/commos/Card';
import { getContent } from '../src/components/screens/ContentProjects';

export const getStaticProps = async () => {
  const allPageProjects = await getContent();

  return {
    props: allPageProjects,
  };
};

// eslint-disable-next-line react/prop-types
export default function Home({ allPageProjects }) {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <>
      <SEO headTitle="Home" />
      <Capa />
      <Header />

      <StyleWrapperContainer>
        <SectionTitle />
        <Card
          projects={allPageProjects}
        />

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

      <Footer />
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
    </>
  );
}
