export type NewsCategory = "MUSIC" | "GOODS" | "GAME" | "MEDIA" | "INFO";

export const newsCategoryLabel: Record<NewsCategory, string> = {
  MUSIC: "音楽",
  GOODS: "グッズ",
  GAME: "ゲーム",
  MEDIA: "メディア",
  INFO: "お知らせ",
};

export type NewsItem = {
  slug: string;
  date: string;
  category: NewsCategory;
  title: string;
  body: string;
  href?: string;
};

export const NEWS_HOME_COUNT = 3;
export const NEWS_PAGE_COUNT = 6;

export const newsItems: NewsItem[] = [
  {
    slug: "line-stamp-vol4",
    date: "2026.10.06",
    category: "GOODS",
    title: "LINEスタンプ「AI Miu Vol.4」発売",
    body: "AIみうのLINEスタンプ第4弾「AI Miu Vol.4」がLINE STOREで販売開始しました。かわいい表情やリアクションを楽しめるスタンプです。",
    href: "https://line.me/S/sticker/36984287",
  },
  {
    slug: "line-stamp-vol3",
    date: "2026.10.06",
    category: "GOODS",
    title: "LINEスタンプ「AI Miu Vol.3」発売",
    body: "AIみうのLINEスタンプ第3弾「AI Miu Vol.3」がLINE STOREで販売開始しました。日常で使いやすい、かわいいスタンプを収録しています。",
    href: "https://line.me/S/sticker/36947676",
  },
  {
    slug: "contact-form-open",
    date: "2026.10.01",
    category: "INFO",
    title: "CONTACTフォームを公開しました",
    body: "AIみう公式サイトから直接お問い合わせいただけるCONTACTフォームを公開しました。お仕事のご依頼、メディア掲載、コラボレーションなどのお問い合わせを受け付けています。",
    href: "/contact",
  },
  {
    slug: "official-site-renewal",
    date: "2026.09.30",
    category: "INFO",
    title: "AIみう公式サイトをリニューアルしました",
    body: "AIみう公式サイトをリニューアルしました。トップビジュアル、PROFILE、GALLERY、MUSICなどを更新し、よりAIみうの世界観を楽しめるサイトになりました。",
    href: "/",
  },
  {
    slug: "official-games-open",
    date: "2026.09.05",
    category: "GAME",
    title: "AIみう公式ゲームを公開しました",
    body: "AIみう公式ゲームを公開しました。MIU TETRIS、MIU POPS、MIU BLOCK BREAKERなどのゲームをお楽しみいただけます。",
    href: "/game",
  },
  {
    slug: "izon-switch-release",
    date: "2026.08.20",
    category: "MUSIC",
    title: "「依存スイッチ」配信開始",
    body: "AIみうの楽曲「依存スイッチ」の配信がスタートしました。Spotify、YouTube Music、LINE MUSICからお聴きいただけます。",
    href: "/music",
  },
];

function isNewer(a: NewsItem, b: NewsItem) {
  return b.date.localeCompare(a.date);
}

export function getAllNews() {
  return [...newsItems].sort(isNewer);
}

export function getLatestNews(count = NEWS_HOME_COUNT) {
  return getAllNews().slice(0, count);
}
