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
    font-family: 'Rubik', sans-serif;

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
        font-size: 26px;
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
  transition: border .8s;

  &:hover {
    border-bottom: 1px solid lightgreen;
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
  transition: border .8s;

  &:hover {
    border-bottom: 1px solid lightgreen;
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

export const PropsModal = {
  WrapperModal, ButtonModal, IconButtonModal, Links,
};
