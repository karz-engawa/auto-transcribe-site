import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | 自動採譜アプリ",
  description:
    "自動採譜アプリの利用規約ページです。サービス利用時の注意事項や免責事項について記載しています。",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <article className="mx-auto max-w-4xl px-6 py-12 md:px-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span>利用規約</span>
        </nav>

        <h1 className="text-3xl font-bold md:text-5xl">
          利用規約
        </h1>

        <p className="mt-6 leading-8 text-gray-700">
          この利用規約（以下、「本規約」）は、自動採譜アプリ（以下、「当サイト」）が提供するサービスの利用条件を定めるものです。
          利用者は、本規約に同意したうえで当サイトを利用するものとします。
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">
              第1条（適用）
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              本規約は、利用者と当サイト運営者との間の当サイト利用に関わる一切の関係に適用されます。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              第2条（サービス内容）
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              当サイトでは、音声ファイルからMIDIデータを生成する自動採譜ツールおよび関連情報を提供しています。
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              サービス内容は、予告なく変更・停止・終了される場合があります。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              第3条（禁止事項）
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
              <li>法令または公序良俗に違反する行為</li>
              <li>当サイトの運営を妨害する行為</li>
              <li>不正アクセスまたはそれを試みる行為</li>
              <li>他者の権利を侵害する行為</li>
              <li>その他、運営者が不適切と判断する行為</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              第4条（免責事項）
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              当サイトで提供する自動採譜結果は、AIおよび機械処理によって生成されるものであり、
              正確性・完全性を保証するものではありません。
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              利用者は、生成結果を自身の責任において確認・利用するものとします。
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              当サイトの利用によって生じた損害について、運営者は一切の責任を負いません。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              第5条（著作権）
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              利用者がアップロードする音声ファイルについては、
              利用者自身が必要な権利を保有しているものとします。
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              他者の著作権を侵害するコンテンツのアップロードは禁止します。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              第6条（規約の変更）
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              本規約は、必要に応じて予告なく変更される場合があります。
            </p>
          </div>
        </section>

        <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
          最終更新日：2026-03-29
        </div>
      </article>
    </main>
  );
}