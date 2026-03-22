export const metadata = {
  title: "MP3をMIDIに変換する方法 | 自動採譜アプリ",
  description:
    "MP3をMIDIに変換する方法を初心者向けに解説します。自動採譜の仕組み、注意点、無料で試せる方法を紹介します。",
};

export default function Mp3ToMidiPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <article className="mx-auto max-w-4xl">
        <header className="mb-10">
          <p className="mb-3 text-sm text-gray-500">記事</p>
          <h1 className="mb-4 text-4xl font-bold">MP3をMIDIに変換する方法</h1>
          <p className="text-lg leading-8 text-gray-600">
            MP3などの音声ファイルからMIDIを作成したい人向けに、
            変換の考え方、注意点、実際に試す方法をわかりやすく解説します。
          </p>
        </header>

        <div className="space-y-10 leading-8 text-gray-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold">MP3をMIDIに変換できるのか？</h2>
            <p>
              結論から言うと、MP3をMIDIに変換することは可能です。
              ただし、単純なファイル形式の変換ではなく、音声の中に含まれる音の高さ、
              タイミング、長さなどを推定して、MIDIデータとして再構成する処理になります。
            </p>
            <p>
              そのため、画像をPDFに変換するような単純変換とは異なり、
              元の音源の内容や品質によって結果の精度が変わります。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">MIDIとは何か</h2>
            <p>
              MIDIは音そのものを記録したファイルではなく、
              「どの音を、いつ、どれくらいの長さで鳴らすか」といった演奏情報を記録する形式です。
            </p>
            <p>
              そのため、MIDIに変換できると、音程の修正、テンポの変更、
              楽譜化、DAWへの取り込みなどがしやすくなります。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">MP3からMIDIへ変換する用途</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>耳コピの補助に使いたい</li>
              <li>メロディを楽譜化したい</li>
              <li>DAWで打ち込みの土台を作りたい</li>
              <li>演奏練習用に音を可視化したい</li>
              <li>作曲・編曲の下書きを作りたい</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">変換精度に影響するポイント</h2>
            <p>自動採譜の精度は、以下のような条件で変わります。</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>単音か和音か</li>
              <li>ピアノ、ボーカル、ギターなど音色の違い</li>
              <li>伴奏が多いか少ないか</li>
              <li>ノイズの有無</li>
              <li>録音品質の良し悪し</li>
            </ul>
            <p>
              一般的に、単音メロディや比較的シンプルな音源の方が変換しやすく、
              バンド音源や複雑な和音が重なる音源は難易度が上がります。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">無料で試す方法</h2>
            <p>
              当サイトでは、音声ファイルをアップロードしてMIDI生成を試せる
              自動採譜ツールを公開しています。
            </p>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="mb-3 font-semibold">自動採譜ツールを試す</p>
              <p className="mb-4">
                MP3やWAVなどの音声ファイルからMIDI生成を試したい場合は、以下のツールページをご利用ください。
              </p>
              <a
                href="/tool"
                className="inline-block rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-80"
              >
                ツールページへ
              </a>
            </div>
            <div className="mt-6 rounded-2xl bg-black p-6 text-white">
              <p className="mb-3 text-lg font-bold">
                実際にMP3→MIDI変換を試してみる
              </p>
              <a href="/tool" className="inline-block bg-white text-black px-4 py-2 rounded">
                無料で試す
              </a>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">使うときの注意点</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>必ずしも人間の耳コピと同じ精度にはならない</li>
              <li>和音やリズムが崩れることがある</li>
              <li>生成後にMIDIを少し修正した方が実用的な場合が多い</li>
              <li>楽譜にする前に不要音の削除や量子化が必要なことがある</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">こんな人におすすめ</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>耳コピの時間を少しでも短縮したい人</li>
              <li>作曲や編曲の下地を早く作りたい人</li>
              <li>MIDIをDAWに読み込んで編集したい人</li>
              <li>AIや自動採譜ツールを試してみたい人</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">まとめ</h2>
            <p>
              MP3をMIDIに変換することは可能ですが、単純変換ではなく、
              音声解析によって演奏情報を推定する処理になります。
            </p>
            <p>
              そのため精度には限界もありますが、耳コピ補助や楽譜作成の下地、
              DAW編集のスタート地点としては十分に役立つケースがあります。
            </p>
            <p>
              まずは実際にツールを試してみて、どの程度使えるかを確認するのがおすすめです。
            </p>
            <a href="/articles" className="text-blue-600 underline">
              他の記事を見る
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}