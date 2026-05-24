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
  {
    href: "/articles/piano-to-midi",
    title: "ピアノ音源をMIDI化する方法",
    description: "ピアノ音源をMIDIに変換する方法とコツを解説",
  },
  {
    href: "/articles/ear-copy-efficiency",
    title: "耳コピを効率化する方法｜自動採譜とMIDIを使った時短のコツ",
    description:
      "自動採譜ツールやMIDIを活用して、耳コピや譜面作成を効率化する方法を初心者向けに解説します。",
  },
  {
    href: "/articles/musescore-midi-edit",
    title: "MuseScoreの使い方｜MIDI読み込みから楽譜編集まで初心者向け解説",
    description:
      "MuseScoreでMIDIを読み込み、音符やリズムを修正して楽譜として整える方法を初心者向けに解説します。",
  },
  {
    href: "/articles/free-auto-transcription-tools",
    title: "無料で使える自動採譜ソフト比較｜音声からMIDI・楽譜化する方法",
    description:
      "無料で使える自動採譜ソフトの選び方や、音声からMIDIへ変換してMuseScoreで修正する流れを初心者向けに解説します。",
  },
    {
    href: "/articles/what-is-musicxml",
    title: "MusicXMLとは？MIDIとの違いや楽譜制作での使い方を解説",
    description:
      "MusicXMLの基本、MIDIとの違い、MuseScoreでの使い方を初心者向けに解説します。",
  },
  {
    href: "/articles/what-is-daw",
    title: "DAWとは？初心者向けに音楽制作ソフトの基本を解説",
    description:
      "DAWの意味、できること、MIDIや自動採譜との関係を初心者向けに解説します。",
  },
  {
    href: "/articles/musescore-vs-finale",
    title: "MuseScoreとFinaleの違い｜初心者が選ぶならどちら？",
    description:
      "MuseScoreとFinaleの違い、初心者向けの選び方、自動採譜後の編集用途を解説します。",
  },
  {
    href: "/articles/ai-sheet-music",
    title: "AIで楽譜を作る方法｜自動採譜とMIDIを使った作成手順",
    description:
      "AIで楽譜を作る方法、自動採譜、MIDI、MuseScoreを組み合わせる流れを解説します。",
  },
  {
    href: "/articles/how-auto-transcription-works",
    title: "自動採譜の仕組みとは？音声からMIDIが作られる流れを解説",
    description:
      "自動採譜の仕組み、音声解析、ピッチ推定、MIDI生成の流れを初心者向けに解説します。",
  },
  {
    href: "/articles/wav-to-midi",
    title: "WAVをMIDIに変換する方法｜音声ファイルを自動採譜する手順",
    description:
      "WAVファイルをMIDIに変換する方法、自動採譜ツールの使い方、MuseScoreでの修正手順を解説します。",
  },
  {
    href: "/articles/midi-to-sheet-music",
    title: "MIDIを楽譜にする方法｜MuseScoreで読み込んで編集する手順",
    description:
      "MIDIを楽譜にする方法、MuseScoreでの読み込み、修正、PDF出力まで解説します。",
  },
  {
    href: "/articles/free-daw-for-beginners",
    title: "無料DAWおすすめ｜初心者がMIDI編集を始めるための選び方",
    description:
      "無料DAWの選び方、MIDI編集、自動採譜後の活用方法を初心者向けに解説します。",
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