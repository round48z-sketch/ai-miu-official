"use client";

import Image from "next/image";
import { useState } from "react";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { Reveal } from "@/components/Reveal";
import {
  GALLERY_PAGE_INITIAL,
  GALLERY_PAGE_STEP,
  galleryImages,
  type GalleryImage,
} from "@/content/gallery";
import { snsLinks } from "@/content/site";

const GROUP = 6;
const gallerySns = snsLinks.filter((item) => item.name === "X" || item.name === "TikTok");

function chunk(from: number, to: number) {
  const items = galleryImages.slice(from, to);
  const groups: GalleryImage[][] = [];

  for (let index = 0; index < items.length; index += GROUP) {
    groups.push(items.slice(index, index + GROUP));
  }

  return groups;
}

export function GalleryBoard() {
  const [groups, setGroups] = useState<GalleryImage[][]>(() => chunk(0, GALLERY_PAGE_INITIAL));
  const [active, setActive] = useState<number | null>(null);
  const shown = groups.reduce((total, group) => total + group.length, 0);
  const canLoadMore = shown < galleryImages.length;

  return (
    <>
      <div className="gallery-board">
        {groups.map((group, groupIndex) => (
          <Reveal
            key={group[0]?.src}
            className={`gallery-page${group.length < 6 ? ` is-${group.length}` : ""}`}
            variant="plain"
            delay={groupIndex < 2 ? groupIndex * 80 : 0}
          >
            {group.map((image, index) => {
              const globalIndex =
                groups.slice(0, groupIndex).reduce((total, item) => total + item.length, 0) + index;

              return (
                <figure key={image.src} className={`gallery-page__item n${index + 1} is-${image.layout}`}>
                  <button
                    type="button"
                    className="gallery-page__open"
                    onClick={() => setActive(globalIndex)}
                    aria-label={`${image.alt}を拡大表示`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 980px) 32vw, (min-width: 720px) 48vw, 92vw"
                      priority={globalIndex === 0}
                      loading={globalIndex === 0 ? undefined : globalIndex < 4 ? "eager" : "lazy"}
                    />
                  </button>
                </figure>
              );
            })}
          </Reveal>
        ))}
      </div>
      {canLoadMore ? (
        <div className="gallery-page__more">
          <button
            type="button"
            className="text-link gallery-more"
            onClick={() => {
              setGroups((current) => {
                const shownNow = current.reduce((total, group) => total + group.length, 0);
                if (shownNow >= galleryImages.length) return current;
                const next = Math.min(shownNow + GALLERY_PAGE_STEP, galleryImages.length);
                return [...current, ...chunk(shownNow, next)];
              });
            }}
          >
            View More
          </button>
        </div>
      ) : (
        <nav className="gallery-follow" aria-label="公式SNS">
          <p className="gallery-follow__label">More Miu</p>
          <p className="gallery-follow__links">
            {gallerySns.map((item, index) =>
              item.href ? (
                <span key={item.name}>
                  {index > 0 ? <span aria-hidden="true"> / </span> : null}
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </span>
              ) : null,
            )}
          </p>
        </nav>
      )}
      <GalleryLightbox index={active} onClose={() => setActive(null)} onIndexChange={setActive} />
    </>
  );
}
