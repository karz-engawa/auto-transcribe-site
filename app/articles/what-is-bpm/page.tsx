import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "BPMとは？テンポとの違い・音楽制作や耳コピでの使い方を解説",
  description:
    "BPMとは何かをテンポとの違いとともに初心者向けに解説。DAWでのBPM設定方法、耳コピでのテンポ計測、MIDIとの関係まで丁寧に紹介します。",
  alternates: { canonical: "/articles/what-is-bpm" },
  openGraph: {
    title: "BPMとは？テンポとの違い・音楽制作や耳コピでの使い方を解説",
    description: "BPMとは何かをテンポとの違いとともに初心者向けに解説します。",
    url: "/articles/what-is-bpm",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "BPMとは？テンポとの違い・音楽制作や耳コピでの使い方を解説",
    description: "BPMとは何かをテンポとの違いとともに初心者向けに解説します。",
  },
};

export default function WhatIsBpmPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "BPMとは？テンポとの違い・音楽制作や耳コピでの使い方を解説",
    description:
      "BPMとは何かをテンポとの違いとともに初心者向けに解説。DAWでのBPM設定方法、耳コピでのテンポ計測、MIDIとの関係まで紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/what-is-bpm" },
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
          <span>BPMとは？</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            音楽の基礎
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            BPMとは？
            <br className="hidden md:block" />
            テンポとの違い・音楽制作や耳コピでの使い方を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-06-07 / 更新日: 2026-06-07</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            DAWや音楽プレイヤーでよく目にする「BPM」。
            「テンポと同じ意味？」「数字が大きいと速い？」など、
            初心者が疑問に思いやすい点を丁寧に解説します。
            耳コピやMIDI打ち込みでの活用方法も紹介します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・BPMとは何か、テンポとの違い</li>
            <li>・BPMの数値と速さの感覚</li>
            <li>・DAWでのBPM設定方法</li>
            <li>・耳コピ時のBPM（テンポ）の計り方</li>
            <li>・MIDIとBPMの関係</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>BPMとは何か</h2>
          <p>
            BPMは「Beats Per Minute」の略で、<strong>1分間に刻む拍（ビート）の数</strong>を表します。
            たとえばBPM120なら、1分間に120回ビートが刻まれます。
            これはちょうど1秒間に2回ビートが来るテンポです。
          </p>
          <p>
            音楽の「速さ」を数値で表す指標であり、
            DAWでの打ち込みや録音において非常に重要な設定です。
          </p>

          <h2>テンポとBPMの違い</h2>
          <p>
            「テンポ」は音楽の速さを表す概念全般を指す言葉で、
            「BPM」はそのテンポを数値で表した単位です。
          </p>
          <p>
            楽譜では「Allegro（速く）」「Andante（ゆっくり歩くように）」といった
            イタリア語の速度記号でテンポを示しますが、
            DAWや現代の音楽制作ではBPMという数値で正確に管理します。
          </p>
          <ul>
            <li>Larghissimo（非常に遅く）：BPM 20以下</li>
            <li>Andante（ゆっくり歩くように）：BPM 76〜108</li>
            <li>Allegro（速く）：BPM 120〜156</li>
            <li>Presto（急速に）：BPM 168〜200</li>
          </ul>

          <h2>ジャンル別のBPMの目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">ジャンル</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">BPMの目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">バラード・スローポップ</td>
                  <td className="border border-gray-200 px-4 py-3">60〜80</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">ポップス・J-POP</td>
                  <td className="border border-gray-200 px-4 py-3">100〜130</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">ロック・ポップロック</td>
                  <td className="border border-gray-200 px-4 py-3">120〜160</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">EDM・ダンスミュージック</td>
                  <td className="border border-gray-200 px-4 py-3">120〜140</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">ヘビーメタル・ハードコア</td>
                  <td className="border border-gray-200 px-4 py-3">160〜220</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>DAWでのBPM設定方法</h2>
          <p>
            DAWでは通常、画面上部のテンポ表示エリアにBPMが表示されています。
            ここをクリックして数値を入力するだけで設定が変更できます。
          </p>
          <p>
            BPMを設定するとメトロノームのグリッド（小節線や拍の区切り）がそのテンポに合わせて変わり、
            録音・打ち込みの基準になります。
          </p>
          <p>
            <strong>テンポオートメーション</strong>という機能を使えば、曲の途中でBPMを変化させることもできます。
            サビで加速する表現などに使われます。
          </p>

          <h2>耳コピ時にBPMを計る方法</h2>
          <p>
            曲をDAWに取り込んで打ち込む場合、まずその曲のBPMを特定する必要があります。
          </p>
          <h3>タップテンポで計る</h3>
          <p>
            曲を再生しながらビートに合わせてキーやボタンをタップすると、
            BPMを計測してくれる「タップテンポ」機能が多くのDAWやメトロノームアプリに搭載されています。
            8〜16回タップすると精度が上がります。
          </p>
          <h3>DAWのテンポ解析を使う</h3>
          <p>
            LogicやAbleton Live、Cubaseなどでは、
            オーディオファイルのBPMを自動解析する機能があります。
            音声ファイルをDAWに読み込んだ後、「テンポを解析」や「ワーピング」機能を使うと
            自動でBPMを検出してくれます。
          </p>

          <h2>MIDIデータとBPMの関係</h2>
          <p>
            MIDIデータ自体にはBPM情報が含まれています。
            自動採譜ツールが生成したMIDIには、解析された（または推定された）テンポ情報が入っていることがあります。
          </p>
          <p>
            MuseScoreでMIDIを開くと、テンポ記号が楽譜上に表示されます。
            このテンポが実際の曲と合っていない場合は、
            「追加→テキスト→テンポ記号」から修正することができます。
          </p>
          <p>
            DAWでMIDIを使う場合、プロジェクトのBPMとMIDIのBPMが一致していないと
            リズムがずれるため、読み込み後に確認するようにしてください。
          </p>

          <h2>まとめ</h2>
          <p>
            BPMは「1分間に刻まれるビートの数」を表す数値で、音楽の速さを正確に管理するための単位です。
            DAWでの打ち込みや耳コピでは、<strong>まず曲のBPMを確認することが重要なファーストステップ</strong>になります。
          </p>
          <p>
            自動採譜ツールで生成したMIDIのテンポが合っていない場合は、
            DAWやMuseScoreでBPMを調整してから使いましょう。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">音声からMIDIを生成して打ち込みの参考にする</h2>
          <p className="mt-3 leading-7 text-blue-950">
            自動採譜ツールでMIDIを生成し、DAWで読み込んでBPMを確認・調整するワークフローを試してみてください。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/what-is-midi" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              MIDIの基本を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/what-is-bpm" />
      </article>
    </main>
  );
}
