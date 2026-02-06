import React, { ReactNode } from 'react';

interface WrapperMainProps {
  children?: ReactNode;
}

export const WrapperMain: React.FC<WrapperMainProps> = ({ children }) => {
  return (
    <main className="flex w-full flex-col items-center justify-center py-12 md:py-10 lg:py-16 xl:py-24 2xl:py-32">
      {children}
    </main>
  );
};
