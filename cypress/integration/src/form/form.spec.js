/// <reference types="cypress" />

// import Modal from '../../../../src/components/commos/Modal';
import FirmScreenPageObject from '../../../../src/components/screens/FormScreenPageObject';

describe('Formulario()', () => {
  it('preencha os campos ', () => {
    cy.visit('/');

    const messageScreen = new FirmScreenPageObject(cy);

    // abrir o modal
    messageScreen.openModal();

    // preecher os campos
    messageScreen.fillMessageForm({ name: 'Allef', email: 'joseallefbs@gmail.com', message: 'Lorem ipsom' });

    // enviar
    messageScreen.submitMessageForm();
  });
});
