import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const StyleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 0px;
  background: rgba(44, 77, 250, 0.33);
  color: #b3ccff;
  transition:  0.3s;
  transform: scale(0.8);

  &:hover {
    box-shadow: 0 0 8px 3px rgba(44, 77, 250, 0.13);
    cursor: pointer;
    transform: scale(0.9);
  }

  font-family: Courier, sans-serif;
  font-weight: 600;
  font-size: 15px;

  ${breakpointsMedia({
    xs: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    `,

    sm: css`
      width: 60vw;
      height: 100%;
    
    `,
    md: css`
      max-width: 768px;
      width: 350px; 
    `,
    lg: css`
      max-width: 992px;
    `,
    xl: css`
      width: 380px;
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
      height: 280px;
    `,
    xl: css`
    width: 100%;
      height: 320px;
  `,
  })}
`;
export { StyleCard, StyleImage };
