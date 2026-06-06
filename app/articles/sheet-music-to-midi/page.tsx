import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "楽譜をMIDIに変換する方法｜スキャンと打ち込みで取り込む手順",
  description:
    "紙の楽譜やPDF楽譜をMIDIデータに変換する方法を初心者向けに解説。楽譜認識ソフトの使い方、手打ち込みとの使い分け、MuseScoreでの操作まで紹介します。",
  alternates: { canonical: "/articles/sheet-music-to-midi" },
  openGraph: {
    title: "楽譜をMIDIに変換する方法｜スキャンと打ち込みで取り込む手順",
    description: "楽譜をMIDIに変換する方法を初心者向けに解説します。",
    url: "/articles/sheet-music-to-midi",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "楽譜をMIDIに変換する方法",
    description: "楽譜をMIDIに変換する方法を初心者向けに解説します。",
  },
};

export default function SheetMusicToMidiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "楽譜をMIDIに変換する方法｜スキャンと打ち込みで取り込む手順",
    description:
      "紙の楽譜やPDF楽譜をMIDIデータに変換する方法を初心者向けに解説。楽譜認識ソフトの使い方、手打ち込みとの使い分け、MuseScoreでの操作まで紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/sheet-music-to-midi" },
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
          <span>楽譜をMIDIに変換する方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            MIDI・変換
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            楽譜をMIDIに変換する方法
            <br className="hidden md:block" />
            スキャンと打ち込みで取り込む手順
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-06-07 / 更新日: 2026-06-07</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「紙の楽譜をDAWに取り込みたい」「楽譜をMIDIにしてソフト音源で再生したい」
            そんな方向けに、楽譜をMIDIデータに変換するアプローチを方法別に解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・楽譜をMIDIにする3つのアプローチ</li>
            <li>・楽譜認識ソフト（OMR）の仕組みと使い方</li>
            <li>・MuseScoreでの手打ち込み方法</li>
            <li>・各方法のメリット・デメリット比較</li>
            <li>・著作権への注意点</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>楽譜をMIDIに変換する3つの方法</h2>

          <h3>方法1：楽譜認識ソフト（OMR）を使う</h3>
          <p>
            OMR（Optical Music Recognition）は、楽譜の画像をスキャン・撮影してデジタルデータとして認識するソフトウェアです。
            PhotoScoreやSmartScoreなどの専用ソフトのほか、近年はAIベースの楽譜認識サービスも登場しています。
          </p>
          <p>
            <strong>メリット：</strong>長い楽譜を素早くデジタル化できる、入力作業が不要<br />
            <strong>デメリット：</strong>認識精度にばらつきがある、複雑な記譜には対応しにくい
          </p>

          <h3>方法2：MuseScoreで手打ち込みする</h3>
          <p>
            楽譜を見ながらMuseScoreに音符を入力する方法です。
            時間はかかりますが、最も正確なデジタル化ができます。
            入力後に「ファイル→書き出し→MIDI」でMIDIとして保存できます。
          </p>
          <p>
            <strong>メリット：</strong>精度が高い、細かい表情記号も反映できる<br />
            <strong>デメリット：</strong>手間と時間がかかる
          </p>

          <h3>方法3：楽譜を演奏して自動採譜する</h3>
          <p>
            楽譜を実際に演奏（ピアノなど）して録音し、自動採譜ツールでMIDI化する方法です。
            楽譜を読んで演奏できる方であれば、手打ち込みより速くデジタル化できます。
          </p>
          <p>
            <strong>メリット：</strong>演奏できれば比較的速い、音の強弱も含まれる<br />
            <strong>デメリット：</strong>演奏スキルが必要、採譜精度は演奏の質に依存する
          </p>

          <h2>方法比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">方法</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">所要時間</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">精度</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">必要スキル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">OMRソフト</td>
                  <td className="border border-gray-200 px-4 py-3">短い</td>
                  <td className="border border-gray-200 px-4 py-3">中程度</td>
                  <td className="border border-gray-200 px-4 py-3">ソフトの操作</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">手打ち込み</td>
                  <td className="border border-gray-200 px-4 py-3">長い</td>
                  <td className="border border-gray-200 px-4 py-3">高い</td>
                  <td className="border border-gray-200 px-4 py-3">楽譜読み、MuseScore操作</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">演奏→自動採譜</td>
                  <td className="border border-gray-200 px-4 py-3">中程度</td>
                  <td className="border border-gray-200 px-4 py-3">中程度</td>
                  <td className="border border-gray-200 px-4 py-3">楽器演奏、録音</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>MuseScoreで楽譜を打ち込んでMIDIにする手順</h2>
          <ol>
            <li>MuseScoreを起動し、「新しいスコア」を作成する</li>
            <li>楽器・拍子・調号を設定する</li>
            <li>入力モードをオンにして音符を一つずつ入力する（音符の長さを選んでから音名を押す）</li>
            <li>入力完了後、「ファイル→書き出し→MIDI（.mid）」で保存する</li>
          </ol>
          <p>
            MuseScoreの音符入力の詳細は
            <Link href="/articles/musescore-midi-edit" className="text-blue-600 underline hover:text-blue-800">
              MuseScoreの使い方の記事
            </Link>
            で解説しています。
          </p>

          <h2>楽譜演奏→自動採譜でMIDIにする手順</h2>
          <ol>
            <li>楽譜を見ながらピアノなどで演奏し、スマートフォンや録音アプリで録音する</li>
            <li>録音ファイルをMP3またはWAVとして書き出す</li>
            <li>本サイトの自動採譜ツールにアップロードしてMIDIを生成する</li>
            <li>生成されたMIDIをMuseScoreやDAWで確認・修正する</li>
          </ol>

          <h2>著作権への注意</h2>
          <p>
            市販の楽譜を無断でデジタル化・配布することは著作権侵害になる可能性があります。
          </p>
          <ul>
            <li>個人の練習・学習目的でのデジタル化は私的利用として認められる場合が多い</li>
            <li>デジタル化した楽譜やMIDIをSNSや配布サイトに公開することは著作権上問題になり得る</li>
            <li>アレンジや商用利用は事前に権利者の許可が必要</li>
          </ul>

          <h2>まとめ</h2>
          <p>
            楽譜をMIDIに変換する方法は、<strong>OMRソフト・手打ち込み・演奏→自動採譜</strong>の3通りがあります。
            楽譜が短くシンプルなら手打ち込みが確実で、
            演奏できるなら録音→自動採譜が効率的です。
            長い楽譜や複雑な記譜にはOMRソフトを活用するのが向いています。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">演奏した音源を自動採譜でMIDIにする</h2>
          <p className="mt-3 leading-7 text-blue-950">
            楽譜を弾いて録音した音源を本サイトのツールでMIDI化できます。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/midi-to-sheet-music" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              MIDIを楽譜にする逆の手順を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/sheet-music-to-midi" />
      </article>
    </main>
  );
}
