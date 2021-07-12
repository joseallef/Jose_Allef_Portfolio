import React from 'react';
import NavBar from '../NavBar';

import {
  MenuWrapper, Logo, Nav, Mode,
} from './StyleHeader';

export default function Header() {
  return (
    <MenuWrapper>
      <Logo>
        <img src="/image/Logo.svg" alt="" />
      </Logo>
      <Nav>
        <NavBar />
      </Nav>
      <Mode>
        Toggle
      </Mode>
    </MenuWrapper>
  );
}
