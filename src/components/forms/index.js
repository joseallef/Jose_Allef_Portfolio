/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import emailjs from 'emailjs-com';
import styled, { css } from 'styled-components';
import Lottie from 'lottie-react-web';
import propTypes from 'prop-types';
import loading from '../../../public/icon/loadind.json';
import closeJson from '../../../public/icon/close.json';
import cadSuccess from '../../../public/icon/cadSuccess.json';
import cadError from '../../../public/icon/cadError.json';
import StyledForm from './StyleForm';
import TextField from './TextField';
import { breakpointsMedia } from '../../theme/Utils/breakpointsMedia';
import { ThemeApp } from '../wrappers/context';

const StyleContainerModal = styled.div`
  padding: 15px;
  color: #FFF;
  font-family: Courier, sans-serif;
  font-style: italic;
  font-weight: 200;

  h2 {
    font-size: 16px;

  }

  ${breakpointsMedia({
    md: css`
      h2 {
        font-size: 18px;  
      }
    `,
  })}
`;

export function FormContent({
  onClose,
  ...props
}) {
  const [userInfo, setInfo] = React.useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const formStates = {
    DONE: 'DONE',
    DEFAULT: 'DEFAULT',
    ERROR: 'ERROR',
    LOADING: 'LOADING',
  };

  const [isFormSubmitted, setFormSubmitted] = React.useState(false);
  const [status, setStatus] = React.useState(formStates.DEFAULT);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setInfo({
      ...userInfo, [fieldName]: event.target.value,
    });
  }

  function clearData() {
    setInfo({
      ...userInfo, user_name: '', user_email: '', message: '',
    });
  }

  function sendEmail(event) {
    event.preventDefault();
    setFormSubmitted(true);
    setStatus(formStates.LOADING);

    emailjs.sendForm(
      props.SERVICE_ID,
      props.TEMPLATE,
      event.target,
      props.USER_ID,
    )
      .then((result) => {
        if (result.status === 200) {
          return result.json;
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
  }

  const isFormValid = userInfo.user_email.length === 0
   || userInfo.user_name.length === 0 || userInfo.message.length === 0;

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
      <form onSubmit={sendEmail}>
        <TextField
          tag="text"
          name="user_name"
          value={userInfo.user_name}
          placeholder="Nome"
          onChange={handleChange}
        />
        <TextField
          tag="email"
          name="user_email"
          value={userInfo.user_email}
          placeholder="E-mail"
          onChange={handleChange}
        />
        <StyledForm.TextArea name="message" value={userInfo.message} placeholder="Mensagem" onChange={handleChange} />
        <StyledForm.Button type="submit" disabled={isFormValid}>
          ENVIAR
          <StyledForm.IconButton>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" /></svg>
          </StyledForm.IconButton>
        </StyledForm.Button>
        <StyledForm.MessageCad>
          {isFormSubmitted && status === formStates.LOADING && (
          <>
            <Lottie
              width="50px"
              options={{
                animationData: loading,
                loop: true,
              }}
            />
            Enviando aguarde...
          </>
          )}
          {isFormSubmitted && status === formStates.DONE && (
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
          {isFormSubmitted && status === formStates.ERROR && (
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

export default function FormCadastro({
  propsDoModal, onClose, ...props
}) {
  const { themeApp } = useContext(ThemeApp);
  return (
    <StyledForm
      {...propsDoModal}
      currentTheme={themeApp}
    >
      <FormContent
        onClose={onClose}
        {...props}
      />
    </StyledForm>
  );
}

FormContent.prototype = {
  onClose: propTypes.func,
  prop: propTypes.object,
};

// FormContent.prototype = {
//   user_name: propTypes.string.isRequired,
//   user_email: propTypes.string.isRequired,
//   mensagem: propTypes.string.isRequired,
// };
