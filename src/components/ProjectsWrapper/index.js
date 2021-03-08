import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/Utils/breakpointsMedia';

// clip-path: polygon(0px 0px, 100% 115px, 100% 100%, 0px 100%);
export const StyleWrapperContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    ${breakpointsMedia({
    xs: css`
        font-family: 'Rubik', sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 18px
        `,

    sm: css`
        max-width: initial;
        display: flex;
        justify-content: center;
        aling-items: center;
      
      `,
    md: css`
        margin-top: 0px;
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
    `,
    lg: css`
        margin-top: 0px;
        max-width: 1160px;
        `,
    xl: css`
        margin-top: 0px;
        display: flex;
        justify-content: center;
        aling-items: center;
        max-width: 1200px;
        min-height: 100vh;
      `,
  })}
`;

StyleWrapperContainer.ButtonModal = styled.button`
  position: relative;
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 15px;
  float: right;
  height: 50px;
  width: 250px;
  vertical-align: middle;
  cursor: pointer;

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
`;
