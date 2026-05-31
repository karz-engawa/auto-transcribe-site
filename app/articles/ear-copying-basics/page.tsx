import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "耳コピとは？初心者向けにやり方・コツ・練習法を解説",
  description:
    "耳コピとは何かを初心者向けに解説。基本的なやり方、コツ、よくある失敗と対策、自動採譜ツールを使った効率化方法まで丁寧に紹介します。",
  alternates: {
    canonical: "/articles/ear-copying-basics",
  },
  openGraph: {
    title: "耳コピとは？初心者向けにやり方・コツ・練習法を解説",
    description:
      "耳コピとは何かを初心者向けに解説。基本的なやり方、コツ、自動採譜ツールを使った効率化方法まで紹介します。",
    url: "/articles/ear-copying-basics",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "耳コピとは？初心者向けにやり方・コツ・練習法を解説",
    description:
      "耳コピとは何かを初心者向けに解説。基本的なやり方、コツ、自動採譜ツールを使った効率化方法まで紹介します。",
  },
};

export default function EarCopyingBasicsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "耳コピとは？初心者向けにやり方・コツ・練習法を解説",
    description:
      "耳コピとは何かを初心者向けに解説。基本的なやり方、コツ、よくある失敗と対策、自動採譜ツールを使った効率化方法まで紹介。",
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
      "@id": "/articles/ear-copying-basics",
    },
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
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
          <span>耳コピとは？</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            耳コピ・音感
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            耳コピとは？
            <br className="hidden md:block" />
            初心者向けにやり方・コツ・練習法を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            公開日: 2026-06-01 / 更新日: 2026-06-01
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「耳コピってどうやるの？」「音感がないと無理？」
            そんな疑問を持つ初心者の方向けに、耳コピの基本から実践的なやり方・コツまでをわかりやすく解説します。
            自動採譜ツールを使った効率化方法も合わせて紹介します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・耳コピとは何か</li>
            <li>・耳コピの基本的なやり方と手順</li>
            <li>・初心者が実践できるコツ</li>
            <li>・よくある失敗とその対策</li>
            <li>・自動採譜ツールを使った効率化の方法</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>耳コピとは何か</h2>
          <p>
            耳コピとは、<strong>音楽を耳で聴いて、音符や演奏内容を自分で再現すること</strong>です。
            正式には「聴音採譜」とも呼ばれますが、日本では「耳コピ」という言葉が広く使われています。
          </p>
          <p>
            楽譜がない曲を演奏したいとき、好きなフレーズを覚えてアレンジしたいとき、
            あるいは音楽の構造を深く理解したいときなど、さまざまな場面で使われるスキルです。
          </p>
          <p>
            「絶対音感がないとできない」と思われがちですが、それは誤解です。
            多くのミュージシャンは<strong>相対音感</strong>を使って耳コピをしており、
            繰り返しの練習で誰でも上達できます。
          </p>

          <h2>耳コピの基本的な手順</h2>
          <p>
            初心者が取り組みやすい耳コピの手順は次の通りです。
          </p>
          <ol>
            <li>まず曲全体を何度も聴いて、流れをつかむ</li>
            <li>メインメロディだけに集中して、最初の数音を特定する</li>
            <li>楽器や鍵盤アプリを使って音を一つずつ確認する</li>
            <li>確認できた音をDAWや楽譜ソフトに入力していく</li>
            <li>メロディが取れたら、次にベースや伴奏コードに挑戦する</li>
          </ol>
          <p>
            最初から完璧に仕上げようとせず、<strong>メロディだけ</strong>から始めるのがコツです。
            一小節ずつ区切って集中すると、集中力が続きやすくなります。
          </p>

          <h2>耳コピをうまくするためのコツ</h2>

          <h3>速度を落として聴く</h3>
          <p>
            速いフレーズはそのままでは音が聴き取りにくいため、再生速度を0.5〜0.75倍に落として聴くと個々の音が判別しやすくなります。
            音楽プレイヤーアプリやDAWの速度変更機能を活用してください。
          </p>

          <h3>ループ再生で繰り返し聴く</h3>
          <p>
            気になる箇所を数秒のループに設定して繰り返し聴くと、音程やリズムが頭に定着しやすくなります。
            慣れてくれば3〜5回のループで音が取れるようになります。
          </p>

          <h3>音程を声で歌ってみる</h3>
          <p>
            聴こえた音を口ずさんでから楽器で確認すると、音の高低がつかみやすくなります。
            楽器をすぐに触る前に「ラ・ド・ミ」などと声に出してみるのが効果的です。
          </p>

          <h3>キーを先に特定する</h3>
          <p>
            曲のキー（調性）がわかると、使われている音の候補が絞られます。
            最初の音や終わりの音からキーを推測し、そのスケール（音階）の中から音を探すと効率が上がります。
          </p>

          <h2>よくある失敗と対策</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">失敗</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">原因</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">対策</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">音が全然取れない</td>
                  <td className="border border-gray-200 px-4 py-3">難易度が高すぎる</td>
                  <td className="border border-gray-200 px-4 py-3">単音のシンプルな曲から始める</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">途中で挫折する</td>
                  <td className="border border-gray-200 px-4 py-3">一気に全部取ろうとしている</td>
                  <td className="border border-gray-200 px-4 py-3">1フレーズ・1小節ずつ区切る</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">音が半音ずれる</td>
                  <td className="border border-gray-200 px-4 py-3">キーの特定ができていない</td>
                  <td className="border border-gray-200 px-4 py-3">曲のキーを先に調べる</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">リズムがズレる</td>
                  <td className="border border-gray-200 px-4 py-3">テンポを意識できていない</td>
                  <td className="border border-gray-200 px-4 py-3">メトロノームに合わせながら確認する</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>耳コピに向いている曲・向いていない曲</h2>
          <p>
            初心者が最初に取り組むなら、以下のような曲が耳コピしやすいです。
          </p>
          <ul>
            <li>テンポがゆっくりな曲</li>
            <li>単音メロディが中心の曲</li>
            <li>楽器の種類が少ない曲（ピアノソロ・アコースティックギターなど）</li>
            <li>繰り返しのパターンが多い曲</li>
          </ul>
          <p>
            一方で、以下のような曲は難易度が高く、最初は避けた方が無難です。
          </p>
          <ul>
            <li>テンポが速いロック・ポップス</li>
            <li>複数の楽器が重なるバンド曲</li>
            <li>複雑な和音進行のジャズ曲</li>
            <li>ボーカルのビブラートやコブシが多い曲</li>
          </ul>

          <h2>自動採譜ツールを使って耳コピを効率化する</h2>
          <p>
            近年では、音声ファイルをAIで解析してMIDIデータを自動生成する
            <strong>自動採譜ツール</strong>が利用できるようになっています。
          </p>
          <p>
            完全に正確な採譜はできませんが、<strong>耳コピの「たたき台」</strong>として非常に役立ちます。
            AIが生成したMIDIを参考にしながら、人の耳で細部を確認・修正していく流れが効率的です。
          </p>
          <ul>
            <li>音が出ているタイミングの目安がわかる</li>
            <li>大まかな音程の候補が表示される</li>
            <li>MuseScoreやDAWで視覚的に確認しながら修正できる</li>
          </ul>
          <p>
            詳しくは
            <Link href="/articles/ear-copy-efficiency" className="text-blue-600 underline hover:text-blue-800">
              耳コピを効率化する方法の記事
            </Link>
            もあわせてご覧ください。
          </p>

          <h2>耳コピと楽譜読みの違い</h2>
          <p>
            耳コピは「耳から音楽を学ぶ」アプローチで、楽譜読みは「目から音楽を学ぶ」アプローチです。
            どちらが優れているということはなく、両方のスキルを組み合わせると音楽力が大きく伸びます。
          </p>
          <p>
            耳コピを続けることで音感が鍛えられ、楽譜を見たときに「音が頭の中で鳴る」感覚が強くなっていきます。
            <Link href="/articles/relative-pitch-training" className="text-blue-600 underline hover:text-blue-800">
              相対音感の練習方法
            </Link>
            と組み合わせると、より効果的にスキルアップできます。
          </p>

          <h2>初心者向けのまとめ</h2>
          <p>
            耳コピは音感があるかないかより、<strong>正しい手順と練習の積み重ね</strong>で上達できるスキルです。
          </p>
          <p>
            まずはシンプルな単音メロディから始め、ループ再生・速度落とし・声で歌うといったコツを使いながら少しずつ進めてみてください。
            慣れてきたら自動採譜ツールをたたき台として使うことで、作業スピードをさらに上げられます。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            耳コピの下書きを自動生成する
          </h2>
          <p className="mt-3 leading-7 text-blue-950">
            自動採譜ツールを使うと、音声ファイルからMIDIのたたき台を作れます。
            MuseScoreやDAWで修正しながら使うことで、耳コピ作業を大幅に効率化できます。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tool"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ツールを使ってみる
            </Link>
            <Link
              href="/articles/ear-copy-efficiency"
              className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              耳コピ効率化の記事を見る
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/ear-copying-basics" />
      </article>
    </main>
  );
}
