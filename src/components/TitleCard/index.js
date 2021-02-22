import styled from 'styled-components';

const StyleTitleCard = styled.h4`
    display: flex;
    justify-content: center;
    aling-items: center;
    margin: 0px;
    text-align: center;
    width: 100%;
    height: 30px;
    background: #eceff0;  


`;

// StyleTitleCard.Paragraf = styled.p`
//     display: block;
//     height: 80px;
//     justify-content: center;
//     aling-items: center;
//     font-size: 20px;
//     border: 1px solid black;

// `;


export default function TitleCard(){
    return (
        <>
        <StyleTitleCard>
            Instalura
        </StyleTitleCard>

        </>
    )
}