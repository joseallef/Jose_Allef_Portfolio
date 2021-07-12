import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const MenuWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  font-size: 12px;
  color: #fff; 

  padding-left: 28px;
  padding-right: 28px;

  

  font-family: Courier, sans-serif;
  font-weight: 700;

  ${breakpointsMedia({
    sm: css`
      font-size: 16px;
    `,
    lg: css`
      font-size: 20px;
    `,
  })}
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;

  img {
    height: 50px;
  }

  ${breakpointsMedia({
    md: css`
      order: initial;
      img {
        height: 70px;
      }
    `,
    lg: css`
    width: 40%;
    img {
      height: 100%;
    }
  `,
  })}
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  order: 3;  
  list-style: none;
  border-bottom: 1px solid #454666;

  ${breakpointsMedia({
    xs: css`
      a {
        display: block;
      }
    
    `,
    md: css`
      border: none;
      display: flex;
      a {
        display: flex;
      }
    `,
    lg: css`    
      order: initial;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 0px;
      gap: 40px;

      width: 40%;
    `,
  })}  

  li:hover {
    border-bottom: 1px solid lightgreen;
  }
`;

const Mode = styled.div`
  display: flex;
  flex: 1;
  order: 2;
  align-items: center;
  width: 20%;
  justify-content: flex-end;

  ${breakpointsMedia({
    xs: css`
      
    `,

    md: css`
    order: initial;
    `,
    lg: css`
    order: initial;
    justify-content: start;
  `,
  })}
`;

const WrapperImg = styled.div`
  width: 300px;
  height: 300px;
  
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;

const WrapperMain = styled.main`

  padding-left: 80px;
  padding-right: 80px;
  background: #242540;
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 24px;
    width: 50%;
    color: #FFF;
  }
`;

export {
  MenuWrapper, Logo, Nav, Mode, WrapperImg, WrapperMain,
};
