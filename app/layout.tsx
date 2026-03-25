import type { Metadata } from 'next'
import { Noto_Sans_JP, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
})

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: 'AI×DB×Webシステム開発 5日間ブートキャンプ | AI実践起業塾',
  description: 'AIは加速装置。構造と権限の責任は、人間にある。「ツール屋」から「システムアーキテクト」へのパラダイムシフトを起こす5日間集中オンラインプログラム。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
