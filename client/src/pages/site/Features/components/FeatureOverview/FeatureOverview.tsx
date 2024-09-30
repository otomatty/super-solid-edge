import {
  featureOverview,
  title,
  featureGrid,
  featureItem,
  featureIcon,
  featureTitle,
} from "./FeatureOverview.css";

const features = [
  { icon: "🚀", title: "高速パフォーマンス" },
  { icon: "🔄", title: "リアクティブな開発" },
  { icon: "🌐", title: "クロスプラットフォーム" },
  { icon: "🛡️", title: "セキュアなバックエンド" },
  { icon: "⚡", title: "エッジコンピューティング" },
  { icon: "🖥️", title: "デスクトップアプリ対応" },
];

function FeatureOverview() {
  return (
    <section class={featureOverview}>
      <h2 class={title}>主要機能の概要</h2>
      <div class={featureGrid}>
        {features.map((feature) => (
          <div class={featureItem}>
            <span class={featureIcon}>{feature.icon}</span>
            <h3 class={featureTitle}>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureOverview;
