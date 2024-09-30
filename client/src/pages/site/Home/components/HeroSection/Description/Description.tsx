import { description, highlight } from "./Description.css";

export function Description() {
  return (
    <div class={description}>
      <p>
        <span class={highlight}>クロスプラットフォーム</span>
        対応の次世代Webアプリケーションテンプレート
      </p>
      <p>
        <span class={highlight}>Solid.js</span>、
        <span class={highlight}>Supabase</span>、
        <span class={highlight}>Hono on Cloudflare Workers</span>、
        <span class={highlight}>Tauri</span>を使用した
        高性能なアプリケーション開発を始めましょう。
      </p>
      <p>
        1つのコードベースで、Web、デスクトップ、モバイルアプリケーションを構築できます。
      </p>
    </div>
  );
}
