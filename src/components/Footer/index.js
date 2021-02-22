import styled from 'styled-components';

const StyleFooter = styled.footer`
    width: 100%;
    height: 50px;
    background: #000;
    font-size: 18px;
    color: #fff;
    padding: 5px;    
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export default function Footer(){

    return (
        <StyleFooter>
            <a href="https://github.com/joseallef" target="_blanck" style={{ display: 'flex', margin: '10px' }}>
                <img src="image/githubIcon.svg" alt="Github" width="30" />
            </a>
            <a href="https://www.linkedin.com/in/jose-allef-17b508170/" target="_blanck" style={{ display: 'flex', margin: '10px'}}>
                <img src="image/linkedinIcon.svg" alt="Linkedin" width="30" />
            </a>
        </StyleFooter>
    )
}