"use client";

import Image from "next/image";
import { useState } from "react";
import { Aura } from "@/components/Aura";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/NewsList";
import { TextLink } from "@/components/TextLink";
import { galleryIndexForSrc, galleryTeaserImages } from "@/content/gallery";

export function GalleryTeaser() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="gallery-band" id="gallery">
      <div className="gallery-ornament" aria-hidden="true">
        <span className="gallery-ornament__star a" />
        <span className="gallery-ornament__star b" />
        <span className="gallery-ornament__line" />
      </div>
      <Aura className="aura--gallery" />
      <div className="container">
        <Reveal variant="left">
          <SectionHead en="Gallery" ja="ギャラリー" href="/gallery" lead="笑顔と、日常と、季節の光。" />
        </Reveal>
      </div>
      <Reveal className="gallery-spread" variant="plain">
        {galleryTeaserImages.map((image, index) => (
          <figure key={image.src} className={`gallery-spread__item n${index + 1} is-${image.layout}`}>
            <button
              type="button"
              className="gallery-page__open"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                const next = galleryIndexForSrc(image.src);
                setActive(next >= 0 ? next : 0);
              }}
              aria-label={`${image.alt}を拡大表示`}
            >
              <Image
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
                sizes="(min-width: 980px) 42vw, (min-width: 720px) 55vw, 92vw"
              />
            </button>
          </figure>
        ))}
      </Reveal>
      <div className="container">
        <Reveal className="section-foot gallery-foot" delay={520}>
          <TextLink href="/gallery" className="gallery-more">
            View More
          </TextLink>
        </Reveal>
      </div>
      <GalleryLightbox index={active} onClose={() => setActive(null)} onIndexChange={setActive} />
    </section>
  );
}
