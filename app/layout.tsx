import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-title'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata = {
  title: "Café Casa Quintano | Restaurante en Casaseca de Campeán",
  description:
    "Carnes selectas, pescados frescos y cocina tradicional en Zamora."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
