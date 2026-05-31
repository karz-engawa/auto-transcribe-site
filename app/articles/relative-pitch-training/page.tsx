import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "相対音感の鍛え方｜初心者向け耳トレーニングの基本と練習法",
  description:
    "相対音感とは何かを初心者向けに解説。絶対音感との違い、具体的な練習方法、耳コピ・自動採譜との組み合わせ方まで、わかりやすく紹介します。",
  alternates: {
    canonical: "/articles/relative-pitch-training",
  },
  openGraph: {
    title: "相対音感の鍛え方｜初心者向け耳トレーニングの基本と練習法",
    description:
      "相対音感とは何かを初心者向けに解説。絶対音感との違い、具体的な練習方法、耳コピとの組み合わせ方まで紹介します。",
    url: "/articles/relative-pitch-training",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "相対音感の鍛え方｜初心者向け耳トレーニングの基本と練習法",
    description:
      "相対音感とは何かを初心者向けに解説。絶対音感との違い、具体的な練習方法、耳コピとの組み合わせ方まで紹介します。",
  },
};

export default function RelativePitchTrainingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "相対音感の鍛え方｜初心者向け耳トレーニングの基本と練習法",
    description:
      "相対音感とは何かを初心者向けに解説。絶対音感との違い、具体的な練習方法、耳コピ・自動採譜との組み合わせ方まで紹介。",
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
      "@id": "/articles/relative-pitch-training",
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
          <span>相対音感の鍛え方</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            耳トレーニング・音感
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            相対音感の鍛え方
            <br className="hidden md:block" />
            初心者向け耳トレーニングの基本と練習法
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            公開日: 2026-06-01 / 更新日: 2026-06-01
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「耳コピをしたいけど音感がない」「絶対音感がないと無理なの？」
            そんな疑問を持つ方向けに、相対音感の仕組みと、誰でも実践できる鍛え方を初心者向けに解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・相対音感とは何か</li>
            <li>・絶対音感との違い</li>
            <li>・相対音感を鍛える具体的な練習法</li>
            <li>・耳コピで相対音感を伸ばす方法</li>
            <li>・自動採譜ツールを練習に活用する方法</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>相対音感とは何か</h2>
          <p>
            相対音感とは、<strong>基準となる音に対して他の音の高さを判断できる能力</strong>です。
            たとえば「ドを弾いたとき、次の音がドより3音高いからミだ」と判断できるのが相対音感です。
          </p>
          <p>
            日常的に音楽を聴いたり演奏したりしていれば、程度の差はありますが誰でも相対音感を持っています。
            そして<strong>大人になってからでも練習で鍛えられる</strong>のが相対音感の大きな特徴です。
          </p>

          <h2>絶対音感との違い</h2>
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
                  <td className="border border-gray-200 px-4 py-3">判断の方法</td>
                  <td className="border border-gray-200 px-4 py-3">音を聴くだけで音名がわかる</td>
                  <td className="border border-gray-200 px-4 py-3">基準音との関係で音名を判断する</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">習得時期</td>
                  <td className="border border-gray-200 px-4 py-3">幼児期の訓練が必要</td>
                  <td className="border border-gray-200 px-4 py-3">大人からでも習得・強化できる</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">音楽実用性</td>
                  <td className="border border-gray-200 px-4 py-3">高い（音名が即座にわかる）</td>
                  <td className="border border-gray-200 px-4 py-3">高い（移調にも強く実用的）</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">耳コピへの活用</td>
                  <td className="border border-gray-200 px-4 py-3">直接音名がわかる</td>
                  <td className="border border-gray-200 px-4 py-3">基準音を決めてから音程を追う</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            絶対音感を持つ人は一部ですが、相対音感はほぼ全てのプロミュージシャンが使っているスキルです。
            耳コピや作曲において<strong>相対音感で十分に対応できます。</strong>
          </p>

          <h2>相対音感の仕組み</h2>
          <p>
            相対音感の核心は<strong>「音程（インターバル）の認識」</strong>です。
            音程とは2つの音の高さの差のことで、「半音1つ分」「全音2つ分」「長3度」などと表現します。
          </p>
          <p>
            たとえば「ドとミは長3度離れている」という関係を覚えておくことで、
            知らない曲でも「今の音からどれくらい上がったか・下がったか」で次の音を推測できます。
            この音程を素早く正確に聴き取る能力が、相対音感の実力です。
          </p>

          <h2>相対音感を鍛える練習法</h2>

          <h3>1. 音程当て練習（インターバルトレーニング）</h3>
          <p>
            2つの音を聴いて「何度離れているか」を当てる練習です。
            最初は半音（短2度）と全音（長2度）の区別から始め、慣れてきたら3度・4度・5度と広げていきます。
          </p>
          <p>
            音程に親しみやすくするために、代表的な曲の出だしと結びつけて覚える方法が効果的です。
            たとえば「ド・レ（長2度）= ハッピーバースデーの出だし」という形で記憶に関連付けます。
          </p>

          <h3>2. スケール（音階）の歌い上げ練習</h3>
          <p>
            ドレミファソラシドをゆっくりと歌いながら、それぞれの音の間隔を体に染み込ませます。
            楽器で確認しながら行うと、音名と実際の音の高さが一致していきます。
          </p>

          <h3>3. メロディを声で歌って楽器で確認する</h3>
          <p>
            好きな曲の短いフレーズを声で歌い、次にピアノや鍵盤アプリで答え合わせをする練習です。
            「頭の中で鳴っている音を外に出し、楽器で検証する」という繰り返しが相対音感を鍛えます。
          </p>

          <h3>4. コード（和音）を聴き分ける練習</h3>
          <p>
            メジャーコードとマイナーコードの響きの違いを聴き分ける練習から始めます。
            「明るく聞こえる（メジャー）」「暗く聞こえる（マイナー）」という印象の違いを意識することで、
            和声感が身につきます。
          </p>

          <h2>耳コピで相対音感を実践的に鍛える</h2>
          <p>
            相対音感の最も実践的な練習が<strong>耳コピ</strong>です。
            曲の音を一音一音自分で拾う作業は、音程の認識力を直接鍛えます。
          </p>
          <p>
            ただし、最初は難しい曲を選ぶと挫折しやすいため、以下のような曲から始めることをおすすめします。
          </p>
          <ul>
            <li>テンポがゆっくりで単音中心の曲</li>
            <li>ピアノソロやギター弾き語りなど楽器数が少ない曲</li>
            <li>童謡・ポップスの有名メロディ（音が読みやすい）</li>
          </ul>
          <p>
            詳しくは
            <Link href="/articles/ear-copying-basics" className="text-blue-600 underline hover:text-blue-800">
              耳コピのやり方・コツの記事
            </Link>
            もあわせてご覧ください。
          </p>

          <h2>自動採譜ツールを練習に活用する方法</h2>
          <p>
            相対音感のトレーニングに自動採譜ツールを組み合わせると、学習効率が上がります。
          </p>
          <ol>
            <li>好きな曲の音声ファイルをアップロードしてMIDIを生成する</li>
            <li>自分でも耳コピを試みて、音程を予測してみる</li>
            <li>自動採譜の結果と自分の答えを比較する</li>
            <li>ズレていた箇所を確認し、音程の関係を再確認する</li>
          </ol>
          <p>
            AIの出力を「正解と照らし合わせる参考」として使うことで、
            耳コピのフィードバックサイクルを素早く回せます。
            完全正解のMIDIでなくても、<strong>大まかな音程の流れを確認するツール</strong>として活用できます。
          </p>

          <h2>相対音感が伸びるとどうなるか</h2>
          <ul>
            <li>耳コピの速度が上がる</li>
            <li>楽譜を見たときに音が頭の中で鳴るようになる</li>
            <li>コード進行が「感覚」でわかるようになる</li>
            <li>メロディラインを見て「明るい・暗い」が音程レベルで理解できる</li>
            <li>歌や演奏でのピッチ（音程の正確さ）が上がる</li>
          </ul>

          <h2>毎日の習慣にするためのコツ</h2>
          <p>
            耳トレーニングは1回の長い練習より、<strong>毎日短時間続けること</strong>が効果的です。
          </p>
          <ul>
            <li>通勤・通学中に好きな曲のメロディを頭の中で音名で追う</li>
            <li>1日5〜10分、音程当て練習アプリを使う</li>
            <li>DAWやMuseScoreで音を確認する習慣をつける</li>
          </ul>
          <p>
            特別な時間を作らなくても、日常の中に耳トレの要素を組み込むことで着実に力がついていきます。
          </p>

          <h2>まとめ</h2>
          <p>
            相対音感は大人からでも鍛えられる実用的な音楽スキルです。
            絶対音感がなくても、相対音感があれば耳コピ・作曲・演奏のあらゆる場面で活躍できます。
          </p>
          <p>
            インターバルトレーニング・スケールの歌い上げ・耳コピの実践を組み合わせながら、
            毎日少しずつ続けることが上達の近道です。
            自動採譜ツールをフィードバックツールとして活用すると、練習の質がさらに上がります。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            耳コピの練習に自動採譜を活用する
          </h2>
          <p className="mt-3 leading-7 text-blue-950">
            音声ファイルからMIDIを自動生成し、自分の耳コピ結果と比較することで、
            相対音感のトレーニングに役立てられます。まずは短い音源から試してみてください。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tool"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ツールを使ってみる
            </Link>
            <Link
              href="/articles/ear-copying-basics"
              className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              耳コピのやり方を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/relative-pitch-training" />
      </article>
    </main>
  );
}
