import React from 'react';
import { render, screen } from '@testing-library/react';
import TextField from './TextField';

describe('testing form', () => {
  test('reders the component <TextField/>', () => {
    const onChange = jest.fn();
    render(
      <TextField
        tag="input"
        name="nome"
        value="Allef"
        placeholder="Nome"
        onChange={onChange}
      />,
    );
    const res = (
      <TextField
        tag="input"
        name="nome"
        value="Allef"
        placeholder="Nome"
        onChange={onChange}
      />
    );
    expect(res.props.value).toEqual('Allef');
  });

  describe('<TextField />', () => {
    test('renderiza componente campo email', () => {
      render(
        <TextField
          tag="input"
          placeholder="Email"
          value="joseallef@gmail.com"
          onChange={() => {}}
          name="email"
        />,
      );

      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail.value).toEqual('joseallef@gmail.com');
    });
  });
});
