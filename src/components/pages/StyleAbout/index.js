import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const WapperRepositorys = styled.div`
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex: 0 0 100%;
  max-width: 100%;


  ${breakpointsMedia({
    xs: css`    
    font-size: 10px;
    `,
    sm: css`
    max-width: 80%;
    `,
    lg: css`
    max-width: 50%;
    `,
    xl: css`
    max-width: 50%;
    `,
  })}
  
`;

WapperRepositorys.Repository = styled.div`
  display: block;
  text-decoration: none;
  margin: 20px;
  font-size: 10px;
  ${breakpointsMedia({
    sm: css`
    font-size: 14px;
    `,
    lg: css`
    `,
    xl: css`
    max-width: 80%;
    font-size: 18px;
    `,
  })}
`;

WapperRepositorys.Name = styled.span`
  display: block;
  margin-bottom: 5px;
  width: 100%;
  font-style: italic;
  font-weight: 200;
`;

WapperRepositorys.Link = styled.a`
  display: block;
  text-decoration: none;
  color: #b3ccff;
  width: 100%;
  font-weight: 200;
  &:hover {
    color: #bfbfc1;
  }
  
`;

WapperRepositorys.About = styled.h1`
  display: block;
  width: 100%;
  text-align: center;
`;

WapperRepositorys.AboutTitle = styled.h2`
  display: flex;
  justify-content: center;
  border-top: 1px solid #b3ccff;
  margin-top: 60px;
  width: 100%;
  
  font-size: 20px;

  font-family: Courier, sans-serif;
  font-style: italic;
  font-weight: 700;


  ${breakpointsMedia({
    md: css`
      font-size: 28px;
    `,
    lg: css`
      font-size: 36px;
    `,
  })}

`;

WapperRepositorys.Img = styled.img`
  background-image: url('/image/avatar.jpg');
  background-size: cover;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin: 10px;
`;

WapperRepositorys.History = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  ${breakpointsMedia({
    xs: css`
    font-size: 12px;
    `,
    sm: css`
    font-size: 14px;
    `,
    lg: css`
    display: flex;
    font-size: 16px;
    `,
    xl: css`
    max-width: 80%;
    font-size: 18px;
    `,
  })}
`;

WapperRepositorys.Paragraph = styled.p`
  display: flex;
  margin: 20px;
`;

export default WapperRepositorys;
