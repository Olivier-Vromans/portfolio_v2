import { Noto_Sans, Kaisei_Tokumin } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header.js'
import Head from 'next/head.js'
import Footer from './components/layout/Footer.js'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-notoSans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const kaiseiTokumin = Kaisei_Tokumin({
  subsets: ['latin'],
  variable: '--font-kaiseiTokumin',
  weight: ['400', '500', '700', '800']
})

export const metadata = {
  title: 'Portfolio Olivier Vromans',
  description: 'Portfolio of Olivier',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head >
        
      </Head>
      <body className={`${kaiseiTokumin.variable} ${notoSans.variable} bg-background`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
