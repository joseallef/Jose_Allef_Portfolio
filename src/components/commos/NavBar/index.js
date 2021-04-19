import React from 'react';
import Link from '../Link';

const links = [
  {
    text: '<ME/>',
    url: '/',
  },
  {
    text: 'Sobre mim',
    url: '/sobre',
  },
  {
    text: 'Contato',
    url: '/contato',
  },
];

export default function NavBar() {
  return (
    <>
      {links.map((link) => (
        <li key={link.text}>
          <Link
            href={link.url}
            // eslint-disable-next-line react/no-children-prop
            children={link.text}
          />
        </li>
      ))}
    </>
  );
}
