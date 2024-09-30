import { PlatformCard } from "./PlatformCard/PlatformCard";
import {
  crossPlatformSection,
  title,
  subtitle,
  platformGrid,
} from "./CrossPlatformSection.css";

const platforms = [
  {
    name: "Web",
    description: "最新のブラウザで動作し、どこからでもアクセス可能",
    icon: "web.svg",
  },
  {
    name: "デスクトップ",
    description: "Windows、macOS、Linuxに対応したネイティブアプリケーション",
    icon: "desktop.svg",
  },
  {
    name: "モバイル",
    description: "PWA（Progressive Web App）としてモバイルデバイスで利用可能",
    icon: "mobile.svg",
  },
];

function CrossPlatformSection() {
  return (
    <section class={crossPlatformSection}>
      <h2 class={title}>クロスプラットフォーム対応</h2>
      <p class={subtitle}>
        1つのコードベースで、複数のプラットフォームに展開可能
      </p>
      <div class={platformGrid}>
        {platforms.map((platform) => (
          <PlatformCard
            name={platform.name}
            description={platform.description}
            icon={platform.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default CrossPlatformSection;
