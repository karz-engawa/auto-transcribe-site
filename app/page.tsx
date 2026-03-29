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

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <h2 className="text-3xl font-bold text-center">最新記事</h2>
        <p className="mt-3 text-center text-gray-600">
          自動採譜・MIDIに関する記事を更新しています。
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <a
            href="/articles/mp3-to-midi"
            className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold">
              MP3をMIDIに変換する方法
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              音声ファイルからMIDIへ変換する基本を解説します。
            </p>
          </a>

          <a
            href="/articles/what-is-midi"
            className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold">
              MIDIとは？MP3との違いを解説
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              MIDIの仕組みや特徴を初心者向けに解説します。
            </p>
          </a>

          <a
            href="/articles/auto-transcription-tools"
            className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold">
              自動採譜ツール比較
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              MP3からMIDI変換できるツールの考え方を解説します。
            </p>
          </a>

          <a
            href="/articles/piano-to-midi"
            className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold">
              ピアノ音源をMIDI化する方法
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              ピアノ音源をMIDIに変換する方法とコツを解説します。
            </p>
          </a>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/articles"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            すべての記事を見る
          </a>
        </div>
      </section>

      <div className="mt-12 flex flex-wrap justify-center gap-6 pb-12 text-sm text-gray-500">
        <a href="/about" className="hover:underline">
          このサイトについて
        </a>
        <a href="/privacy" className="hover:underline">
          プライバシーポリシー
        </a>
        <a href="/contact" className="hover:underline">
          お問い合わせ
        </a>
      </div>
    </main>
  );
}