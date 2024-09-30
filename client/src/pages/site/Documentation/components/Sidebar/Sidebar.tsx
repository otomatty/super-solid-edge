import { A } from "@solidjs/router";
import { sidebar, logo, logoImage, nav, navItem, navLink } from "./Sidebar.css";

const navItems = [
  { title: "はじめに", path: "/docs/introduction" },
  { title: "インストール", path: "/docs/installation" },
  { title: "基本的な使い方", path: "/docs/basic-usage" },
  { title: "高度な機能", path: "/docs/advanced-features" },
  { title: "API リファレンス", path: "/docs/api-reference" },
  { title: "トラブルシューティング", path: "/docs/troubleshooting" },
];

function Sidebar() {
  return (
    <aside class={sidebar}>
      <div class={logo}>
        <img
          src="/images/logo.svg"
          alt="Super Solid Edge Logo"
          class={logoImage}
        />
      </div>
      <nav class={nav}>
        {navItems.map((item) => (
          <div class={navItem}>
            <A href={item.path} class={navLink}>
              {item.title}
            </A>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
