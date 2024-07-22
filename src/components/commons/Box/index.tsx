'use client'

import { ThemeApp } from '@components/wrappers/context';
import Head from 'next/head';
import React, { ReactNode, useContext } from 'react';

interface WrapperMainProps {
  children?: ReactNode;
}

export const Box: React.FC<WrapperMainProps> = ({ children }) => {
  const { themeApp } = useContext(ThemeApp);
  return (
    <html lang="pt-br" className="flex min-h-full w-ful m-0 p-0">
      <Head>
        <link rel="shortcut icon" href="/icon/icon.ico" />
      </Head>
      <body className={`flex min-h-full w-full justify-center m-0 p-0 font-courier transition-all duration-500 ${themeApp === "dark" ? "bg-slate-950 dark:text-gray-300" : "bg-[#242540] dark:text-slate-300"}`}>
        <section className={`flex min-h-full w-full max-w-7xl flex-col`}>
          {children}
        </section>
      </body>
    </html>
  );
};
