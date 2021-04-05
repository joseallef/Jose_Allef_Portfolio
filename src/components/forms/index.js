/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react-web';
import propTypes from 'prop-types';
import loading from '../../../public/icon/loadind.json';
import closeJson from '../../../public/icon/close.json';
import cadSuccess from '../../../public/icon/cadSuccess.json';
import cadError from '../../../public/icon/cadError.json';
import StyledForm from './StyleForm';
import TextField from './TextField';

const StyleContainerModal = styled.div`
  padding: 20px;
  color: #000000;
`;

function FormContent({
  onClose,
}) {
  const [userInfo, setInfo] = React.useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const formStates = {
    DONE: 'DONE',
    DEFAULT: 'DEFAULT',
    ERROR: 'ERROR',
    LOADING: 'LOADING',
  };

  const [isFormSubmited, setFormSubmited] = React.useState(false);
  const [status, setStatus] = React.useState(formStates.DEFAULT);

  function hableChange(event) {
    const fieldName = event.target.getAttribute('name');
    setInfo({
      ...userInfo, [fieldName]: event.target.value,
    });
  }

  function clearData() {
    setInfo({
      ...userInfo, nome: '', email: '', mensagem: '',
    });
  }

  const isFormValid = userInfo.email.length === 0
   || userInfo.nome.length === 0 || userInfo.mensagem.length === 0;

  return (
    <StyleContainerModal>
      <StyledForm.Span
        onClick={() => {
          setStatus(formStates.DEFAULT);
          onClose();
        }}
      >
        <Lottie
          width="20px"
          height="20px"
          options={{
            animationData: closeJson,
          }}
        />
      </StyledForm.Span>
      <h2 style={{ display: 'inline' }}>ENVIE SUA MENSAGEM</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setFormSubmited(true);
          setStatus(formStates.LOADING);
          const dataUser = {
            name: userInfo.nome,
            email: userInfo.email,
            message: userInfo.mensagem,
          };

          fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(dataUser),
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              setStatus(formStates.ERROR);
              throw new Error('Não foi possivel cadastrar!');
            })
            .then((res) => {
              setStatus(formStates.DONE);
              clearData();
              return res;
            })
            .catch((error) => {
              setStatus(formStates.ERROR);
              return error;
            });
        }}
      >
        <TextField
          type="text"
          name="nome"
          value={userInfo.nome}
          placeholder="Nome"
          onChange={hableChange}
        />
        <TextField
          type="email"
          name="email"
          value={userInfo.email}
          placeholder="E-mail"
          onChange={hableChange}
        />
        <StyledForm.TextArea name="mensagem" value={userInfo.mensagem} placeholder="Mensagem" onChange={hableChange} />
        <StyledForm.Button type="submit" disabled={isFormValid}>
          ENVIAR
          <StyledForm.IconButton>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" /></svg>
          </StyledForm.IconButton>
        </StyledForm.Button>
        <StyledForm.MessageCad>
          {isFormSubmited && status === formStates.LOADING && (
          <>
            <Lottie
              width="50px"
              options={{
                animationData: loading,
                loop: false,
              }}
            />
            Enviando aguarde...
          </>
          )}
          {isFormSubmited && status === formStates.DONE && (
          <>
            <Lottie
              width="50px"
              options={{
                animationData: cadSuccess,
                loop: false,
              }}
            />
            Enviado com sucesso!
          </>
          )}
          {isFormSubmited && status === formStates.ERROR && (
          <>
            <Lottie
              width="50px"
              options={{
                animationData: cadError,
                loop: false,
              }}
            />
            Erro ao Enviar
          </>
          )}
        </StyledForm.MessageCad>
      </form>
    </StyleContainerModal>
  );
}
FormContent.prototype = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  mensagem: propTypes.string.isRequired,
};

export default function FormCadastro({
  propsDoModal, onClose,
}) {
  return (
    <StyledForm
      {...propsDoModal}
    >
      <FormContent
        onClose={onClose}
      />
    </StyledForm>
  );
}
