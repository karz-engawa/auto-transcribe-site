import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WAVをMIDIに変換する方法｜音声ファイルを自動採譜する手順",
  description: "WAVファイルをMIDIに変換する方法、自動採譜ツールの使い方、MuseScoreでの修正手順を解説します。",
  alternates: {
    canonical: "/articles/wav-to-midi",
  },
  openGraph: {
    title: "WAVをMIDIに変換する方法｜音声ファイルを自動採譜する手順",
    description: "WAVファイルをMIDIに変換する方法、自動採譜ツールの使い方、MuseScoreでの修正手順を解説します。",
    url: "/articles/wav-to-midi",
    siteName: "自動採譜アプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "WAVをMIDIに変換する方法｜音声ファイルを自動採譜する手順",
    description: "WAVファイルをMIDIに変換する方法、自動採譜ツールの使い方、MuseScoreでの修正手順を解説します。",
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WAVをMIDIに変換する方法｜音声ファイルを自動採譜する手順",
    description: "WAVファイルをMIDIに変換する方法、自動採譜ツールの使い方、MuseScoreでの修正手順を解説します。",
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
      "@id": "/articles/wav-to-midi",
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
          <span>WAVをMIDIに変換する方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            WAV・MIDI変換
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            WAVをMIDIに変換する方法
音声ファイルを自動採譜する手順
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-05-10 / 更新日: 2026-05-10</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">この記事では、WAVファイルをMIDIに変換する方法、自動採譜ツールの使い方、MuseScoreでの修正手順を解説します。</p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・WAVとMIDIの違い</li>
            <li>・WAVをMIDIに変換する手順</li>
            <li>・WAVが自動採譜に向いている理由</li>
            <li>・WAVで採譜精度を上げるコツ</li>
            <li>・変換後の修正フロー</li>
            <li>・よくある失敗とその対策</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>WAVとMIDIの違い</h2>
          <p>
            WAVは音そのものを記録した音声ファイルです。マイクで録音した波形をそのまま保存する形式で、
            圧縮が少ないため音質の劣化が起きにくい特徴があります。
            一方、MIDIは音そのものではなく、どの音をいつ、どれくらいの長さで、どの強さで鳴らすかという
            「演奏情報」を記録する形式です。
          </p>
          <p>
            WAVがあれば再生して耳で聴くことができますが、MIDIだけでは音源（音色データ）と組み合わせないと音は鳴りません。
            その代わり、MIDIは音程やリズム、テンポを後から自由に編集できる柔軟性があり、楽譜化やDAWでの編集にも適しています。
          </p>

          <h2>WAVをMIDIに変換する手順</h2>
          <p>
            WAVファイルを用意し、自動採譜ツールにアップロードします。
            ツールが音程やタイミングを推定し、MIDIファイルを生成します。
            一般的な流れは次の通りです。
          </p>
          <ol>
            <li>採譜したいWAVファイルを準備する</li>
            <li>必要に応じて短い区間に切り出す</li>
            <li>自動採譜ツールにアップロード</li>
            <li>MIDIを生成・ダウンロードする</li>
            <li>MuseScoreまたはDAWでMIDIを開く</li>
            <li>不要な音や音価のズレを修正する</li>
            <li>PDFやMusicXMLとして書き出す</li>
          </ol>

          <h2>WAVが自動採譜に向いている理由</h2>
          <p>
            WAVは圧縮が少ないため、音の情報が比較的残りやすい形式です。
            MP3のような圧縮ファイルでは高音域の細かい成分や微弱な音が失われていることがあり、
            その分自動採譜の精度にも影響することがあります。
          </p>
          <ul>
            <li>音の波形がそのまま保存されている</li>
            <li>圧縮による情報欠落が少ない</li>
            <li>静かなパートでも細部が残っている</li>
            <li>解析アルゴリズムが扱いやすい</li>
          </ul>
          <p>
            録音時の品質が高いWAVであれば、ピアノ独奏や単音メロディの採譜では、
            MP3より目に見えて精度が安定するケースもあります。
          </p>

          <h2>WAVで採譜精度を上げるコツ</h2>
          <ul>
            <li>サンプリングレートは44.1kHzまたは48kHzが扱いやすい</li>
            <li>16bitまたは24bitの一般的なフォーマットを使う</li>
            <li>クリッピング（音割れ）が起きていない音源を選ぶ</li>
            <li>無音区間や雑音区間をあらかじめ削除しておく</li>
            <li>ボーカル除去や楽器分離が可能なら活用する</li>
            <li>長いWAVはAメロ、サビなど区間ごとに分けて処理する</li>
          </ul>
          <p>
            事前処理に少し時間をかけるだけで、自動採譜の結果は格段に安定します。
            特に「不要な無音や雑音を削除する」だけでも、MIDIの仕上がりが大きく変わります。
          </p>

          <h2>変換後の修正フロー</h2>
          <p>
            WAVから生成したMIDIは、そのまま完成品ではなく「下書き」として扱うのが現実的です。
            MuseScoreやDAWで開いて、次の順序で修正していくと作業しやすくなります。
          </p>
          <ol>
            <li>全体を再生して大きな破綻がないかチェック</li>
            <li>明らかに不要な短い音、重複音を削除</li>
            <li>テンポと拍子を確認</li>
            <li>メロディと伴奏を分けて整理</li>
            <li>音価を読みやすい長さに揃える</li>
            <li>最終的な形式に書き出す</li>
          </ol>

          <h2>よくある失敗とその対策</h2>
          <ul>
            <li>音符が細かく分裂する → 短い音を一括削除し、必要なら量子化</li>
            <li>音価が極端に長い → リバーブが原因のことが多い、ドライな音源で再処理</li>
            <li>音程がズレる → サンプリングレートの違いやキー設定を確認</li>
            <li>無音区間に音符が出る → 無音区間を事前にカットしておく</li>
          </ul>

          <h2>まとめ</h2>
          <p>
            WAVをMIDIに変換するには、自動採譜ツールでMIDIのたたき台を作り、
            MuseScoreやDAWで修正する流れが実用的です。
            WAVは情報量が多く、自動採譜と相性が良い形式なので、可能な限り元音源をWAVで用意できると安心です。
          </p>
          <p>
            完璧な採譜を狙うのではなく、「AIで下書き、人間で仕上げ」というスタンスで取り組むと、
            耳コピや楽譜作成の作業時間を大きく短縮できます。
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
