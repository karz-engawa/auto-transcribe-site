export const metadata = {
  title: "このサイトについて | 自動採譜アプリ",
  description: "自動採譜アプリについての紹介ページです。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">このサイトについて</h1>

        <div className="space-y-6 leading-8 text-gray-700">
          <p>
            自動採譜アプリは、音声ファイルをアップロードすることで MIDI を生成することを目的としたWebサービスです。
          </p>

          <p>
            現在は試験公開版として運用しており、今後は精度向上、使いやすさ改善、記事コンテンツの充実を進めていく予定です。
          </p>

          <p>
            このサイトでは、以下のような情報も順次公開していきます。
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>自動採譜ツールの使い方</li>
            <li>MIDIや楽譜作成に関する解説</li>
            <li>AIによる音楽制作・採譜の活用方法</li>
            <li>開発ログや改善履歴</li>
          </ul>
        </div>
      </div>
    </main>
  );
}