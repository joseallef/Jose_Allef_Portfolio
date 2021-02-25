import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';


const HeaderStyle = styled.nav`
    width: 100%;
    height: 50px;
    background: #999;
    font-size: 18px;
    color: #fff;
    padding: 5px;    
    text-decoration: none;
    list-style: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export default function Header(){
    return (
        <HeaderStyle>
            <NavBar />
        </HeaderStyle>
    )
}