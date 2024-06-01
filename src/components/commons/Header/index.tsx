'use client'

import { useContext } from 'react';
import { ThemeApp } from '../../wrappers/context';
import NavBar from '../NavBar';

export default function Header() {
  const { toggleTheme, themeApp } = useContext(ThemeApp);

  console.log("Theme", themeApp)

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
          className={`relative flex justify-around items-center w-[70px] h-[25px] rounded-full transition-all duration-300 ${themeApp === 'dark' ? "bg-[#4d98fa3f]" : "bg-[#2c4efa3f]"} md:w-[80px] md:h-[30px] cursor-pointer`}>
          <div
          // onClick={() => setTheme('dark')}
          >
            <img src="/image/moon.svg" alt="Ícone Noite" />
          </div>

          <button
            className={`absolute w-[25px] h-[25px] bg-slate-200 rounded-full transition-all duration-300 border-none ${themeApp === 'light' ? 'ml-[43px]' : 'left-0'} md:w-[30px] md:h-[30px]`}
          >
          </button>

          {/* <div onClick={() => setTheme('sistema')}>
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" strokeWidth="2" strokeLinejoin="round" className="stroke-amber-400 fill-sky-400/20">
              </path>
              <path d="M14 15c0 3 2 5 2 5H8s2-2 2-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-amber-400">
              </path>
            </svg>
          </div> */}

          <div
          // onClick={() => setTheme('light')}
          >
            <img src="/image/sun.svg" alt="Icone Sol" />
          </div>
        </div>
      </div>
    </header>
  );
}
