import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "ピアノロールとは？DAW初心者向けに基本的な見方・使い方を解説",
  description:
    "ピアノロールとは何かをDAW初心者向けに解説。縦軸・横軸の読み方、ノートの編集方法、自動採譜MIDIとの関係まで、わかりやすく紹介します。",
  alternates: {
    canonical: "/articles/what-is-piano-roll",
  },
  openGraph: {
    title: "ピアノロールとは？DAW初心者向けに基本的な見方・使い方を解説",
    description:
      "ピアノロールとは何かをDAW初心者向けに解説。縦軸・横軸の読み方、ノートの編集方法、自動採譜MIDIとの関係まで紹介します。",
    url: "/articles/what-is-piano-roll",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ピアノロールとは？DAW初心者向けに基本的な見方・使い方を解説",
    description:
      "ピアノロールとは何かをDAW初心者向けに解説。縦軸・横軸の読み方、ノートの編集方法、自動採譜MIDIとの関係まで紹介します。",
  },
};

export default function WhatIsPianoRollPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ピアノロールとは？DAW初心者向けに基本的な見方・使い方を解説",
    description:
      "ピアノロールとは何かをDAW初心者向けに解説。縦軸・横軸の読み方、ノートの編集方法、自動採譜MIDIとの関係まで紹介。",
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
      "@id": "/articles/what-is-piano-roll",
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
          <span>ピアノロールとは？</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            DAW・MIDI編集
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            ピアノロールとは？
            <br className="hidden md:block" />
            DAW初心者向けに見方・使い方をわかりやすく解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            公開日: 2026-06-01 / 更新日: 2026-06-01
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「DAWを開いたら横に伸びたバーがたくさん並んでいる画面が出てきた」
            ——それがピアノロールです。MIDIデータを視覚的に編集するこの画面の見方を、初心者向けにわかりやすく解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・ピアノロールとは何か</li>
            <li>・縦軸・横軸の読み方</li>
            <li>・ノート（音符）の意味と編集の基本</li>
            <li>・MIDIとピアノロールの関係</li>
            <li>・自動採譜後にピアノロールで修正する方法</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>ピアノロールとは何か</h2>
          <p>
            ピアノロールとは、<strong>MIDIデータを視覚的に表示・編集するための画面</strong>です。
            DAWソフトに標準搭載されており、どのDAWでもほぼ同じ形式で表示されます。
          </p>
          <p>
            名前の由来は、自動ピアノ（プレイヤーピアノ）に使われていた紙の「ピアノロール」です。
            紙に穴が開いている部分に対応した音が鳴る仕組みで、現代のDAWのピアノロール表示はこれを電子化したものです。
          </p>

          <h2>縦軸と横軸の読み方</h2>
          <p>
            ピアノロール画面は縦と横の2つの軸で構成されています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">軸</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">意味</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">具体的な内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">縦軸</td>
                  <td className="border border-gray-200 px-4 py-3">音の高さ（ピッチ）</td>
                  <td className="border border-gray-200 px-4 py-3">上に行くほど高音。左側に鍵盤が表示されていることが多い</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">横軸</td>
                  <td className="border border-gray-200 px-4 py-3">時間（タイミング）</td>
                  <td className="border border-gray-200 px-4 py-3">右に進むほど後の時間。小節・拍に分割されている</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            つまり、ピアノロール上に表示された<strong>横長のバー（ノート）</strong>は、
            「どの音を（縦位置）、いつから（横の開始位置）、どれくらいの長さで（バーの長さ）鳴らすか」を表しています。
          </p>

          <h2>ノートとは何か</h2>
          <p>
            ピアノロール上に表示される一つひとつのバーを<strong>ノート</strong>と呼びます。
            これがMIDIでいう「音符」に相当します。
          </p>
          <ul>
            <li>ノートの縦位置 → 音の高さ（C4、D4、E4などの音名）</li>
            <li>ノートの横位置 → 発音のタイミング（小節・拍）</li>
            <li>ノートの横の長さ → 音の長さ（4分音符、8分音符など）</li>
            <li>ノートの色の濃さ → ベロシティ（弾く強さ）を表すDAWもある</li>
          </ul>

          <h2>ピアノロールでできる基本操作</h2>
          <p>
            DAWのピアノロールでは、以下のような編集操作が直感的にできます。
          </p>
          <ul>
            <li>ノートのクリックで削除または選択</li>
            <li>空白部分のクリックで新しいノートを追加</li>
            <li>ノートをドラッグして音程や位置を変更</li>
            <li>ノートの端をドラッグして音の長さを変更</li>
            <li>複数ノートを範囲選択してまとめて移動・削除</li>
            <li>クオンタイズ（量子化）でリズムを整える</li>
          </ul>

          <h2>楽譜との違い</h2>
          <p>
            楽譜とピアノロールはどちらも音楽を視覚化したものですが、目的と見た目が異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">項目</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">ピアノロール</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">楽譜（五線譜）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">表示形式</td>
                  <td className="border border-gray-200 px-4 py-3">横長のバー</td>
                  <td className="border border-gray-200 px-4 py-3">音符・休符・記号</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">主な用途</td>
                  <td className="border border-gray-200 px-4 py-3">DAWでの打ち込み・編集</td>
                  <td className="border border-gray-200 px-4 py-3">演奏・学習・印刷</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">音楽知識</td>
                  <td className="border border-gray-200 px-4 py-3">少なくても扱いやすい</td>
                  <td className="border border-gray-200 px-4 py-3">読み方の学習が必要</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">編集のしやすさ</td>
                  <td className="border border-gray-200 px-4 py-3">視覚的に直感的</td>
                  <td className="border border-gray-200 px-4 py-3">記号を理解する必要あり</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            楽譜の読み書きが苦手な初心者でも、ピアノロールならバーの視覚的な配置から音楽を理解しやすいのが大きなメリットです。
          </p>

          <h2>MIDIとピアノロールの関係</h2>
          <p>
            ピアノロールで表示・編集されるデータが、そのまま<strong>MIDIデータ</strong>です。
            MIDIファイルを保存するとノートの情報がデータとして記録され、別のDAWや楽譜ソフトでも読み込めます。
          </p>
          <p>
            <Link href="/articles/what-is-midi" className="text-blue-600 underline hover:text-blue-800">
              MIDIとは何かについての記事
            </Link>
            でも詳しく解説していますが、MIDIは「音そのものではなく演奏情報」であるため、
            ピアノロールで編集するとそのデータが変わります。
          </p>

          <h2>自動採譜とピアノロールの組み合わせ</h2>
          <p>
            自動採譜ツールで音声ファイルからMIDIを生成し、それをDAWのピアノロールで開くと、
            AIが推定した音程とタイミングがバーとして表示されます。
          </p>
          <p>
            この状態から余分なノートを削除したり、ズレたノートを移動したりすることで、
            実用的なMIDIデータに仕上げることができます。
            自動採譜の精度が100%でなくても、ピアノロール上で視覚的に確認・修正できるため、
            <strong>耳コピの作業効率を大幅に上げられます。</strong>
          </p>

          <h2>初心者が最初に覚えるべきピアノロール操作</h2>
          <p>
            最初から全ての機能を使いこなそうとせず、以下の3つだけ覚えれば十分です。
          </p>
          <ol>
            <li><strong>ノートを追加する：</strong>空白部分をクリックして音を置く</li>
            <li><strong>ノートを移動する：</strong>ドラッグで音程・タイミングを変える</li>
            <li><strong>ノートを削除する：</strong>右クリックまたは選択してDeleteキー</li>
          </ol>
          <p>
            この3操作だけでも、自動採譜で生成したMIDIの簡単な修正ができるようになります。
          </p>

          <h2>まとめ</h2>
          <p>
            ピアノロールは、MIDIデータを視覚的に編集するDAWの基本画面です。
            縦軸が音の高さ、横軸が時間を表し、バー（ノート）の位置と長さで音楽を表現します。
          </p>
          <p>
            楽譜の読み書きが苦手でも直感的に扱えるのがピアノロールの強みです。
            自動採譜ツールと組み合わせれば、AIが生成したMIDIをピアノロールで確認・修正する流れで、
            耳コピや楽譜作成の作業を効率よく進められます。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            MIDIを自動生成してピアノロールで確認する
          </h2>
          <p className="mt-3 leading-7 text-blue-950">
            自動採譜ツールで音声からMIDIを生成し、DAWのピアノロールで開いて修正するのが効率的な使い方です。
            まずは短い音源で試してみてください。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tool"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ツールを使ってみる
            </Link>
            <Link
              href="/articles/what-is-midi"
              className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              MIDIの基本を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/what-is-piano-roll" />
      </article>
    </main>
  );
}
