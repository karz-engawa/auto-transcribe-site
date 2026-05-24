import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "自動採譜の仕組みとは？音声からMIDIが作られる流れを解説",
  description: "自動採譜の仕組み、音声解析、ピッチ推定、MIDI生成の流れを初心者向けに解説します。",
  alternates: {
    canonical: "/articles/how-auto-transcription-works",
  },
  openGraph: {
    title: "自動採譜の仕組みとは？音声からMIDIが作られる流れを解説",
    description: "自動採譜の仕組み、音声解析、ピッチ推定、MIDI生成の流れを初心者向けに解説します。",
    url: "/articles/how-auto-transcription-works",
    siteName: "自動採譜アプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "自動採譜の仕組みとは？音声からMIDIが作られる流れを解説",
    description: "自動採譜の仕組み、音声解析、ピッチ推定、MIDI生成の流れを初心者向けに解説します。",
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "自動採譜の仕組みとは？音声からMIDIが作られる流れを解説",
    description: "自動採譜の仕組み、音声解析、ピッチ推定、MIDI生成の流れを初心者向けに解説します。",
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
      "@id": "/articles/how-auto-transcription-works",
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
          <span>自動採譜の仕組みとは？音声からMIDIが作られる流れを解説</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            自動採譜の仕組み
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            自動採譜の仕組みとは？音声からMIDIが作られる流れを解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-05-10 / 更新日: 2026-05-10</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">この記事では、自動採譜の仕組み、音声解析、ピッチ推定、MIDI生成の流れを初心者向けに解説します。</p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・自動採譜の基本的な仕組み</li>
            <li>・音声からMIDIが作られる流れ</li>
            <li>・ピッチ推定とオンセット検出</li>
            <li>・AI自動採譜が誤検出する理由</li>
            <li>・精度を上げるための工夫</li>
            <li>・採譜結果を実用化する流れ</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>自動採譜とは？</h2>
          <p>
            自動採譜とは、音声ファイルから音の高さ、タイミング、長さなどを推定し、
            MIDIや楽譜の形に変換する技術です。
            従来は人間が耳で聴き取って音符を書き起こす作業（いわゆる耳コピ）を、
            AIや信号処理によって自動化したものと考えるとイメージしやすいでしょう。
          </p>
          <p>
            自動採譜は、耳コピを完全に置き換えるものではなく、
            「ざっくりした下書き」を素早く作るための補助ツールとして使うのが現実的です。
            細部の精度は曲によって変わるため、最終的な仕上げは人間が行うのが一般的です。
          </p>

          <h2>音声からMIDIが作られる大まかな流れ</h2>
          <p>
            自動採譜ツールは、内部で次のような処理を順に行っています。
          </p>
          <ol>
            <li>音声ファイルを読み込み、波形データに変換する</li>
            <li>短い時間ごとに周波数成分を解析する</li>
            <li>どの音程が鳴っているかを推定する（ピッチ推定）</li>
            <li>音が「いつ始まったか」を検出する（オンセット検出）</li>
            <li>音の継続時間を計算してノート単位に整理する</li>
            <li>MIDI形式として書き出す</li>
          </ol>
          <p>
            人間が「メロディを聞き取る」プロセスを、コンピューターは数値解析として再現しています。
            ただし、人間が無意識に行っている「メインの音を選び取る」という判断は、
            アルゴリズムにとっては難しい処理のひとつです。
          </p>

          <h2>ピッチ推定とオンセット検出</h2>
          <p>
            自動採譜の中核は「ピッチ推定」と「オンセット検出」です。
          </p>
          <ul>
            <li>ピッチ推定：その瞬間に鳴っている音の高さを推測する処理</li>
            <li>オンセット検出：音の立ち上がりタイミングを特定する処理</li>
          </ul>
          <p>
            ピアノのように音の立ち上がりがはっきりしている楽器は、
            ピッチ推定もオンセット検出も比較的安定しやすい傾向があります。
            一方、ボーカルのように音程が滑らかに変化する音や、
            ストリングスのように立ち上がりが緩やかな音は、解析が難しくなります。
          </p>

          <h2>AI自動採譜の進化</h2>
          <p>
            近年は、ディープラーニングを用いた自動採譜技術が大きく進歩しました。
            従来のルールベースのアルゴリズムと比べて、AIモデルは大量の音源データから学習しているため、
            ノイズや複雑な音源にもある程度対応できます。
          </p>
          <p>
            たとえば、ピアノ専用にチューニングされたAIモデルは、
            和音やペダル使用時の音の重なりもかなり高い精度で識別できるようになっています。
            ただし、それでもバンド音源やボーカル中心の曲では、完全な採譜には届かないことが多いのが現状です。
          </p>

          <h2>なぜ誤検出が起きるのか</h2>
          <p>
            音楽には複数の楽器、倍音、ノイズ、リバーブなどが含まれます。
            そのため、AIが本来のメロディ以外の音を音符として検出することがあります。
            具体的には、次のような原因で誤検出が発生しがちです。
          </p>
          <ul>
            <li>倍音（音の上に重なる関連した周波数）を別の音符と誤認する</li>
            <li>リバーブやエコーで音が長く伸び、音価が大きく検出される</li>
            <li>複数楽器が同じ音域で重なり、メインの音を特定できない</li>
            <li>ノイズや無音区間を誤って音符と判断する</li>
            <li>ボーカルの揺れ（ビブラート）を別の音と捉えてしまう</li>
          </ul>

          <h2>精度を上げるための工夫</h2>
          <ul>
            <li>音源を短い区間に切り出してから処理する</li>
            <li>ノイズや無音区間をあらかじめ削除する</li>
            <li>可能ならボーカル抽出や楽器分離を行う</li>
            <li>BPMが分かるなら事前に指定する</li>
            <li>圧縮の少ないWAVを使う</li>
          </ul>
          <p>
            前処理に少し手をかけるだけで、自動採譜の結果は驚くほど安定することがあります。
          </p>

          <h2>採譜結果を実用化する流れ</h2>
          <p>
            自動採譜の結果は、MuseScoreやDAWに読み込んで仕上げることで、実用的な楽譜やMIDIになります。
          </p>
          <ol>
            <li>自動採譜でMIDIを生成する</li>
            <li>MuseScoreやDAWで読み込む</li>
            <li>不要な音や誤検出を削除する</li>
            <li>テンポ・拍子・音価を整える</li>
            <li>必要な形式（PDF、MIDI、MusicXML）で書き出す</li>
          </ol>

          <h2>まとめ</h2>
          <p>
            自動採譜は、音声をMIDIや楽譜に変換するための信号処理とAI技術の組み合わせです。
            完全な楽譜を一発で生成するわけではありませんが、耳コピや楽譜作成を効率化する
            「下書き作成ツール」として活用すると、非常に実用的です。
          </p>
          <p>
            仕組みを理解しておくと、結果が崩れたときに何が原因かを推測しやすくなり、
            前処理や修正の判断もしやすくなります。
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
