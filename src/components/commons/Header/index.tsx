'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { ThemeApp } from '../../wrappers/context';
import NavBar from '../NavBar';

export default function Header() {
  const { toggleTheme, themeApp } = useContext(ThemeApp);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="/image/Logo.svg"
              alt="Logo"
              className="h-8 w-auto transition-all duration-300 logo-adaptive"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavBar />
        </nav>

        <div className="flex items-center gap-4">
          <div className="md:hidden flex">
             {/* Mobile Nav placeholder - O NavBar original tinha scroll horizontal, vou manter visivel em mobile abaixo do header ou dentro dele se couber */}
          </div>
          
          <button
            onClick={() => toggleTheme()}
            className="relative inline-flex h-9 w-16 items-center rounded-full border border-input bg-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            aria-label="Alternar tema"
          >
            <span className={`absolute top-1/2 left-[3px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition-all duration-300 -translate-y-1/2 ${themeApp === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}>
              {themeApp === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </span>
          </button>
        </div>
      </div>
      {/* Mobile Nav Container */}
      <div className="md:hidden border-t border-border py-2 px-4 overflow-x-auto">
        <NavBar />
      </div>
    </header>
  );
}
