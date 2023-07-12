import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html className='w-full' lang="en" title='BiosWorld'>
      <body class="w-full font-inter" className={inter.className}>{children}</body>
    </html>
  )
}