import styled from 'styled-components';

const StyleTitle = styled.h1`
    display: flex;
    width: 100%;
    text-aling: center;
    justify-content: center;
    aling-items: center;
    margin-top: 0;
    font-size: 33px;
`;

export default function SectionTitle(){
    return (
        <StyleTitle>
            Meus projetos
        </StyleTitle>
    )
}