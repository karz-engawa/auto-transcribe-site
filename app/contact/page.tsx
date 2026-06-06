import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ | 自動採譜アプリ",
  description: "自動採譜アプリへのお問い合わせページです。ご意見・ご要望・不具合報告はこちらからご連絡ください。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">ホーム</Link>
          <span className="mx-2">/</span>
          <span>お問い合わせ</span>
        </nav>

        <h1 className="mb-8 text-3xl font-bold">お問い合わせ</h1>

        <div className="space-y-6 leading-8 text-gray-700">
          <p>
            自動採譜アプリに関するご意見・ご要望・不具合のご報告は、以下のメールアドレスまでご連絡ください。
          </p>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="mb-1 text-sm font-semibold text-gray-500">メールアドレス</p>
            <p className="text-gray-900">kazuza.brothers@gmail.com</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="mb-3 font-semibold text-gray-900">お問い合わせの際にご記載ください</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
              <li>件名：お問い合わせの種類（ご意見・ご要望・不具合報告など）</li>
              <li>お使いのブラウザ・デバイス（不具合報告の場合）</li>
              <li>具体的な内容</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            返信にはお時間をいただく場合があります。内容によっては回答できないことがありますので、あらかじめご了承ください。
          </p>
        </div>
      </div>
    </main>
  );
}
