import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import PropTypes from 'prop-types';

const TextLink = styled.span`
    list-style: none;
    text-decoration: none;
    color: #FFF;

    padding: 0;
    margin-right: 10vw;
    order: 3;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: right;
`;

function Text({
  // eslint-disable-next-line react/prop-types
  tag, variante, children, ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextLink as={tag} variante={variante} {...props}>
      {children}
    </TextLink>
  );
}

const links = [
  {
    text: '< Allef />',
    url: '/',
  },
  {
    text: 'Sobre mim',
    url: 'sobre',
  },
  {
    text: 'Contato',
    url: 'contato',
  },
];

export default function NavBar() {
  // console.log(props);
  return (
    <>
      {links.map((link) => (
        <li key={link.url}>
          <Text variante="ok" tag="a" href={link.url}>
            {' '}
            {link.text}
          </Text>
        </li>
      ))}
    </>
  );
}

// eslint-disable-next-line react/no-typos
Text.PropTypes = {
  tag: PropTypes.string.isRequired,
  variante: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
