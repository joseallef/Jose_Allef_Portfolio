import styled from 'styled-components';
import {Card} from './../Card';

const LinkStyle = styled.a`
     margin: 20px;
     text-decoration: none;
     color: #999;
     padding: 0px; 
     &:hover {
        box-shadow: 0 0 12px 3px #AAAAAA;
        cursor: pointer;
        border-radius: 2px;
     }
`;

const projects = [    
    {
        url: 'image/instalura1.png',
        link: 'https://instalura-base.allef.vercel.app/',
        description: 'Projeto criado durante a JAMSTack',
    },

    {
        url: 'image/instalura.png',
        link: 'https://instalura-base.allef.vercel.app/',
        description: 'Projeto criado durante a JAMSTack',
    },

    {
        url: 'image/instalura1.png',
        link: 'https://instalura-base.allef.vercel.app/',
        description: 'Projeto criado durante a JAMSTack',
    }
]

export default function Image(){
    return (
        <>
             {/* {projects.map((project) =>{
                    console.log(project);
                <LinkStyle href="https://instalura-base.allef.vercel.app/">
                    <Card            
                        url="image/instalura1.png"
                        link="https://instalura-base.allef.vercel.app/"
                        description="Projeto criado durante a JAMSTack"
                    />
                    ok
                </LinkStyle>
            })} */}

            <LinkStyle href="https://instalura-base.allef.vercel.app/" target="_blanck">
                <Card            
                    url="image/instalura.png"
                    link="https://instalura-base.allef.vercel.app/"
                    description="Primeiro projeto do bootcamp JAMStack"
                    title="Instalura"
                />
            </LinkStyle>
            <LinkStyle href="https://allefquiz-base.allef.vercel.app/" target="_blanck">
                <Card            
                    url="image/quiz.png"
                    link="https://instalura-base.allef.vercel.app/"
                    description="Projeto criado durante a Imersão React"
                    title="AllefQuiz"
                />
            </LinkStyle>
            <LinkStyle href="https://via.placeholder.com" target="_blanck">
                <Card
                    url="https://via.placeholder.com/300"
                    link="https://instalura-base.allef.vercel.app/"
                    description="Project Report"
                    title="Ok"
                />
            </LinkStyle>
        </>
    )
}