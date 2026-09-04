import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { galleryImages } from "@/content/gallery";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "写真",
  description: "AIみうの公式フォトギャラリー。笑顔と日常、季節の写真。",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <article className="subpage">
      <div className="container">
        <PageIntro en="Gallery" ja="ギャラリー" lead="笑顔と、日常と、季節の光。" />
      </div>
      <div className="gallery-page">
        {galleryImages.map((image, index) => (
          <figure key={image.src} className={`gallery-page__item n${index + 1}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 980px) 50vw, 100vw"
            />
          </figure>
        ))}
      </div>
    </article>
  );
}
