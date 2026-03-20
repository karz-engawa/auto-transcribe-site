export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          自動採譜アプリ
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          音声ファイルをアップロードすると、AIでMIDIを生成する自動採譜ツールです。
          今後は楽譜出力や精度改善も順次対応予定です。
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/tool"
            className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-80"
          >
            ツールを使う
          </a>

          <a
            href="/articles"
            className="rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
          >
            記事を見る
          </a>
        </div>
      </section>
    </main>
  );
}