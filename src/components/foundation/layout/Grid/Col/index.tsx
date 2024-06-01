import React, { ReactNode } from 'react';

interface ColProps {
  children?: ReactNode;
  value?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  offset?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
}

const Col: React.FC<ColProps> = ({ children, value, offset, ...props }) => {
  // Calcular o flex-basis e margin-left com base no valor e no offset
  let flexBasis = '0';
  let marginLeft = '0';

  if (typeof value === 'number') {
    flexBasis = `${(100 * value) / 12}%`;
  } else {
    flexBasis = value?.xs ? `${(100 * value.xs) / 12}%` : '0';
  }

  if (typeof offset === 'number') {
    marginLeft = `${(100 * offset) / 12}%`;
  } else {
    marginLeft = offset?.xs ? `${(100 * offset.xs) / 12}%` : '0';
  }

  return (
    <div
      className={`px-4 ${value ? 'flex-grow flex-shrink' : 'flex-auto'} max-w-full`}
      style={{ flexBasis, marginLeft }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Col;
