import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: 'Contato - Jose Allef Desenvolvedor Web',
  description:
    'Jose Allef - Desenvolvedor Web - Desenvolvedor Frontend - Apaixonado por Tecnologia',
}

export default function ContactLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
