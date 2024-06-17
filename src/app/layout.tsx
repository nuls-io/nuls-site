import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Roboto_Flex } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const rMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-title'
})

const rFlex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-text'
})

export const metadata: Metadata = {
  title: 'NULS - Making It Easier To Innovate',
  description:
    'Reach new heights with NULS With innovation and blockchain expertise, the NULS platform empowers you to employ advanced technologies and develop that market-leading product.',
  icons: [{ rel: 'icon', url: '/icon.svg' }]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rMono.variable} ${rFlex.variable}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Subscribe />
        <Footer />
      </body>
    </html>
  )
}
