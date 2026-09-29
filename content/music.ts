export const streamingServices = ["Spotify", "YouTube Music", "LINE MUSIC"] as const;

export type StreamingService = (typeof streamingServices)[number];

export type StreamingLink = {
  name: StreamingService;
  href: string;
};

export type Track = {
  slug: string;
  title: string;
  titleEn: string;
  releasedOn: string;
  featured?: boolean;
  jacket: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  streaming: StreamingLink[];
};

function streaming(urls: Record<StreamingService, string>): StreamingLink[] {
  return streamingServices.map((name) => ({ name, href: urls[name] }));
}

export const tracks: Track[] = [
  {
    slug: "izon-switch",
    title: "依存スイッチ",
    titleEn: "Addiction Switch",
    releasedOn: "2026.08.20",
    featured: true,
    jacket: {
      src: "/images/music/izon-switch.jpg",
      alt: "依存スイッチ ジャケット",
      width: 1536,
      height: 1536,
    },
    streaming: streaming({
      Spotify: "https://open.spotify.com/intl-ja/track/0rQOKHqwbgZuwXjuewZ3M0?si=2fb585869d174304",
      "YouTube Music": "https://www.youtube.com/watch?v=_-H5w3IEaI8&list=OLAK5uy_ms33-Utyoc_hCys5DZEey0vMaO0aXX4yI",
      "LINE MUSIC": "https://lin.ee/YUvFAho",
    }),
  },
  {
    slug: "kirameki-fever",
    title: "キラメキフィーバー",
    titleEn: "KIRAMEKI FEVER",
    releasedOn: "2026.05.12",
    jacket: {
      src: "/images/music/kirameki-fever.jpg",
      alt: "KIRAMEKI FEVER ジャケット",
      width: 1536,
      height: 1536,
    },
    streaming: streaming({
      Spotify: "https://open.spotify.com/intl-ja/track/6FwegiT1StQcQK4zSJEZ5X?si=ca43d2df26f94ccc",
      "YouTube Music": "https://www.youtube.com/watch?v=taJy0n5PlPc&list=OLAK5uy_kp4tXYG_Ar7UlPQVFSGUrtDRqYyXwQtKU",
      "LINE MUSIC": "https://lin.ee/yZLuJN2",
    }),
  },
  {
    slug: "fire-night-energy",
    title: "ファイヤーナイトエナジー",
    titleEn: "Fire Night Energy",
    releasedOn: "2026.03.08",
    jacket: {
      src: "/images/music/fire-night-energy.jpg",
      alt: "Fire Night Energy ジャケット",
      width: 1024,
      height: 1024,
    },
    streaming: streaming({
      Spotify: "https://open.spotify.com/intl-ja/track/64ENDNvfw95DX9v45m1kKe?si=0e0852463bee4026",
      "YouTube Music": "https://www.youtube.com/watch?v=Caj7zsIH1HE&list=OLAK5uy_kws_WiZCgandmEYF9Bi3xg0GCFnyAKc64",
      "LINE MUSIC": "https://lin.ee/wkGQKID",
    }),
  },
];

export function getFeaturedTrack() {
  return tracks.find((track) => track.featured) ?? tracks[0];
}
