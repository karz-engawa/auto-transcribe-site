import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "コードの耳コピ方法｜初心者が和音を聴き取るコツを解説",
  description:
    "コード（和音）の耳コピ方法を初心者向けに解説。コードの聴き取り手順、よく使われるコード進行の覚え方、自動採譜ツールとの組み合わせ方まで紹介します。",
  alternates: { canonical: "/articles/chord-ear-copying" },
  openGraph: {
    title: "コードの耳コピ方法｜初心者が和音を聴き取るコツを解説",
    description: "コードの耳コピ方法を初心者向けに解説。聴き取り手順とコツを紹介します。",
    url: "/articles/chord-ear-copying",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "コードの耳コピ方法｜初心者が和音を聴き取るコツを解説",
    description: "コードの耳コピ方法を初心者向けに解説。聴き取り手順とコツを紹介します。",
  },
};

export default function ChordEarCopyingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "コードの耳コピ方法｜初心者が和音を聴き取るコツを解説",
    description:
      "コード（和音）の耳コピ方法を初心者向けに解説。コードの聴き取り手順、よく使われるコード進行の覚え方、自動採譜ツールとの組み合わせ方まで紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/chord-ear-copying" },
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
          <span>コードの耳コピ方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            耳コピ・音感
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            コードの耳コピ方法
            <br className="hidden md:block" />
            初心者が和音を聴き取るコツを解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-06-07 / 更新日: 2026-06-07</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「メロディは取れるようになったけど、コード（和音）の聴き取りが難しい」
            そんな方向けに、コードの耳コピ方法を初心者向けに解説します。
            コード進行の知識を活用した効率的な聴き取り手順も紹介します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・コードの耳コピがメロディより難しい理由</li>
            <li>・コードを聴き取るための基本手順</li>
            <li>・メジャーとマイナーを聴き分けるコツ</li>
            <li>・よく使われるコード進行の活用方法</li>
            <li>・自動採譜ツールをコード耳コピに活用する方法</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>コードの耳コピがメロディより難しい理由</h2>
          <p>
            メロディは一つの音の流れですが、コードは<strong>複数の音が同時に鳴る和音</strong>です。
            人間の耳は単音の識別は比較的得意ですが、
            複数音の重なりから各音を分離して聴き取るのはトレーニングが必要です。
          </p>
          <p>
            また、ポップスやロックでは伴奏にコードが使われ、
            メロディと同時に鳴っているため、
            メロディの音にコードの音が混ざって聞こえることも難しさの一因です。
          </p>

          <h2>コード耳コピの基本手順</h2>
          <ol>
            <li><strong>まず曲のキーを特定する：</strong>曲のキーがわかるとコードの候補が絞れます。最後の音（終止音）がキーのルートになることが多いです。</li>
            <li><strong>ベース音を聴き取る：</strong>コードの根音（ルート）はベースラインに出てくることが多いです。低音に集中してルートを先に取りましょう。</li>
            <li><strong>メジャー/マイナーを判断する：</strong>ルートが取れたら、和音の雰囲気が明るい（メジャー）か暗い（マイナー）かを判断します。</li>
            <li><strong>楽器で鳴らして確認する：</strong>推測したコードを鍵盤やギターで鳴らして、曲に合っているか確認します。</li>
            <li><strong>コード進行パターンと照合する：</strong>よく使われるコード進行と比較して当てはめます。</li>
          </ol>

          <h2>メジャーとマイナーを聴き分けるコツ</h2>
          <p>
            コードの「明るさ・暗さ」はメジャーとマイナーの違いから来ます。
          </p>
          <ul>
            <li><strong>メジャーコード：</strong>明るく開放的な響き。「ド・ミ・ソ」のように長3度から始まる</li>
            <li><strong>マイナーコード：</strong>暗く落ち着いた響き。「ド・ミ♭・ソ」のように短3度から始まる</li>
          </ul>
          <p>
            最初はこの二種類だけに絞って練習し、
            「このコードはメジャーかマイナーか」を繰り返し聴いて判断する訓練から始めると上達が早いです。
          </p>

          <h2>よく使われるコード進行を覚える</h2>
          <p>
            コードは無数に存在しますが、日本のポップスやロックで使われるコード進行は限られています。
            以下の進行を覚えておくと、多くの曲のコードが推測しやすくなります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">進行名</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">Cキーの例</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">カノン進行</td>
                  <td className="border border-gray-200 px-4 py-3">C → G → Am → Em → F → C → F → G</td>
                  <td className="border border-gray-200 px-4 py-3">J-POPで非常によく使われる</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">王道進行</td>
                  <td className="border border-gray-200 px-4 py-3">F → G → Em → Am</td>
                  <td className="border border-gray-200 px-4 py-3">感情的な盛り上がりが出やすい</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">小室進行</td>
                  <td className="border border-gray-200 px-4 py-3">Am → F → G → C</td>
                  <td className="border border-gray-200 px-4 py-3">切なさと明るさが交互に来る</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">4-5-1（終止形）</td>
                  <td className="border border-gray-200 px-4 py-3">F → G → C</td>
                  <td className="border border-gray-200 px-4 py-3">曲の終わりや区切りに多い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            曲を聴いてコードが確定できなくても、
            「この進行のどれかだろう」と当たりをつけながら進めると効率よく進められます。
          </p>

          <h2>コード耳コピの練習方法</h2>
          <h3>1. 簡単な曲から始める</h3>
          <p>
            アコースティックギター1本や、ピアノ左手の伴奏など、コードがはっきり聴き取れる音源から始めましょう。
            バンドサウンドや複数楽器が重なる曲は、コードを聴き取る難易度が大きく上がります。
          </p>
          <h3>2. 1小節ずつ区切って繰り返す</h3>
          <p>
            曲全体を通して聴こうとせず、1〜2小節のループを繰り返し聴いて一つ一つのコードを特定します。
            DAWや音楽プレイヤーのループ機能を活用してください。
          </p>
          <h3>3. ベースに集中する</h3>
          <p>
            コードのルート音はほとんどの場合、ベースラインで鳴っています。
            ヘッドフォンをして低音だけに集中してベースを追うと、コードの根音がわかりやすくなります。
          </p>

          <h2>自動採譜ツールをコード耳コピに活用する</h2>
          <p>
            自動採譜ツールはメロディの採譜が得意ですが、
            コード耳コピの補助としても活用できます。
          </p>
          <p>
            生成されたMIDIをDAWやMuseScoreで開くと、
            ベースラインや伴奏の動きが視覚的にわかります。
            完全に正確ではありませんが、<strong>コードのルート音を探すヒント</strong>として使うと作業が速まります。
          </p>
          <p>
            耳コピ全般の効率化については
            <Link href="/articles/ear-copy-efficiency" className="text-blue-600 underline hover:text-blue-800">
              耳コピを効率化する方法の記事
            </Link>
            もあわせてご覧ください。
          </p>

          <h2>まとめ</h2>
          <p>
            コードの耳コピは、<strong>キー特定→ベース音の聴き取り→メジャー/マイナー判断→進行との照合</strong>
            という手順で進めると習得しやすくなります。
          </p>
          <p>
            最初はシンプルな2〜3コードの曲から練習し、
            よく使われるコード進行のパターンを体で覚えていくことが上達への近道です。
            自動採譜ツールをベースラインの参考として使うことで、作業をさらに効率化できます。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">耳コピの下書きを自動生成する</h2>
          <p className="mt-3 leading-7 text-blue-950">
            自動採譜ツールで生成したMIDIをDAWで開くと、ベースラインやコードの動きの参考になります。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/ear-copying-basics" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              耳コピの基本を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/chord-ear-copying" />
      </article>
    </main>
  );
}
