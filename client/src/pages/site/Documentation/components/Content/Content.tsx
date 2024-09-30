import { content, title, text } from "./Content.css";

function Content() {
  return (
    <div class={content}>
      <h1 class={title}>ドキュメント</h1>
      <p class={text}>
        ここにドキュメントの内容が表示されます。実際の実装では、ルーティングに基づいて
        適切なコンテンツを動的に読み込むことになります。
      </p>
    </div>
  );
}

export default Content;
