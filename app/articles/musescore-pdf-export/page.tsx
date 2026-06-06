import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "MuseScoreで楽譜をPDFに出力する方法｜印刷・共有の手順を解説",
  description:
    "MuseScoreで作成した楽譜をPDFとして出力・印刷する方法を初心者向けに解説。ページ設定・余白調整・複数ページ対応など実用的な手順を紹介します。",
  alternates: { canonical: "/articles/musescore-pdf-export" },
  openGraph: {
    title: "MuseScoreで楽譜をPDFに出力する方法｜印刷・共有の手順を解説",
    description: "MuseScoreで楽譜をPDFとして出力する方法を初心者向けに解説します。",
    url: "/articles/musescore-pdf-export",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuseScoreで楽譜をPDFに出力する方法",
    description: "MuseScoreで楽譜をPDFとして出力する方法を初心者向けに解説します。",
  },
};

export default function MusescorePdfExportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MuseScoreで楽譜をPDFに出力する方法｜印刷・共有の手順を解説",
    description:
      "MuseScoreで作成した楽譜をPDFとして出力・印刷する方法を初心者向けに解説。ページ設定・余白調整・複数ページ対応など実用的な手順を紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/musescore-pdf-export" },
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
          <span>MuseScoreでPDF出力する方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            MuseScore・楽譜
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            MuseScoreで楽譜をPDFに出力する方法
            <br className="hidden md:block" />
            印刷・共有の手順を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-06-07 / 更新日: 2026-06-07</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            MuseScoreで編集した楽譜を印刷したり、人に共有したりするにはPDF出力が便利です。
            この記事では、MuseScoreでPDFを書き出す基本手順から、きれいに仕上げるための設定まで初心者向けに解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・MuseScoreでPDFを書き出す基本操作</li>
            <li>・ページサイズや余白の設定方法</li>
            <li>・複数ページの楽譜をまとめてPDFにする方法</li>
            <li>・印刷時によくある問題と対処法</li>
            <li>・MIDIから楽譜を作ってPDFにする流れ</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>MuseScoreのPDF書き出しとは</h2>
          <p>
            MuseScoreで作成・編集した楽譜は、<strong>PDF形式で書き出し</strong>することができます。
            PDFにすることで、MuseScoreを持っていない人にも楽譜を共有できますし、
            プリンターで印刷して練習用の楽譜として使うこともできます。
          </p>
          <p>
            自動採譜ツールで生成したMIDIをMuseScoreに読み込んで修正した後、
            最終的にPDFとして書き出すのが一般的なワークフローです。
          </p>

          <h2>PDFを書き出す基本手順</h2>
          <ol>
            <li>MuseScoreで楽譜ファイルを開く</li>
            <li>メニューバーから「ファイル」→「書き出し」を選ぶ</li>
            <li>ファイル形式のドロップダウンで「PDF（.pdf）」を選択する</li>
            <li>保存先のフォルダを指定してファイル名を入力する</li>
            <li>「書き出し」または「保存」ボタンを押す</li>
          </ol>
          <p>
            これだけでPDFが生成されます。操作自体はシンプルですが、
            きれいな楽譜にするためには事前のレイアウト設定が重要です。
          </p>

          <h2>ページサイズと余白を設定する</h2>
          <p>
            PDFを書き出す前に、ページのレイアウトを整えておくと、
            印刷したときに見やすい楽譜になります。
          </p>
          <p>
            「書式」→「ページ設定」から以下の設定が変更できます。
          </p>
          <ul>
            <li><strong>用紙サイズ：</strong>A4が一般的。プリンターの用紙に合わせて設定する</li>
            <li><strong>向き：</strong>縦（ポートレート）か横（ランドスケープ）を選択</li>
            <li><strong>余白：</strong>上下左右の余白を調整。狭くしすぎるとプリンターの印刷範囲外になるため注意</li>
            <li><strong>スケール：</strong>音符の大きさ全体を変える。小さい用紙に多くの音符を収めたい場合に調整する</li>
          </ul>

          <h2>段組み（小節の並び）を整える</h2>
          <p>
            MIDIを読み込んだ直後は、小節の区切りや段の並びが整っていないことがあります。
            以下の操作で見やすく整えられます。
          </p>
          <ul>
            <li><strong>「追加」→「区切り」→「改段」：</strong>特定の小節で行を変えたいときに使う</li>
            <li><strong>小節の幅調整：</strong>小節を選択してドラッグすることで横幅を変えられる</li>
            <li><strong>「書式」→「レイアウトを最適化」：</strong>全体のバランスを自動で調整する</li>
          </ul>

          <h2>複数ページの楽譜をPDFにする</h2>
          <p>
            長い楽曲では楽譜が複数ページにわたることがあります。
            MuseScoreの書き出し機能は複数ページをまとめて1つのPDFファイルに書き出せるため、
            特別な操作は必要ありません。
            「ファイル→書き出し→PDF」の手順で全ページが含まれたPDFが生成されます。
          </p>
          <p>
            特定のページだけをPDFにしたい場合は、
            書き出しダイアログの「ページ範囲」でページを指定できます。
          </p>

          <h2>印刷時によくある問題と対処法</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">問題</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">原因</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">対処法</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">端が切れて印刷される</td>
                  <td className="border border-gray-200 px-4 py-3">余白が狭すぎる</td>
                  <td className="border border-gray-200 px-4 py-3">ページ設定で余白を広げる</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">音符が小さすぎて読みにくい</td>
                  <td className="border border-gray-200 px-4 py-3">スケールが小さい・小節数が多い</td>
                  <td className="border border-gray-200 px-4 py-3">スケールを上げるか、ページ数を増やす</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">1ページ目だけ出力される</td>
                  <td className="border border-gray-200 px-4 py-3">印刷設定のページ範囲が1ページのみ</td>
                  <td className="border border-gray-200 px-4 py-3">「すべてのページ」を選択する</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">PDFが文字化けする</td>
                  <td className="border border-gray-200 px-4 py-3">フォントの埋め込み設定</td>
                  <td className="border border-gray-200 px-4 py-3">MuseScoreのバージョンを最新にする</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>MIDIから楽譜を作ってPDFにする全体の流れ</h2>
          <p>
            自動採譜ツールと組み合わせた場合の全体の流れは次のとおりです。
          </p>
          <ol>
            <li>音声ファイルを自動採譜ツールでMIDI化する</li>
            <li>MIDIをMuseScoreで開く</li>
            <li>音符の誤りやリズムのずれを修正する</li>
            <li>ページ設定で余白や用紙サイズを整える</li>
            <li>「ファイル→書き出し→PDF」でPDFとして保存する</li>
            <li>プリンターで印刷するか、PDFのまま共有する</li>
          </ol>
          <p>
            MIDIの読み込みや修正の詳細については
            <Link href="/articles/musescore-midi-edit" className="text-blue-600 underline hover:text-blue-800">
              MuseScoreの使い方（MIDI読み込み・編集）の記事
            </Link>
            を参照してください。
          </p>

          <h2>まとめ</h2>
          <p>
            MuseScoreでのPDF出力は「ファイル→書き出し→PDF」の手順でシンプルに行えます。
            書き出す前にページサイズ・余白・スケールを整えておくと、
            印刷して見やすい楽譜が作れます。
          </p>
          <p>
            自動採譜でMIDIを生成し、MuseScoreで修正してPDFとして共有・印刷する流れは、
            楽譜のない曲を手軽に楽譜化する最も現実的な方法です。ぜひ試してみてください。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">音声からMIDIを生成してMuseScoreで楽譜化する</h2>
          <p className="mt-3 leading-7 text-blue-950">
            自動採譜ツールでMIDIを生成し、MuseScoreで修正してPDF出力する流れが最も手軽です。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/midi-to-sheet-music" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              MIDIを楽譜にする方法を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/musescore-pdf-export" />
      </article>
    </main>
  );
}
