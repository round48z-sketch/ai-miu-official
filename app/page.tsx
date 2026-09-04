import type { Metadata } from "next";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { GameSection } from "@/components/home/GameSection";
import { GoodsSection } from "@/components/home/GoodsSection";
import { Hero } from "@/components/home/Hero";
import { MovieSection } from "@/components/home/MovieSection";
import { MusicFeature } from "@/components/home/MusicFeature";
import { ProfileTeaser } from "@/components/home/ProfileTeaser";
import { SnsSection } from "@/components/home/SnsSection";
import { NewsList, SectionHead } from "@/components/NewsList";
import { Reveal } from "@/components/Reveal";
import { getLatestNews } from "@/content/news";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    absolute: `${siteConfig.name}｜${siteConfig.tagline}`,
  },
};

export default function HomePage() {
  const latest = getLatestNews(3);

  return (
    <>
      <Hero />
      <section className="news-band" id="news">
        <div className="container">
          <Reveal>
            <SectionHead en="News" ja="お知らせ" href="/news" />
          </Reveal>
          <Reveal>
            <NewsList items={latest} />
          </Reveal>
        </div>
      </section>
      <ProfileTeaser />
      <MusicFeature />
      <GalleryTeaser />
      <MovieSection />
      <GameSection />
      <GoodsSection />
      <SnsSection />
    </>
  );
}
