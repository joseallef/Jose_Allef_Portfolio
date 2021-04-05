/* eslint-disable no-console */
export default class FormScreenPageObject {
  constructor(cy) {
    this.cy = cy;
  }

  openModal() {
    console.log('Abrir o modal');
    this.cy.get('main button').click();
  }

  fillMessageForm({ name, email, message }) {
    // this.cy.get('form button[type="submit"]')

    console.log('Preenche os campos');
    this.cy.get('form input[name="nome"]').type(name);

    this.cy.get('form input[name="email"]').type(email);

    this.cy.get('form textarea[name="mensagem"]').type(message);
  }

  submitMessageForm() {
    console.log('Envia as informações');
    this.cy.get('form button[type="submit"]').click();
  }
}
