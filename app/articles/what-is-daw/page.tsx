import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DAWとは？初心者向けに音楽制作ソフトの基本を解説",
  description: "DAWの意味、できること、MIDIや自動採譜との関係を初心者向けに解説します。",
  alternates: {
    canonical: "/articles/what-is-daw",
  },
  openGraph: {
    title: "DAWとは？初心者向けに音楽制作ソフトの基本を解説",
    description: "DAWの意味、できること、MIDIや自動採譜との関係を初心者向けに解説します。",
    url: "/articles/what-is-daw",
    siteName: "自動採譜アプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAWとは？初心者向けに音楽制作ソフトの基本を解説",
    description: "DAWの意味、できること、MIDIや自動採譜との関係を初心者向けに解説します。",
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DAWとは？初心者向けに音楽制作ソフトの基本を解説",
    description: "DAWの意味、できること、MIDIや自動採譜との関係を初心者向けに解説します。",
    author: {
      "@type": "Organization",
      name: "自動採譜アプリ",
    },
    publisher: {
      "@type": "Organization",
      name: "自動採譜アプリ",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "/articles/what-is-daw",
    },
    datePublished: "2026-05-10",
    dateModified: "2026-05-10",
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
          <span>DAWとは？初心者向けに音楽制作ソフトの基本を解説</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            DAW・音楽制作
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            DAWとは？初心者向けに音楽制作ソフトの基本を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-05-10 / 更新日: 2026-05-10</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">この記事では、DAWの意味、できること、MIDIや自動採譜との関係を初心者向けに解説します。</p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・DAWとは何か</li>
            <li>・DAWでできること</li>
            <li>・代表的なDAWソフトの特徴</li>
            <li>・MIDIとDAWの関係</li>
            <li>・自動採譜とDAWの組み合わせ方</li>
            <li>・初心者がDAWを選ぶときのポイント</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>DAWとは？</h2>
          <p>
            DAWはDigital Audio Workstationの略で、録音、MIDI打ち込み、音源編集、
            エフェクト処理、ミックス、書き出しまでを一通り行える音楽制作ソフトです。
            日本語では「デジタル音楽制作ソフト」「音楽編集ソフト」と呼ばれることもあります。
          </p>
          <p>
            かつては高価なハードウェアと専用スタジオでしかできなかった作業を、
            ノートPC1台で完結できるようにしたのがDAWの大きな価値です。
            個人でもボーカル録音から完成音源まで自宅で作れるようになり、
            音楽制作のハードルを大きく下げました。
          </p>

          <h2>DAWでできること</h2>
          <p>
            DAWでは、ボーカルや楽器を録音したり、MIDIでピアノやドラムを打ち込んだりできます。
            音量バランスの調整やエフェクト処理、最終的なMP3やWAVへの書き出しも同じソフト内で行えます。
            具体的には次のような作業が可能です。
          </p>
          <ul>
            <li>マイク入力でのボーカル・楽器録音</li>
            <li>ピアノロールでのMIDI打ち込み・編集</li>
            <li>音色を切り替えるためのソフト音源（VST等）の利用</li>
            <li>リバーブ、コンプ、EQなどのエフェクト処理</li>
            <li>複数トラックの音量・パンの調整（ミックス）</li>
            <li>WAV、MP3、MIDI、ステム書き出し</li>
            <li>テンポチェンジや拍子変更など曲構成の編集</li>
          </ul>

          <h2>代表的なDAWソフト</h2>
          <p>
            DAWには無料・有料を含めて数多くの種類があり、それぞれ得意分野が違います。
            代表的なものとしては次のようなDAWが知られています。
          </p>
          <ul>
            <li>Cakewalk by BandLab：無料で本格的な機能を持つ</li>
            <li>GarageBand：Mac/iOS向け、初心者でも扱いやすい</li>
            <li>Studio One Prime：直感的な操作で初心者向け</li>
            <li>Cubase：ボーカル編集や打ち込みに強い</li>
            <li>Logic Pro：Mac専用、本格派</li>
            <li>FL Studio：打ち込み・ループ制作に強い</li>
            <li>Ableton Live：ライブ演奏やエレクトロニック系に強い</li>
          </ul>
          <p>
            最初はどれを選んでも基本機能はそろっているため、
            「使えるPCのOS」と「無料で始められるか」を基準に選ぶと迷いにくくなります。
          </p>

          <h2>MIDIとDAWの関係</h2>
          <p>
            MIDIはDAW上で音を鳴らすための演奏情報として使われます。
            DAWのピアノロール画面では、MIDIノートを横に並べることでメロディや伴奏を作っていきます。
            自動採譜ツールで生成したMIDIをDAWに読み込めば、音色変更やリズム修正がしやすくなります。
          </p>
          <p>
            MIDIは「演奏指示」だけを記録しているため、ピアノで読み込んだものをストリングスやシンセに切り替えるなど、
            後から音色を自由に変えられるのもDAW上ならではの強みです。
          </p>

          <h2>自動採譜とDAWを組み合わせる流れ</h2>
          <ol>
            <li>音声ファイル（MP3やWAV）を用意する</li>
            <li>自動採譜ツールでMIDIを生成する</li>
            <li>DAWでMIDIを読み込む</li>
            <li>ピアノロールで不要な音やリズムのズレを修正する</li>
            <li>音色や音量バランスを整える</li>
            <li>必要に応じてWAVやMP3として書き出す</li>
          </ol>
          <p>
            この流れに慣れると、好きな曲の耳コピ、練習音源作り、自作曲のデモ作りなどを
            短時間で進められるようになります。
          </p>

          <h2>初心者がDAWを選ぶときのポイント</h2>
          <ul>
            <li>OSに対応しているか（Windows / Mac / iOS）</li>
            <li>無料で始められるか</li>
            <li>MIDI編集が直感的にできるか</li>
            <li>付属の音源やエフェクトの数</li>
            <li>日本語の解説情報が多いか</li>
            <li>将来的に有料版にステップアップしやすいか</li>
          </ul>
          <p>
            最初は無料DAWで十分です。慣れてきて機能不足を感じたタイミングで有料版を検討するのが、
            コストを抑えながら確実にスキルアップできる進め方です。
          </p>

          <h2>まとめ</h2>
          <p>
            DAWは音楽制作の中心になるソフトで、録音・MIDI編集・ミックス・書き出しまでを一括で行えます。
            MIDI、自動採譜、DAWを組み合わせることで、耳コピや作曲、練習音源作りの作業を大きく効率化できます。
          </p>
          <p>
            最初は機能が多くて戸惑うかもしれませんが、基本的なMIDI編集と書き出しだけ覚えれば、
            自動採譜で作ったMIDIを実用レベルまで仕上げられるようになります。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">音声からMIDIを作ってみる</h2>
          <p className="mt-3 leading-7 text-blue-950">
            音声ファイルをMIDI化したい場合は、自動採譜ツールでたたき台を作り、MuseScoreやDAWで修正する流れがおすすめです。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/musescore-midi-edit" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              MuseScoreで編集する方法を見る
            </Link>
          </div>
        </section>

        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold">関連記事</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/articles/musescore-midi-edit" className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm">
              <h3 className="text-lg font-semibold">MuseScoreの使い方</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">MIDI読み込みから楽譜編集まで解説します。</p>
            </Link>
            <Link href="/articles/what-is-midi" className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm">
              <h3 className="text-lg font-semibold">MIDIとは？</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">MIDIの基本や音声ファイルとの違いを整理します。</p>
            </Link>
            <Link href="/articles/free-auto-transcription-tools" className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm">
              <h3 className="text-lg font-semibold">無料自動採譜ソフト比較</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">無料で使える自動採譜ソフトの選び方を解説します。</p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
