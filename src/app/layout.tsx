import { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google';
import { ReactNode } from "react";
import './globals.css';
import { Providers } from "./providers";
import { cookies } from "next/headers";

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
  description: 'Portfólio de José Allef. Desenvolvedor Front-end especializado em React e Next.js. Experiência em sustentação de sistemas governamentais críticos (Portal do Servidor SP), migração de arquitetura e conformidade LGPD.',
  keywords: ['José Allef', 'Desenvolvedor Front-end', 'React', 'Next.js', 'Portal do Servidor', 'LGPD', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Sustentação de Sistemas'],
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
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value || 'dark';

  return (
    <html lang="pt-BR" data-theme={theme} className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <Providers theme={theme}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
