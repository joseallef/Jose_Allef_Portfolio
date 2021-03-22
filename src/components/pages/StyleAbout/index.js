import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const WapperRepositorys = styled.div`
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex: 0 0 100%;   

  ${breakpointsMedia({
    xs: css`    
    margin-right: auto;
    margin-left: auto;
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
    xs: css`
    font-size: 12px;
    `,
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
`;

WapperRepositorys.Link = styled.a`
  display: block;
  text-decoration: none;
  color: ##b3ccff;
  display: block;
  width: 100%;
`;

WapperRepositorys.About = styled.h1`
  display: block;
  width: 100%;
  text-align: center;
`;

WapperRepositorys.AboutTitle = styled.h2`
  display: block;
  width: 100%;
  text-align: center;

`;

WapperRepositorys.Img = styled.img`
  background-image: url('./image/avatar.jpg');
  background-size: cover;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin: 10px;
`;

WapperRepositorys.History = styled.div`
  display: block;
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

WapperRepositorys.Pragraph = styled.p`
  display: flex;
  margin: 20px;
`;

export default WapperRepositorys;
