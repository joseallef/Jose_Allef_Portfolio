<h1 align="center">
  <p>Portfolio site</p>
  <img src="https://user-images.githubusercontent.com/46696111/157259784-91775083-ad4e-4c8c-ac07-f4443d0f2e08.gif">  
</h1>

<h4 align="center"> 
    :construction:  Projeto em construção  :construction:
</h4>

## Descrição
- Site de portfólio, funciona como uma "vitrine" de alguns dos projetos que construí ao longo do tempo visando deixar mais visível para pessoas que tem pouca ou nenhuma familiaridade com Github, ou pior com código.

## Link
- https://jose-allef.vercel.app/

## Tecnologias

- [NextJS](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [GraphQL](https://graphcdn.io/)

## Plataformas
- [Vercel](https://vercel.com/)
- [DatoCMS](https://www.datocms.com/)

## Rodar local

**1. Clone o repositório**

```bash
  git clone https://github.com/joseallef/Jose_Allef_Portfolio
```

**2. Entre na pasta**

```bash
  cd Jose_Allef_Portfolio
```

**3. Instale as dependências**

```bash
  npm install
```

**4. Rodar local**

```bash
  npm run dev
```

**4. O servidor iniciará na porta 3000 - acesse http://localhost:3000**

```bash
  http://localhost:3000
```

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
