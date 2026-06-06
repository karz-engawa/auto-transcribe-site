import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "GarageBandでMIDIを使う方法｜録音・編集・書き出しを初心者向け解説",
  description:
    "GarageBandでMIDIを録音・編集・書き出す方法を初心者向けに解説。MIDIキーボードの接続、ピアノロール編集、MIDIファイルの書き出し手順まで紹介します。",
  alternates: {
    canonical: "/articles/garageband-midi-guide",
  },
  openGraph: {
    title: "GarageBandでMIDIを使う方法｜録音・編集・書き出しを初心者向け解説",
    description:
      "GarageBandでMIDIを録音・編集・書き出す方法を初心者向けに解説します。",
    url: "/articles/garageband-midi-guide",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarageBandでMIDIを使う方法｜録音・編集・書き出しを初心者向け解説",
    description:
      "GarageBandでMIDIを録音・編集・書き出す方法を初心者向けに解説します。",
  },
};

export default function GarageBandMidiGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "GarageBandでMIDIを使う方法｜録音・編集・書き出しを初心者向け解説",
    description:
      "GarageBandでMIDIを録音・編集・書き出す方法を初心者向けに解説。MIDIキーボードの接続、ピアノロール編集、書き出し手順まで紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "/articles/garageband-midi-guide",
    },
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "GarageBandは無料で使えますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mac・iPhone・iPadではGarageBandは無料で使えます。Appleデバイスをお持ちであれば追加費用なしでインストールできます。",
        },
      },
      {
        "@type": "Question",
        name: "GarageBandでMIDIファイルを直接開けますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GarageBandはMIDIファイルの直接インポートには対応していません。ただし、MIDIキーボードを接続して録音したり、Logic Pro経由でMIDIを扱うことができます。",
        },
      },
      {
        "@type": "Question",
        name: "GarageBandとDAWはどう違いますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GarageBandは無料の音楽制作ソフトで、DAW（デジタルオーディオワークステーション）の一種です。初心者向けのシンプルなUIが特徴で、MIDIの録音・編集・ミキシングが一通り行えます。",
        },
      },
      {
        "@type": "Question",
        name: "iPhoneやiPadのGarageBandでもMIDIは使えますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、iOS版のGarageBandでもMIDIキーボードを接続して録音・編集できます。画面上の鍵盤でのMIDI入力も可能です。",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-12 md:px-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">ホーム</Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="hover:text-gray-800">記事</Link>
          <span className="mx-2">/</span>
          <span>GarageBandでMIDIを使う方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            GarageBand・MIDI
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            GarageBandでMIDIを使う方法
            <br className="hidden md:block" />
            録音・編集・書き出しを初心者向け解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            公開日: 2026-06-07 / 更新日: 2026-06-07
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            GarageBandはMacやiPhoneに標準で入っている無料の音楽制作ソフトです。
            MIDIの録音・編集・書き出しが一通りできるため、初心者が最初に触れるDAWとして最適です。
            この記事では、GarageBandでMIDIを活用する方法をステップごとに解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・GarageBandでMIDIを使う3つの方法</li>
            <li>・MIDIキーボードの接続手順</li>
            <li>・ピアノロールでMIDIを編集する方法</li>
            <li>・MIDIファイルをGarageBandに読み込む方法</li>
            <li>・GarageBandからMIDIを書き出す方法</li>
            <li>・自動採譜MIDIをGarageBandで活用する方法</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>GarageBandとは？</h2>
          <p>
            GarageBandは、AppleがMac・iPhone・iPad向けに無料で提供している音楽制作ソフトです。
            <Link href="/articles/what-is-daw">DAW（デジタルオーディオワークステーション）</Link>
            の一種で、MIDIの録音・編集から、ループ素材の利用、ミキシングまで幅広く対応しています。
          </p>
          <p>
            初心者でも直感的に操作できるUIが特徴で、音楽制作を始めるための入門ソフトとして広く使われています。
            Macをお持ちであれば追加費用なしで使い始めることができます。
          </p>

          <h2>GarageBandでMIDIを使う3つの方法</h2>
          <p>GarageBandでMIDIを扱う主な方法は次の3つです。</p>
          <ul>
            <li><strong>MIDIキーボードを接続して録音する</strong>―― 外部キーボードをUSBやBluetoothで接続して演奏を録音</li>
            <li><strong>画面上の鍵盤・パッドで入力する</strong>―― マウスやタッチパネルでGarageband内蔵の鍵盤を使って入力</li>
            <li><strong>ピアノロールで直接打ち込む</strong>―― 音符をマウスでクリックして配置するステップ入力</li>
          </ul>
          <p>
            どの方法でも、入力したMIDIはピアノロール上で後から自由に編集できます。
            <Link href="/articles/what-is-piano-roll">ピアノロールの基本的な見方・使い方</Link>
            を知っておくと操作がスムーズになります。
          </p>

          <h2>MIDIキーボードをGarageBandに接続する</h2>
          <p>
            <Link href="/articles/what-is-midi-keyboard">MIDIキーボード</Link>
            をGarageBandに接続するには、USBケーブルまたはUSB-MIDIアダプター（古い5ピンDINタイプの場合）を使います。
          </p>
          <ol>
            <li>MIDIキーボードをMacにUSBで接続する</li>
            <li>GarageBandを起動し、新規プロジェクトを作成する</li>
            <li>「Software Instrument」トラックを追加する</li>
            <li>音源（ピアノ、シンセなど）を選択する</li>
            <li>録音ボタンを押して演奏する</li>
          </ol>
          <p>
            接続後は自動認識されることがほとんどです。認識されない場合は、
            Audio MIDI設定アプリでキーボードが表示されているか確認してください。
          </p>

          <h2>ピアノロールでMIDIを編集する</h2>
          <p>
            録音または入力したMIDIは、ピアノロールで細かく編集できます。
            GarageBandのピアノロールでできることは次の通りです。
          </p>
          <ul>
            <li>音符の位置（開始タイミング）を変える</li>
            <li>音符の長さを変える</li>
            <li>音程を上下に移動する</li>
            <li>ベロシティ（強さ）を調整する</li>
            <li>不要な音符を削除する</li>
            <li>量子化（クオンタイズ）でリズムを揃える</li>
          </ul>
          <p>
            ピアノロールにアクセスするには、トラック上のMIDIリージョンをダブルクリックします。
            編集画面下部にピアノロールが表示されます。
          </p>

          <h2>MIDIファイルをGarageBandに読み込む</h2>
          <p>
            GarageBandはMIDIファイル（.mid）を直接ファイルメニューからインポートすることには
            標準では対応していません。ただし、次の方法で読み込むことができます。
          </p>
          <ul>
            <li>
              <strong>Finderからドラッグ＆ドロップ</strong>―― MIDIファイルをFinderで開き、
              GarageBandのトラック部分にドラッグすると読み込める場合があります
            </li>
            <li>
              <strong>Logic Proを経由する</strong>―― Logic ProはMIDIを直接読み込んでGarageBand形式で保存できます
            </li>
          </ul>
          <p>
            自動採譜ツールで生成したMIDIを使いたい場合は、
            GarageBandよりもDAWや<Link href="/articles/musescore-midi-edit">MuseScore</Link>の方が
            読み込みが安定しています。
          </p>

          <h2>GarageBandからMIDIを書き出す方法</h2>
          <p>
            GarageBandで作成したMIDIデータは、次の手順で書き出せます。
          </p>
          <ol>
            <li>書き出したいリージョンを選択する</li>
            <li>メニューから「ファイル」→「書き出す」を選ぶ</li>
            <li>「MIDIファイルに書き出す」を選択する</li>
            <li>保存先を指定して書き出す</li>
          </ol>
          <p>
            書き出したMIDIファイルは、MuseScoreやその他のDAWで読み込んで
            さらに編集・楽譜化することができます。
          </p>

          <h2>自動採譜MIDIをGarageBandで活用する</h2>
          <p>
            <Link href="/articles/mp3-to-midi">MP3などの音声からMIDIを生成</Link>した場合、
            そのMIDIをGarageBandで使うことで、音源を差し替えたり、テンポを変えたりして活用できます。
          </p>
          <p>
            ただし前述のとおりGarageBandのMIDIインポートは限定的なため、
            まずMuseScoreやDAWで読み込んで修正した後、
            GarageBandに持ち込む流れが使いやすいです。
          </p>
          <p>
            GarageBandに標準搭載されている多彩な音源を使えば、
            生成したMIDIを別の楽器音色で鳴らして確認するといった使い方にも向いています。
          </p>

          <h2>まとめ</h2>
          <p>
            GarageBandはMIDIの録音・編集・書き出しが無料でできる優れた入門DAWです。
            MIDIキーボードを接続して演奏を録音し、ピアノロールで修正するという基本的な流れを
            押さえておけば、音楽制作の入り口として十分に活用できます。
          </p>
          <p>
            より高度なMIDI編集や楽譜化が必要になった場合は、
            MuseScoreや他のDAWと組み合わせるのがおすすめです。
            <Link href="/articles/free-daw-for-beginners">無料DAWの選び方</Link>
            も参考にしてみてください。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="mb-6 text-2xl font-bold">よくある質問</h2>
          <dl className="space-y-6">
            <div>
              <dt className="font-semibold text-gray-900">Q. GarageBandは無料で使えますか？</dt>
              <dd className="mt-2 leading-7 text-gray-700">
                Mac・iPhone・iPadではGarageBandは無料で使えます。
                Appleデバイスをお持ちであれば追加費用なしでインストールできます。
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Q. GarageBandでMIDIファイルを直接開けますか？</dt>
              <dd className="mt-2 leading-7 text-gray-700">
                GarageBandはMIDIファイルの直接インポートには標準対応していません。
                ただし、Finderからドラッグ＆ドロップで読み込める場合があります。
                安定してMIDIを扱いたい場合はLogic ProやMuseScoreの利用をおすすめします。
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Q. GarageBandとDAWはどう違いますか？</dt>
              <dd className="mt-2 leading-7 text-gray-700">
                GarageBandはDAW（デジタルオーディオワークステーション）の一種です。
                DAWとは音楽制作ソフト全般を指す言葉で、GarageBandはその中でも
                初心者向けのシンプルなUIが特徴のソフトです。
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Q. iPhoneやiPadのGarageBandでもMIDIは使えますか？</dt>
              <dd className="mt-2 leading-7 text-gray-700">
                はい、iOS版のGarageBandでもMIDIキーボードを接続して録音・編集できます。
                Lightning / USB-C アダプター経由でMIDIキーボードを接続すれば使用可能です。
                画面上の鍵盤でのMIDI入力にも対応しています。
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            MIDIのたたき台を自動で作る
          </h2>
          <p className="mt-3 leading-7 text-blue-950">
            音声ファイルから自動採譜してMIDIを生成すれば、GarageBandやDAWでの打ち込みの出発点を
            素早く作れます。ゼロから入力するより格段に効率が上がります。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tool"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              ツールを使ってみる
            </Link>
            <Link
              href="/articles/mp3-to-midi"
              className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              MP3→MIDI変換の記事を見る
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/garageband-midi-guide" />
      </article>
    </main>
  );
}
