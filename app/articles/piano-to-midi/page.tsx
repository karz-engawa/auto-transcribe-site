import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ピアノ音源をMIDI化する方法｜初心者でもできる自動採譜のコツ",
  description:
    "ピアノ音源をMIDIに変換する方法を初心者向けに解説。自動採譜ツールの使い方や精度を上げるコツも紹介します。",
  alternates: {
    canonical: "/articles/piano-to-midi",
  },
  openGraph: {
    title: "ピアノ音源をMIDI化する方法",
    description:
      "ピアノ音源からMIDIを生成する方法とコツを初心者向けに解説。",
    url: "/articles/piano-to-midi",
    siteName: "自動採譜アプリ",
    type: "article",
  },
};

export default function PianoToMidiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ピアノ音源をMIDI化する方法",
    datePublished: "2026-03-29",
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/">ホーム</Link> / <Link href="/articles">記事</Link> /
          ピアノ→MIDI
        </nav>

        <h1 className="text-3xl font-bold md:text-5xl">
          ピアノ音源をMIDI化する方法
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          ピアノの演奏音源をMIDIに変換したいと考えたことはありませんか？
          自動採譜ツールを使えば、完全ではないものの、
          楽譜作成の「たたき台」を簡単に作ることができます。
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">ピアノ音源はMIDI化しやすい？</h2>
          <p className="mt-4">
            結論から言うと、ピアノ音源は比較的MIDI化しやすいです。
          </p>

          <ul className="mt-4 list-disc pl-6">
            <li>音程がはっきりしている</li>
            <li>アタックが明確</li>
            <li>単一楽器</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">自動採譜の基本手順</h2>

          <ol className="mt-4 list-decimal pl-6">
            <li>音源（mp3/wav）を用意</li>
            <li>自動採譜ツールにアップロード</li>
            <li>MIDIを生成</li>
            <li>楽譜ソフトで修正</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">精度を上げるコツ</h2>

          <ul className="mt-4 list-disc pl-6">
            <li>ノイズの少ない音源を使う</li>
            <li>短い区間で処理する</li>
            <li>BPMを合わせる</li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            実際に試してみる
          </h2>
          <p className="mt-3">
            下のツールからピアノ音源をアップロードして、
            MIDI変換を体験できます。
          </p>

          <Link
            href="/tool"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            ツールを使う
          </Link>
        </section>

        <section className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold">関連記事</h2>

          <div className="mt-4 space-y-3">
            <Link href="/articles/mp3-to-midi">
              MP3をMIDIに変換する方法
            </Link>
            <br />
            <Link href="/articles/auto-transcription-tools">
              自動採譜ツール比較
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}