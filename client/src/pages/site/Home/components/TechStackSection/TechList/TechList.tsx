import { TechCard } from "../TechCard/TechCard";
import { techList } from "./TechList.css";

const technologies = [
  {
    name: "Solid.js",
    description: "高性能な宣言的UIライブラリ",
    icon: "solidjs-icon.svg",
  },
  {
    name: "Supabase",
    description: "オープンソースのFirebase代替",
    icon: "supabase-icon.svg",
  },
  {
    name: "Hono",
    description: "軽量で高速なWebフレームワーク",
    icon: "hono-icon.svg",
  },
  {
    name: "Cloudflare Workers",
    description: "エッジでコードを実行",
    icon: "cloudflare-icon.svg",
  },
  {
    name: "Tauri",
    description: "軽量なデスクトップアプリケーションフレームワーク",
    icon: "tauri-icon.svg",
  },
];

export function TechList() {
  return (
    <div class={techList}>
      {technologies.map((tech) => (
        <TechCard
          name={tech.name}
          description={tech.description}
          icon={tech.icon}
        />
      ))}
    </div>
  );
}
