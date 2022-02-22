import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const StyleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 1px #333;
  border-radius: 5px;
  padding: 0px;
  background: rgba(44, 77, 250, 0.33);
  margin: 20px;
  color: #BBB;
  transition: margin-top 0.3s;
  

  &:hover {
    box-shadow: 0 0 8px 3px rgba(44, 77, 250, 0.13);
    cursor: pointer;
    margin-top: 0.1px;
  }

  font-family: Courier, sans-serif;
  font-style: italic;
  font-weight: 200;
  font-size: 15px;

  ${breakpointsMedia({
    xs: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 18px
    `,

    sm: css`
      width: 60vw;
      margin: 15px;
    
    `,
    md: css`
      max-width: 768px;
      width: 300px; 
    `,
    lg: css`
      max-width: 992px;
    `,
    xl: css`
      width: 320px;
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
      height: 200px;
    `,
    xl: css`
      width: 320px;
      height: 220px;
  `,
  })}
`;
export { StyleCard, StyleImage };
