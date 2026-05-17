import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MuseScoreの使い方｜MIDI読み込みから楽譜編集まで初心者向け解説",
  description:
    "MuseScoreの使い方を初心者向けに解説。MIDIファイルの読み込み、楽譜編集、音符修正、PDF出力まで、自動採譜後の修正手順をわかりやすく紹介します。",
  alternates: {
    canonical: "/articles/musescore-midi-edit",
  },
  openGraph: {
    title: "MuseScoreの使い方｜MIDI読み込みから楽譜編集まで初心者向け解説",
    description:
      "MuseScoreでMIDIを読み込み、楽譜として編集する基本手順を初心者向けに解説します。",
    url: "/articles/musescore-midi-edit",
    siteName: "自動採譜アプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuseScoreの使い方｜MIDI読み込みから楽譜編集まで初心者向け解説",
    description:
      "MuseScoreでMIDIを読み込み、楽譜として編集する基本手順を初心者向けに解説します。",
  },
};

export default function MuseScoreMidiEditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MuseScoreの使い方｜MIDI読み込みから楽譜編集まで初心者向け解説",
    description:
      "MuseScoreの使い方を初心者向けに解説。MIDIファイルの読み込み、楽譜編集、音符修正、PDF出力まで、自動採譜後の修正手順を紹介します。",
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
      "@id": "/articles/musescore-midi-edit",
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
          <Link href="/" className="hover:text-gray-800">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="hover:text-gray-800">
            記事
          </Link>
          <span className="mx-2">/</span>
          <span>MuseScoreの使い方</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            MuseScore・MIDI編集
          </p>

          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            MuseScoreの使い方
            <br className="hidden md:block" />
            MIDI読み込みから楽譜編集まで初心者向け解説
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            公開日: 2026-05-10 / 更新日: 2026-05-10
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            自動採譜ツールで作成したMIDIは、そのまま完成楽譜として使うより、
            MuseScoreで読み込んで修正することで実用性が高くなります。
            この記事では、MuseScoreでMIDIを読み込み、音符やリズムを修正し、
            楽譜として整える基本手順を初心者向けに解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・MuseScoreとは何か</li>
            <li>・MIDIファイルをMuseScoreに読み込む方法</li>
            <li>・自動採譜後のMIDIを修正するポイント</li>
            <li>・音符、リズム、不要音を整える方法</li>
            <li>・PDFやMusicXMLとして書き出す方法</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>MuseScoreとは？</h2>
          <p>
            MuseScoreは、楽譜を作成・編集できる無料の楽譜作成ソフトです。
            MIDIファイルを読み込んで楽譜として表示したり、音符を修正したり、
            PDFやMusicXMLとして出力したりできます。
          </p>

          <p>
            自動採譜ツールで生成したMIDIは、音程やタイミングが完全ではないことがあります。
            そのため、MuseScoreで開いて人の手で修正することで、より読みやすい楽譜に近づけることができます。
          </p>

          <h2>自動採譜MIDIをMuseScoreで編集する流れ</h2>
          <p>
            基本的な流れは次の通りです。
          </p>

          <ol>
            <li>自動採譜ツールでMIDIファイルを作成する</li>
            <li>MuseScoreでMIDIファイルを開く</li>
            <li>音符やリズムのズレを確認する</li>
            <li>不要な音を削除する</li>
            <li>小節、拍、音価を整える</li>
            <li>必要に応じてPDFやMusicXMLで書き出す</li>
          </ol>

          <h2>MIDIファイルをMuseScoreで開く方法</h2>
          <p>
            MuseScoreを起動したら、メニューからMIDIファイルを開きます。
          </p>

          <ol>
            <li>MuseScoreを起動する</li>
            <li>「ファイル」から「開く」を選択する</li>
            <li>自動採譜ツールで生成したMIDIファイルを選ぶ</li>
            <li>読み込み後、楽譜として表示されるか確認する</li>
          </ol>

          <p>
            MIDIの内容によっては、音符が細かく分かれすぎたり、休符が多く表示されたりすることがあります。
            これは自動採譜ではよくある現象です。
          </p>

          <h2>最初に確認すべきポイント</h2>
          <p>
            MIDIを読み込んだら、いきなり細かい修正をする前に、まず全体を確認します。
          </p>

          <ul>
            <li>テンポが大きくずれていないか</li>
            <li>拍子が合っているか</li>
            <li>メロディの音程が大きく外れていないか</li>
            <li>不要な細かい音が大量に出ていないか</li>
            <li>小節の区切りが不自然ではないか</li>
          </ul>

          <p>
            最初に全体像を確認しておくと、どこを重点的に直すべきか判断しやすくなります。
          </p>

          <h2>不要な音を削除する</h2>
          <p>
            自動採譜では、ノイズや倍音、伴奏の一部が余計な音として検出されることがあります。
            そのため、まずは明らかに不要な音を削除すると楽譜がかなり見やすくなります。
          </p>

          <ul>
            <li>極端に短い音</li>
            <li>メロディと関係ない細かい音</li>
            <li>同じ場所に重なりすぎている音</li>
            <li>演奏上不要に見える装飾的な音</li>
          </ul>

          <p>
            すべてを完璧に直そうとすると大変なので、まずは「読みにくさの原因になっている音」から削除するのがおすすめです。
          </p>

          <h2>リズムを整える</h2>
          <p>
            自動採譜後のMIDIは、リズムが細かくずれていることがあります。
            人間の演奏には自然な揺れがあるため、そのまま楽譜にすると複雑な譜割りになりやすいです。
          </p>

          <p>
            MuseScore上では、必要に応じて音符の長さや開始位置を調整し、
            8分音符、16分音符など読みやすい単位に整えていきます。
          </p>

          <h2>音程を確認する</h2>
          <p>
            メロディ部分は、実際に再生しながら音程を確認します。
            自動採譜では、近い音に誤判定されたり、和音の一部がメロディとして検出されたりすることがあります。
          </p>

          <ul>
            <li>原曲と聴き比べる</li>
            <li>違和感のある音を重点的に確認する</li>
            <li>高すぎる音・低すぎる音をチェックする</li>
            <li>メロディラインとして自然につながるかを見る</li>
          </ul>

          <h2>見やすい楽譜にするコツ</h2>
          <p>
            自動採譜結果を楽譜として使う場合は、正確さだけでなく読みやすさも重要です。
          </p>

          <ul>
            <li>不要な細かい音を減らす</li>
            <li>小節ごとのリズムを整理する</li>
            <li>メロディと伴奏を分けて考える</li>
            <li>難しすぎる和音は簡略化する</li>
            <li>演奏目的に合わせて音を減らす</li>
          </ul>

          <p>
            特に初心者向けの楽譜にする場合、すべての音を残すよりも、
            重要なメロディやコードを中心に整理した方が使いやすくなります。
          </p>

          <h2>PDFやMusicXMLとして書き出す</h2>
          <p>
            修正が終わったら、用途に応じて書き出します。
          </p>

          <ul>
            <li>印刷したい場合：PDF</li>
            <li>他の楽譜ソフトで編集したい場合：MusicXML</li>
            <li>DAWで編集したい場合：MIDI</li>
          </ul>

          <p>
            MuseScoreで整えたデータをPDF化すれば、練習用の譜面として使いやすくなります。
          </p>

          <h2>自動採譜とMuseScoreを組み合わせるメリット</h2>
          <p>
            自動採譜ツールとMuseScoreを組み合わせると、耳コピや譜面作成の作業時間を短縮できます。
          </p>

          <ul>
            <li>ゼロから音符を入力する手間を減らせる</li>
            <li>MIDIを視覚的に確認できる</li>
            <li>楽譜として修正しやすい</li>
            <li>PDFやMusicXMLに変換できる</li>
          </ul>

          <p>
            完全自動で完成楽譜を作るというよりも、
            「AIで下書きを作り、MuseScoreで仕上げる」という使い方が現実的です。
          </p>

          <h2>まとめ</h2>
          <p>
            MuseScoreは、自動採譜ツールで生成したMIDIを修正するのに非常に便利なソフトです。
          </p>

          <p>
            MIDIを読み込み、不要な音を削除し、音程やリズムを整えることで、
            実用的な楽譜に近づけることができます。
          </p>

          <p>
            自動採譜の結果はそのまま完成品として見るのではなく、
            MuseScoreで編集する前提のたたき台として使うのがおすすめです。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            MIDIを作ってMuseScoreで編集してみる
          </h2>
          <p className="mt-3 leading-7 text-blue-950">
            音声ファイルをMIDI化すれば、MuseScoreで楽譜として開いて編集できます。
            まずは自動採譜ツールでMIDIのたたき台を作ってみましょう。
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

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/articles/mp3-to-midi"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                MP3をMIDIに変換する方法
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                音声ファイルからMIDIへ変換する基本を解説します。
              </p>
            </Link>

            <Link
              href="/articles/piano-to-midi"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                ピアノ音源をMIDI化する方法
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                ピアノ音源からMIDIを作る方法とコツを解説します。
              </p>
            </Link>

            <Link
              href="/articles/ear-copy-efficiency"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                耳コピを効率化する方法
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                自動採譜とMIDIを使って耳コピ作業を時短する方法を解説します。
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}