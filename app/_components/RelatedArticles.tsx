import Link from "next/link";

const allArticles = [
  {
    href: "/articles/mp3-to-midi",
    title: "MP3をMIDIに変換する方法",
    description: "MP3などの音声ファイルからMIDIを生成する方法や注意点を初心者向けに解説します。",
  },
  {
    href: "/articles/what-is-midi",
    title: "MIDIとは？MP3との違い・できることを初心者向けに解説",
    description: "MIDIとは何か、MP3やWAVとの違い、できること・できないことを初心者向けにわかりやすく整理します。",
  },
  {
    href: "/articles/auto-transcription-tools",
    title: "自動採譜ツール比較｜MP3からMIDI変換できるおすすめ方法を解説",
    description: "自動採譜ツールの選び方、使い方、MP3からMIDI変換するときの注意点を初心者向けに解説します。",
  },
  {
    href: "/articles/piano-to-midi",
    title: "ピアノ音源をMIDI化する方法",
    description: "ピアノ音源をMIDIに変換する方法とコツを解説します。",
  },
  {
    href: "/articles/ear-copy-efficiency",
    title: "耳コピを効率化する方法｜自動採譜とMIDIを使った時短のコツ",
    description: "自動採譜ツールやMIDIを活用して、耳コピや譜面作成を効率化する方法を初心者向けに解説します。",
  },
  {
    href: "/articles/musescore-midi-edit",
    title: "MuseScoreの使い方｜MIDI読み込みから楽譜編集まで初心者向け解説",
    description: "MuseScoreでMIDIを読み込み、音符やリズムを修正して楽譜として整える方法を初心者向けに解説します。",
  },
  {
    href: "/articles/free-auto-transcription-tools",
    title: "無料で使える自動採譜ソフト比較｜音声からMIDI・楽譜化する方法",
    description: "無料で使える自動採譜ソフトの選び方や、音声からMIDIへ変換してMuseScoreで修正する流れを初心者向けに解説します。",
  },
  {
    href: "/articles/what-is-musicxml",
    title: "MusicXMLとは？MIDIとの違いや楽譜制作での使い方を解説",
    description: "MusicXMLの基本、MIDIとの違い、MuseScoreでの使い方を初心者向けに解説します。",
  },
  {
    href: "/articles/what-is-daw",
    title: "DAWとは？初心者向けに音楽制作ソフトの基本を解説",
    description: "DAWの意味、できること、MIDIや自動採譜との関係を初心者向けに解説します。",
  },
  {
    href: "/articles/musescore-vs-finale",
    title: "MuseScoreとFinaleの違い｜初心者が選ぶならどちら？",
    description: "MuseScoreとFinaleの違い、初心者向けの選び方、自動採譜後の編集用途を解説します。",
  },
  {
    href: "/articles/ai-sheet-music",
    title: "AIで楽譜を作る方法｜自動採譜とMIDIを使った作成手順",
    description: "AIで楽譜を作る方法、自動採譜、MIDI、MuseScoreを組み合わせる流れを解説します。",
  },
  {
    href: "/articles/how-auto-transcription-works",
    title: "自動採譜の仕組みとは？音声からMIDIが作られる流れを解説",
    description: "自動採譜の仕組み、音声解析、ピッチ推定、MIDI生成の流れを初心者向けに解説します。",
  },
  {
    href: "/articles/wav-to-midi",
    title: "WAVをMIDIに変換する方法｜音声ファイルを自動採譜する手順",
    description: "WAVファイルをMIDIに変換する方法、自動採譜ツールの使い方、MuseScoreでの修正手順を解説します。",
  },
  {
    href: "/articles/midi-to-sheet-music",
    title: "MIDIを楽譜にする方法｜MuseScoreで読み込んで編集する手順",
    description: "MIDIを楽譜にする方法、MuseScoreでの読み込み、修正、PDF出力まで解説します。",
  },
  {
    href: "/articles/free-daw-for-beginners",
    title: "無料DAWおすすめ｜初心者がMIDI編集を始めるための選び方",
    description: "無料DAWの選び方、MIDI編集、自動採譜後の活用方法を初心者向けに解説します。",
  },
  {
    href: "/articles/ear-copying-basics",
    title: "耳コピとは？初心者向けにやり方・コツ・練習法を解説",
    description: "耳コピの基本的なやり方、コツ、よくある失敗と対策、自動採譜ツールを使った効率化方法を初心者向けに紹介します。",
  },
  {
    href: "/articles/what-is-piano-roll",
    title: "ピアノロールとは？DAW初心者向けに基本的な見方・使い方を解説",
    description: "ピアノロールの縦軸・横軸の読み方、ノートの編集方法、自動採譜MIDIとの関係をDAW初心者向けに解説します。",
  },
  {
    href: "/articles/what-is-midi-keyboard",
    title: "MIDIキーボードとは？初心者向けに仕組みと選び方を解説",
    description: "MIDIキーボードの仕組み、電子ピアノとの違い、DAWへの接続方法、初心者向けの選び方を紹介します。",
  },
  {
    href: "/articles/music-production-beginner-guide",
    title: "音楽制作を独学で始める方法｜DAWの選び方と最初のステップ",
    description: "音楽制作に必要なもの、DAWの選び方、MIDIの基本、自動採譜ツールの活用方法まで初心者向けに解説します。",
  },
  {
    href: "/articles/relative-pitch-training",
    title: "相対音感の鍛え方｜初心者向け耳トレーニングの基本と練習法",
    description: "相対音感の仕組みと練習法、絶対音感との違い、耳コピ・自動採譜との組み合わせ方を初心者向けに解説します。",
  },
  {
    href: "/articles/garageband-midi-guide",
    title: "GarageBandでMIDIを使う方法｜録音・編集・書き出しを初心者向け解説",
    description: "GarageBandでMIDIを録音・編集・書き出す方法を初心者向けに解説します。MIDIキーボードの接続からピアノロール編集まで紹介します。",
  },
  {
    href: "/articles/midi-file-troubleshooting",
    title: "MIDIファイルが開けない・音が出ない｜よくある問題と解決方法",
    description: "MIDIファイルが開けない、音が出ない、音がずれるなどのトラブルの原因と解決方法を初心者向けに解説します。",
  },
  {
    href: "/articles/daw-vs-musescore",
    title: "DAWとMuseScoreの違い｜どちらを使えばいい？用途別に解説",
    description: "DAWとMuseScoreの違い、それぞれの得意なこと・苦手なこと、用途別の使い分けを初心者向けに解説します。",
  },
];

export function RelatedArticles({ currentHref }: { currentHref: string }) {
  const currentIndex = allArticles.findIndex((a) => a.href === currentHref);
  const startIndex = currentIndex === -1 ? 0 : currentIndex;
  const related = [1, 2, 3].map(
    (offset) => allArticles[(startIndex + offset) % allArticles.length]
  );

  return (
    <section className="mt-12 border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold">関連記事</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {related.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
