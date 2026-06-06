import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 自動採譜アプリ",
  description: "自動採譜アプリのプライバシーポリシーです。広告配信・アクセス解析・Cookie の利用について説明しています。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">ホーム</Link>
          <span className="mx-2">/</span>
          <span>プライバシーポリシー</span>
        </nav>

        <h1 className="mb-8 text-3xl font-bold">プライバシーポリシー</h1>

        <div className="space-y-8 leading-8 text-gray-700">
          <section>
            <h2 className="mb-2 text-xl font-semibold">1. 個人情報の収集と利用目的</h2>
            <p>
              当サイトでは、お問い合わせの際にメールアドレス等の情報をご入力いただく場合があります。
              取得した情報は、お問い合わせへの回答および必要な連絡のみに利用し、それ以外の目的では利用しません。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">2. 広告配信について（Google AdSense）</h2>
            <p>
              当サイトでは、Google 合同会社が提供する広告配信サービス「Google AdSense」を利用しています。
              Google AdSense は、ユーザーの興味に応じたパーソナライズ広告を表示するために Cookie を使用します。
              Cookie を通じて収集されるデータは匿名であり、個人を特定するものではありません。
            </p>
            <p className="mt-4">
              Google のパーソナライズ広告は
              <a
                href="https://www.google.com/settings/ads"
                className="mx-1 text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google の広告設定ページ
              </a>
              から無効にすることができます。
              また、Google の広告に関するポリシーは
              <a
                href="https://policies.google.com/technologies/ads"
                className="mx-1 text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                こちら
              </a>
              をご参照ください。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">3. アクセス解析について（Google Analytics）</h2>
            <p>
              当サイトでは、サービス改善のために Google Analytics を利用しています。
              Google Analytics はトラフィックデータの収集に Cookie を使用することがあります。
              このデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p className="mt-4">
              Google Analytics によるデータ収集を無効にするには、
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="mx-1 text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics オプトアウト アドオン
              </a>
              をご利用ください。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">4. Cookie について</h2>
            <p>
              当サイトでは、利便性向上・アクセス解析・広告配信のために Cookie を利用しています。
              ブラウザの設定から Cookie を無効化することも可能ですが、一部のサービスが正常に動作しなくなる場合があります。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">5. 免責事項</h2>
            <p>
              当サイトに掲載する情報は、できる限り正確な内容を提供するよう努めていますが、
              正確性や安全性を保証するものではありません。
              当サイトの利用により生じた損害について、一切の責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">6. 著作権について</h2>
            <p>
              当サイトに掲載している文章・プログラム等の著作権は、運営者または各権利者に帰属します。
              無断転載・無断使用はご遠慮ください。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">7. プライバシーポリシーの変更</h2>
            <p>
              本ポリシーの内容は、必要に応じて予告なく変更することがあります。
              変更後のポリシーは、本ページに掲載した時点で効力を生じるものとします。
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
          最終更新日：2026-06-07
        </div>
      </div>
    </main>
  );
}
