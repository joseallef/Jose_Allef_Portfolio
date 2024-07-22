import { Metadata } from "next";
import { ReactNode } from "react";
import './globals.css';
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: 'Home - Jose Allef Desenvolvedor Web',
  description:
    'Jose Allef - Desenvolvedor Web - Desenvolvedor Frontend - Apaixonado por Tecnologia',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Providers>
      {children}
    </Providers>
  )
}
