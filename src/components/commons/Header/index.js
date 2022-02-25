/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { ThemeApp } from '../../wrappers/context';
import NavBar from '../NavBar';
import {
  MenuWrapper, Logo, Nav, Mode,
  BoxToggle,
  ButtonToggle,
} from './StyleHeader';

export default function Header() {
  const { toggleTheme, currentTheme, setCurrentTheme } = useContext(ThemeApp);

  return (
    <MenuWrapper>
      <Logo>
        <img src="/image/Logo.svg" alt="" />
      </Logo>
      <Nav>
        <NavBar />
      </Nav>
      <Mode
        currentTheme={currentTheme}
      >
        <ButtonToggle>
          <img src="/image/moon.svg" alt="Icone Noite" />
          <BoxToggle
            onClick={() => {
              setCurrentTheme(toggleTheme);
            }}
            currentTheme={currentTheme}
          />
          <img src="/image/sun.svg" alt="Icone Sol" />
        </ButtonToggle>
      </Mode>
    </MenuWrapper>
  );
}
