import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Azeem | Portfolio',
  description: 'Personal Portfolio created using Next.js & React',
  favicon: '/assets/mynewicon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href={metadata.favicon} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
