import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { GameList } from "@/components/home/GameSection";
import { PageIntro } from "@/components/PageIntro";
import { games } from "@/content/games";
import { getSiteUrl } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "ゲーム",
  description:
    "AIみうの公式ゲーム。MIU BLOCKS、MIU BREAKER、MIU POPSなど、AIみうと遊べるミニゲームを掲載しています。",
  path: "/game",
});

function buildGameJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AIみうのゲーム",
    description:
      "AIみう公式のミニゲーム。MIU ♡ BLOCKS、MIU BREAKER、MIU ♡ POPS。",
    url: `${siteUrl}/game`,
    inLanguage: "ja",
    isPartOf: {
      "@type": "WebSite",
      name: "AIみう Official",
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "AIみう ゲーム",
      numberOfItems: games.length,
      itemListElement: games.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "VideoGame",
          name: game.title,
          description: game.description,
          url: game.href,
          image: `${siteUrl}${game.image.src}`,
          gamePlatform: "Web browser",
          author: {
            "@type": "Person",
            name: "AIみう",
            url: `${siteUrl}/profile`,
          },
        },
      })),
    },
  };
}

export default function GamePage() {
  return (
    <article className="subpage">
      <JsonLd data={buildGameJsonLd()} />
      <div className="container">
        <PageIntro
          en="Game"
          ja="ゲーム"
          lead="AIみうと遊べる、公式ミニゲーム。"
        />
        <p className="game-page__lead">
          MIU ♡ BLOCKS、MIU BREAKER、MIU ♡ POPS。ブラウザですぐに遊べます。
        </p>
        <GameList heading="h2" />
      </div>
    </article>
  );
}
