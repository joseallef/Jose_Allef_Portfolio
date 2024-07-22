'use client';

import { useContext } from 'react';
import { ThemeApp } from '../../wrappers/context';
import NavBar from '../NavBar';

export default function Header() {
  const { toggleTheme, themeApp } = useContext(ThemeApp);

  return (
    <header className="flex items-center justify-around flex-wrap w-full text-white font-bold text-lg p-4 pt-6">
      <div className="flex justify-start items-center order-1 md:order-none w-6/12 lg:w-1/4 xl:w-1/4">
        <img
          src="/image/Logo.svg"
          alt="Logo"
          className="h-8 md:h-10"
        />
      </div>

      <nav className="flex justify-between items-center w-full order-3 lg:order-none lg:justify-center lg:w-2/4 xl:w-2/4">
        <NavBar />
      </nav>

      <div className="flex justify-end items-center order-2 md:order-none lg:flex-1 lg:order-none w-6/12 lg:w-1/4 xl:w-1/4">
        <div
          onClick={() => toggleTheme()}
          className={`relative flex justify-around items-center w-[70px] h-[25px] rounded-full transition-all duration-300 ${themeApp === 'dark' ? 'bg-[#4d98fa3f]' : 'bg-[#2c4efa3f]'} md:w-[80px] md:h-[30px] cursor-pointer`}
        >
          <img src="/image/moon.svg" alt="Ícone Noite" />
          <button
            className={`absolute w-[25px] h-[25px] bg-slate-200 rounded-full transition-all duration-300 border-none ${themeApp === 'light' ? 'ml-[38px] md:ml-[44px]' : 'left-1'} md:w-[26px] md:h-[26px]`}
          />
          <img src="/image/sun.svg" alt="Ícone Sol" />
        </div>
      </div>
    </header>
  );
}
