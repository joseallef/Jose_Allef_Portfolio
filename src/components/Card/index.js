import styled, {css} from 'styled-components';
import TitleCard from './../TitleCard';
import {breakpointsMedia} from './../../theme/Utils/breakpointsMedia';

const StyleCard = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0 0 10px 3px #EEEEEE;
    border-radius: 2px;
    padding: 0px;
    background: #eceff0;

    ${breakpointsMedia({
        xs: css`
          font-family: 'Rubik', sans-serif;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 18px
          max-width: 478px;
          width: 90vw;
         `,
  
        sm: css`
          display: flex;
          justify-content: center;
          aling-items: center;          
          width: 400px;          
       
        `,
        md: css`
          max-width: 768px;
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
    height: 35vh;

    ${breakpointsMedia({
        xs: css`
            height: 35vh;
        `,
        sm: css`
            height: 35vh;
        `,
        md: css`
            height: 35vh;
        `,
        lg: css`
            height: 35vh;
        `,
        xl: css`
            width: 350px;
            height: 250px;
        `,
    })}
`;

export function Card({url, link, description, title}){  
    return(
      <>
          <StyleCard>
            <StyleImage src={url} alt={link} />
            <TitleCard description={description} title={title} />
          </StyleCard>
      </>
        
    )
}