import React, { ReactNode } from 'react';

interface WrapperMainProps {
  children?: ReactNode;
}

export const WrapperMain: React.FC<WrapperMainProps> = ({ children }) => {
  return (
    <main className="flex justify-center items-center flex-wrap w-full h-full mx-auto text-white p-4 lg:p-6">
      {children}
    </main>
  );
};
