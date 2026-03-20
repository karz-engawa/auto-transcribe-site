export default function ToolPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-3xl font-bold">自動採譜ツール</h1>
        <p className="mb-8 text-gray-600">
          音声ファイルからMIDIを生成するツールです。現在は試験公開版です。
        </p>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <iframe
            src="https://engawa-auto-transcribe-midi.hf.space"
            width="105%"
            height="1200"
            style={{ border: "none" }}
            title="Auto Transcribe Tool"
          />
        </div>
      </div>
    </main>
  );
}