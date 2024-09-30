import { A } from "@solidjs/router";
import {
  callToAction,
  button,
  primaryButton,
  secondaryButton,
} from "./CallToAction.css";

export function CallToAction() {
  return (
    <div class={callToAction}>
      <A href="/register" class={`${button} ${primaryButton}`}>
        今すぐ始める
      </A>
      <A href="/docs" class={`${button} ${secondaryButton}`}>
        ドキュメントを見る
      </A>
    </div>
  );
}
