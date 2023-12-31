import './globals.css'
import { Exo_2 } from 'next/font/google'

const exo = Exo_2({
  weight: '500',
  subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  )
}
