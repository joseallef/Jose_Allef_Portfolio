import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

export const WapperProject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  ${breakpointsMedia({
    xs: css`    
    margin-right: auto;
    margin-left: auto;
    font-size: 12px;
    `,
    sm: css`
    max-width: 80%;
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
    display: block;
    width: 100%;
    `,
    sm: css`
    max-width: 100%;
    display: flex;
    `,
    lg: css`
    max-width: 45%;
    `,
    md: css`
    max-width: 45%;
    `,
    xl: css`
    max-width: 45%;
    `,
  })}

`;

export const DescriptionProject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  padding: 10px;

  ${breakpointsMedia({
    xs: css`    
    display: block;
    font-size: 16px;
    `,
    sm: css`
    max-width: 100%;
    display: flex;
    `,
    md: css`
    max-width: 45%;
    `,
    lg: css`
    max-width: 45%;
    `,
    xl: css`
    max-width: 45%;
    `,
  })}

`;

export const MyLink = styled.a`
  font-size: 16px;
`;
