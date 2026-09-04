import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/NewsList";
import { TextLink } from "@/components/TextLink";
import { galleryImages } from "@/content/gallery";

export function GalleryTeaser() {
  const images = galleryImages.slice(0, 5);

  return (
    <section className="gallery-band" id="gallery">
      <div className="container">
        <Reveal>
          <SectionHead en="Gallery" ja="ギャラリー" href="/gallery" lead="笑顔と、日常と、季節の光。" />
        </Reveal>
      </div>
      <Reveal className="gallery-spread">
        {images.map((image, index) => (
          <figure key={image.src} className={`gallery-spread__item n${index + 1}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 980px) 42vw, 90vw"
            />
          </figure>
        ))}
      </Reveal>
      <div className="container">
        <Reveal className="section-foot">
          <TextLink href="/gallery">View More</TextLink>
        </Reveal>
      </div>
    </section>
  );
}
