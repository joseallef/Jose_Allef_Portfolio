'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type ILink = {
  text: string;
  url: string;
}
const links: ILink[] = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Projetos',
    url: '/projects',
  },
  {
    text: 'Repositórios',
    url: '/repository',
  },
  {
    text: 'Contato',
    url: '/contact',
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <ul className="list-none flex justify-center gap-6 items-center w-full px-0 overflow-x-auto sm:overflow-visible no-scrollbar">
      {links.map((link) => {
        const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);
        
        return (
          <li key={link.text} className=''>
            <NextLink 
              href={link.url} 
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive 
                  ? 'text-primary font-bold' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {link.text}
            </NextLink>
          </li>
        );
      })}
    </ul>
  );
}
