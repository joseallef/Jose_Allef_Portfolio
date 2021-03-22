import React from 'react';
import styled, { css } from 'styled-components';
import TitleCard from '../TitleCard';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

export const StyleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 3px #EEEEEE;
  border-radius: 5px;
  padding: 0px;
  background: rgb(236, 239, 240);
  margin: 15px;
  color: #999;

  &:hover {
    box-shadow: 0 0 12px 3px #AAAAAA;
    cursor: pointer;
  }

  ${breakpointsMedia({
    xs: css`
          font-family: 'Rubik', sans-serif;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 18px
          max-width: 478px;
          width: 90vw;
         `,

    sm: css`
          display: flex;
          justify-content: center;
          aling-items: center;          
          width: 400px;          
       
        `,
    md: css`
          max-width: 768px;
          width: 300px; 
        `,
    lg: css`
          max-width: 992px;
        `,
    xl: css`
          width: 350px;
          max-width: 1200px;
        `,
  })}
`;

const StyleImage = styled.img`
    width: 100%;    
    display: flex;
    justify-content: center;   
    flex-wrap: wrap;
    height: 35vh;
    border-radius: 5px;

    ${breakpointsMedia({
    xs: css`
            height: 35vh;
        `,
    sm: css`
            height: 35vh;
        `,
    md: css`
            height: 35vh;
        `,
    lg: css`
            height: 35vh;
        `,
    xl: css`
            width: 350px;
            height: 250px;
        `,
  })}
`;

export function Card({
  // eslint-disable-next-line react/prop-types
  url, description, title,
}) {
  return (
    <>
      <StyleCard>
        <StyleImage src={url} alt={description} />
        <TitleCard description={description} title={title} />
      </StyleCard>
    </>
  );
}
