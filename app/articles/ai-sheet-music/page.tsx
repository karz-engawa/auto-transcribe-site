import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIで楽譜を作る方法｜自動採譜とMIDIを使った作成手順",
  description: "AIで楽譜を作る方法、自動採譜、MIDI、MuseScoreを組み合わせる流れを解説します。",
  alternates: {
    canonical: "/articles/ai-sheet-music",
  },
  openGraph: {
    title: "AIで楽譜を作る方法｜自動採譜とMIDIを使った作成手順",
    description: "AIで楽譜を作る方法、自動採譜、MIDI、MuseScoreを組み合わせる流れを解説します。",
    url: "/articles/ai-sheet-music",
    siteName: "自動採譜アプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIで楽譜を作る方法｜自動採譜とMIDIを使った作成手順",
    description: "AIで楽譜を作る方法、自動採譜、MIDI、MuseScoreを組み合わせる流れを解説します。",
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIで楽譜を作る方法｜自動採譜とMIDIを使った作成手順",
    description: "AIで楽譜を作る方法、自動採譜、MIDI、MuseScoreを組み合わせる流れを解説します。",
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
      "@id": "/articles/ai-sheet-music",
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
          <span>AIで楽譜を作る方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            AI・楽譜作成
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            AIで楽譜を作る方法
自動採譜とMIDIを使った作成手順
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-05-10 / 更新日: 2026-05-10</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">この記事では、AIで楽譜を作る方法、自動採譜、MIDI、MuseScoreを組み合わせる流れを解説します。</p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・AIで楽譜は作れるのか</li>
            <li>・AIで楽譜を作る基本的な手順</li>
            <li>・AIが得意なケース・苦手なケース</li>
            <li>・MuseScoreでの仕上げ方</li>
            <li>・AI自動採譜の注意点</li>
            <li>・AI活用のおすすめワークフロー</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>AIで楽譜は作れる？</h2>
          <p>
            AIを使えば、音声ファイルから音程やタイミングを推定し、MIDIを生成できます。
            これを楽譜ソフトで読み込めば、楽譜として表示・修正することも可能です。
            ただし、AIから直接「完成された楽譜」が一発で出てくるわけではない点には注意が必要です。
          </p>
          <p>
            現在のAI自動採譜は、メロディや単音中心の演奏を中心に高い精度で扱えるようになってきましたが、
            複雑なアレンジや複数楽器の同時演奏では、まだ人間による修正を前提とする場面が多くあります。
            そのため、AIで楽譜を作るときは「下書きをAIに任せ、仕上げを人間が行う」という発想が現実的です。
          </p>

          <h2>基本的な作成手順</h2>
          <p>
            MP3やWAVなどの音源を用意し、自動採譜ツールでMIDI化します。
            その後、MuseScoreやDAWに読み込んで不要な音やリズムを修正します。
            おおまかな流れは次の通りです。
          </p>
          <ol>
            <li>採譜したい音源（MP3 / WAV）を用意する</li>
            <li>必要に応じて短い区間に切り出す</li>
            <li>自動採譜ツールにアップロードしてMIDIを生成</li>
            <li>MuseScoreでMIDIを開いて楽譜として表示</li>
            <li>音程・リズム・小節を整える</li>
            <li>PDFやMusicXMLとして書き出す</li>
          </ol>
          <p>
            この手順を一度覚えてしまえば、別の曲や音源でも同じ流れで楽譜化できます。
            最初は5〜30秒程度の短い音源で試して、AIの得意不得意を把握すると効率的です。
          </p>

          <h2>AIが得意なケース・苦手なケース</h2>
          <ul>
            <li>得意：ピアノ独奏、単音メロディ、クリアな録音、ノイズの少ない音源</li>
            <li>得意：BPMが安定した曲、シンプルな伴奏</li>
            <li>苦手：複数楽器が同時に鳴るバンド音源</li>
            <li>苦手：リバーブが強い音源、音割れしている音源</li>
            <li>苦手：テンポが揺らぐ表現豊かな演奏</li>
          </ul>
          <p>
            これらの違いを意識しておくと、AIに任せる部分と人間が補う部分を切り分けやすくなります。
          </p>

          <h2>MuseScoreでの仕上げ方</h2>
          <p>
            AIが出力したMIDIをMuseScoreに読み込んだ直後は、音符が細かく分かれていたり、
            余計な音が混ざっていることがほとんどです。仕上げは次のような順序で進めると効率的です。
          </p>
          <ol>
            <li>全体を再生して大まかな破綻を確認する</li>
            <li>明らかに不要な短い音や重複音を削除する</li>
            <li>テンポと拍子が合っているか確認する</li>
            <li>音符の長さを読みやすい単位に整える</li>
            <li>必要に応じて装飾音や和音を簡略化する</li>
            <li>最後にPDFやMusicXMLとして書き出す</li>
          </ol>

          <h2>AI自動採譜の注意点</h2>
          <p>
            AIは曲によって誤検出することがあります。複数楽器が重なった音源やノイズの多い音源では、
            MIDIが複雑になる場合があります。さらに、著作権のある音源を扱う場合は、
            生成した楽譜の利用範囲にも注意が必要です。
          </p>
          <ul>
            <li>市販曲の採譜結果は私的利用にとどめる</li>
            <li>誤検出をそのまま信用しない</li>
            <li>AIの結果は必ず耳で確認する</li>
            <li>大量の音符が出てきても、必要な音だけを残す勇気を持つ</li>
          </ul>

          <h2>AI活用のおすすめワークフロー</h2>
          <p>
            毎回ゼロから音符を入力するより、次のようなワークフローを定着させると、楽譜作成のスピードが大きく上がります。
          </p>
          <ol>
            <li>耳コピしたい音源を用意</li>
            <li>AI自動採譜ツールでMIDIを生成</li>
            <li>MuseScoreで全体構成を整える</li>
            <li>細部を耳で確認しながら修正</li>
            <li>PDF / MusicXML / MIDI として保存</li>
          </ol>
          <p>
            このワークフローを身につけると、自作曲のデモ譜、練習用譜面、教材用の譜面など、
            さまざまな用途に応用できるようになります。
          </p>

          <h2>まとめ</h2>
          <p>
            AIで楽譜を作るには、自動採譜でMIDIを作り、MuseScoreで整える流れがおすすめです。
            AIで下書き、人間が仕上げるという考え方が実用的で、結果として楽譜作成にかかる時間を大きく短縮できます。
          </p>
          <p>
            完全自動を狙うのではなく、AIを「楽譜作成の強力な下書き役」として捉えると、
            楽譜制作のハードルが大きく下がり、より多くの曲を扱えるようになります。
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
