import React, { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
  display?: string;
  flex?: string;
  marginLeft?: string;
  marginRight?: string;
  justifyContent?: string;
  alignItems?: string;
  marginTop?: string;
  marginBottom?: string;
  flexDirection?: string;
}


const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <section className={`w-full px-4 mx-auto h-full flex items-center`}>
      {children}
    </section>
  );
};

export default Container;
