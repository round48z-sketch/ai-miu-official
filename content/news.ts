export type NewsCategory = "MUSIC" | "GOODS" | "MEDIA" | "INFO";

export const newsCategoryLabel: Record<NewsCategory, string> = {
  MUSIC: "音楽",
  GOODS: "グッズ",
  MEDIA: "メディア",
  INFO: "お知らせ",
};

export type NewsItem = {
  slug: string;
  date: string;
  category: NewsCategory;
  title: string;
  href?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "official-games-open",
    date: "2026.09.05",
    category: "INFO",
    title: "公式ゲーム「MIU ♡ BLOCKS」ほか3作品を公開",
    href: "/game",
  },
  {
    slug: "izon-switch-release",
    date: "2026.08.20",
    category: "MUSIC",
    title: "新曲「依存スイッチ」配信開始",
    href: "/music",
  },
  {
    slug: "line-stamp-vol2",
    date: "2026.07.15",
    category: "GOODS",
    title: "LINEスタンプ Vol.2 発売中",
    href: "/goods",
  },
  {
    slug: "official-sns-open",
    date: "2026.06.01",
    category: "MEDIA",
    title: "TikTok / X 公式アカウントを開設",
    href: "/news",
  },
  {
    slug: "kirameki-fever-release",
    date: "2026.05.12",
    category: "MUSIC",
    title: "「キラメキフィーバー」配信中",
    href: "/music",
  },
  {
    slug: "line-stamp-vol1",
    date: "2026.04.20",
    category: "GOODS",
    title: "LINEスタンプ Vol.1 発売",
    href: "/goods",
  },
];

export function getLatestNews(count = 3) {
  return newsItems.slice(0, count);
}
