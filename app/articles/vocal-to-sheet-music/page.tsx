import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "ボーカルメロディを楽譜にする方法｜歌声を採譜する手順を解説",
  description:
    "ボーカルや歌声のメロディを楽譜にする方法を初心者向けに解説。自動採譜ツールを使ったMIDI化の手順、MuseScoreでの修正・PDF出力まで紹介します。",
  alternates: { canonical: "/articles/vocal-to-sheet-music" },
  openGraph: {
    title: "ボーカルメロディを楽譜にする方法｜歌声を採譜する手順を解説",
    description: "ボーカルや歌声のメロディを楽譜にする方法を初心者向けに解説します。",
    url: "/articles/vocal-to-sheet-music",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ボーカルメロディを楽譜にする方法",
    description: "ボーカルや歌声のメロディを楽譜にする方法を初心者向けに解説します。",
  },
};

export default function VocalToSheetMusicPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ボーカルメロディを楽譜にする方法｜歌声を採譜する手順を解説",
    description:
      "ボーカルや歌声のメロディを楽譜にする方法を初心者向けに解説。自動採譜ツールを使ったMIDI化の手順、MuseScoreでの修正・PDF出力まで紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/vocal-to-sheet-music" },
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-6 py-12 md:px-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">ホーム</Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="hover:text-gray-800">記事</Link>
          <span className="mx-2">/</span>
          <span>ボーカルメロディを楽譜にする方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            自動採譜・変換
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            ボーカルメロディを楽譜にする方法
            <br className="hidden md:block" />
            歌声を採譜する手順を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-06-07 / 更新日: 2026-06-07</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「好きな曲のボーカルメロディを楽譜にしたい」「自分で歌ったメロディを記譜したい」
            そんなニーズに向けて、歌声・ボーカルのメロディを楽譜にする方法を
            自動採譜ツールの活用を含めて解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・ボーカルメロディを楽譜化する全体の流れ</li>
            <li>・自動採譜ツールで歌声をMIDI化する手順</li>
            <li>・ボーカル採譜の精度を上げる準備のコツ</li>
            <li>・MuseScoreで修正して楽譜を仕上げる方法</li>
            <li>・著作権への注意点</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>ボーカルメロディを楽譜にする方法は2つ</h2>
          <p>
            歌声のメロディを楽譜にするアプローチは大きく2つあります。
          </p>
          <ul>
            <li><strong>耳コピで手動採譜する：</strong>音を一音ずつ聴き取り、楽譜ソフトに入力する。精度は高いが時間がかかる</li>
            <li><strong>自動採譜ツールを使う：</strong>音声ファイルをAIで解析してMIDI化し、楽譜ソフトで修正する。時間を大幅に短縮できるが修正は必要</li>
          </ul>
          <p>
            この記事では、<strong>自動採譜ツールを使った効率的な方法</strong>を中心に解説します。
          </p>

          <h2>ボーカルと自動採譜の相性</h2>
          <p>
            自動採譜ツールはボーカルのメロディ採譜に一定の効果がありますが、
            ピアノや単音楽器と比べると難易度が高い面もあります。
          </p>
          <ul>
            <li><strong>得意なケース：</strong>伴奏が少ないアカペラ・ハモリなし・ビブラートが少ない声</li>
            <li><strong>苦手なケース：</strong>バンドサウンドの中に埋もれたボーカル・強いリバーブ・ビブラートやフォールが多い歌い方</li>
          </ul>
          <p>
            「完璧な楽譜を自動生成する」というよりも、
            <strong>「大まかなメロディラインの下書きを作る」</strong>
            感覚で使うと最も効果的です。
          </p>

          <h2>ステップ1：音源を準備する</h2>
          <p>
            既存の楽曲のボーカルメロディを採譜する場合は、そのままMP3やWAVを使えます。
            ただし、伴奏と混ざった状態よりも<strong>ボーカルだけに分離した音源</strong>の方が採譜精度が大幅に上がります。
          </p>
          <p>
            Spleeterなどの音源分離ツールを使うと、ボーカルだけを抽出したファイルを作ることができます。
            自分で歌ったものを採譜したい場合は、静かな環境でクリアに録音した音声ファイルを用意します。
          </p>

          <h2>ステップ2：自動採譜ツールでMIDIを生成する</h2>
          <p>
            準備した音源ファイルを自動採譜ツールにアップロードしてMIDIを生成します。
            本サイトのツールはブラウザ上で動作し、インストール不要です。
          </p>
          <ol>
            <li>音声ファイル（MP3/WAV推奨）を用意する</li>
            <li>ツールページでファイルをアップロードする</li>
            <li>処理完了後、MIDIファイルをダウンロードする</li>
          </ol>

          <h2>ステップ3：MuseScoreで修正・楽譜化する</h2>
          <p>
            ダウンロードしたMIDIをMuseScoreに読み込み、楽譜として仕上げます。
            ボーカル採譜では特に以下の点を修正しましょう。
          </p>
          <ul>
            <li><strong>音程の確認：</strong>ビブラートや音の揺れが誤認識されやすい。特に長音符は要確認</li>
            <li><strong>リズムの整理：</strong>歌声の自然な揺れがリズム誤認識につながることがある。付点音符や三連符に整理する</li>
            <li><strong>不要なノート削除：</strong>息継ぎや子音のノイズが音符として認識されることがある</li>
            <li><strong>歌詞の追加（任意）：</strong>MuseScoreでは音符の下に歌詞テキストを追加できる</li>
          </ul>
          <p>
            MuseScoreでの操作詳細は
            <Link href="/articles/musescore-midi-edit" className="text-blue-600 underline hover:text-blue-800">
              MuseScoreの使い方の記事
            </Link>
            を参照してください。
          </p>

          <h2>ステップ4：PDFとして出力する</h2>
          <p>
            修正が完了したら「ファイル→書き出し→PDF」でPDFとして保存します。
            印刷して練習用の楽譜として使ったり、他の人に共有したりできます。
          </p>
          <p>
            PDF出力の詳細な手順は
            <Link href="/articles/musescore-pdf-export" className="text-blue-600 underline hover:text-blue-800">
              MuseScoreでPDF出力する方法の記事
            </Link>
            で解説しています。
          </p>

          <h2>著作権への注意</h2>
          <p>
            市販楽曲のボーカルを採譜する場合、著作権への配慮が必要です。
          </p>
          <ul>
            <li>個人の練習・学習目的での採譜は私的利用の範囲で認められることが多い</li>
            <li>採譜した楽譜をSNSや楽譜配布サイトに公開することは著作権侵害になる可能性がある</li>
            <li>商用利用する場合は著作権者の許可が必要</li>
          </ul>

          <h2>まとめ</h2>
          <p>
            ボーカルメロディを楽譜にするには、
            <strong>音源準備→自動採譜→MuseScoreで修正→PDF出力</strong>の流れが効率的です。
            ボーカルはピアノなどと比べてAIの認識精度が落ちやすいため、
            「下書きとして生成し、自分で仕上げる」スタンスで使うのが現実的です。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">歌声をMIDIに変換してみる</h2>
          <p className="mt-3 leading-7 text-blue-950">
            本サイトの自動採譜ツールで音声ファイルをMIDI化し、MuseScoreで楽譜に仕上げることができます。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/humming-to-midi" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              ハミングをMIDIにする方法を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/vocal-to-sheet-music" />
      </article>
    </main>
  );
}
