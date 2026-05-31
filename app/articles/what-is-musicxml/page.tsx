import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "MusicXMLとは？MIDIとの違いや楽譜制作での使い方を解説",
  description: "MusicXMLの基本、MIDIとの違い、MuseScoreでの使い方を初心者向けに解説します。",
  alternates: {
    canonical: "/articles/what-is-musicxml",
  },
  openGraph: {
    title: "MusicXMLとは？MIDIとの違いや楽譜制作での使い方を解説",
    description: "MusicXMLの基本、MIDIとの違い、MuseScoreでの使い方を初心者向けに解説します。",
    url: "/articles/what-is-musicxml",
    siteName: "自動採譜アプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MusicXMLとは？MIDIとの違いや楽譜制作での使い方を解説",
    description: "MusicXMLの基本、MIDIとの違い、MuseScoreでの使い方を初心者向けに解説します。",
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MusicXMLとは？MIDIとの違いや楽譜制作での使い方を解説",
    description: "MusicXMLの基本、MIDIとの違い、MuseScoreでの使い方を初心者向けに解説します。",
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
      "@id": "/articles/what-is-musicxml",
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
          <span>MusicXMLとは？MIDIとの違いや楽譜制作での使い方を解説</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            MusicXML・楽譜編集
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            MusicXMLとは？MIDIとの違いや楽譜制作での使い方を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-05-10 / 更新日: 2026-05-10</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">この記事では、MusicXMLの基本、MIDIとの違い、MuseScoreでの使い方を初心者向けに解説します。</p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・MusicXMLとは何か</li>
            <li>・MIDIとMusicXMLの違い</li>
            <li>・MusicXMLが向いている用途</li>
            <li>・自動採譜とMusicXMLを組み合わせる流れ</li>
            <li>・MuseScoreでMusicXMLを使う方法</li>
            <li>・MusicXMLを使うときの注意点</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>MusicXMLとは？</h2>
          <p>
            MusicXMLは、楽譜の情報をソフト間でやり取りするためのファイル形式です。
            音符、休符、小節、拍子、調号、歌詞、強弱記号、スラー、繰り返し記号など、
            楽譜として表示するための情報を扱いやすいのが特徴です。
            拡張子は <code>.musicxml</code> や <code>.xml</code>、圧縮版では <code>.mxl</code> が使われます。
          </p>
          <p>
            もともとは異なる楽譜制作ソフト同士でデータをやり取りすることを目的に作られました。
            MuseScore、Finale、Sibeliusなど主要な楽譜ソフトのほとんどがMusicXMLに対応しているため、
            「ソフトを乗り換えるときの中間ファイル」としても重宝されています。
          </p>

          <h2>MIDIとMusicXMLの違い</h2>
          <p>
            MIDIは「演奏情報」を中心に扱う形式です。
            「どの音を、いつ、どれくらいの長さで、どのくらいの強さで鳴らすか」を記録します。
            一方、MusicXMLは「楽譜としての見た目や構造」を扱うことに向いていて、
            音符の見た目（4分音符・8分音符など）、小節の区切り、調号・拍子、歌詞、リハーサルマーク、
            タイやスラーといった楽譜記号まで明確に保存できます。
          </p>
          <p>
            自動採譜では、まず音声からMIDIを作り、MuseScoreで整えてからMusicXMLやPDFに書き出す流れが実用的です。
            MIDIはあくまで「演奏のメモ」に近く、楽譜として読みやすい形にするにはMusicXMLでの整形が必要だからです。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">項目</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">MIDI</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">MusicXML</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">データの中身</td>
                  <td className="border border-gray-200 px-4 py-3">演奏情報</td>
                  <td className="border border-gray-200 px-4 py-3">楽譜情報</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">主な用途</td>
                  <td className="border border-gray-200 px-4 py-3">DAW、音源再生</td>
                  <td className="border border-gray-200 px-4 py-3">楽譜作成、印刷、ソフト間連携</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">楽譜記号の表現</td>
                  <td className="border border-gray-200 px-4 py-3">弱い</td>
                  <td className="border border-gray-200 px-4 py-3">強い</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">音色設定</td>
                  <td className="border border-gray-200 px-4 py-3">あり</td>
                  <td className="border border-gray-200 px-4 py-3">基本的にソフト側で設定</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>MusicXMLが向いている用途</h2>
          <p>
            楽譜ソフト間でデータを受け渡したい場合、MusicXMLが便利です。
            PDFより後から修正しやすく、他の楽譜ソフトでも再編集しやすい形式です。
            たとえば、MuseScoreで作った楽譜をFinaleで仕上げる、
            あるいは別の編曲者と楽譜データを共有するといった場面で役立ちます。
          </p>
          <ul>
            <li>他の楽譜ソフトに楽譜を持ち込みたい</li>
            <li>編曲・写譜を共同作業したい</li>
            <li>後から再編集できる形で楽譜を保管したい</li>
            <li>自動採譜したMIDIを楽譜らしく整えて配布したい</li>
            <li>歌詞付きの譜面を扱いたい</li>
          </ul>

          <h2>自動採譜とMusicXMLを組み合わせる流れ</h2>
          <p>
            自動採譜ツールから直接MusicXMLが出力されることは少なく、まずMIDIが生成されるのが一般的です。
            そこからMusicXMLを得るには、次のような流れを取ります。
          </p>
          <ol>
            <li>音声ファイルを自動採譜ツールに読み込ませる</li>
            <li>MIDIを生成してダウンロードする</li>
            <li>MuseScoreなどでMIDIを開く</li>
            <li>音符・リズム・拍子を整える</li>
            <li>MusicXML形式で書き出す</li>
          </ol>
          <p>
            こうすることで、自動採譜の結果を「演奏データ」から「楽譜データ」へと変換でき、
            他のソフトや人とも共有しやすくなります。
          </p>

          <h2>MuseScoreでMusicXMLを使う方法</h2>
          <p>
            MuseScoreでは、「ファイル」メニューから「開く」を選ぶだけで、
            MusicXMLファイルをそのまま楽譜として読み込めます。
            書き出すときも「エクスポート」からMusicXMLを選ぶだけで保存できます。
          </p>
          <p>
            無料で使えるソフトの中でも、MuseScoreはMusicXMLの読み書きに強く、
            他の楽譜ソフトとデータをやり取りする際の中継役として非常に便利です。
          </p>

          <h2>MusicXMLを使うときの注意点</h2>
          <ul>
            <li>ソフトによって対応している楽譜記号の範囲が異なる</li>
            <li>細かなレイアウトはソフト側で再調整が必要になることがある</li>
            <li>圧縮版（.mxl）は対応していないソフトもあるため、最初は通常版で保存すると安心</li>
            <li>歌詞や繰り返し記号などは読み込み後に確認した方がよい</li>
          </ul>

          <h2>まとめ</h2>
          <p>
            MusicXMLは、楽譜データを扱うために便利な形式です。
            MIDIは演奏情報、MusicXMLは楽譜情報に強いと考えると整理しやすいでしょう。
          </p>
          <p>
            自動採譜で作ったMIDIをMuseScoreで整え、MusicXMLとして書き出しておけば、
            将来別の楽譜ソフトを使うときにもデータを引き継ぎやすくなります。
            MIDIとMusicXMLは対立する形式ではなく、用途に応じて使い分けるのが現実的です。
          </p>
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

        <RelatedArticles currentHref="/articles/what-is-musicxml" />
      </article>
    </main>
  );
}
