export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: "feature" | "portrait" | "wide";
};

const sizes: Record<string, [number, number]> = {
  "01": [682, 1024],
  "02": [711, 1024],
  "04": [453, 680],
  "06": [453, 680],
};

const alts: Record<string, string> = {
  "01": "石段に座って微笑むAIみう",
  "02": "お花畑でハートを作るAIみう",
  "03": "街を歩くAIみう",
  "04": "スタジオで微笑むAIみう",
  "05": "ミントのワンピースで微笑むAIみう",
  "06": "ピンクの衣装でジャンプするAIみう",
  "07": "キッチンでほおづえをつくAIみう",
  "08": "白い螺旋階段に座るAIみう",
  "09": "観葉植物の部屋で指ハートをするAIみう",
  "10": "鏡の前で振り返るAIみう",
  "11": "クッションの上でピースをするAIみう",
  "12": "ひまわり畑でピースをするAIみう",
  "13": "カフェテラスでドリンクを持つAIみう",
  "14": "雨の街で透明傘をさすAIみう",
  "15": "白い花畑でワンピースを広げるAIみう",
  "16": "イルミネーションの並木で微笑むAIみう",
  "17": "チェックのスカートでほおづえをつくAIみう",
  "18": "白いワンピースを広げるAIみう",
  "19": "ピンクのカーディガンでしゃがむAIみう",
  "20": "ミントのブラウスで微笑むAIみう",
  "21": "ベレー帽を持って振り返るAIみう",
  "22": "頭の上でハートを作るAIみう",
  "23": "黄色い背景に座るAIみう",
  "24": "青いカーディガンでほほ笑むAIみう",
  "25": "ラベンダーのニットでほおを包むAIみう",
  "26": "セーラーブラウスで片足立ちするAIみう",
  "27": "ピンクのニットワンピで座るAIみう",
  "28": "チェックのブラウスでウィンクするAIみう",
  "29": "黄色いニットワンピで伸びをするAIみう",
  "30": "白いレースのブラウスで微笑むAIみう",
};

const layouts: GalleryImage["layout"][] = [
  "feature",
  "portrait",
  "portrait",
  "wide",
  "portrait",
  "portrait",
];

function photo(index: number): GalleryImage {
  const id = String(index).padStart(2, "0");
  const [width, height] = sizes[id] ?? [1024, 1536];

  return {
    src: `/images/gallery/${id}.jpg`,
    alt: alts[id] ?? "AIみう",
    width,
    height,
    layout: layouts[(index - 1) % layouts.length],
  };
}

export const galleryTeaserImages: GalleryImage[] = [
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
];

export const galleryImages: GalleryImage[] = Array.from({ length: 30 }, (_, index) => photo(index + 1));

export function galleryIndexForSrc(src: string) {
  return galleryImages.findIndex((image) => image.src === src);
}

export const GALLERY_PAGE_INITIAL = 12;
export const GALLERY_PAGE_STEP = 9;
