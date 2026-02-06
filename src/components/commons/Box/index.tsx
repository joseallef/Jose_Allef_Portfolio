'use client'

import React, { ReactNode } from 'react';

interface WrapperMainProps {
  children?: ReactNode;
}

export const Box: React.FC<WrapperMainProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full justify-center m-0 p-0 transition-all duration-500 bg-background text-foreground">
      <section className="flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {children}
      </section>
    </div>
  );
};
