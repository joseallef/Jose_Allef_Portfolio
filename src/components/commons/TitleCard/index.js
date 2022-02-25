import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const StyleTitleCard = styled.h2`
  margin: 0px;
  text-align: center;
  vertical-align: 50px;
  width: 100%; 
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  font-stretch: condensed;
  padding: 20px;

  ${breakpointsMedia({
    md: css`
      font-size: 18px;
    `,
    lg: css`
      font-size: 20px;
    `,
  })}
`;

// eslint-disable-next-line react/prop-types
export default function TitleCard({ title }) {
  return (
    <>
      <StyleTitleCard>
        {title}
      </StyleTitleCard>
    </>
  );
}
