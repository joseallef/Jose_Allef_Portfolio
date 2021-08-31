import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function SEO({ headTitle }) {
  const hasHeaderTitle = Boolean(headTitle);
  const baseTitle = 'Portifólio - projeto Base do Alura Bootcamp JAMStack';
  const title = hasHeaderTitle ? (`${headTitle} | ${baseTitle}`) : baseTitle;

  const description = 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!';
  const image = 'https://metatags.io/ https://www.alura.com.br/assets/img/alura-share.1571848411.png';
  const urlBase = 'https://jose-allef.vercel.app/';
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/icon/icon.ico" />
      <meta name="title" content={title} />
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
      <meta property="og:image" content="https://media-exp1.licdn.com/dms/image/C4D03AQHPnxjUugbyHw/profile-displayphoto-shrink_400_400/0/1546436090546?e=1623283200&v=beta&t=hJJAWnx4hp05DsRgWwc9skp5xo-wZhNCrZMaYzyWn2k" />
      <meta property="og:description" content="Estudante e desenvolvedor apaixonado por tecnologia, José Allef, portifólio" />
      <meta property="og:url" content="linkedin.com/in/josé-allef-17b508170" />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.protTypes = {
  headTitle: PropTypes.string,
};
