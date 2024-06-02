import React, { ReactNode } from 'react';

interface TextLinkProps {
  href: string;
  children: ReactNode;
}

const TextLink: React.FC<TextLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  );
};

export default TextLink;
