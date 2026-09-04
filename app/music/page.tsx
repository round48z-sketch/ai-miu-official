import type { Metadata } from "next";
import Image from "next/image";
import { StreamingLinks } from "@/components/home/MusicFeature";
import { PageIntro } from "@/components/PageIntro";
import { tracks } from "@/content/music";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "音楽",
  description: "AIみうの楽曲一覧。依存スイッチ、キラメキフィーバーなどの配信情報。",
  path: "/music",
});

export default function MusicPage() {
  return (
    <article className="subpage">
      <div className="container">
        <PageIntro en="Music" ja="ミュージック" lead="きらめくメロディを、いつでも。" />
        <div className="music-catalog">
          {tracks.map((track) => (
            <section key={track.slug} className="music-catalog__item">
              <div className="music-catalog__jacket">
                <Image
                  src={track.jacket.src}
                  alt={track.jacket.alt}
                  width={track.jacket.width}
                  height={track.jacket.height}
                  sizes="(min-width: 980px) 280px, min(400px, 86vw)"
                />
              </div>
              <div>
                {track.featured ? <p className="kicker">New Release</p> : null}
                <h2>{track.title}</h2>
                <p className="music-feature__meta">
                  {track.titleEn}　{track.releasedOn} 配信
                </p>
                <StreamingLinks links={track.streaming} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
