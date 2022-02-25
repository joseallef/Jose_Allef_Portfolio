import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const WrapperRepository = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex: 0 0 100%;
  max-width: 100%;
  font-family: Courier,sans-serif;


  ${breakpointsMedia({
    xs: css`    
    font-size: 10px;
    `,
    sm: css`
    `,
    lg: css`
      max-width: 80%;
    `,
    xl: css`
    `,
  })}
  
`;

WrapperRepository.BoxProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  ${breakpointsMedia({
    xs: css`    
    `,
    lg: css`
      img {
        width: 150px;
        height: 150px;
      }
    `,
  })}

`;

WrapperRepository.Repository = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  margin: 20px;
  font-size: 12px;
  width: 100%;
  background: rgba(44,77,250,0.33);
  border-radius: 5px;
  padding: 20px;
  text-align: center;


  ${breakpointsMedia({
    sm: css`
    font-size: 14px;
    `,
    lg: css`
      flex-wrap: nowrap;
    `,
    xl: css`
    font-size: 18px;
    `,
  })}
`;

WrapperRepository.NameLink = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

WrapperRepository.Name = styled.span`
  display: block;
  margin-bottom: 5px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;

  ${breakpointsMedia({
    lg: css`
      font-size: 20px;
    `,
  })}
`;

WrapperRepository.Link = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
  
  width: 100%;
  font-weight: 200;
  font-size: 12px;

  a {
    text-decoration: none;
    color: #b3ccff;
  }
  a:hover {
    color: #bfbfc1;
  }

  ${breakpointsMedia({
    md: css`
    font-size: 14px;
    `,
    lg: css`
    font-size: 16px;
    `,
  })}
  
`;

WrapperRepository.Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;


`;

WrapperRepository.Box = styled.div`
  text-align: center;

  a {
    display: flex;
    box-shadow: 0 0 3px #dbeefd;
    padding: 10px;
    img {
      width: 10px;
      filter: invert(1);
    }
    &:hover {
      box-shadow: 0px 0px 2px 0px #dbeefd;
    }
  }

  ${breakpointsMedia({
    md: css`
      a {
        img {
          width: 20px;
        }
      }
     
    `,
  })}

`;

WrapperRepository.Icon = styled.div`
  img {
    width: 18px;
    height: 18px;
  }

`;

WrapperRepository.IconFirst = styled.div`
  filter: invert(1);
`;

WrapperRepository.Watch = styled.div`
  color: #b3ccff;
`;

WrapperRepository.About = styled.h1`
  display: block;
  width: 100%;
  text-align: center;
`;

WrapperRepository.AboutTitle = styled.h2`
  display: flex;
  justify-content: center;
  border-top: 1px solid #b3ccff;
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

WrapperRepository.Img = styled.img`
  background-image: url('/image/avatar.jpg');
  background-size: cover;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin: 10px;
`;

WrapperRepository.History = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  ${breakpointsMedia({
    xs: css`
      ont-size: 12px;
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

WrapperRepository.Paragraph = styled.p`
  display: flex;
  margin: 20px;
`;

export default WrapperRepository;
