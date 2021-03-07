import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react-web';
import closeJson from '../../../public/image/close.json';
import cadSuccess from '../../../public/image/cadSuccess.json';
import cadError from '../../../public/image/cadError.json';
import StyledForm from './StyleForm';

const StyleContainerModal = styled.div`
    padding: 20px;
    color: #000000;
`;

function FormContent({onClose}){
    const [userInfo, setInfo] = React.useState({
        email: '',
        nome: '',
        mensagem: ''
      });

    const formStates = {
    DONE: 'DONE',
    DEFAULT: 'DEFAULT',
    ERROR: 'ERROR',
    LOADING: 'LOADING',
    }


    const [isFormSubmited, setFormSubmited] = React.useState(false);
    const [status, setStatus] = React.useState(formStates.DEFAULT);

      function hableChange(event){
        const fieldName = event.target.getAttribute('name');
        setInfo({
            ...userInfo, [fieldName]: event.target.value,
        });

      }
   

    const isFormValid = userInfo.email.length === 0 || userInfo.nome.length === 0 || userInfo.mensagem.length === 0;

    return (
        <StyleContainerModal>
            <StyledForm.Span
                onClick={() => {
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
            <h2 style={{display: 'inline'}}>ENVIE SUA MENSAGEM</h2>

            <form
                onSubmit={(event) =>{
                    event.preventDefault();
                    console.log("Submetido!")

                    setFormSubmited(true);

                    const dataUser = {
                        name: 'Allef',
                        email: 'teste@teste.com',
                        message: 'Deixe sua sugestão',
                    }

                    fetch("https://contact-form-api-jamstack.herokuapp.com/message", {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(dataUser),
                    })
                    .then((response) =>{
                        console.log(response);
                        if(response.ok){
                            return response.json();
                        }
                        throw new Error('Não foi possivel cadastrar!');
                    })
                    .then((res) => {
                        setStatus(formStates.DONE);
                        console.log("Resposta final", res);
                    })
                    .catch((error) =>{
                        setStatus(formStates.ERROR);
                        console.log('Ouve um', error);
                    });
                }}            
            >
                <StyledForm.Input type="text" name="nome" value={userInfo.nome} placeholder="Nome" onChange={hableChange} />
                <StyledForm.Input type="email" name="email" value={userInfo.email} placeholder="E-mail" onChange={hableChange} />
                <StyledForm.TextArea name="mensagem" value={userInfo.mensagem} placeholder="Mensagem" onChange={hableChange} />
                <StyledForm.Button type="submit" disabled={isFormValid}>
                    ENVIAR
                    <StyledForm.IconButton>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"></path></svg>
                    </StyledForm.IconButton>
                </StyledForm.Button>
                <StyledForm.MessageCad>
                    {isFormSubmited && status === formStates.DONE && (
                        <>
                            <Lottie 
                                width="50px"
                                options={{
                                    animationData: cadSuccess,
                                }}
                            />
                        </>
                    )}
                    {isFormSubmited && status == formStates.ERROR && (
                        <>
                            <Lottie
                                width="50px"
                                options={{
                                    animationData: cadError,
                                }}
                            />
                        </>
                    )}
                </StyledForm.MessageCad>
            </form>
        </StyleContainerModal>
    )
}

export default function FormCadastro({ propsDoModal, onClose }){
    return (
        <StyledForm 
            {...propsDoModal}
        >
            <FormContent onClose={onClose} />
        </StyledForm>
    )
}