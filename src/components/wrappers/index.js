/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/Utils/breakpointsMedia';

// clip-path: polygon(0px 0px, 100% 115px, 100% 100%, 0px 100%);
export const StyleWrapperContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    font-size: 10px;

    ${breakpointsMedia({
    xs: css`
        font-family: 'Rubik', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 18px;
        
        `,

    sm: css`
        display: flex;
        justify-content: center;
        aling-items: center;
      
      `,
    md: css`
        margin-top: 0px;
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        font-size: 16px;
    `,
    lg: css`
        margin-top: 0px;
        max-width: 1160px;
        `,
    xl: css`
      `,
  })}
`;

StyleWrapperContainer.Div = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  margin: 20px;

`;

StyleWrapperContainer.ButtonModal = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 0px;
  height: 50px;
  width: 250px;
  vertical-align: middle;
  cursor: pointer;
  display: block;
  margin: auto;

  &:active {
    border: none;
    outline: none;
  }
`;

StyleWrapperContainer.IconButtonModal = styled.div`
  margin-top: -10px;
  display: flex;
  float: right;
  height: 45px;
  width: 45px;
  border: none;
  outline: none;
  cursor: pointer;
`;
