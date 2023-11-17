import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Olivier Vromans',
  description: 'Portfolio of Olivier',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kaisei+Tokumin&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" />
      </head>
      <body className={`${inter.className} bg-background`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
