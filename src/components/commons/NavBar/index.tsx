import NextLink from 'next/link';

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
  return (
    <ul className="list-none flex justify-between items-center w-full order-3 px-0 lg:justify-around overflow-x-scroll sm:overflow-hidden">
      {links.map((link) => (
        <li key={link.text} className='p-2'>
          <NextLink href={link.url} passHref className='transition-all duration-500 border-b break-before-all border-blue-950 hover:border-blue-300'>
            {link.text}
          </NextLink>
        </li>
      ))}
    </ul>
  );
}
