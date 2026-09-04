import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/NewsList";
import { movies } from "@/content/movies";

export function MovieSection() {
  const [main, ...rest] = movies;

  return (
    <section className="movie-band" id="movie">
      <div className="container">
        <Reveal>
          <SectionHead en="Movie" ja="ムービー" href="https://www.tiktok.com/@miu_4519" linkLabel="TikTok" lead="みうの動きと、いまの表情。" />
        </Reveal>
        <Reveal className="movie-spread">
          <a
            className="movie-spread__main"
            href={main.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={main.image.src}
              alt={main.image.alt}
              width={main.image.width}
              height={main.image.height}
              sizes="(min-width: 980px) 70vw, 100vw"
            />
            <span className="movie-spread__play">Play</span>
            <span className="movie-spread__label">
              {main.kind}　{main.title}
            </span>
          </a>
          <div className="movie-spread__side">
            {rest.map((item) => (
              <a
                key={item.slug}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 980px) 22vw, 46vw"
                />
                <span>{item.kind}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
