import './globals.css'
import Head from 'next/head'

import Sidebar from './component/sidebar'
import { personalData } from '../data/page-data'
import next from 'next/types'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <Head>
          <title>My App Title</title>
          <meta name="description" content="My App Description" />
          <meta property="og:title" content="My App Title" />
          <meta property="og:description" content="My App Description" />
          <meta
            property="og:image"
            content="https://example.com/my-image.jpg"
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="My App Title" />
          <meta name="twitter:description" content="My App Description" />
          <meta
            name="twitter:image"
            content="https://example.com/my-image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      </head>

      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
