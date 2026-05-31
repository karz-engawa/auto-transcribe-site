import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "自動採譜アプリ｜音声からMIDIを生成する無料ツール",
  description:
    "MP3・WAVをアップロードするだけでMIDIを自動生成。耳コピの補助・楽譜作成・DAW打ち込みの下書きに使える無料の自動採譜ツールと解説記事を提供しています。",
};

const benefits = [
  {
    title: "アップロードするだけ",
    description:
      "専門知識不要。音声ファイルを選んで送信するだけで、AIがMIDIを自動生成します。インストール不要でブラウザから使えます。",
  },
  {
    title: "MuseScore・DAWで編集できる",
    description:
      "生成されたMIDIはMuseScoreやDAWに読み込んで自由に編集・楽譜化できます。汎用フォーマットなのでどのソフトでも使えます。",
  },
  {
    title: "耳コピの時間を短縮",
    description:
      "ゼロから一音ずつ拾う前に、AIで大まかな下書きを作ることで耳コピ作業を大幅に効率化できます。",
  },
  {
    title: "無料で使える",
    description:
      "ツールは無料で提供しています。まずは30秒程度の短い音源から気軽に試してみてください。",
  },
];

const useCases = [
  {
    title: "好きな曲を耳コピしたい",
    description:
      "原曲をアップロードしてMIDIのたたき台を作り、MuseScoreで確認しながら修正する流れで作業時間を短縮できます。",
    href: "/articles/ear-copy-efficiency",
    linkText: "耳コピ効率化の記事を読む",
  },
  {
    title: "ピアノ演奏を楽譜にしたい",
    description:
      "録音したピアノ演奏をMIDI化し、MuseScoreで楽譜として整えることで練習用・教材用の楽譜を手軽に作れます。",
    href: "/articles/piano-to-midi",
    linkText: "ピアノMIDI化の記事を読む",
  },
  {
    title: "DAWで打ち込みの下書きを作りたい",
    description:
      "鼻歌やハミングを録音してMIDI化することで、DAWでの打ち込み作業のスタートラインを早められます。",
    href: "/articles/what-is-daw",
    linkText: "DAWの基本を読む",
  },
  {
    title: "自動採譜の仕組みを知りたい",
    description:
      "AIが音声をどのように解析してMIDIを生成しているのか、技術的な背景をわかりやすく解説しています。",
    href: "/articles/how-auto-transcription-works",
    linkText: "仕組みの記事を読む",
  },
];

const faq = [
  {
    q: "自動採譜とは何ですか？",
    a: "自動採譜とは、音声データをAIで解析し、音の高さ・長さ・タイミングを推定してMIDIや楽譜データに変換する技術です。従来は人間が一音一音耳で聴き取っていた採譜作業を自動化・効率化するために使います。",
  },
  {
    q: "どんな音声ファイルが使えますか？",
    a: "MP3・WAV・OGG・FLACなど一般的な音声フォーマットに対応しています。音質が高く、ノイズが少ないほど精度が上がりやすい傾向があります。可能であればWAVなど非圧縮形式をお使いください。",
  },
  {
    q: "精度はどのくらいですか？",
    a: "単音メロディやピアノ単体の演奏では比較的高い精度が出ます。複数の楽器が重なった音源やドラム・ボーカルが混在する楽曲では誤認識が増えやすくなります。「AIで下書き、人間が仕上げ」という使い方が最も現実的です。",
  },
  {
    q: "生成したMIDIはどうやって使えばいいですか？",
    a: "MuseScoreに読み込んで楽譜として編集したり、DAWに読み込んで打ち込みの確認・修正をするのが一般的な使い方です。そのまま完成品として使うより、少し手を加えることで実用的なデータになります。",
  },
  {
    q: "著作権のある楽曲に使ってもいいですか？",
    a: "著作権のある楽曲の採譜は個人の学習・練習目的の範囲でご利用ください。採譜結果の公開・配布・商用利用は著作権者の権利を侵害する可能性があります。",
  },
  {
    q: "スマートフォンでも使えますか？",
    a: "ブラウザ上で動作するため、スマートフォンやタブレットからでも利用できます。ただし処理時間や表示のしやすさの点で、PCからの利用を推奨しています。",
  },
];

const articles = [
  {
    href: "/articles/free-auto-transcription-tools",
    title: "無料で使える自動採譜ソフト比較",
    description: "音声からMIDI・楽譜化する方法を初心者向けに解説します。",
  },
  {
    href: "/articles/musescore-midi-edit",
    title: "MuseScoreの使い方",
    description: "MIDI読み込みから楽譜編集まで初心者向けに解説します。",
  },
  {
    href: "/articles/piano-to-midi",
    title: "ピアノ音源をMIDI化する方法",
    description: "ピアノ音源をMIDIに変換する方法とコツを解説します。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          自動採譜アプリ
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          音声ファイルをアップロードするだけで、AIがMIDIを自動生成します。
          耳コピの補助・楽譜作成・DAW打ち込みの下書きに活用できる無料ツールです。
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/tool"
            className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-80"
          >
            ツールを使う
          </Link>
          <Link
            href="/articles"
            className="rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
          >
            記事を見る
          </Link>
        </div>
      </section>

      {/* Tool explanation */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="mb-4 text-3xl font-bold">自動採譜ツールとは？</h2>
          <p className="mb-5 text-lg leading-8 text-gray-600">
            当サイトが提供する自動採譜ツールは、MP3・WAVなどの音声ファイルを解析して
            <strong className="text-gray-900"> MIDIデータを自動生成する無料のWebアプリ</strong>
            です。専用ソフトのインストールは不要で、ブラウザ上から直接利用できます。
          </p>
          <p className="mb-5 leading-8 text-gray-600">
            MIDIとは「どの音を、いつ、どの長さで鳴らすか」という演奏情報のデータ形式です。
            音声ファイルそのものではなく、
            <strong className="text-gray-900">編集しやすい演奏データ</strong>
            として出力されるため、MuseScoreやDAWで読み込んで自由に加工できます。
          </p>
          <p className="mb-8 leading-8 text-gray-600">
            完全自動で完成楽譜を作るというより、
            <strong className="text-gray-900">「AIで下書きを作り、人間が仕上げる」</strong>
            という使い方に最も向いています。耳コピの時間短縮や、楽譜作成の下準備として活用してください。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tool"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ツールを試してみる
            </Link>
            <Link
              href="/articles/how-auto-transcription-works"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
            >
              仕組みを詳しく読む
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <h2 className="mb-2 text-center text-3xl font-bold">このツールでできること</h2>
        <p className="mb-10 text-center text-gray-600">
          音楽制作・耳コピ・楽譜作成の作業を効率化できます。
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">{b.title}</h3>
              <p className="text-sm leading-6 text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h2 className="mb-2 text-center text-3xl font-bold">こんな人に活用されています</h2>
          <p className="mb-10 text-center text-gray-600">具体的な活用シーンを紹介します。</p>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-semibold">{u.title}</h3>
                <p className="mb-4 text-sm leading-6 text-gray-600">{u.description}</p>
                <Link
                  href={u.href}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  {u.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <h2 className="text-3xl font-bold text-center">解説記事</h2>
        <p className="mt-3 text-center text-gray-600">
          自動採譜・MIDI・DAWに関する記事を初心者向けに解説しています。
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{a.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/articles"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            すべての記事を見る
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="mb-2 text-center text-3xl font-bold">よくある質問</h2>
          <p className="mb-10 text-center text-gray-600">
            自動採譜ツールに関するよくある質問をまとめました。
          </p>
          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-200 bg-white p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                  {item.q}
                  <span className="shrink-0 text-gray-400 transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            その他のご質問は
            <Link href="/contact" className="ml-1 text-blue-600 underline hover:text-blue-800">
              お問い合わせページ
            </Link>
            からご連絡ください。
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <h2 className="mb-6 text-3xl font-bold">このサイトについて</h2>
        <div className="rounded-2xl border border-gray-200 p-8">
          <div className="space-y-4 leading-8 text-gray-700">
            <p>
              <strong className="text-gray-900">自動採譜アプリ</strong>は、
              音声ファイルからMIDIを生成するAIベースのツールと、
              自動採譜・MIDI・DAW・楽譜制作に関する解説記事を提供するWebサイトです。
            </p>
            <p>
              音楽制作・耳コピ・楽譜作成に取り組む初心者の方が、
              ツールの使い方や基礎知識をわかりやすく学べることを目指して運営しています。
              採譜作業の自動化を通じて、音楽制作のハードルを下げることが当サイトの目的です。
            </p>
            <p>
              掲載しているツールはAIによる解析結果をもとに生成されるため、
              完全な精度を保証するものではありません。
              MuseScoreやDAWで修正しながらご活用ください。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/about" className="text-blue-600 underline hover:text-blue-800">
              サイト詳細
            </Link>
            <Link href="/articles" className="text-blue-600 underline hover:text-blue-800">
              解説記事一覧
            </Link>
            <Link href="/articles/mp3-to-midi" className="text-blue-600 underline hover:text-blue-800">
              MP3からMIDIに変換する方法
            </Link>
            <Link href="/articles/what-is-midi" className="text-blue-600 underline hover:text-blue-800">
              MIDIとは？
            </Link>
          </div>
        </div>
      </section>

      {/* Footer links */}
      <div className="border-t border-gray-100 py-10 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/about" className="hover:underline">このサイトについて</Link>
          <Link href="/terms" className="hover:underline">利用規約</Link>
          <Link href="/privacy" className="hover:underline">プライバシーポリシー</Link>
          <Link href="/contact" className="hover:underline">お問い合わせ</Link>
        </div>
      </div>

    </main>
  );
}
