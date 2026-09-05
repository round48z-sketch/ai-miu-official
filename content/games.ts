export type GameItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const games: GameItem[] = [
  {
    slug: "miu-blocks",
    title: "MIU ♡ BLOCKS",
    description: "みうとブロックをそろえる、かわいいパズル。",
    href: "https://miu-tetris-v2-z.vercel.app/",
    image: {
      src: "/images/games/miu-blocks.jpg",
      alt: "MIU ♡ BLOCKS",
      width: 880,
      height: 1168,
    },
  },
  {
    slug: "miu-breaker",
    title: "MIU BREAKER",
    description: "ボールをはじいて、ブロックをこわすミニゲーム。",
    href: "https://miu-block-breaker.vercel.app/",
    image: {
      src: "/images/games/miu-breaker.jpg",
      alt: "MIU BREAKER",
      width: 1024,
      height: 1536,
    },
  },
  {
    slug: "miu-pops",
    title: "MIU ♡ POPS",
    description: "ポップなあそびで、みうとひと息。",
    href: "https://miu-pops.vercel.app/",
    image: {
      src: "/images/games/miu-pops.jpg",
      alt: "MIU ♡ POPS",
      width: 941,
      height: 1672,
    },
  },
];
