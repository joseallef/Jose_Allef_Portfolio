import styled from 'styled-components';


const StyleImage = styled.img`
    background-image: url('image/instalura1.png');
    background-repeat: no-repeat;
    background-size: contain;

    
    display: flex;
    justify-content: center;   
    flex-wrap: wrap;

    width: 100%;
    height: 180px;
    

`;


export default function Image(){
    return (
        <StyleImage>
        </StyleImage>
    )
}