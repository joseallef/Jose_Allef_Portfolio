import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h1 className="w-full text-center flex justify-center items-center mt-10 text-2xl md:text-4xl font-bold italic">
      {children}
    </h1>
  );
};

export default SectionTitle;
