export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: "feature" | "portrait" | "wide";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/01.jpg",
    alt: "石段に座って微笑むAIみう",
    width: 682,
    height: 1024,
    layout: "feature",
  },
  {
    src: "/images/gallery/02.jpg",
    alt: "お花畑でハートを作るAIみう",
    width: 711,
    height: 1024,
    layout: "portrait",
  },
  {
    src: "/images/gallery/05.jpg",
    alt: "ミントのワンピースで微笑むAIみう",
    width: 682,
    height: 1024,
    layout: "portrait",
  },
  {
    src: "/images/gallery/03.jpg",
    alt: "街を歩くAIみう",
    width: 1536,
    height: 1024,
    layout: "wide",
  },
  {
    src: "/images/gallery/04.jpg",
    alt: "スタジオで微笑むAIみう",
    width: 453,
    height: 680,
    layout: "portrait",
  },
  {
    src: "/images/gallery/06.jpg",
    alt: "ピンクの背景でポーズするAIみう",
    width: 453,
    height: 680,
    layout: "portrait",
  },
];
