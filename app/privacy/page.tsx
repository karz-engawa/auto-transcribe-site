export const metadata = {
  title: "プライバシーポリシー | 自動採譜アプリ",
  description: "自動採譜アプリのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">プライバシーポリシー</h1>

        <div className="space-y-8 leading-8 text-gray-700">
          <section>
            <h2 className="mb-2 text-xl font-semibold">1. 個人情報の利用目的</h2>
            <p>
              当サイトでは、お問い合わせやアクセス解析の際に、名前やメールアドレス等の情報をご入力いただく場合があります。
              取得した情報は、お問い合わせへの回答、必要なご連絡、サービス改善のために利用し、それ以外の目的では利用しません。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">2. アクセス解析ツールについて</h2>
            <p>
              当サイトでは、サイト改善のために Google Analytics を利用しています。
              Google Analytics はトラフィックデータ収集のために Cookie を使用する場合があります。
              このデータは匿名で収集されており、個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">3. 広告について</h2>
            <p>
              当サイトでは、今後第三者配信の広告サービスを利用する場合があります。
              その際、ユーザーの興味に応じた広告を表示するため、Cookie 等を使用することがあります。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">4. 免責事項</h2>
            <p>
              当サイトに掲載する情報は、できる限り正確な内容を提供するよう努めていますが、
              正確性や安全性を保証するものではありません。
              当サイトの利用により生じた損害等について、一切の責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">5. 著作権について</h2>
            <p>
              当サイトに掲載している文章・画像・プログラム等の著作権は、運営者または各権利者に帰属します。
              無断転載・無断使用はご遠慮ください。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">6. プライバシーポリシーの変更</h2>
            <p>
              本ポリシーの内容は、必要に応じて予告なく変更することがあります。
              変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}