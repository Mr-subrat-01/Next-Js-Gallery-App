import './globals.css'
import Header from '@/Components/Header'


export const metadata = {
  title: 'Galary App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  )
}