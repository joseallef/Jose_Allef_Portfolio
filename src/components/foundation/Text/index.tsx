import React from 'react';

interface TextProps {
  tag?: keyof React.JSX.IntrinsicElements;
  variant?: 'paragraph1' | 'smallestException' | 'title';
  children?: React.ReactNode;
  href?: string;
  cmsKey?: string;
}

export const Text: React.FC<TextProps> = ({
  tag = 'span',
  variant = 'paragraph1',
  children,
  href = '',
}) => {
  const color = 'dark';

  const textStyle: Record<string, string> = {
    paragraph1: 'text-base font-normal leading-normal',
    smallestException: 'text-sm font-normal leading-normal',
    title: 'text-xl font-semibold leading-normal md:text-lg lg:text-xl',
  };

  const textColor = `text-${color}`;

  const classes = `${textStyle[variant]} ${textColor}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  const Tag = tag;

  return <Tag className={classes}>{children}</Tag>;
};
