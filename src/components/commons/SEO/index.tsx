import Head from 'next/head';

interface ISEO {
  headTitle: string;
}

export default function SEO({ headTitle }: ISEO) {
  const hasHeaderTitle = Boolean(headTitle);
  const baseTitle = 'Portifólio - Jose Allef Desenvolvedor Web';
  const title = hasHeaderTitle ? (`${headTitle} | ${baseTitle}`) : baseTitle;

  const description = 'Jose Allef - Desenvolvedor Web - Desenvolvedor Frontend - Apaixonado por Tecnologia';
  const image = 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-1/p200x200/35921690_801372880059012_8791812245483945984_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEpGx5p-yOauMBxdoRDI-lkWcTu01Y7-fRZxO7TVjv59J-TkpNi6nijA52rbHQR8LRQvQwB4dx67O_5WNFykyoi&_nc_ohc=k801fCu8cnwAX_FYQL2&_nc_ht=scontent-gru2-1.xx&oh=00_AT_NLn5Qws_TaL5ckTbUHofQ84_Rsc76SvyCCYjNuglz-g&oe=623B1273';
  const urlBase = 'https://jose-allef.vercel.app/';
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/icon/icon.ico" />
      <meta name="title" content={title} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jose Allef - Jabs" />
      <meta name="description" content={description} />
      <meta name="google-site-verification" content="o-4RJTK3w1ZFzWZYYw3tx0YEYVJJMGn2-r7cW14pYwY" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Open Graph / Linkedin */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://br.linkedin.com/in/jose-allef" />
      <meta
        name="image"
        property="og:image"
        content="https://media-exp1.licdn.com/dms/image/D4D03AQFofYGKPF1Z_Q/profile-displayphoto-shrink_200_200/0/1642111215380?e=1651104000&v=beta&t=D36WWCJZNNot4zH13RLIpWHA5-rwVfFO_6BNGVByZC4"
      />
      <meta name="description" property="og:description" content="Desenvolvedor apaixonado por tecnologia, José Allef, portifólio" />
      <meta property="og:url" content="linkedin.com/in/josé-allef-17b508170" />
    </Head>
  );
}

