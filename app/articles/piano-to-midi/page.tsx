import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/app/_components/RelatedArticles";

export const metadata: Metadata = {
  title: "ピアノ音源をMIDI化する方法｜初心者でもできる自動採譜のコツ",
  description:
    "ピアノ音源をMIDIに変換する方法を初心者向けに解説。自動採譜ツールの使い方や精度を上げるコツも紹介します。",
  alternates: {
    canonical: "/articles/piano-to-midi",
  },
  openGraph: {
    title: "ピアノ音源をMIDI化する方法",
    description:
      "ピアノ音源からMIDIを生成する方法とコツを初心者向けに解説。",
    url: "/articles/piano-to-midi",
    siteName: "自動採譜アプリ",
    type: "article",
  },
};

export default function PianoToMidiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ピアノ音源をMIDI化する方法",
    datePublished: "2026-03-29",
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/">ホーム</Link> / <Link href="/articles">記事</Link> /
          ピアノ→MIDI
        </nav>

        <h1 className="text-3xl font-bold md:text-5xl">
          ピアノ音源をMIDI化する方法
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          ピアノの演奏音源をMIDIに変換したいと考えたことはありませんか？
          自動採譜ツールを使えば、完全ではないものの、
          楽譜作成や耳コピの「たたき台」を簡単に作ることができます。
          この記事では、ピアノ音源をMIDI化するときのポイント、基本手順、
          精度を上げるコツ、そして変換後にMuseScoreなどで修正する流れを初心者向けに解説します。
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">ピアノ音源はMIDI化しやすい？</h2>
          <p className="mt-4">
            結論から言うと、ピアノ音源は他の楽器と比べて比較的MIDI化しやすい傾向があります。
            理由は、ピアノの音そのものが自動採譜にとって扱いやすい性質を持っているからです。
          </p>

          <ul className="mt-4 list-disc pl-6">
            <li>音程がはっきりしている</li>
            <li>アタック（音の立ち上がり）が明確</li>
            <li>単一楽器なので音色の混ざりが少ない</li>
            <li>ノートのオン・オフが比較的わかりやすい</li>
            <li>音域が広く、メロディと伴奏を区別しやすい</li>
          </ul>

          <p className="mt-4">
            一方で、ペダルを多用した演奏や、和音が密集する曲、極端に高音・低音が連続する曲は、
            自動採譜にとっては難易度が上がります。とくにペダル使用時は音が長く伸び、
            隣接する音と重なってしまうため、MIDIに変換すると音符が必要以上に長く検出されることがあります。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">ピアノ音源をMIDI化するメリット</h2>
          <p className="mt-4">
            ピアノ音源をMIDIにできると、演奏や練習、作曲の幅が大きく広がります。
          </p>
          <ul className="mt-4 list-disc pl-6">
            <li>楽譜として書き出して練習に使える</li>
            <li>テンポを落としてゆっくり再生できる</li>
            <li>ミスタッチや細かい揺れを修正できる</li>
            <li>ピアノ以外の音色でも再生できる</li>
            <li>DAWに取り込んでアレンジの素材にできる</li>
            <li>耳コピの音取りを視覚的に確認できる</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">自動採譜の基本手順</h2>

          <ol className="mt-4 list-decimal pl-6">
            <li>音源（mp3/wav）を用意する</li>
            <li>必要に応じて短い区間に切り出す</li>
            <li>自動採譜ツールにアップロード</li>
            <li>MIDIを生成してダウンロード</li>
            <li>MuseScoreまたはDAWで開く</li>
            <li>音符やリズム、不要な音を修正する</li>
            <li>必要ならPDFやMusicXMLとして書き出す</li>
          </ol>

          <p className="mt-4">
            この流れを意識しておくと、自動採譜の結果がいまひとつだった場合でも、
            どの段階で何を直せばよいかが明確になります。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">精度を上げるコツ</h2>

          <ul className="mt-4 list-disc pl-6">
            <li>ノイズの少ない音源を使う</li>
            <li>短い区間で処理する</li>
            <li>BPMを合わせる</li>
            <li>音量バランスを適切に整える</li>
            <li>リバーブが強い場合は控えめな音源を選ぶ</li>
            <li>ピアノ単体録音や独奏音源を使う</li>
          </ul>

          <p className="mt-4">
            特にBPMがあらかじめ分かっている場合は、ツール側にも反映させることで、
            生成されたMIDIの拍子や小節がそろいやすくなります。
            また、長い曲を一気に処理するより、Aメロ・サビなど構成ごとに分けて処理する方が、
            細かい修正もしやすく、結果の確認も楽になります。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">変換後にMuseScoreで修正するポイント</h2>
          <p className="mt-4">
            ピアノ音源から作ったMIDIは、そのままだと音符が細かく分かれていたり、
            ペダルの影響で音が長く伸びていたりすることがよくあります。
            MuseScoreで読み込んだら、まず全体を確認してから次のような順序で修正すると効率的です。
          </p>
          <ol className="mt-4 list-decimal pl-6">
            <li>テンポと拍子が合っているか確認する</li>
            <li>極端に短い音、不自然な装飾音を削除する</li>
            <li>メロディと伴奏の上下関係を整理する</li>
            <li>音符の長さを8分・16分など読みやすい単位に整える</li>
            <li>必要に応じて和音を簡略化する</li>
          </ol>
          <p className="mt-4">
            完璧に直す必要はありません。
            読み返したときに「演奏できそうな譜面」になっていれば十分です。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">よくある失敗とその対策</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>音が細かく分裂しすぎる → 短い音を削除し、必要に応じてクオンタイズ</li>
            <li>左手の伴奏が崩れる → 低音域だけ抜き出して再処理する</li>
            <li>装飾音が多すぎる → MuseScoreで一括削除してから修正</li>
            <li>音程が半音ズレる → ピッチ補正やキー設定を見直す</li>
          </ul>
          <p className="mt-4">
            自動採譜は完成品ではなく、あくまで作業の土台です。
            「AIで下書き、人間で仕上げ」という考え方で取り組むと、ピアノ音源も実用的な楽譜やMIDIに整えられます。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">まとめ</h2>
          <p className="mt-4">
            ピアノ音源は、自動採譜と相性の良い素材のひとつです。
            音程が明確でアタックがはっきりしているため、メロディや単音中心の演奏ほどMIDI化しやすくなります。
          </p>
          <p className="mt-4">
            一方で、ペダル使用時や複雑な和音はMIDIが乱れやすいため、
            MuseScoreなどで修正する前提で取り組むのが現実的です。
            まずは短い演奏から試してみて、ツールの得意不得意を把握すると、効率よくMIDI化できるようになります。
          </p>
        </section>

        <section className="mt-12 rounded-xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            実際に試してみる
          </h2>
          <p className="mt-3">
            下のツールからピアノ音源をアップロードして、
            MIDI変換を体験できます。
          </p>

          <Link
            href="/tool"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            ツールを使う
          </Link>
        </section>

        <RelatedArticles currentHref="/articles/piano-to-midi" />
      </article>
    </main>
  );
}