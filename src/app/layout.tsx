import { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google';
import { ReactNode } from "react";
import './globals.css';
import { Providers } from "./providers";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jose-allef.vercel.app'),
  title: {
    default: 'José Allef - Desenvolvedor Full Stack',
    template: '%s | José Allef'
  },
  description: 'Portfólio de José Allef. Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js. Foco em performance, acessibilidade e interfaces modernas.',
  keywords: ['José Allef', 'Desenvolvedor Web', 'Full Stack', 'Frontend', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Portfólio'],
  authors: [{ name: 'José Allef', url: 'https://jose-allef.vercel.app' }],
  creator: 'José Allef',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jose-allef.vercel.app',
    title: 'José Allef - Desenvolvedor Full Stack',
    description: 'Transformando ideias em experiências digitais de alta performance.',
    siteName: 'José Allef Portfólio',
    images: [
      {
        url: '/image/foto-perfil.jpeg',
        width: 1200,
        height: 630,
        alt: 'José Allef - Desenvolvedor Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Allef - Desenvolvedor Full Stack',
    description: 'Portfólio de José Allef. Especialista em React e Ecossistema JavaScript.',
    images: ['/image/foto-perfil.jpeg'],
    creator: '@joseallef', // Ajuste se tiver o handle correto, senão pode remover ou deixar genérico
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'o-4RJTK3w1ZFzWZYYw3tx0YEYVJJMGn2-r7cW14pYwY', // Mantendo o ID original
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
