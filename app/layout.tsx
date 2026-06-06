import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "自動採譜アプリ",
  description: "音声ファイルからMIDIを生成する自動採譜ツール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="_vV7P0VCH4Tkn1lATts_iE3-Lt6Geseb_Cx-3HGqvBI" />

        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1252744718520337"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J8GVD9BMXB"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J8GVD9BMXB');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}>
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold text-gray-900 hover:opacity-75">
              自動採譜アプリ
            </Link>
            <div className="flex gap-5 text-sm text-gray-600">
              <Link href="/tool" className="hover:text-gray-900">ツール</Link>
              <Link href="/articles" className="hover:text-gray-900">記事</Link>
              <Link href="/about" className="hover:text-gray-900">このサイトについて</Link>
              <Link href="/contact" className="hover:text-gray-900">お問い合わせ</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-gray-100 bg-white py-10 text-sm text-gray-500">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="mb-4 flex flex-wrap justify-center gap-6">
              <Link href="/about" className="hover:underline">このサイトについて</Link>
              <Link href="/terms" className="hover:underline">利用規約</Link>
              <Link href="/privacy" className="hover:underline">プライバシーポリシー</Link>
              <Link href="/contact" className="hover:underline">お問い合わせ</Link>
            </div>
            <p>© 2026 自動採譜アプリ</p>
          </div>
        </footer>
      </body>
    </html>
  );
}