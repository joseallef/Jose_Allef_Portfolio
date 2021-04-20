import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';

const HeaderStyle = styled.header`
    width: 100%;
    height: 50px;
    background: #999;
    font-size: 18px;
    color: #fff;
    padding: 5px;
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    & a {
      padding:10px;
    }
    & a:hover {
      background: #888;
      border-radius: 2px;
    }

`;

export default function Header() {
  return (
    <HeaderStyle>
      <NavBar />
    </HeaderStyle>
  );
}
