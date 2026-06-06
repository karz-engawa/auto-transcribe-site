import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "ギターをMIDIに変換する方法｜録音から自動採譜する手順を解説",
  description:
    "ギターの音源やリフをMIDIに変換する方法を初心者向けに解説。録音のコツ、自動採譜ツールの使い方、DAWへの取り込み方法まで紹介します。",
  alternates: { canonical: "/articles/guitar-to-midi" },
  openGraph: {
    title: "ギターをMIDIに変換する方法｜録音から自動採譜する手順を解説",
    description: "ギターの音源をMIDIに変換する方法を初心者向けに解説します。",
    url: "/articles/guitar-to-midi",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ギターをMIDIに変換する方法",
    description: "ギターの音源をMIDIに変換する方法を初心者向けに解説します。",
  },
};

export default function GuitarToMidiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ギターをMIDIに変換する方法｜録音から自動採譜する手順を解説",
    description:
      "ギターの音源やリフをMIDIに変換する方法を初心者向けに解説。録音のコツ、自動採譜ツールの使い方、DAWへの取り込み方法まで紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/guitar-to-midi" },
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
          <span>ギターをMIDIに変換する方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            自動採譜・変換
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            ギターをMIDIに変換する方法
            <br className="hidden md:block" />
            録音から自動採譜する手順を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-06-07 / 更新日: 2026-06-07</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「ギターのリフやメロディをDAWに取り込みたい」「ギター演奏を楽譜にしたい」
            そんな方向けに、ギターの音源をMIDIに変換する方法を録音のコツとあわせて解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・ギターをMIDIに変換する方法の概要</li>
            <li>・採譜しやすいギター音源の録音方法</li>
            <li>・自動採譜ツールでのMIDI生成手順</li>
            <li>・ギター採譜の限界と現実的な使い方</li>
            <li>・DAWやMuseScoreへの取り込み方</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>ギターをMIDIに変換する2つのアプローチ</h2>
          <p>
            ギターをMIDIデータに変換する方法には主に2つあります。
          </p>
          <ul>
            <li>
              <strong>GK対応ギター＋Roland GRシリーズ（ハードウェア）：</strong>
              専用ピックアップを装着したギターとMIDIコンバーターを使ってリアルタイムにMIDI変換する。
              精度が高く演奏表現も豊かだが、専用機材が必要で費用がかかる。
            </li>
            <li>
              <strong>録音→自動採譜ツールで変換（ソフトウェア）：</strong>
              ギターを録音した音声ファイルをAIで解析してMIDIを生成する。
              機材不要で手軽に試せる。
            </li>
          </ul>
          <p>
            この記事では、機材なしで試せる<strong>録音→自動採譜の方法</strong>を解説します。
          </p>

          <h2>ギター採譜に向いている音源・向いていない音源</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">音源の種類</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">採譜精度</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">理由</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">アコースティックギター単音フレーズ</td>
                  <td className="border border-gray-200 px-4 py-3">比較的高い</td>
                  <td className="border border-gray-200 px-4 py-3">倍音が自然で音程が明確</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">クリーントーンのエレキ単音リフ</td>
                  <td className="border border-gray-200 px-4 py-3">高め</td>
                  <td className="border border-gray-200 px-4 py-3">歪みが少なく音程が安定している</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">アルペジオ（単音の連なり）</td>
                  <td className="border border-gray-200 px-4 py-3">中程度</td>
                  <td className="border border-gray-200 px-4 py-3">音の重なりが少なく識別しやすい</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">歪んだエレキのパワーコード</td>
                  <td className="border border-gray-200 px-4 py-3">低め</td>
                  <td className="border border-gray-200 px-4 py-3">倍音が多く音程の識別が難しい</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">フルバンドの中のギター</td>
                  <td className="border border-gray-200 px-4 py-3">低い</td>
                  <td className="border border-gray-200 px-4 py-3">他楽器との分離が難しい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>採譜しやすい録音のコツ</h2>
          <ul>
            <li><strong>クリーントーンで録音する：</strong>ディストーションやオーバードライブは倍音が増えて音程検出の精度が落ちます。採譜用ならクリーントーンで録音するのが基本です。</li>
            <li><strong>単音フレーズから試す：</strong>コードストロークより単音メロディやリフの方が変換精度が出やすいです。</li>
            <li><strong>ノイズを減らす：</strong>ハムノイズや弦のビビりが多いと誤認識の原因になります。直接入力（ライン録音）が理想です。</li>
            <li><strong>テンポを一定に保つ：</strong>メトロノームに合わせて演奏するとリズムの変換精度が上がります。</li>
            <li><strong>WAV形式で保存する：</strong>MP3より非圧縮のWAVの方が高周波の音程情報が保持されます。</li>
          </ul>

          <h2>自動採譜ツールでMIDIを生成する手順</h2>
          <ol>
            <li>ギターを録音してMP3またはWAVファイルを準備する</li>
            <li>本サイトのツールページを開く</li>
            <li>音声ファイルをアップロードして処理を開始する</li>
            <li>MIDIファイルが生成されたらダウンロードする</li>
          </ol>

          <h2>生成したMIDIの活用方法</h2>
          <h3>DAWでギター音源に差し替える</h3>
          <p>
            生成したMIDIをDAWに読み込み、ギター音源のVSTプラグインに差し替えることで、
            元の演奏を再現しながら修正・編集ができます。
            音程やタイミングをピアノロール上で細かく調整できます。
          </p>
          <h3>MuseScoreでギター楽譜を作る</h3>
          <p>
            MIDIをMuseScoreに読み込み、ギター用の楽譜（TAB譜付き）として整えることもできます。
            MuseScoreはギターのTAB譜表示に対応しており、
            フレット位置を確認しながら楽譜を仕上げられます。
          </p>

          <h2>ギターMIDI変換の現実的な使い方</h2>
          <p>
            現状の自動採譜技術では、ギターを完全に正確なMIDIに変換することは難しいです。
            特に歪みが強い音やコードストロークは精度が大きく落ちます。
          </p>
          <p>
            現実的な使い方は<strong>「単音フレーズやリフの下書きを素早く作る」</strong>ことです。
            完璧を求めず、DAWやMuseScoreで修正を前提として使うことで、
            ゼロから入力するよりも大幅に作業時間を短縮できます。
          </p>

          <h2>まとめ</h2>
          <p>
            ギターをMIDIに変換するには、クリーントーンで録音した単音フレーズが最も精度が出やすいです。
            自動採譜ツールで生成したMIDIを「たたき台」としてDAWやMuseScoreで修正することで、
            効率よくギターパートをデジタル化できます。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">ギター音源をMIDIに変換してみる</h2>
          <p className="mt-3 leading-7 text-blue-950">
            本サイトのツールで録音したギター音源をMIDI化できます。まずクリーントーンの単音フレーズから試してみてください。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/mp3-to-midi" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              MP3からMIDI変換の記事を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/guitar-to-midi" />
      </article>
    </main>
  );
}
