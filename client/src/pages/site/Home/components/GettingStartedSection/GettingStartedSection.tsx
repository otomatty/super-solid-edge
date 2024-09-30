import { A } from "@solidjs/router";
import { StepCard } from "./StepCard/StepCard";
import {
  gettingStartedSection,
  title,
  subtitle,
  stepsContainer,
  ctaButton,
} from "./GettingStartedSection.css";

const steps = [
  {
    number: 1,
    title: "プロジェクトのクローン",
    description: "GitHubからSuper Solid Edgeプロジェクトをクローンします。",
  },
  {
    number: 2,
    title: "依存関係のインストール",
    description: "必要なパッケージをインストールします。",
  },
  {
    number: 3,
    title: "環境設定",
    description: "環境変数を設定し、必要な認証情報を追加します。",
  },
  {
    number: 4,
    title: "開発サーバーの起動",
    description: "ローカル開発サーバーを起動し、アプリケーションを実行します。",
  },
];

function GettingStartedSection() {
  return (
    <section class={gettingStartedSection}>
      <h2 class={title}>始め方</h2>
      <p class={subtitle}>Super Solid Edgeを使って、すぐに開発を始めましょう</p>
      <div class={stepsContainer}>
        {steps.map((step) => (
          <StepCard
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
      <A href="/docs" class={ctaButton}>
        詳細なドキュメントを見る
      </A>
    </section>
  );
}

export default GettingStartedSection;
