import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MIDIを楽譜にする方法｜MuseScoreで読み込んで編集する手順",
  description: "MIDIを楽譜にする方法、MuseScoreでの読み込み、修正、PDF出力まで解説します。",
  alternates: {
    canonical: "/articles/midi-to-sheet-music",
  },
  openGraph: {
    title: "MIDIを楽譜にする方法｜MuseScoreで読み込んで編集する手順",
    description: "MIDIを楽譜にする方法、MuseScoreでの読み込み、修正、PDF出力まで解説します。",
    url: "/articles/midi-to-sheet-music",
    siteName: "自動採譜アプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIDIを楽譜にする方法｜MuseScoreで読み込んで編集する手順",
    description: "MIDIを楽譜にする方法、MuseScoreでの読み込み、修正、PDF出力まで解説します。",
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MIDIを楽譜にする方法｜MuseScoreで読み込んで編集する手順",
    description: "MIDIを楽譜にする方法、MuseScoreでの読み込み、修正、PDF出力まで解説します。",
    author: {
      "@type": "Organization",
      name: "自動採譜アプリ",
    },
    publisher: {
      "@type": "Organization",
      name: "自動採譜アプリ",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "/articles/midi-to-sheet-music",
    },
    datePublished: "2026-05-10",
    dateModified: "2026-05-10",
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-12 md:px-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">ホーム</Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="hover:text-gray-800">記事</Link>
          <span className="mx-2">/</span>
          <span>MIDIを楽譜にする方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            MIDI・楽譜化
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            MIDIを楽譜にする方法
MuseScoreで読み込んで編集する手順
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-05-10 / 更新日: 2026-05-10</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">この記事では、MIDIを楽譜にする方法、MuseScoreでの読み込み、修正、PDF出力まで解説します。</p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・MIDIを楽譜にできる？</li>
            <li>・MuseScoreでMIDIを開く手順</li>
            <li>・修正すべきポイント</li>
            <li>・まとめ</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>MIDIを楽譜にできる？</h2>
          <p>MIDIは演奏情報を記録したファイルなので、MuseScoreなどのソフトで読み込むと楽譜として表示できます。</p>

          <h2>MuseScoreでMIDIを開く手順</h2>
          <p>MuseScoreを起動し、ファイルからMIDIを開きます。読み込み後、音符として表示されるので、音程やリズムを確認します。</p>

          <h2>修正すべきポイント</h2>
          <p>まず不要な音を削除し、メロディや伴奏として必要な音を残します。次に、音符の長さや小節の区切りを整えると読みやすくなります。</p>

          <h2>まとめ</h2>
          <p>MIDIを楽譜にするには、MuseScoreで読み込んで音符として表示し、不要音やリズムを修正する流れが基本です。</p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">音声からMIDIを作ってみる</h2>
          <p className="mt-3 leading-7 text-blue-950">
            音声ファイルをMIDI化したい場合は、自動採譜ツールでたたき台を作り、MuseScoreやDAWで修正する流れがおすすめです。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/musescore-midi-edit" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              MuseScoreで編集する方法を見る
            </Link>
          </div>
        </section>

        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold">関連記事</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/articles/musescore-midi-edit" className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm">
              <h3 className="text-lg font-semibold">MuseScoreの使い方</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">MIDI読み込みから楽譜編集まで解説します。</p>
            </Link>
            <Link href="/articles/what-is-midi" className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm">
              <h3 className="text-lg font-semibold">MIDIとは？</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">MIDIの基本や音声ファイルとの違いを整理します。</p>
            </Link>
            <Link href="/articles/free-auto-transcription-tools" className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm">
              <h3 className="text-lg font-semibold">無料自動採譜ソフト比較</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">無料で使える自動採譜ソフトの選び方を解説します。</p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
