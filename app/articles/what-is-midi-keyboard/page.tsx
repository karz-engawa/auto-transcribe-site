import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "MIDIキーボードとは？初心者向けに仕組みと選び方を解説",
  description:
    "MIDIキーボードとは何かを初心者向けに解説。仕組み、PCキーボードとの違い、DAWへの接続方法、初心者向けの選び方まで、わかりやすく紹介します。",
  alternates: {
    canonical: "/articles/what-is-midi-keyboard",
  },
  openGraph: {
    title: "MIDIキーボードとは？初心者向けに仕組みと選び方を解説",
    description:
      "MIDIキーボードとは何かを初心者向けに解説。仕組み、DAWへの接続方法、初心者向けの選び方まで紹介します。",
    url: "/articles/what-is-midi-keyboard",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIDIキーボードとは？初心者向けに仕組みと選び方を解説",
    description:
      "MIDIキーボードとは何かを初心者向けに解説。仕組み、DAWへの接続方法、初心者向けの選び方まで紹介します。",
  },
};

export default function WhatIsMidiKeyboardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MIDIキーボードとは？初心者向けに仕組みと選び方を解説",
    description:
      "MIDIキーボードとは何かを初心者向けに解説。仕組み、PCキーボードとの違い、DAWへの接続方法、初心者向けの選び方まで紹介。",
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
      "@id": "/articles/what-is-midi-keyboard",
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
          <span>MIDIキーボードとは？</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            MIDIキーボード・機材
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            MIDIキーボードとは？
            <br className="hidden md:block" />
            初心者向けに仕組みと選び方を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            公開日: 2026-06-01 / 更新日: 2026-06-01
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「MIDIキーボードって普通のキーボードと何が違うの？」「DAWで使うには何が必要？」
            そんな疑問を持つ初心者の方向けに、MIDIキーボードの仕組みから選び方まで丁寧に解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・MIDIキーボードとは何か</li>
            <li>・電子ピアノ・シンセサイザーとの違い</li>
            <li>・DAWへの接続方法</li>
            <li>・初心者向けの選び方のポイント</li>
            <li>・MIDIキーボードなしでも音楽制作できるか</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>MIDIキーボードとは何か</h2>
          <p>
            MIDIキーボードとは、<strong>MIDI信号を出力するための鍵盤コントローラー</strong>です。
            鍵盤を弾くと「どの音を、どのくらいの強さで、いつ押した」というMIDI信号がパソコンやDAWに送られます。
          </p>
          <p>
            重要なのは、<strong>MIDIキーボード自体はスピーカーもアンプも内蔵していない</strong>点です。
            音を鳴らすにはDAWや音源ソフトと接続する必要があります。
            MIDIキーボードは「演奏情報を送る入力装置」であり、音を出す装置ではありません。
          </p>

          <h2>電子ピアノ・シンセサイザーとの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">機材</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">音源内蔵</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">主な用途</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">価格帯</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">MIDIキーボード</td>
                  <td className="border border-gray-200 px-4 py-3">なし</td>
                  <td className="border border-gray-200 px-4 py-3">DAW・音源ソフトの制御</td>
                  <td className="border border-gray-200 px-4 py-3">5,000円〜</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">電子ピアノ</td>
                  <td className="border border-gray-200 px-4 py-3">あり</td>
                  <td className="border border-gray-200 px-4 py-3">ピアノ演奏の練習</td>
                  <td className="border border-gray-200 px-4 py-3">30,000円〜</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">シンセサイザー</td>
                  <td className="border border-gray-200 px-4 py-3">あり</td>
                  <td className="border border-gray-200 px-4 py-3">音色の作成・演奏</td>
                  <td className="border border-gray-200 px-4 py-3">30,000円〜</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            MIDIキーボードは単体では音が出ませんが、<strong>コンパクトで安価</strong>なのが特徴です。
            音楽制作用のDAWや音源ソフトと組み合わせて使います。
          </p>

          <h2>MIDIキーボードでできること</h2>
          <ul>
            <li>DAWのピアノロールにリアルタイムでMIDI入力する</li>
            <li>音源ソフト（ピアノ・ストリングスなど）を演奏する</li>
            <li>コードやメロディの打ち込みをマウスより速く行う</li>
            <li>ノブ・スライダーでDAWのパラメータをリアルタイム制御する</li>
            <li>テンポに合わせてリズムパターンを入力する</li>
          </ul>

          <h2>DAWへの接続方法</h2>
          <p>
            現在販売されているMIDIキーボードのほとんどは、<strong>USBケーブル1本でパソコンに接続</strong>できます。
            ドライバのインストールが不要な「クラスコンプライアント」対応のモデルも多く、
            接続するだけですぐに使えます。
          </p>
          <ol>
            <li>USBケーブルでMIDIキーボードとパソコンを接続する</li>
            <li>DAWを起動し、MIDIキーボードをMIDI入力デバイスとして設定する</li>
            <li>音源ソフト（インストゥルメント）をトラックに挿入する</li>
            <li>MIDIキーボードの鍵盤を弾くと音が鳴り、MIDI入力が記録される</li>
          </ol>
          <p>
            古いモデルには5ピンのDIN端子（丸いコネクタ）しかないものもありますが、
            最近の初心者向けモデルはUSBのみで完結します。
          </p>

          <h2>初心者向けの選び方</h2>

          <h3>鍵盤数で選ぶ</h3>
          <p>
            MIDIキーボードは鍵盤数によって携帯性と弾きやすさが変わります。
          </p>
          <ul>
            <li><strong>25鍵：</strong>超コンパクト。持ち運びに便利だが、和音の演奏範囲が狭い</li>
            <li><strong>49鍵：</strong>バランスが良く、初心者に最もおすすめの鍵盤数</li>
            <li><strong>61鍵：</strong>本格的な演奏もできる。DTMスタジオ向き</li>
            <li><strong>88鍵：</strong>フルサイズ。ピアノ演奏の練習にも使いたい場合</li>
          </ul>

          <h3>鍵盤のタッチ感で選ぶ</h3>
          <p>
            鍵盤のタッチには「ミニ鍵盤」「スタンダード鍵盤」「セミウェイテッド」「フルウェイテッド」などの種類があります。
            DAWでの打ち込みメインなら軽いタッチで問題ありません。
            ピアノの練習も兼ねたい場合はセミウェイテッド以上がおすすめです。
          </p>

          <h3>アフタータッチ・ベロシティ対応</h3>
          <p>
            ベロシティとは「どれくらいの強さで鍵盤を押したか」を検知する機能です。
            ほぼすべての現行モデルが対応しています。
            アフタータッチは押した後の圧力も検知する機能で、より表現豊かな演奏が可能になります。
          </p>

          <h2>MIDIキーボードなしでも音楽制作はできる？</h2>
          <p>
            はい、できます。DAWではマウスで直接ピアノロールにノートを描いて入力することが可能です。
            ただし、コードやメロディをリアルタイムで演奏しながら入力したい場合は、
            MIDIキーボードがあると作業効率が大幅に上がります。
          </p>
          <p>
            音楽制作を始めたばかりの段階では、まずMIDIキーボードなしでDAWの基本操作を覚え、
            必要を感じてから購入するのも良い進め方です。
            <Link href="/articles/music-production-beginner-guide" className="text-blue-600 underline hover:text-blue-800">
              音楽制作を独学で始める方法の記事
            </Link>
            も参考にしてください。
          </p>

          <h2>MIDIキーボードとMIDIの関係</h2>
          <p>
            MIDIキーボードで演奏したデータは、そのままMIDI形式でDAWに記録されます。
            つまり、
            <Link href="/articles/what-is-midi" className="text-blue-600 underline hover:text-blue-800">
              MIDIとは何かの記事
            </Link>
            で解説している通り、音そのものではなく「演奏情報」として保存されます。
            後から音程・テンポ・音色を自由に変更できるのがMIDI入力の大きなメリットです。
          </p>

          <h2>初心者向けのまとめ</h2>
          <p>
            MIDIキーボードは、DAWへの音楽入力をより自然に・効率的に行うためのコントローラーです。
            音源は内蔵していませんが、USBでパソコンに繋ぐだけで音楽制作の幅が大きく広がります。
          </p>
          <p>
            初心者には<strong>49鍵・USB接続対応のモデル</strong>がバランス良くおすすめです。
            まずは手頃な価格帯のものから試してみて、慣れてきたら自分のスタイルに合ったものにステップアップするのが現実的な進め方です。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            音声からMIDIを自動生成する
          </h2>
          <p className="mt-3 leading-7 text-blue-950">
            MIDIキーボードがなくても、音声ファイルから自動採譜ツールでMIDIを生成できます。
            DAWやMuseScoreに読み込んで活用してください。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tool"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ツールを使ってみる
            </Link>
            <Link
              href="/articles/what-is-daw"
              className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              DAWの基本を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/what-is-midi-keyboard" />
      </article>
    </main>
  );
}
