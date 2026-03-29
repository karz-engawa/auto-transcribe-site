import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事一覧 | 自動採譜アプリ",
  description:
    "自動採譜、MIDI、AI音楽制作に関する記事一覧です。MP3からMIDIへの変換方法やMIDIの基礎知識を初心者向けに解説しています。",
  alternates: {
    canonical: "/articles",
  },
};

const articles = [
  {
    href: "/articles/mp3-to-midi",
    title: "MP3をMIDIに変換する方法",
    description:
      "MP3などの音声ファイルからMIDIを生成する方法や注意点を初心者向けに解説します。",
  },
  {
    href: "/articles/what-is-midi",
    title: "MIDIとは？MP3との違い・できることを初心者向けに解説",
    description:
      "MIDIとは何か、MP3やWAVとの違い、できること・できないことを初心者向けにわかりやすく整理します。",
  },
  {
    href: "/articles/auto-transcription-tools",
    title: "自動採譜ツール比較｜MP3からMIDI変換できるおすすめ方法を解説",
    description:
      "自動採譜ツールの選び方、使い方、MP3からMIDI変換するときの注意点を初心者向けに解説します。",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <h1 className="text-4xl font-bold tracking-tight">記事一覧</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          自動採譜、MIDI、AI音楽制作に関する記事を順次公開しています。
        </p>

        <div className="mt-10 space-y-5">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="block rounded-2xl border border-gray-200 p-6 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h2 className="text-2xl font-semibold leading-tight text-gray-900">
                {article.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-gray-600">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}