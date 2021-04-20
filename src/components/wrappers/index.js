/* eslint-disable no-console */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Modal from '../commos/Modal';
import FormCadastro from '../forms';

import { StateModal } from './context';

export { StateModal } from './context';

// eslint-disable-next-line react/prop-types
export default function WebSitePageWapper({ isTrue }) {
  console.log(isTrue);
  const [isModalOpen, setModalState] = React.useState(isTrue);

  console.log('isModalOpen', isModalOpen);
  return (
    <ThemeProvider theme={theme}>
      <StateModal.Provider
        value={{
          teste: true,
          toggleModal: () => {
            setModalState(isModalOpen);
            console.log('isModalOpen', isModalOpen);
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
      </StateModal.Provider>
    </ThemeProvider>
  );
}
