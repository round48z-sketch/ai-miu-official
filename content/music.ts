export type StreamingLink = {
  name: string;
  href: string | null;
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
    streaming: [
      {
        name: "Spotify",
        href: "https://open.spotify.com/intl-ja/track/0rQOKHqwbgZuwXjuewZ3M0",
      },
      { name: "YouTube Music", href: null },
      { name: "Apple Music", href: null },
    ],
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
    streaming: [
      {
        name: "Spotify",
        href: "https://open.spotify.com/intl-ja/track/6FwegiT1StQcQK4zSJEZ5X",
      },
      { name: "YouTube Music", href: null },
      { name: "Apple Music", href: null },
    ],
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
    streaming: [
      {
        name: "Spotify",
        href: "https://open.spotify.com/intl-ja/track/64ENDNvfw95DX9v45m1kKe",
      },
      { name: "YouTube Music", href: null },
      { name: "Apple Music", href: null },
    ],
  },
];

export function getFeaturedTrack() {
  return tracks.find((track) => track.featured) ?? tracks[0];
}
