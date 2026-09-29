import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/NewsList";
import { TextLink } from "@/components/TextLink";
import { getFeaturedTrack, tracks, type StreamingLink } from "@/content/music";

export function StreamingLinks({
  links,
  compact = false,
}: {
  links: StreamingLink[];
  compact?: boolean;
}) {
  return (
    <ul className={compact ? "stream-links stream-links--compact" : "stream-links"}>
      {links.map((link) => (
        <li key={link.name}>
          {compact ? (
            <a className="stream-links__mini" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          ) : (
            <TextLink href={link.href} className="btn" external>
              {link.name}
            </TextLink>
          )}
        </li>
      ))}
    </ul>
  );
}

export function MusicFeature() {
  const featured = getFeaturedTrack();
  const others = tracks.filter((track) => track.slug !== featured.slug);

  return (
    <section className="music-band" id="music">
      <div className="container">
        <Reveal variant="left">
          <SectionHead en="Music" ja="ミュージック" href="/music" lead="きらめくメロディを、いつでも。" />
        </Reveal>
        <Reveal className="music-feature" delay={110}>
          <div className="music-feature__jacket">
            <Image
              src={featured.jacket.src}
              alt={featured.jacket.alt}
              width={featured.jacket.width}
              height={featured.jacket.height}
              sizes="(min-width: 980px) 420px, 86vw"
            />
          </div>
          <div className="music-feature__body">
            <p className="kicker">New Release</p>
            <h3>{featured.title}</h3>
            <p className="music-feature__meta">
              {featured.titleEn}　{featured.releasedOn}
            </p>
            <StreamingLinks links={featured.streaming} />
          </div>
        </Reveal>
        <Reveal className="music-rest" variant="plain">
          {others.map((track) => (
            <article key={track.slug}>
              <div className="music-rest__jacket">
                <Image
                  src={track.jacket.src}
                  alt={track.jacket.alt}
                  width={track.jacket.width}
                  height={track.jacket.height}
                  sizes="(min-width: 980px) 112px, 96px"
                />
              </div>
              <div>
                <h3>{track.title}</h3>
                <p>{track.releasedOn}</p>
                <StreamingLinks links={track.streaming} compact />
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
