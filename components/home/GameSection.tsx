import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/NewsList";
import { TextLink } from "@/components/TextLink";
import { games } from "@/content/games";

export function GameList({ heading = "h3" }: { heading?: "h2" | "h3" }) {
  const Heading = heading;

  return (
    <div className="game-stage">
      {games.map((game, index) => (
        <Reveal key={game.slug} className="game-piece" delay={index * 80}>
          <article>
            <div className="game-piece__image">
              <Image
                src={game.image.src}
                alt={game.image.alt}
                fill
                sizes="(min-width: 980px) 32vw, 88vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="kicker">Mini Game</p>
            <Heading>{game.title}</Heading>
            <p>{game.description}</p>
            <TextLink href={game.href} className="btn" external>
              Play
            </TextLink>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function GameSection() {
  return (
    <section className="game-band" id="game">
      <div className="container">
        <Reveal>
          <SectionHead en="Game" ja="ゲーム" href="/game" lead="みうと、あそぼう。" />
        </Reveal>
        <GameList />
      </div>
    </section>
  );
}
