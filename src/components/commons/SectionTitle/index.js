import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const StyleTitle = styled.h1`
  display: flex;
  width: 100%;
  text-aling: center;
  justify-content: center;
  aling-items: center;
  margin-top: 10;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.modes.dark.color};

  font-family: Courier, sans-serif;
  font-style: italic;
  font-weight: 700;


  ${breakpointsMedia({
    md: css`
      font-size: 45px;
    `,
    lg: css`
    
    `,
  })}
`;

export default function SectionTitle() {
  return (
    <StyleTitle>
      Projetos
    </StyleTitle>
  );
}
