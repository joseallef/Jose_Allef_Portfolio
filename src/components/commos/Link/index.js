import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

const TextLink = styled.a`
    text-decoration: none;
    color: #FFF;

`;

// eslint-disable-next-line react/prop-types
export default function Link({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <TextLink>
        {children}
      </TextLink>
    </NextLink>
  );
}
