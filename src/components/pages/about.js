/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import Lottie from 'lottie-react-web';
import Header from '../commos/Header';
import { StyleWrapperContainer } from '../wrappers';
import WapperRepositorys from './StyleAbout';
import Footer from '../commos/Footer';
import addUser from '../../../public/image/addUser.json';
import Modal from '../commos/Modal';
import FormCadastro from '../forms';

// eslint-disable-next-line react/prop-types
export default function About({ repositories }) {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <>
      <Header />
      <StyleWrapperContainer>
        <WapperRepositorys.About>
          Sobre mim
        </WapperRepositorys.About>
        <WapperRepositorys.Img />
        <StyleWrapperContainer.IconButtonModal
          onClick={() => {
            setModalState(!isModalOpen);
          }}
        >
          <Lottie
            options={{
              animationData: addUser,
              loop: false,
            }}
          />
        </StyleWrapperContainer.IconButtonModal>
        <WapperRepositorys.History>
          <WapperRepositorys.Pragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at imperdiet urna. Nunc lacinia justo sed augue rutrum cursus. Sed venenatis sem in felis efficitur imperdiet. Etiam dignissim neque vel facilisis facilisis. Morbi vel ligula eros. Nulla dictum porta ante, in luctus nulla dapibus quis. Mauris ipsum arcu, dignissim a felis non, eleifend congue ante.
          </WapperRepositorys.Pragraph>
          <WapperRepositorys.Pragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at imperdiet urna. Nunc lacinia justo sed augue rutrum cursus. Sed venenatis sem in felis efficitur imperdiet. Etiam dignissim neque vel facilisis facilisis. Morbi vel ligula eros. Nulla dictum porta ante, in luctus nulla dapibus quis. Mauris ipsum arcu, dignissim a felis non, eleifend congue ante.
          </WapperRepositorys.Pragraph>
        </WapperRepositorys.History>
        <WapperRepositorys.AboutTitle>
          Meus repositórios
        </WapperRepositorys.AboutTitle>
        <WapperRepositorys>
          {repositories.map((repository) => (
            <WapperRepositorys.Repository key={repository.name}>
              <WapperRepositorys.Name>
                {repository.name}
              </WapperRepositorys.Name>
              <WapperRepositorys.Link href={repository.url} target="_blank">
                {repository.url}
              </WapperRepositorys.Link>
            </WapperRepositorys.Repository>
          ))}
        </WapperRepositorys>
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
