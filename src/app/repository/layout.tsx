import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Reposítorios - Jose Allef Desenvolvedor Web',
  description:
    'Jose Allef - Desenvolvedor Web - Desenvolvedor Frontend - Apaixonado por Tecnologia',
}

export default function RepositoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}