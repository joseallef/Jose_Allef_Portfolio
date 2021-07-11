import React from 'react';
import styled from 'styled-components';

const InputWapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

`;

// interface valueProps {

//   value: string | '';
//   type?: "input" | "text";
//   children: React.ReactNode;
// }

export default function TextField() {
  return (
    <InputWapper>
      <Input
        type="text"
        placeholder="Nome"
        name="nome"
        value="ok"
      />
    </InputWapper>
  );
}

TextField.defaultProps = {
  type: 'input',
  value: 'José Allef',
};
