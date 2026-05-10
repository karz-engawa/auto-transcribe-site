export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8 text-sm text-gray-500">
        ホーム / このサイトについて
      </div>

      <h1 className="text-5xl font-bold mb-10">
        このサイトについて
      </h1>

      <div className="space-y-8 text-gray-700 leading-8">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            自動採譜アプリについて
          </h2>

          <p>
            自動採譜アプリは、音声ファイルからMIDIデータを生成する
            AIベースの自動採譜ツールです。
          </p>

          <p className="mt-4">
            音楽制作、耳コピ、作曲、楽譜制作をより効率化することを目的として、
            MIDI変換ツールや関連情報を提供しています。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            このサイトの目的
          </h2>

          <p>
            MIDI、AI音楽、耳コピ、自動採譜に関する情報を、
            初心者にもわかりやすく解説することを目的としています。
          </p>

          <p className="mt-4">
            音楽制作のハードルを下げ、
            より多くの人が音楽制作を楽しめる環境づくりを目指しています。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            ご利用について
          </h2>

          <p>
            当サイトで提供している自動採譜機能は、
            AIによる解析結果を元に生成されています。
          </p>

          <p className="mt-4">
            完全な精度を保証するものではないため、
            MuseScoreやDAWソフトなどで修正しながらご利用ください。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            お問い合わせ
          </h2>

          <p>
            ご意見・ご要望などがございましたら、
            お問い合わせページよりご連絡ください。
          </p>
        </section>

      </div>
    </main>
  );
}