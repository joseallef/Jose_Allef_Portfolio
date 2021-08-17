import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const MenuWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  font-size: 18px;
  color: #fff; 

  padding-left: 28px;
  padding-right: 28px;
  

  font-family: Courier, sans-serif;
  font-weight: 700;

  ${breakpointsMedia({
    sm: css`
      font-size: 20px;
    `,
    lg: css`
      font-size: 24px;
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
    width: 30%;
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

      width: 42%;
    `,
  })}

  li:hover {
    border-bottom: 1px solid lightgreen;
  }
`;

const Mode = styled.div`
  order: 2;
  align-items: center;
  justify-content: flex-end;

  button {
    border: none; 

    ${({ currentTheme }) => {
    // useEffect(() => {
    //   let currentTheme = localStorage.getItem('theme');
    //   if(currentTheme === 'light'){
    //     return css`
    //       background: ${theme.colors.background.light.color}
    //     `;
    //   } else {
    //     return css`
    //       background: #000;
    //   `;
    //   }
    // }, [currentTheme])
    if (currentTheme === 'dark') {
      return css`
        background: #242540;
      `;
    }
    return css`
      background: #fff;
    `;
  }}
  }

  svg {
    cursor: pointer;
  }
  

  ${breakpointsMedia({
    xs: css`
      
    `,

    md: css`
    order: initial;
    justify-content: flex-end;
    
    `,
    lg: css`
      display: flex;
      flex: 1;
      order: initial;
      justify-content: center;
      width: 30%;
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
