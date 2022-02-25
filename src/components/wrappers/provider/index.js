/* eslint-disable no-console */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PaginaInicial from '../../../../pages';
import theme from '../../../theme';
import Modal from '../../commons/Modal';
import FormCadastro from '../../forms';

import { StateModal } from '../context';

export { StateModal } from '../context';

// eslint-disable-next-line react/prop-types
export default function WebSitePageWapper({ isTrue }) {
  console.log(isTrue);
  const [isModalOpen, setModalState] = React.useState(isTrue);
  return (
    <ThemeProvider theme={theme}>
      <StateModal.Provider
        value={{
          toggleModal: () => {
            setModalState(isModalOpen);
          },
        }}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
            console.log('Modal', isModalOpen);
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
        <PaginaInicial />
      </StateModal.Provider>
    </ThemeProvider>
  );
}
