import { A } from "@solidjs/router";
import {
  footerSection,
  footerContent,
  footerLogo,
  footerLogoImage,
  footerLogoText,
  footerLinks,
  footerLinkColumn,
  footerLinkColumnTitle,
  footerLink,
  footerSocial,
  footerSocialLink,
  footerSocialIcon,
  footerBottom,
  footerCopyright,
  footerLegalLinks,
  footerLegalLink,
} from "./Footer.css";

function Footer() {
  return (
    <footer class={footerSection}>
      <div class={footerContent}>
        <div class={footerLogo}>
          <img
            src="/images/logo.svg"
            alt="Super Solid Edge Logo"
            class={footerLogoImage}
          />
          <p class={footerLogoText}>次世代のWeb開発を、あなたの手に</p>
        </div>
        <div class={footerLinks}>
          <div class={footerLinkColumn}>
            <h4 class={footerLinkColumnTitle}>製品</h4>
            <A href="/features" class={footerLink}>
              機能
            </A>
            <A href="/pricing" class={footerLink}>
              料金プラン
            </A>
            <A href="/docs" class={footerLink}>
              ドキュメント
            </A>
          </div>
          <div class={footerLinkColumn}>
            <h4 class={footerLinkColumnTitle}>リソース</h4>
            <A href="/blog" class={footerLink}>
              ブログ
            </A>
            <A href="/tutorials" class={footerLink}>
              チュートリアル
            </A>
            <A href="/showcase" class={footerLink}>
              ショーケース
            </A>
          </div>
          <div class={footerLinkColumn}>
            <h4 class={footerLinkColumnTitle}>会社情報</h4>
            <A href="/about" class={footerLink}>
              会社概要
            </A>
            <A href="/careers" class={footerLink}>
              採用情報
            </A>
            <A href="/contact" class={footerLink}>
              お問い合わせ
            </A>
          </div>
        </div>
        <div class={footerSocial}>
          <a
            href="https://twitter.com/supersuperedge"
            target="_blank"
            rel="noopener noreferrer"
            class={footerSocialLink}
          >
            <img
              src="/images/social/twitter.svg"
              alt="Twitter"
              class={footerSocialIcon}
            />
          </a>
          <a
            href="https://github.com/supersuperedge"
            target="_blank"
            rel="noopener noreferrer"
            class={footerSocialLink}
          >
            <img
              src="/images/social/github.svg"
              alt="GitHub"
              class={footerSocialIcon}
            />
          </a>
          <a
            href="https://discord.gg/supersuperedge"
            target="_blank"
            rel="noopener noreferrer"
            class={footerSocialLink}
          >
            <img
              src="/images/social/discord.svg"
              alt="Discord"
              class={footerSocialIcon}
            />
          </a>
        </div>
      </div>
      <div class={footerBottom}>
        <p class={footerCopyright}>
          &copy; 2023 Super Solid Edge. All rights reserved.
        </p>
        <div class={footerLegalLinks}>
          <A href="/privacy" class={footerLegalLink}>
            プライバシーポリシー
          </A>
          <A href="/terms" class={footerLegalLink}>
            利用規約
          </A>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
