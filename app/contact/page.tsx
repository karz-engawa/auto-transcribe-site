export const metadata = {
  title: "お問い合わせ | 自動採譜アプリ",
  description: "自動採譜アプリへのお問い合わせページです。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">お問い合わせ</h1>

        <div className="space-y-6 leading-8 text-gray-700">
          <p>
            自動採譜アプリに関するご意見、ご要望、不具合報告は以下までご連絡ください。
          </p>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="mb-2 font-semibold">連絡先</p>
            <p>メールアドレス：kazuza.brothers@gmail.com</p>
          </div>

          <p>
            返信にはお時間をいただく場合があります。内容によっては回答できないことがありますので、あらかじめご了承ください。
          </p>
        </div>
      </div>
    </main>
  );
}