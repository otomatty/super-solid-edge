import { heroSection, title, subtitle, description } from "./HeroSection.css";

function HeroSection() {
  return (
    <section class={heroSection}>
      <h1 class={title}>Super Solid Edge の機能</h1>
      <h2 class={subtitle}>次世代のWeb開発を可能にする強力な機能群</h2>
      <p class={description}>
        Solid.js、Supabase、Hono on Cloudflare Workers、Tauriを組み合わせた
        最先端のテクノロジースタックで、高性能かつスケーラブルなアプリケーションを構築できます。
      </p>
    </section>
  );
}

export default HeroSection;
