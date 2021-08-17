/* eslint-disable react/button-has-type */
import React from 'react';
import Lottie from 'lottie-react-web';
import { setCookie, parseCookies } from 'nookies';

import NavBar from '../NavBar';
import ButtomDarkMode from '../../../../public/icon/dark-mode-button.json';
import {
  MenuWrapper, Logo, Nav, Mode,
} from './StyleHeader';

export default function Header() {
  const cookies = parseCookies();
  const [currentTheme, setCurrentTheme] = React.useState(() => {
    if (cookies.theme) {
      return cookies.theme;
    }
    return 'dark';
  });

  // React.useEffect(() => {
  //   const t = localStorage.getItem('theme');
  //   // setCurrentTheme(t);
  //   // console.log(t, currentTheme);
  // }, [currentTheme]);

  function toggleTheme() {
    if (cookies.theme) {
      setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    // localStorage.setItem('theme', currentTheme);

    setCookie(null, 'theme', currentTheme, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    return (
      currentTheme
    );
  }
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
        <button
          onClick={() => {
            setCurrentTheme(toggleTheme);
          }}
        >
          <Lottie
            width="60px"
            height="60px"
            options={{
              animationData: ButtomDarkMode,
              loop: false,
            }}
          />
        </button>
      </Mode>
    </MenuWrapper>
  );
}
