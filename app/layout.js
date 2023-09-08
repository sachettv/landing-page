import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Sachet tv',
  description: 'Capture and share real-time events with 1 minute short live videos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
