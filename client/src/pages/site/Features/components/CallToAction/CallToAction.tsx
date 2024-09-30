import { A } from "@solidjs/router";
import {
  callToAction,
  content,
  title,
  description,
  buttonContainer,
  button,
  primaryButton,
  secondaryButton,
} from "./CallToAction.css";

function CallToAction() {
  return (
    <section class={callToAction}>
      <div class={content}>
        <h2 class={title}>
          Super Solid Edgeで次世代のWebアプリケーションを構築しよう
        </h2>
        <p class={description}>
          高速で柔軟、そしてスケーラブルなアプリケーション開発を始めましょう。
          充実したドキュメントとサポートコミュニティがあなたの開発をサポートします。
        </p>
        <div class={buttonContainer}>
          <A href="/docs/getting-started" class={`${button} ${primaryButton}`}>
            今すぐ始める
          </A>
          <A href="/community" class={`${button} ${secondaryButton}`}>
            コミュニティに参加
          </A>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
