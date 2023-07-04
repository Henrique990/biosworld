import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html className='w-full' lang="en">
      <body class="w-full" className={inter.className}>{children}</body>
    </html>
  )
}