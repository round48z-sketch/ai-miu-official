import type { Metadata } from "next";
import { GalleryBoard } from "@/components/gallery/GalleryBoard";
import { PageIntro } from "@/components/PageIntro";
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
      <GalleryBoard />
    </article>
  );
}
