import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

export const WrapperMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: auto;
  color: #fff;

  padding: 0;

`;

const Main = styled.main` 
  background: #242540;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  color: #fff;
  padding: 0;


  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  } 
  
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  ${breakpointsMedia({
    xs: css`
      > svg {
        width: 500px;
      }
    `,
    sm: css`

    `,
    md: css`
   

    `,
    lg: css`
      html, body {
        overflow: hidden;
      }
    `,
    xl: css`
      margin: auto;
      svg {
        position: absolute;
        max-width: 550px;
      }
   
    `,

  })}
`;

const Vector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  z-index: 1;

  svg {
    position: absolute;
    display: block;
  }

  ${breakpointsMedia({
    sm: css`
    margin-top: 100px;
      svg {
        width: 70%;
        height: 70%;
      }
    `,
    md: css`
    
    svg {
      width: 70%;
      height: 70%;
    }
  `,
    lg: css`
      svg {
        width: 70%;
        height: 70%;
      }
    `,
  })}
`;

const Paragrath = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 100%;
  z-index: 2;
  padding: 0px;

  h2 {
    width: 100%;
    text-align: center;
  }

  p {
    text-align: center;
    width: 80%;
  }
 

  ${breakpointsMedia({
    sm: css`
      font-size: 16px;
    `,
    md: css`
      font-size: 18px;
    `,
    lg: css`
      padding: 0px;
    `,
  })}
`;

const WrapperImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;

  img {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }


  ${breakpointsMedia({
    sm: css`
      img {
        margin-top: 50px;
        display: flex;
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    `,
  })}
`;

export const Wrapper = {
  Main, Vector, Paragrath, WrapperImg,
};
