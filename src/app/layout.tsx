import { Metadata } from "next";
import { ReactNode } from "react";
import { Inter, Roboto_Mono } from 'next/font/google';
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
  title: 'José Allef - Desenvolvedor Web',
  description:
    'Portfólio de José Allef - Desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.',
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
