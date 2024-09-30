import {
  useCases,
  title,
  caseGrid,
  caseItem,
  caseIcon,
  caseTitle,
  caseDescription,
} from "./UseCases.css";

const cases = [
  {
    icon: "🛒",
    title: "Eコマースプラットフォーム",
    description:
      "高速な商品検索、リアルタイムの在庫管理、セキュアな決済処理を実現。",
  },
  {
    icon: "📊",
    title: "ダッシュボードアプリケーション",
    description:
      "リアルタイムデータ更新、複雑なデータビジュアライゼーション、高速なフィルタリングを提供。",
  },
  {
    icon: "🎮",
    title: "オンラインゲーム",
    description:
      "低レイテンシーのマルチプレイヤー機能、クロスプラットフォーム対応、オフライン機能を実現。",
  },
  {
    icon: "📱",
    title: "モバイルアプリケーション",
    description:
      "ネイティブのようなパフォーマンス、オフライン対応、プッシュ通知機能を提供。",
  },
  {
    icon: "🏢",
    title: "企業内ツール",
    description:
      "セキュアなデータ管理、複数デバイス対応、カスタマイズ可能なワークフローを実現。",
  },
  {
    icon: "🎨",
    title: "クリエイティブツール",
    description:
      "高速なレンダリング、リアルタイムコラボレーション、クロスプラットフォーム同期を提供。",
  },
];

function UseCases() {
  return (
    <section class={useCases}>
      <h2 class={title}>使用例とデモ</h2>
      <div class={caseGrid}>
        {cases.map((item) => (
          <div class={caseItem}>
            <span class={caseIcon}>{item.icon}</span>
            <h3 class={caseTitle}>{item.title}</h3>
            <p class={caseDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UseCases;
