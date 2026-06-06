import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "鼻歌・ハミングをMIDIに変換する方法｜メロディを採譜する手順",
  description:
    "鼻歌やハミングをMIDIデータに変換する方法を初心者向けに解説。録音の準備から自動採譜ツールの使い方、MuseScoreでの修正まで手順を紹介します。",
  alternates: { canonical: "/articles/humming-to-midi" },
  openGraph: {
    title: "鼻歌・ハミングをMIDIに変換する方法｜メロディを採譜する手順",
    description:
      "鼻歌やハミングをMIDIデータに変換する方法を初心者向けに解説。録音から自動採譜、MuseScoreでの修正まで紹介します。",
    url: "/articles/humming-to-midi",
    siteName: "自動採譜Webアプリ",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "鼻歌・ハミングをMIDIに変換する方法",
    description: "鼻歌やハミングをMIDIに変換する手順を初心者向けに解説します。",
  },
};

export default function HummingToMidiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "鼻歌・ハミングをMIDIに変換する方法｜メロディを採譜する手順",
    description:
      "鼻歌やハミングをMIDIデータに変換する方法を初心者向けに解説。録音の準備から自動採譜ツールの使い方、MuseScoreでの修正まで手順を紹介します。",
    author: { "@type": "Organization", name: "自動採譜Webアプリ" },
    publisher: { "@type": "Organization", name: "自動採譜Webアプリ" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/humming-to-midi" },
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
          <span>鼻歌・ハミングをMIDIに変換する方法</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            自動採譜・変換
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            鼻歌・ハミングをMIDIに変換する方法
            <br className="hidden md:block" />
            メロディを採譜する手順を解説
          </h1>
          <p className="mt-4 text-sm text-gray-500">公開日: 2026-06-07 / 更新日: 2026-06-07</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            「頭の中にメロディがあるけど楽譜にできない」「口ずさんだフレーズをDAWに取り込みたい」
            そんな方に向けて、鼻歌やハミングをMIDIデータに変換する方法を手順ごとに解説します。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">この記事でわかること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>・鼻歌・ハミングをMIDI化する全体の流れ</li>
            <li>・きれいに録音するためのコツ</li>
            <li>・自動採譜ツールの使い方</li>
            <li>・生成されたMIDIをMuseScoreで修正する方法</li>
            <li>・精度を上げるためのポイント</li>
          </ul>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2>鼻歌をMIDIにできる理由</h2>
          <p>
            鼻歌やハミングは、音声ファイルとして録音すればMP3やWAVと同じデータです。
            そのため、<strong>自動採譜ツールを使ってMIDIに変換できます。</strong>
            AIが音声の音程やタイミングを解析し、MIDI形式の演奏情報として出力します。
          </p>
          <p>
            ただし、鼻歌特有の注意点もあります。
            ビブラートや息継ぎのノイズ、発音のあいまいさがあると精度が落ちます。
            録音の質を少し意識するだけで、変換結果が大きく改善されます。
          </p>

          <h2>全体の流れ</h2>
          <ol>
            <li>メロディを録音する（スマートフォンや録音アプリで可）</li>
            <li>録音ファイルをMP3またはWAVで書き出す</li>
            <li>自動採譜ツールにアップロードしてMIDIを生成する</li>
            <li>MIDIをダウンロードし、MuseScoreやDAWで修正する</li>
          </ol>
          <p>
            特別な機材は必要なく、スマートフォン一台と本サイトのツールがあれば始められます。
          </p>

          <h2>ステップ1：きれいに録音する</h2>
          <p>
            変換精度は録音の質に大きく左右されます。以下の点を意識してください。
          </p>
          <ul>
            <li><strong>静かな場所で録音する：</strong>エアコンの音・外の騒音・TV音が混ざると誤認識の原因になります。</li>
            <li><strong>マイクとの距離を一定に保つ：</strong>近すぎると息の音を拾い、遠すぎると音が小さくなります。10〜20cm程度が目安です。</li>
            <li><strong>メトロノームに合わせて歌う：</strong>テンポが安定すると、MIDIのリズム情報が正確になります。スマートフォンのメトロノームアプリを使うと便利です。</li>
            <li><strong>ビブラートや装飾音を省く：</strong>最初はシンプルに「ラ・ラ・ラ」と均一な音量で歌うと、音程の認識精度が上がります。</li>
            <li><strong>テンポを少しゆっくりにする：</strong>速いテンポよりも、やや遅めに歌う方が音程の切れ目が明確になります。</li>
          </ul>

          <h2>ステップ2：録音ファイルを準備する</h2>
          <p>
            スマートフォンの録音アプリで録音した場合、ファイル形式がm4aやOGGになることがあります。
            多くの自動採譜ツールはMP3・WAVに対応しているため、
            変換が必要な場合はスマートフォンの音楽アプリで「共有→ファイルを保存」などから書き出してください。
          </p>
          <p>
            録音時間は<strong>30秒〜1分程度</strong>が扱いやすいです。
            長い曲を一気に録音するより、Aメロ・Bメロといったパーツ単位に分けて録音すると、
            精度確認や修正がしやすくなります。
          </p>

          <h2>ステップ3：自動採譜ツールでMIDIを生成する</h2>
          <p>
            録音ファイルが準備できたら、自動採譜ツールにアップロードしてMIDIを生成します。
            本サイトのツールはブラウザ上で動作し、インストール不要で利用できます。
          </p>
          <ol>
            <li>ツールページを開く</li>
            <li>録音した音声ファイルを選択してアップロードする</li>
            <li>処理が完了するまで待つ（音声の長さによって1〜数分かかります）</li>
            <li>生成されたMIDIファイルをダウンロードする</li>
          </ol>
          <p>
            単音のハミングは比較的精度が出やすいため、
            初めての方にも試しやすいユースケースです。
          </p>

          <h2>ステップ4：MIDIをMuseScoreで修正する</h2>
          <p>
            自動採譜の結果はそのまま完成品になることはほぼなく、細かい修正が必要です。
            無料の楽譜ソフト<strong>MuseScore</strong>を使うと、音符を視覚的に確認しながら修正できます。
          </p>
          <ul>
            <li>MuseScoreを開き、「ファイル → 開く」からダウンロードしたMIDIを読み込む</li>
            <li>音符の音程が正しいか一音ずつ確認する</li>
            <li>長さやタイミングがずれている箇所を修正する</li>
            <li>不要な音（息継ぎや環境音由来のノイズ音）を削除する</li>
          </ul>
          <p>
            MuseScoreでの修正方法については
            <Link href="/articles/musescore-midi-edit" className="text-blue-600 underline hover:text-blue-800">
              MuseScoreの使い方の記事
            </Link>
            で詳しく解説しています。
          </p>

          <h2>鼻歌MIDI変換の精度を上げるコツ</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">状況</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">精度への影響</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">対策</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">背景ノイズが多い</td>
                  <td className="border border-gray-200 px-4 py-3">大きく下がる</td>
                  <td className="border border-gray-200 px-4 py-3">静かな部屋で録音する</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">テンポが不安定</td>
                  <td className="border border-gray-200 px-4 py-3">リズムがずれやすい</td>
                  <td className="border border-gray-200 px-4 py-3">メトロノームに合わせて歌う</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">音量が小さすぎる</td>
                  <td className="border border-gray-200 px-4 py-3">音程の検出精度が低下</td>
                  <td className="border border-gray-200 px-4 py-3">マイクに適切な距離で歌う</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">和音・ハーモニーが入る</td>
                  <td className="border border-gray-200 px-4 py-3">複数音の分離が難しくなる</td>
                  <td className="border border-gray-200 px-4 py-3">単音メロディのみを歌う</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>DAWに取り込む場合</h2>
          <p>
            生成したMIDIはDAWに読み込むこともできます。
            たとえばGarageBandやAbleton Liveでは、MIDIファイルをドラッグ&ドロップするだけでピアノロールに取り込めます。
            そこから音符を修正したり、好きな音色（シンセ・ピアノ・弦楽器など）に差し替えたりして、
            作曲のスタートラインとして活用できます。
          </p>
          <p>
            「頭の中にあるメロディをDAWに入力する」作業は、MIDIキーボードがなくても、
            鼻歌→自動採譜→MIDI取り込みの流れで実現できます。
          </p>

          <h2>まとめ</h2>
          <p>
            鼻歌やハミングをMIDIに変換する流れは、<strong>録音→アップロード→修正</strong>の3ステップです。
            録音の質が変換精度を大きく左右するため、静かな環境でメトロノームに合わせて歌うことが最大のポイントです。
          </p>
          <p>
            完全な精度は期待せず、「AIが作ったたたき台を自分で仕上げる」感覚で使うと、
            作業効率が大幅に上がります。まずは30秒程度の短いフレーズから試してみてください。
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">鼻歌をMIDIに変換してみる</h2>
          <p className="mt-3 leading-7 text-blue-950">
            本サイトの自動採譜ツールは、ハミング・鼻歌の録音ファイルにも対応しています。
            まずは短いメロディから試してみてください。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tool" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              ツールを使ってみる
            </Link>
            <Link href="/articles/musescore-midi-edit" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100">
              MuseScoreでの修正方法を読む
            </Link>
          </div>
        </section>

        <RelatedArticles currentHref="/articles/humming-to-midi" />
      </article>
    </main>
  );
}
