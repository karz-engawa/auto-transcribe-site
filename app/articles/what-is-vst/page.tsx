import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "VSTプラグインとは？DAW初心者向けに仕組みと使い方を解説",
  description:
    "VSTプラグインとは何かをDAW初心者向けに解説。VSTiとVSTの違い、インストール方法、おすすめの無料VSTプラグイン、MIDIとの関係まで紹介します。",
  alternates: { canonical: "/articles/what-is-vst" },
  openGraph: {
    title: "VSTプラグインとは？DAW初心者向けに仕組みと使い方を解説",
    description: "VSTプラグインとは何かをDAW初心者向けに解説します。",
    url: "/articles/what-is-vst",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "VSTプラグインとは？DAW初心者向けに仕組みと使い方を解説",
    description: "VSTプラグインとは何かをDAW初心者向けに解説します。",
  },
};

export default function WhatIsVstPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "VSTプラグインとは？DAW初心者向けに仕組みと使い方を解説",
    description:
      "VSTプラグインとは何かをDAW初心者向けに解説。VSTiとVSTの違い、インストール方法、おすすめの無料VSTプラグイン、MIDIとの関係まで紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/what-is-vst" },
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
          <span>VSTプラグインとは？</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            DAW・音楽制作
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            VSTプラグインとは？
            <br className="hidden md:block" />
            DAW初心者向けに仕組みと使い方を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-06-07 / 更新日: 2026-06-07</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            DAWを使い始めると必ず目にする「VSTプラグイン」や「VSTi」という言葉。
            初心者にはとっつきにくい用語ですが、仕組みを理解するとDAWでできることが大きく広がります。
            この記事でわかりやすく解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・VSTプラグインとは何か</li>
            <li>・VSTとVSTiの違い</li>
            <li>・VSTプラグインのインストールと設定方法</li>
            <li>・MIDIとVSTiの関係</li>
            <li>・無料で使えるVSTプラグインの種類</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>VSTプラグインとは何か</h2>
          <p>
            VST（Virtual Studio Technology）は、Steinberg社が開発した
            <strong>DAW（音楽制作ソフト）に機能を追加するための規格</strong>です。
            VSTプラグインをDAWに読み込むことで、ソフトウェア上で様々な音源やエフェクトを使えるようになります。
          </p>
          <p>
            たとえば、DAWに標準搭載されていないピアノ音源・シンセサイザー・管楽器音源なども、
            VSTプラグインとして追加することで演奏に使えます。
          </p>

          <h2>VSTとVSTiの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">種類</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">正式名</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">役割</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">VST（エフェクト）</td>
                  <td className="border border-gray-200 px-4 py-3">VSTエフェクト</td>
                  <td className="border border-gray-200 px-4 py-3">音声に効果を加える</td>
                  <td className="border border-gray-200 px-4 py-3">リバーブ、コンプレッサー、EQ</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">VSTi（音源）</td>
                  <td className="border border-gray-200 px-4 py-3">Virtual Instrument</td>
                  <td className="border border-gray-200 px-4 py-3">MIDIを受けて音を鳴らす</td>
                  <td className="border border-gray-200 px-4 py-3">ピアノ音源、シンセ、ドラム音源</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            MIDIと直接関係があるのは<strong>VSTi（ソフトウェア音源）</strong>です。
            自動採譜で生成したMIDIをDAWで再生するとき、実際に音を鳴らすのがVSTiです。
          </p>

          <h2>MIDIとVSTiの関係</h2>
          <p>
            MIDIデータはいわば「演奏の設計図」で、それ自体には音がありません。
            VSTiはその設計図を受け取り、設定された音色（ピアノ・ストリングス・シンセなど）で音として出力します。
          </p>
          <p>
            つまり、<strong>同じMIDIデータでもVSTiを変えるだけで全く異なる音色で再生できます。</strong>
            これがデジタル音楽制作の大きな強みです。
          </p>
          <p>
            自動採譜ツールで生成したMIDIもDAWにVSTiをセットして読み込むことで、
            好みの音色で確認・修正できます。
          </p>

          <h2>VSTプラグインのインストール方法（概要）</h2>
          <ol>
            <li>配布サイトからVSTプラグインのインストーラーをダウンロードする</li>
            <li>インストーラーを実行し、指定フォルダ（通常C:/Program Files/VSTPlugins など）にインストールする</li>
            <li>DAWを起動し、「設定→プラグインの検索」でVSTフォルダをスキャンする</li>
            <li>DAWのプラグインリストに表示されたら使用可能になる</li>
          </ol>
          <p>
            DAWによって設定画面の名称や手順が異なりますが、基本的な流れは同じです。
            インストール後にDAWをスキャンしないと認識されないため、この手順を忘れずに行ってください。
          </p>

          <h2>VSTプラグインの種類</h2>
          <ul>
            <li><strong>シンセサイザー：</strong>電子的に音を合成するソフト音源。EDMやポップスの音作りに使われる</li>
            <li><strong>サンプラー：</strong>実際に録音した楽器音を音程別に並べた音源。ピアノやオーケストラ音源に多い</li>
            <li><strong>リバーブ：</strong>空間の響きを加えるエフェクト</li>
            <li><strong>コンプレッサー：</strong>音量のダイナミクスを整えるエフェクト</li>
            <li><strong>EQ（イコライザー）：</strong>特定の周波数帯を上げ下げして音質を調整するエフェクト</li>
          </ul>

          <h2>初心者向けの無料VSTプラグイン</h2>
          <p>
            有料のVSTプラグインは高品質ですが、
            無料でも実用的なプラグインが多数公開されています。
            まずは無料のプラグインから始めるのがおすすめです。
          </p>
          <ul>
            <li><strong>VITAL（シンセ）：</strong>高機能なシンセサイザー。無料版でも十分な機能がある</li>
            <li><strong>Spitfire LABS（音源）：</strong>プロクオリティのオーケストラ・ピアノ音源を無料提供</li>
            <li><strong>OB-Xd（シンセ）：</strong>往年のアナログシンセをシミュレート</li>
            <li><strong>TDR Nova（EQ）：</strong>プロレベルのパラメトリックEQ</li>
          </ul>

          <h2>まとめ</h2>
          <p>
            VSTプラグインはDAWに音源やエフェクトを追加する拡張機能です。
            MIDIデータに音を付けるVSTiを理解することが、
            <strong>自動採譜で生成したMIDIを実際の音楽制作に活かすための第一歩</strong>です。
          </p>
          <p>
            まずはDAWに標準搭載されているVSTiから使い始め、
            慣れてきたら無料の優秀なプラグインを追加していくのがおすすめの進め方です。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">MIDIを生成してDAWで活用する</h2>
          <p className="mt-3 leading-7 text-blue-950">
            自動採譜ツールでMIDIを生成し、DAWのVSTi音源に読み込むことで音楽制作の出発点が作れます。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/what-is-daw" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              DAWとは何かを読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/what-is-vst" />
      </article>
    </main>
  );
}
