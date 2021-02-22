import styled, {css} from 'styled-components';
import Image from './../CardImage';
import TitleCard from './../TitleCard';
import {breakpointsMedia} from './../../theme/Utils/breakpointsMedia';


const StyleCard = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
    box-shadow: 0 0 8px 3px #EEEEEE;
    border-radius: 2px;
    padding: 5px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 10px;
    float: left;

    ${breakpointsMedia({
        xs: css`
         max-width: initial;
     
         padding-right: 28px;
         padding-left: 28px;
         background: blue !important;
         `,
        md: css`
         justify-content: flex-start;
         margin-top: 32px;
         margin-left: auto;
         margin-right: auto;
         width: 100%;
         padding: 0 16px;
         max-width: 768px;
         background: black !important;
       `,
       sm: css`
         max-width: initial;
 
         padding-right: 28px;
         padding-left: 28px;
         background: red !important;
       
       `,
       lg: css`
         max-width: 1160px; 
         `,
         xl: css`
         max-width: 1222px;
         background: yellow;
 
         
         margin: auto;
         padding-right: 28px;
         padding-left: 28px;
         margin-right: auto;
         margin-left: auto;
       `,
     })}

`;

StyleCard.Generic = styled.div`
    display: block;
    margin-top: 400px;
    justify-content: center;
    aling-items: center;
    width: 200px;
    height: 100px;

`;

export default function Card(){

    return(
        <>
        <StyleCard>
            <Image />
            <TitleCard />
        </StyleCard>
        <StyleCard>
            <Image />
            <TitleCard />
        </StyleCard>
        <StyleCard>
            <Image />
            <TitleCard />
        </StyleCard>

        </>
        
    )
}