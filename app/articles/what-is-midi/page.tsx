import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MIDIとは？MP3との違い・できることを初心者向けにわかりやすく解説",
  description:
    "MIDIとは何かを初心者向けに解説。MP3やWAVとの違い、MIDIでできること、自動採譜との関係、ピアノロールとのつながりまでわかりやすく紹介します。",
  alternates: {
    canonical: "/articles/what-is-midi",
  },
  openGraph: {
    title: "MIDIとは？MP3との違い・できることを初心者向けにわかりやすく解説",
    description:
      "MIDIとは何かを初心者向けに解説。MP3やWAVとの違い、MIDIでできること、自動採譜との関係まで紹介します。",
    url: "/articles/what-is-midi",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIDIとは？MP3との違い・できることを初心者向けにわかりやすく解説",
    description:
      "MIDIとは何かを初心者向けに解説。MP3やWAVとの違い、MIDIでできること、自動採譜との関係まで紹介します。",
  },
};

export default function WhatIsMidiArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MIDIとは？MP3との違い・できることを初心者向けにわかりやすく解説",
    description:
      "MIDIとは何かを初心者向けに解説。MP3やWAVとの違い、MIDIでできること、自動採譜との関係、ピアノロールとのつながりまで紹介。",
    author: {
      "@type": "Organization",
      name: "自動採譜Webアプリ",
    },
    publisher: {
      "@type": "Organization",
      name: "自動採譜Webアプリ",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "/articles/what-is-midi",
    },
    datePublished: "2026-03-22",
    dateModified: "2026-03-22",
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-12 md:px-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles/mp3-to-midi" className="hover:text-gray-800">
            記事
          </Link>
          <span className="mx-2">/</span>
          <span>MIDIとは？</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            初心者向け解説
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            MIDIとは？
            <br className="hidden md:block" />
            MP3との違い・できることを初心者向けにわかりやすく解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            公開日: 2026-03-22 / 更新日: 2026-03-22
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「MIDIってよく聞くけど、結局なに？」
            「MP3やWAVとは何が違うの？」
            そんな疑問を持つ方向けに、MIDIの基本をできるだけわかりやすく整理しました。
            自動採譜ツールとの関係も含めて、初心者向けに解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・MIDIとは何か</li>
            <li>・MP3 / WAVとの違い</li>
            <li>・MIDIでできること / できないこと</li>
            <li>・自動採譜ツールとMIDIの関係</li>
            <li>・初心者がまず知っておくべきポイント</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>MIDIとは何か</h2>
          <p>
            MIDIは、簡単にいうと
            <strong>「音そのもの」ではなく、「演奏情報」を記録する仕組み</strong>
            です。
          </p>
          <p>
            たとえば、以下のような情報を扱えます。
          </p>
          <ul>
            <li>どの音を鳴らすか</li>
            <li>いつ鳴らすか</li>
            <li>どれくらいの長さで鳴らすか</li>
            <li>どれくらい強く弾くか</li>
            <li>どの楽器の音色として再生するか</li>
          </ul>
          <p>
            つまりMIDIは、
            <strong>「楽譜に近いデータ」</strong>
            と考えるとイメージしやすいです。
          </p>

          <h2>MIDIは音声ファイルではない</h2>
          <p>
            ここが初心者の方が最初につまずきやすいポイントです。
          </p>
          <p>
            MP3やWAVは、実際に鳴っている音を録音した
            <strong>音声データ</strong>
            です。一方でMIDIは、
            <strong>演奏指示のデータ</strong>
            です。
          </p>
          <p>
            そのため、同じMIDIデータでも、再生する音源によって聞こえ方が変わります。
            ピアノ音源で再生すればピアノっぽくなり、ストリングス音源で再生すれば弦楽器っぽくなります。
          </p>

          <h2>MP3・WAVとMIDIの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">項目</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">MIDI</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">MP3 / WAV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">データの中身</td>
                  <td className="border border-gray-200 px-4 py-3">演奏情報</td>
                  <td className="border border-gray-200 px-4 py-3">録音された音そのもの</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">ファイルサイズ</td>
                  <td className="border border-gray-200 px-4 py-3">小さい</td>
                  <td className="border border-gray-200 px-4 py-3">比較的大きい</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">後から編集</td>
                  <td className="border border-gray-200 px-4 py-3">しやすい</td>
                  <td className="border border-gray-200 px-4 py-3">波形編集が必要</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">音色の変更</td>
                  <td className="border border-gray-200 px-4 py-3">しやすい</td>
                  <td className="border border-gray-200 px-4 py-3">基本的に難しい</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">録音の臨場感</td>
                  <td className="border border-gray-200 px-4 py-3">音源依存</td>
                  <td className="border border-gray-200 px-4 py-3">高い</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>MIDIでできること</h2>
          <p>
            MIDIを使うと、音楽制作や練習の幅がかなり広がります。
          </p>
          <ul>
            <li>メロディや伴奏を後から修正する</li>
            <li>音程ミスやリズムのズレを調整する</li>
            <li>テンポを変える</li>
            <li>音色を変える</li>
            <li>楽譜ソフトやDAWに読み込む</li>
            <li>自動採譜の結果を編集しやすい形で保存する</li>
          </ul>
          <p>
            たとえば、録音したピアノ演奏をMIDI化できれば、
            DAW上でノート単位の編集がしやすくなります。
          </p>

          <h2>MIDIでできないこと</h2>
          <p>
            一方で、MIDIにも限界があります。
          </p>
          <ul>
            <li>人の歌声そのものをそのまま保存すること</li>
            <li>録音された質感や空気感を完全に保持すること</li>
            <li>複雑な音のニュアンスを完全再現すること</li>
          </ul>
          <p>
            つまり、MIDIは便利ですが、
            <strong>録音音源の完全な置き換えではありません。</strong>
          </p>

          <h2>自動採譜とMIDIの関係</h2>
          <p>
            自動採譜ツールでは、MP3やWAVなどの音声ファイルを解析して、
            音の高さやタイミングを推定し、MIDIとして出力することがよくあります。
          </p>
          <p>
            この流れによって、
            「耳コピに時間がかかる」
            「ざっくりメロディだけでも取りたい」
            といった作業を効率化できます。
          </p>
          <p>
            ただし、元音源が複雑な場合や、複数の楽器が重なっている場合は、
            完全に正確なMIDIにならないこともあります。
            そのため、<strong>自動採譜後に微修正する前提</strong>で使うのが現実的です。
          </p>

          <h2>ピアノロールとの関係</h2>
          <p>
            DAWでよく見る「横に伸びたバーの画面」は、ピアノロールと呼ばれます。
            MIDIデータはこのピアノロール上で視覚的に編集できます。
          </p>
          <p>
            どの音が、いつ、どれくらいの長さで鳴っているかが一目でわかるため、
            初心者でも比較的扱いやすいのが特徴です。
          </p>

          <h2>こんな人にMIDIは特に向いている</h2>
          <ul>
            <li>耳コピを効率化したい人</li>
            <li>作曲・編曲をしたい人</li>
            <li>DAWで打ち込みをしたい人</li>
            <li>録音データを後から細かく修正したい人</li>
            <li>自動採譜ツールを活用したい人</li>
          </ul>

          <h2>初心者向けの結論</h2>
          <p>
            MIDIとは、音そのものではなく、
            <strong>「演奏の設計図」</strong>
            のようなデータです。
          </p>
          <p>
            MP3やWAVが録音済みの音声であるのに対し、MIDIは
            「どの音を、いつ、どのように鳴らすか」を扱います。
            そのため、編集しやすく、自動採譜とも相性が良い形式です。
          </p>
          <p>
            これから自動採譜やDAWに触れるなら、
            まずは
            <strong>「MIDIは音ではなく演奏情報」</strong>
            という点を押さえておくと理解しやすくなります。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            MP3からMIDIに変換したい方へ
          </h2>
          <p className="mt-3 leading-7 text-blue-950">
            自動採譜ツールを使えば、音声ファイルからMIDI化して編集しやすい形にできます。
            耳コピの補助や、メロディ確認、DAWへの取り込みに便利です。
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tool"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ツールを使ってみる
            </Link>

            <Link
              href="/articles/mp3-to-midi"
              className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              MP3→MIDI変換の記事を見る
            </Link>
          </div>
        </section>

        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold">関連記事</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/mp3-to-midi"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                MP3をMIDIに変換する方法をわかりやすく解説
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                音声ファイルからMIDIへ変換する基本的な流れと考え方を紹介します。
              </p>
            </Link>

            <Link
              href="/tool"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                自動採譜ツールを試す
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                音声からMIDI化したい方はこちら。実際のツール導線です。
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}