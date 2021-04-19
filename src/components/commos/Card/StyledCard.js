import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const StyleCard = styled.div`
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
    `,

    sm: css`
      display: flex;
      justify-content: center;
      aling-items: center;
      width: 60vw;
    
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
  border-radius: 5px;

  ${breakpointsMedia({
    xs: css`
      height: 35%;
    `,
    sm: css`
      height: 35%;
    `,
    md: css`
      height: 35%;
    `,
    lg: css`
      height: 45%;
    `,
    xl: css`
      width: 350px;
      height: 250px;
  `,
  })}
`;
export { StyleCard, StyleImage };
