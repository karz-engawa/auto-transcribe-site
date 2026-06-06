import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "絶対音感と相対音感の違い｜耳コピや音楽制作に必要なのはどちら？",
  description:
    "絶対音感と相対音感の違いを初心者向けに解説。耳コピや音楽制作・自動採譜に活かすうえで本当に必要な音感とトレーニング方法を紹介します。",
  alternates: { canonical: "/articles/absolute-vs-relative-pitch" },
  openGraph: {
    title: "絶対音感と相対音感の違い｜耳コピや音楽制作に必要なのはどちら？",
    description: "絶対音感と相対音感の違いを初心者向けに解説します。",
    url: "/articles/absolute-vs-relative-pitch",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "絶対音感と相対音感の違い｜耳コピや音楽制作に必要なのはどちら？",
    description: "絶対音感と相対音感の違いを初心者向けに解説します。",
  },
};

export default function AbsoluteVsRelativePitchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "絶対音感と相対音感の違い｜耳コピや音楽制作に必要なのはどちら？",
    description:
      "絶対音感と相対音感の違いを初心者向けに解説。耳コピや音楽制作・自動採譜に活かすうえで本当に必要な音感とトレーニング方法を紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/absolute-vs-relative-pitch" },
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
          <span>絶対音感と相対音感の違い</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            耳コピ・音感
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            絶対音感と相対音感の違い
            <br className="hidden md:block" />
            耳コピや音楽制作に必要なのはどちら？
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-06-07 / 更新日: 2026-06-07</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「絶対音感がないと耳コピはできない？」「相対音感って鍛えられるの？」
            音感に関するよくある疑問に答えながら、
            耳コピや音楽制作において本当に必要な音感能力を解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・絶対音感と相対音感それぞれの定義</li>
            <li>・2つの音感の違いと特性</li>
            <li>・耳コピに必要な音感はどちらか</li>
            <li>・相対音感を鍛えるための実践的な方法</li>
            <li>・音感がなくても耳コピを助けるツールの使い方</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>絶対音感とは</h2>
          <p>
            絶対音感とは、<strong>基準音なしに聞こえた音の音名（ドレミ）を即座に識別できる能力</strong>です。
            たとえば「ピ」という音を聞いただけで「あ、これはラ（A440Hz）だ」と分かる能力です。
          </p>
          <p>
            絶対音感は主に幼少期（3〜6歳頃）の音楽訓練によって身につくものとされており、
            大人になってから習得するのは非常に難しいと言われています。
            持っている人は全人口の数%程度とされる希少な能力です。
          </p>

          <h2>相対音感とは</h2>
          <p>
            相対音感とは、<strong>基準となる音と比べて、音の高低や音程の関係を識別する能力</strong>です。
            たとえば「ドを基準にしたとき、この音は長3度上（ミ）だ」と判断できる能力です。
          </p>
          <p>
            相対音感は訓練によって誰でも鍛えることができます。
            実際に音楽活動をしているほとんどのミュージシャンは、
            絶対音感ではなく相対音感を使って演奏・作曲・耳コピを行っています。
          </p>

          <h2>絶対音感と相対音感の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">項目</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">絶対音感</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">相対音感</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">定義</td>
                  <td className="border border-gray-200 px-4 py-3">基準なしに音名を識別</td>
                  <td className="border border-gray-200 px-4 py-3">基準音との関係で音程を識別</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">習得時期</td>
                  <td className="border border-gray-200 px-4 py-3">主に幼少期</td>
                  <td className="border border-gray-200 px-4 py-3">いつでも鍛えられる</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">所有者の割合</td>
                  <td className="border border-gray-200 px-4 py-3">数%</td>
                  <td className="border border-gray-200 px-4 py-3">訓練次第で誰でも</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">耳コピへの有用性</td>
                  <td className="border border-gray-200 px-4 py-3">高い（ただし弊害も）</td>
                  <td className="border border-gray-200 px-4 py-3">十分に高い</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>耳コピに必要なのはどちら？</h2>
          <p>
            結論からいうと、<strong>耳コピには絶対音感は必須ではありません。相対音感で十分です。</strong>
          </p>
          <p>
            耳コピでは「この音は前の音よりも長3度高い」「ここでキーが変わった」といった
            音程の関係性を把握することが重要です。これは相対音感で対応できます。
          </p>
          <p>
            むしろ、絶対音感を持つ人は移調された曲や特殊なチューニングの楽器音に違和感を覚えることがあり、
            それが耳コピの妨げになるケースも存在します。
          </p>

          <h2>相対音感を鍛える実践的な方法</h2>
          <h3>1. インターバルトレーニング</h3>
          <p>
            2つの音を聴いて、その音程差（完全5度、長3度など）を当てる練習です。
            Tenuto、Musopiaなどの音感トレーニングアプリで手軽に練習できます。
          </p>
          <h3>2. 移動ド唱法</h3>
          <p>
            曲のキーに合わせて「ド」の位置を移動させ、相対的な音名で歌う方法です。
            「このメロディはドレミ…」と歌えるようになると、耳コピ時の音の把握が格段に速くなります。
          </p>
          <h3>3. コード進行の聴き取り練習</h3>
          <p>
            よく出てくるコード進行を耳で覚えることで、
            曲を聴いたときに「これはカノン進行だ」と素早く判断できるようになります。
            詳しくは
            <Link href="/articles/chord-ear-copying" className="text-blue-600 underline hover:text-blue-800">
              コードの耳コピ方法の記事
            </Link>
            を参照してください。
          </p>
          <h3>4. 相対音感のトレーニングについて</h3>
          <p>
            具体的な練習法は
            <Link href="/articles/relative-pitch-training" className="text-blue-600 underline hover:text-blue-800">
              相対音感の鍛え方の記事
            </Link>
            でより詳しく解説しています。
          </p>

          <h2>音感に自信がない場合は自動採譜を活用する</h2>
          <p>
            音感がまだ十分でない場合でも、自動採譜ツールを使うことで耳コピの補助ができます。
            AIが音程のたたき台を生成してくれるため、
            「完全に正確に聴き取れなくても、大まかな音の配置を確認できる」
            という形で活用できます。
          </p>
          <p>
            自動採譜の結果をMuseScoreやDAWで視覚的に確認しながら修正することで、
            音感に自信がない段階でも採譜作業を進められます。
          </p>

          <h2>まとめ</h2>
          <p>
            絶対音感は特別な能力ですが、音楽制作や耳コピに<strong>絶対音感は必要ありません。</strong>
            相対音感を地道に鍛えることで、耳コピ・作曲・即興演奏に必要な音感は十分に身につけられます。
          </p>
          <p>
            音感のトレーニングと並行して自動採譜ツールを活用することで、
            音感が発展途上の段階でも効率よく音楽を楽しむことができます。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">音感が発展途上でも自動採譜で補助できる</h2>
          <p className="mt-3 leading-7 text-blue-950">
            自動採譜ツールはAIが音程の下書きを作るため、音感に自信がない方にこそ役立ちます。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/relative-pitch-training" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              相対音感の鍛え方を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/absolute-vs-relative-pitch" />
      </article>
    </main>
  );
}
