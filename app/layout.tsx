import './globals.css'

import Sidebar from './component/sidebar'
import { personalData } from '../data/page-data'

export const metadata = {
  title: 'Tom Gallagher',
  description: 'Full Stack Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>

      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
