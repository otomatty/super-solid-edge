import { FeatureCard } from "../FeatureCard/FeatureCard";
import { featureGrid } from "./FeatureGrid.css";

const features = [
  {
    title: "高速パフォーマンス",
    description:
      "Solid.jsとHonoによる高速な描画と応答で、ユーザー体験を向上させます。",
    icon: "speed.svg",
  },
  {
    title: "クロスプラットフォーム",
    description:
      "Web、デスクトップ、モバイルに対応し、あらゆるデバイスでアプリケーションを利用できます。",
    icon: "devices.svg",
  },
  {
    title: "リアルタイムデータベース",
    description:
      "Supabaseによるリアルタイムデータ同期で、常に最新の情報を提供します。",
    icon: "database.svg",
  },
  {
    title: "エッジコンピューティング",
    description:
      "Cloudflare Workersによる高速なAPIレスポンスで、世界中のユーザーに快適な体験を提供します。",
    icon: "cloud.svg",
  },
  {
    title: "セキュアな認証",
    description:
      "Supabaseによる安全な認証システムで、ユーザーデータを保護します。",
    icon: "shield.svg",
  },
  {
    title: "カスタマイズ可能",
    description:
      "柔軟なアーキテクチャにより、プロジェクトのニーズに合わせて拡張可能です。",
    icon: "customize.svg",
  },
];

export function FeatureGrid() {
  return (
    <div class={featureGrid}>
      {features.map((feature) => (
        <FeatureCard
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}
