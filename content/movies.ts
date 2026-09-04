export type MovieItem = {
  slug: string;
  title: string;
  kind: "MV" | "TikTok";
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const movies: MovieItem[] = [
  {
    slug: "izon-switch-mv",
    title: "依存スイッチ",
    kind: "MV",
    href: "https://www.tiktok.com/@miu_4519",
    image: {
      src: "/images/movie/mv.jpg",
      alt: "依存スイッチ Music Video",
      width: 1536,
      height: 1024,
    },
  },
  {
    slug: "tiktok-01",
    title: "Smile",
    kind: "TikTok",
    href: "https://www.tiktok.com/@miu_4519",
    image: {
      src: "/images/movie/tiktok-01.jpg",
      alt: "ハートポーズのAIみう",
      width: 711,
      height: 1024,
    },
  },
  {
    slug: "tiktok-02",
    title: "Studio",
    kind: "TikTok",
    href: "https://www.tiktok.com/@miu_4519",
    image: {
      src: "/images/movie/tiktok-02.jpg",
      alt: "スタジオで微笑むAIみう",
      width: 453,
      height: 680,
    },
  },
];
