"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  GALLERY_PAGE_INITIAL,
  GALLERY_PAGE_STEP,
  galleryImages,
  type GalleryImage,
} from "@/content/gallery";

const GROUP = 6;

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
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 980px) 42vw, (min-width: 720px) 55vw, 92vw"
                    priority={globalIndex === 0}
                    loading={globalIndex === 0 ? undefined : globalIndex < 4 ? "eager" : "lazy"}
                  />
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
              const next = Math.min(shown + GALLERY_PAGE_STEP, galleryImages.length);
              setGroups((current) => [...current, ...chunk(shown, next)]);
            }}
          >
            View More
          </button>
        </div>
      ) : null}
    </>
  );
}
