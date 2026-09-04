export type GoodsItem = {
  slug: string;
  name: string;
  description: string;
  href: string;
  cta: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const goodsItems: GoodsItem[] = [
  {
    slug: "line-stamp-vol1",
    name: "LINEスタンプ Vol.1",
    description: "日常のリアクションを16種類。トークのすきまに、みうの笑顔を。",
    href: "https://line.me/S/sticker/35057978",
    cta: "LINE STORE",
    image: {
      src: "/images/goods/line-stamp-vol1.png",
      alt: "AIみう LINEスタンプ Vol.1",
      width: 240,
      height: 240,
    },
  },
  {
    slug: "line-stamp-vol2",
    name: "LINEスタンプ Vol.2",
    description: "表情を増やした16種類。もっと近くで、みうと話そう。",
    href: "https://line.me/S/sticker/35028734",
    cta: "LINE STORE",
    image: {
      src: "/images/goods/line-stamp-vol2.png",
      alt: "AIみう LINEスタンプ Vol.2",
      width: 240,
      height: 240,
    },
  },
];
