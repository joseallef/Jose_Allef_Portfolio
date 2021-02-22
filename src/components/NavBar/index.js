import styled from 'styled-components';
import PropType from 'prop-types';


const TextLink = styled.span`
    list-style: none;
    text-decoration: none;
    color: #FFF;

    padding: 0;
    margin-right: 10vw;
    order: 3;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: right;
`;


function Text({tag, variante, children, ...props}){
    // console.log(tag, variante, children, props);
    return (
        <TextLink as={tag} variante={variante} {...props}>{children}
        </TextLink>
    )
}

const links = [
    {
        text: '< Allef />',
        url: '/',
    },
    {
        text: 'Sobre mim',
        url: 'sobre',
    },
    {
        text: 'Contato',
        url: 'contato',
    }
]

export default function NavBar(props){
    // console.log(props);
    return (
        <>
            {links.map((link) =>{
                return (
                    <li key={link.url}>                        
                        <Text variante="ok" tag="a" href={link.url}> {link.text}
                        </Text>                    
                    </li>
                )
            })}
        </>
    )
}

Text.PropType = {
    tag: PropType.string.isRequired,
    variante: PropType.string.isRequired,
    children: PropType.string.isRequired,
}