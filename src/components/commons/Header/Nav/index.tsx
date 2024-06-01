import React, { ReactNode } from 'react';

interface NavProps {
  children: ReactNode;
}

const Nav: React.FC<NavProps> = ({ children }) => {
  return (
    <nav className="flex justify-between items-center w-full order-3 lg:order-none lg:justify-center lg:w-5/12">
      {children}
    </nav>
  );
};

export default Nav;
