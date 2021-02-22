import styled, {css} from 'styled-components';
import SectionTitle from './../SectionTitle';
import Card from './../Card';
import {breakpointsMedia} from './../../theme/Utils/breakpointsMedia';


const StyleWrapperContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  

    ${function(props){
        return `
            @media screen and (min-width: ${props.theme.breakpoints.xs}px){
                font-family: 'Rubik', sans-serif;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-top: 18px;
            }

            @media screen and (min-width: ${props.theme.breakpoints.sm}px){
                max-width: initial;

                padding-right: 28px;
                padding-left: 28px;
            }
    
            @media screen and (min-width: ${props.theme.breakpoints.md}px){

                margin-top: 0px;
                margin-left: auto;
                margin-right: auto;
                width: 100%;
                padding: 0 16px;
                max-width: 768px;
            }
            @media screen and (min-width: ${props.theme.breakpoints.lg}px){;
                max-width: 1160px; 
            }

            @media screen and (min-width: ${props.theme.breakpoints.xl}px){
                display: flex;
                justify-content: center;
                aling-items: center;
                max-width: 1200px;
                height: 100vh;
                
            }           
        
        `
    }}

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
        background: purple;
        `,
        xl: css`
        max-width: 1222px;
        background: yellow;

        margin: auto;
        padding-right: 28px;
        padding-left: 28px;
        margin-right: auto;
        margin-left: auto;
        border: 10px solid black;
      `,
    })}
    
`;

StyleWrapperContainer.Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;


`;

export default function WrapperProjects(){  

    return (
        <StyleWrapperContainer>
            <SectionTitle />
            <StyleWrapperContainer.Card>
                <Card />
            </StyleWrapperContainer.Card>
        </StyleWrapperContainer>
    )
}