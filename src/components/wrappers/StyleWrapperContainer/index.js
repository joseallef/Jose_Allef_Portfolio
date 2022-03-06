/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

// clip-path: polygon(0px 0px, 100% 115px, 100% 100%, 0px 100%);
export const StyleWrapperContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    font-size: 12px;
    color: #fff;
    font-family: Courier, sans-serif;
    margin-bottom: 20px;
    z-index: 2;

    ${breakpointsMedia({
    xs: css`
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
        font-size: 22px;
    `,
    lg: css`
        margin-top: 0px;
        max-width: 1160px;
        margin-bottom: 100px;
        `,
    xl: css`
      `,
  })}
`;

const WrapperModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
  width: 100%;
  margin: auto;
  margin: 20px;
  z-index: 2;

  ${breakpointsMedia({
    md: css`
    flex-wrap: nowrap;
    `,
  })}

`;

const ButtonModal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(44, 77, 250, 0.23);
  color: #FFF;
  border-radius: 27px 0px;
  border: none;
  padding: 10px;
  font-size: 12px;
  margin-bottom: 20px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  margin: auto;
  margin: 20px;
  transition: border .3s;
  border-bottom: 1px solid rgba(44, 77, 250, 0.23);
  box-shadow: 0 0 2px 1px #4e69f49c;

  img {
    filter: grayscale(1);
    transition: .2s;
  }

  &:hover {
    border-bottom: 1px solid #b3ccff;

    img {
      transform: skew(18deg, 11deg);
      filter: grayscale(1);
    }
  
  }


  ${breakpointsMedia({
    sm: css`
    height: 40px;
    width: 250px;
    `,
    md: css`
      height: 50px;
      width: 250px;
    `,
    lg: css`
      font-size: 16px;
      
    `,
  })}
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(44, 77, 250, 0.23);
  color: #FFF;
  border-radius: 27px 0px;
  border: none;
  padding: 10px;
  font-size: 12px;
  margin-bottom: 20px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  margin: auto;
  margin: 20px;
  transition: border .3s;
  border-bottom: 1px solid rgba(44, 77, 250, 0.23);
  box-shadow: 0 0 2px 1px #4e69f49c;

  &:hover {
    border-bottom: 1px solid #b3ccff;
  }

  img {
    width: 27px;
  }


${breakpointsMedia({
    sm: css`
      height: 40px;
      width: 250px;
  `,
    md: css`
      height: 50px;
      width: 200px;
  `,
    lg: css`
      width: 250px;
    `,
  })}
`;

const IconButtonModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  height: 50px;
  width: 50px;
`;

const WrapperSvg = styled.div`
  z-index: 0;
  img {
    position: fixed;
    width: 100%;
  }

  ${breakpointsMedia({

    md: css`
    img {
      width: 35%;

    }
    img:nth-child(1) {
      position: fixed;
      width: 40%;
      margin-left: 72%;
      margin-top: 82px;
      transform: rotate(341deg)
    }
  `,
    lg: css`
    `,
  })}
`;

export const PropsModal = {
  WrapperModal, ButtonModal, IconButtonModal, Links, WrapperSvg,
};
