export const siteConfig = {
  name: "AIみう Official",
  shortName: "AIみう",
  logo: "AIみう",
  tagline: "かわいく、やさしく、透明に。",
  description:
    "AIみう公式サイト。透明感のある可愛いAIアイドル／アーティスト、AIみうの最新情報・音楽・写真・ムービー・ゲーム・グッズをお届けします。",
  locale: "ja_JP",
  defaultOgImage: "/images/og.jpg",
  email: "",
} as const;

export const navItems = [
  { href: "/profile", en: "Profile", ja: "プロフィール" },
  { href: "/music", en: "Music", ja: "ミュージック" },
  { href: "/gallery", en: "Gallery", ja: "ギャラリー" },
  { href: "/game", en: "Game", ja: "ゲーム" },
  { href: "/news", en: "News", ja: "ニュース" },
  { href: "/goods", en: "Goods", ja: "グッズ" },
  { href: "/contact", en: "Contact", ja: "お問い合わせ" },
] as const;

export const snsLinks = [
  { name: "X", handle: "@miu_4519", href: "https://x.com/miu_4519" },
  { name: "TikTok", handle: "@miu_4519", href: "https://www.tiktok.com/@miu_4519" },
  { name: "Pinterest", handle: "準備中", href: null },
  { name: "Spotify", handle: "AIみう / miu", href: "https://open.spotify.com/artist/1R4C6DHAIVCRrwCptYNqNw" },
] as const;

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }
  return "https://ai-miu-official.vercel.app";
}
