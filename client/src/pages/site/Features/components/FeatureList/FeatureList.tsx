import {
  featureList,
  title,
  feature,
  featureContent,
  featureTitle,
  featureDescription,
  featureImage,
} from "./FeatureList.css";

const features = [
  {
    title: "Solid.jsによる高速なUI",
    description:
      "Solid.jsの細粒度リアクティビティにより、必要な部分のみを更新する効率的なレンダリングを実現。高速で滑らかなユーザー体験を提供します。",
    image: "/images/features/solidjs-ui.webp",
  },
  {
    title: "Supabaseによるリアルタイムデータベース",
    description:
      "Supabaseを使用したリアルタイムデータベースにより、データの即時同期と更新が可能。複数のクライアント間でシームレスなデータ共有を実現します。",
    image: "/images/features/supabase-realtime.webp",
  },
  {
    title: "Hono on Cloudflare Workersによる高速なAPI",
    description:
      "Honoフレームワークとクラウドフレアのエッジネットワークを活用し、世界中のユーザーに低レイテンシーでAPIレスポンスを提供します。",
    image: "/images/features/hono-cloudflare.webp",
  },
  {
    title: "Tauriによるクロスプラットフォーム対応",
    description:
      "Tauriを使用することで、同じコードベースからWeb、デスクトップ、さらにはモバイルアプリケーションを構築可能。開発効率と保守性を大幅に向上させます。",
    image: "/images/features/tauri-cross-platform.webp",
  },
];

function FeatureList() {
  return (
    <section class={featureList}>
      <h2 class={title}>詳細機能リスト</h2>
      {features.map((item, index) => (
        <div class={feature[index % 2 === 0 ? "odd" : "even"]}>
          <div class={featureContent}>
            <h3 class={featureTitle}>{item.title}</h3>
            <p class={featureDescription}>{item.description}</p>
          </div>
          <img src={item.image} alt={item.title} class={featureImage} />
        </div>
      ))}
    </section>
  );
}

export default FeatureList;
