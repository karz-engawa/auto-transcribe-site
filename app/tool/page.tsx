import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "自動採譜ツール｜音声ファイルからMIDIを生成",
  description:
    "MP3・WAVなどの音声ファイルをアップロードするだけでMIDIを自動生成できる無料ツールです。耳コピの補助や楽譜作成の下書きに活用できます。",
  alternates: {
    canonical: "/tool",
  },
  openGraph: {
    title: "自動採譜ツール｜音声ファイルからMIDIを生成",
    description:
      "MP3・WAVなどの音声ファイルをアップロードするだけでMIDIを自動生成できる無料ツールです。",
    url: "/tool",
    siteName: "自動採譜Webアプリ",
    type: "website",
  },
};

const faq = [
  {
    q: "どんな音声ファイルが使えますか？",
    a: "MP3・WAV・OGG・FLACなどの一般的な音声フォーマットに対応しています。音質が高いほど採譜精度が上がりやすいため、可能であればWAVなど非圧縮形式をお使いください。",
  },
  {
    q: "完全に正確な楽譜が出力されますか？",
    a: "AIによる推定のため、完璧な精度を保証するものではありません。単音のメロディや、ピアノ単体の演奏は比較的精度が高くなります。複数楽器が重なった音源や、ドラム・ボーカルが含まれる場合は誤認識が増えやすくなります。",
  },
  {
    q: "生成したMIDIはどう使えばいいですか？",
    a: "MuseScoreやDAWにMIDIを読み込んで編集できます。音符の修正、不要音の削除、楽譜化（PDF出力）、DAWでの打ち込み確認など、さまざまな用途に活用できます。",
  },
  {
    q: "何分の音源まで対応していますか？",
    a: "長い音源ほど処理時間がかかり、精度も下がりやすくなります。まずは30秒〜1分程度の短いクリップで試すことをおすすめします。",
  },
  {
    q: "著作権のある楽曲を使っていいですか？",
    a: "著作権のある楽曲の採譜は、個人の練習・学習目的に限り利用するようにしてください。採譜結果を公開・配布・商用利用することは、著作権者の権利を侵害する可能性があります。",
  },
  {
    q: "生成したMIDIをMuseScoreで開くには？",
    a: "MuseScoreを起動し、「ファイル → 開く」からダウンロードしたMIDIファイルを選択してください。楽譜として表示された後、音符やリズムを修正して使用します。",
  },
];

export default function ToolPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">

        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">ホーム</Link>
          <span className="mx-2">/</span>
          <span>自動採譜ツール</span>
        </nav>

        <header className="mb-8">
          <p className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            無料ツール
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            自動採譜ツール
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            音声ファイルをアップロードするだけで、AIがMIDIを自動生成します。
            耳コピの補助や楽譜作成の下書き、DAW打ち込みのスタートとして活用できます。
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-lg font-semibold">使い方（3ステップ）</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</span>
              <div>
                <span className="font-medium">音声ファイルを用意する</span>
                <p className="mt-0.5 text-sm text-gray-500">MP3・WAV・OGG・FLACなどのファイルを用意してください。30秒〜1分程度の短いクリップが精度が出やすくおすすめです。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">2</span>
              <div>
                <span className="font-medium">下のツールにファイルをアップロードする</span>
                <p className="mt-0.5 text-sm text-gray-500">ファイルを選択して処理を開始してください。音声の長さや内容によって処理時間が異なります。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">3</span>
              <div>
                <span className="font-medium">MIDIをダウンロードして編集する</span>
                <p className="mt-0.5 text-sm text-gray-500">生成されたMIDIをダウンロードし、MuseScoreやDAWで読み込んで編集・活用してください。</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-10 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <iframe
            src="https://engawa-auto-transcribe-midi.hf.space"
            width="105%"
            height="1200"
            style={{ border: "none" }}
            title="自動採譜ツール - 音声からMIDIを生成"
          />
        </section>

        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">このツールについて</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">対応フォーマット</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-400" />MP3（MPEG Audio Layer III）</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-400" />WAV（非圧縮・推奨）</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-400" />OGG Vorbis</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-400" />FLAC（可逆圧縮）</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">出力形式：MIDI（.mid）</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">精度について</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ 単音メロディ・ピアノ単体は精度が出やすい</li>
                <li>✓ 低ノイズ・クリアな録音が有利</li>
                <li>△ 複数楽器が重なると誤認識が増える</li>
                <li>△ ドラム・ボーカル混在音源は苦手</li>
                <li>✗ 完璧な楽譜を保証するものではない</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">「AIで下書き、人間が仕上げ」の用途に最適です。</p>
            </div>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="mb-2 text-xl font-bold text-blue-900">活用例</h2>
          <p className="mb-4 text-blue-950 leading-7">
            このツールは以下のような用途に活用できます。
          </p>
          <ul className="space-y-2 text-blue-950">
            <li>・好きな曲のメロディを耳コピするための参考MIDI作成</li>
            <li>・作曲スケッチの音声をDAW用MIDIデータに変換</li>
            <li>・ピアノ演奏を録音してMIDI化し、MuseScoreで楽譜に整える</li>
            <li>・歌ったメロディを簡易的にMIDI化して音程確認</li>
            <li>・楽譜のないレパートリーを大まかにMIDI化して練習に使う</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">よくある質問</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-200 p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                  {item.q}
                  <span className="shrink-0 text-gray-400 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 leading-7 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">MIDI生成後の活用ガイド</h2>
          <p className="mb-6 text-gray-600 leading-7">
            生成したMIDIはそのまま完成品として使うよりも、楽譜ソフトやDAWで編集することで実用性が上がります。
            以下の記事で、MIDIの活用方法を詳しく解説しています。
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/articles/musescore-midi-edit"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold">MuseScoreでMIDIを編集する方法</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                MIDIを読み込んで楽譜として整える手順を解説します。
              </p>
            </Link>
            <Link
              href="/articles/mp3-to-midi"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold">MP3をMIDIに変換する方法</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                変換の仕組みと注意点を初心者向けに解説します。
              </p>
            </Link>
            <Link
              href="/articles/what-is-midi"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold">MIDIとは？基本をわかりやすく解説</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                MIDIの仕組みや音声ファイルとの違いを整理します。
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">採譜精度を高めるコツ</h2>
          <div className="rounded-2xl border border-gray-200 p-6 space-y-4 text-gray-700 leading-7">
            <p>
              自動採譜の結果は、入力する音源の質によって大きく変わります。
              以下のポイントを意識すると、より使いやすいMIDIが生成されやすくなります。
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>短いクリップから試す：</strong>30秒〜1分程度の短い区間で試すと、精度確認がしやすく修正の手間も減ります。</li>
              <li><strong>単音・単楽器の音源を選ぶ：</strong>ピアノ単体やメロディのみの音源は精度が出やすく、初めての利用に向いています。</li>
              <li><strong>WAV形式を使う：</strong>MP3は圧縮により高音域の情報が失われている場合があります。元素材があればWAVを使うと安定しやすくなります。</li>
              <li><strong>ノイズを減らす：</strong>背景ノイズや環境音が多い録音は誤認識の原因になります。クリーンな録音ほど良い結果が得られます。</li>
              <li><strong>後処理を前提にする：</strong>完璧な出力を期待するより「MuseScoreで修正する前提」で使うと、全体の作業効率が上がります。</li>
            </ul>
            <p>
              詳しくは
              <Link href="/articles/how-auto-transcription-works" className="text-blue-600 underline hover:text-blue-800">
                自動採譜の仕組みを解説した記事
              </Link>
              もご参照ください。
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/auto-transcription-tools"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold">自動採譜ツール比較</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                複数の自動採譜ツールの特徴と選び方を解説します。
              </p>
            </Link>
            <Link
              href="/articles/ear-copy-efficiency"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold">耳コピを効率化する方法</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                自動採譜とMIDIを使って耳コピ作業を時短するコツを解説します。
              </p>
            </Link>
            <Link
              href="/articles/midi-to-sheet-music"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold">MIDIを楽譜にする方法</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                MuseScoreでMIDIを楽譜化してPDF出力する手順を解説します。
              </p>
            </Link>
            <Link
              href="/articles/free-auto-transcription-tools"
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold">無料自動採譜ソフト比較</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                無料で使える自動採譜ソフトの選び方と活用法を解説します。
              </p>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
