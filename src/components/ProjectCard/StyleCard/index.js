import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

export const WapperProject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  ${breakpointsMedia({
    xs: css`    
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `,
    sm: css`
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    `,
    lg: css`
    max-width: 90%;
    `,
    xl: css`
    max-width: 90%;
    `,
  })}
`;

export const CardProject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 3px #242540;
  padding: 0px;
  margin: 15px;
  color: #999;

  img {
    border-radius: 5px;
    width: 100%;
    height: 250px
  }

  &:hover {
    box-shadow: 0 0 12px 3px #4B486F;
    cursor: pointer;
  }

  ${breakpointsMedia({
    xs: css`
    justify-content: space-around;
    `,
    sm: css`
    max-width: 100%;
    display: flex;
    `,
    lg: css`
    max-width: 40%;
    `,
    md: css`
    max-width: 40%;
    `,
    xl: css`
    max-width: 35%;
    `,
  })}

`;

export const DescriptionProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 10px;

  ${breakpointsMedia({
    xs: css`    
    display: block;
    `,
    sm: css`
    max-width: 100%;
    display: flex;
    `,
    md: css`
      max-width: 45%;
      font-size: 20px;
    `,
    lg: css`
    max-width: 45%;
    `,
    xl: css`
    max-width: 45%;
    `,
  })}

`;

export const Title = styled.h1`
  display: block;
  width: 100%;
  text-align: center;

`;

export const MyLink = styled.a`
  font-size: 16px;
  color: #b3ccff;
  padding: 10px;

  ${breakpointsMedia({
    md: css`
    font-size: 20px;
    `,
  })}
`;
