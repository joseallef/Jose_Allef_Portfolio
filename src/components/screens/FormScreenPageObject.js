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
    this.cy.get('form input[name="user_name"]').type(name);

    this.cy.get('form input[name="user_email"]').type(email);

    this.cy.get('form textarea[name="message"]').type(message);
  }

  submitMessageForm() {
    console.log('Envia as informações');
    this.cy.get('form button[type="submit"]').click();
  }
}
