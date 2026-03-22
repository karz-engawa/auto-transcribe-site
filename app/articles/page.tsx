export const metadata = {
  title: "記事一覧 | 自動採譜アプリ",
  description: "自動採譜、MIDI、AI音楽制作に関する記事一覧です。",
};

const articles = [
  {
    title: "MP3をMIDIに変換する方法",
    href: "/articles/mp3-to-midi",
    description:
      "MP3などの音声ファイルからMIDIを生成する方法や注意点を初心者向けに解説します。",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-3xl font-bold">記事一覧</h1>
        <p className="mb-10 text-gray-600">
          自動採譜、MIDI、AI音楽制作に関する記事を順次公開しています。
        </p>

        <div className="space-y-6">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="block rounded-2xl border border-gray-200 p-6 transition hover:bg-gray-50"
            >
              <h2 className="mb-2 text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}