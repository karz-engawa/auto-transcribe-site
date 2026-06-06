import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて | 自動採譜アプリ",
  description:
    "自動採譜アプリの運営者情報、サイトの目的、編集方針、AI採譜に関する免責事項を掲載しています。",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-800">ホーム</Link>
        <span className="mx-2">/</span>
        <span>このサイトについて</span>
      </div>

      <h1 className="text-5xl font-bold mb-10">
        このサイトについて
      </h1>

      <div className="space-y-8 text-gray-700 leading-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            自動採譜アプリとは
          </h2>

          <p>
            自動採譜アプリは、MP3・WAVなどの音声ファイルをアップロードするだけで、
            AIがMIDIデータを自動生成する無料の自動採譜ツールです。
            専門知識やインストール作業は不要で、ブラウザからすぐに使えます。
          </p>

          <p className="mt-4">
            生成したMIDIはMuseScoreやDAWに読み込んで編集・楽譜化でき、
            耳コピの補助、楽譜作成、音楽制作の下書きなど幅広い用途で活用できます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            なぜこのサイトを作ったか
          </h2>

          <p>
            耳コピや採譜は、音楽制作を独学で始めようとする人にとって
            最初の大きなハードルのひとつです。
            一音一音を手作業で拾う作業は根気が必要で、
            挫折の原因になりやすい工程でもあります。
          </p>

          <p className="mt-4">
            AIを使えばその下書き作業を自動化できる時代になってきました。
            しかし、使いやすいツールや信頼できる解説記事が日本語で少ないと感じていました。
            そこで、初心者でもすぐに使えるツールと、正確でわかりやすい情報を
            一か所で提供するサイトとして立ち上げたのがこのサイトです。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            運営者について
          </h2>

          <p>
            当サイトは、音楽制作と Web 開発の両方に関わる個人が運営しています。
            ピアノや作曲の経験を通じて、採譜・耳コピの大変さを実感してきた立場から、
            同じ課題を持つ初心者の方に向けて情報とツールを発信しています。
          </p>

          <p className="mt-4">
            記事の執筆にあたっては、音楽理論・DAW・MIDI の知識を土台に、
            実際にツールを試した結果や公式ドキュメントを参照しながら
            正確な情報を届けることを心がけています。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            初心者の方への使い方
          </h2>

          <p>
            このサイトのツールと記事は、音楽制作を始めたばかりの方でも
            迷わず使えるよう設計しています。
          </p>

          <ul className="mt-4 space-y-3 list-none">
            <li className="pl-4 border-l-2 border-blue-200">
              <span className="font-semibold text-gray-900">まずツールを試す</span>
              ― 短い音声ファイル（30秒程度）をアップロードしてMIDIを生成します。
            </li>
            <li className="pl-4 border-l-2 border-blue-200">
              <span className="font-semibold text-gray-900">MIDIを確認・修正する</span>
              ― 生成されたMIDIをMuseScoreやDAWで開き、音符を確認・修正します。
            </li>
            <li className="pl-4 border-l-2 border-blue-200">
              <span className="font-semibold text-gray-900">記事で知識を補う</span>
              ― MIDI・DAW・耳コピの基本を解説した記事で、操作の意味を理解しながら進めます。
            </li>
          </ul>

          <p className="mt-4">
            「AIで下書きを作り、自分で仕上げる」という流れが、
            初心者が最も効率よく採譜を学べる方法だと考えています。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            編集方針
          </h2>

          <p>
            当サイトの記事は、以下の方針に基づいて作成しています。
          </p>

          <ul className="mt-4 space-y-2 list-disc pl-6">
            <li>
              初心者が読んでも理解できる言葉と構成を心がける
            </li>
            <li>
              公式ドキュメントや実際の検証を参照し、根拠のある情報のみ掲載する
            </li>
            <li>
              特定ツールの不当な宣伝や誇張表現は行わない
            </li>
            <li>
              情報が古くなった場合は速やかに更新または削除する
            </li>
            <li>
              広告掲載はサービス運営のためであり、記事内容の公平性に影響しない
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            AI採譜の精度に関する免責事項
          </h2>

          <p>
            当サイトの自動採譜ツールは、AIによる音声解析をもとにMIDIデータを生成しています。
            技術的な限界により、以下のような場合に精度が低下することがあります。
          </p>

          <ul className="mt-4 space-y-2 list-disc pl-6">
            <li>複数の楽器が重なる複雑な音源</li>
            <li>ボーカルや弦楽器など音程が連続的に変化する音</li>
            <li>ノイズが多い録音や音質が低い音源</li>
            <li>リバーブやエコーが強くかかった音源</li>
          </ul>

          <p className="mt-4">
            生成されたMIDIは参考情報であり、完全な正確性を保証するものではありません。
            実際にご利用の際は、MuseScoreやDAWで内容を確認・修正したうえでお使いください。
          </p>

          <p className="mt-4">
            また、著作権のある楽曲を採譜する場合は、私的利用の範囲内でご利用ください。
            採譜結果の配布・公開は、著作権者の許可が必要な場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            お問い合わせ
          </h2>

          <p>
            ご意見・ご要望・記事の誤りのご指摘などがございましたら、
            <Link href="/contact" className="text-blue-600 underline hover:text-blue-800 mx-1">
              お問い合わせページ
            </Link>
            よりご連絡ください。
          </p>
        </section>

      </div>
    </main>
  );
}
