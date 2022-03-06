<h1 align="center">
  <p>Portfolio site</p>
  <img src="https://github.com/joseallef/Jose_Allef_JAMStackAlura/blob/master/src/assets/gifPortfolio.gif">  
</h1>

<h4 align="center"> 
    :construction:  Projeto em construção  :construction:
</h4>

## Tecnologias
- https://jose-allef.vercel.app/


## Link

- [NextJS](https://nextjs.org/)
- [Styled-components](https://styled-components.com/)
- [Lottie](https://www.npmjs.com/package/lottie-web)
- [EmailJS](https://www.emailjs.com/)
- [GraphQL](https://graphcdn.io/)
- [Lodash](https://www.npmjs.com/package/lodash)



## Plataformas
- [Vercel](https://vercel.com/)
- [DatoCMS](https://www.datocms.com/)















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
