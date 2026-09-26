"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { galleryImages } from "@/content/gallery";

const total = galleryImages.length;
const CLOSE_MS = 320;

export function GalleryLightbox({
  index,
  onClose,
  onIndexChange,
}: {
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const labelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const [held, setHeld] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const current = index ?? held;
  const image = current === null ? null : galleryImages[current];

  useEffect(() => {
    if (index !== null) {
      setHeld(index);
      const frame = window.requestAnimationFrame(() => setOpen(true));
      return () => window.cancelAnimationFrame(frame);
    }

    setOpen(false);
    const timer = window.setTimeout(() => setHeld(null), CLOSE_MS);
    return () => window.clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (current === null) return;

    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [current]);

  useEffect(() => {
    if (!open || current === null) return;

    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndexChange((current - 1 + total) % total);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndexChange((current + 1) % total);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, current, onClose, onIndexChange]);

  if (current === null || !image) return null;

  const go = (direction: -1 | 1) => {
    onIndexChange((current + direction + total) % total);
  };

  return (
    <div
      className={`lightbox${open ? " is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
    >
      <button type="button" className="lightbox__backdrop" aria-label="閉じる" onClick={onClose} />
      <button ref={closeRef} type="button" className="lightbox__close" aria-label="閉じる" onClick={onClose}>
        ×
      </button>
      <button type="button" className="lightbox__nav is-prev" aria-label="前の写真" onClick={() => go(-1)}>
        ‹
      </button>
      <button type="button" className="lightbox__nav is-next" aria-label="次の写真" onClick={() => go(1)}>
        ›
      </button>
      <figure
        className="lightbox__frame"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => {
          touchX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchX.current;
          touchX.current = null;
          if (start === null) return;
          const delta = event.changedTouches[0].clientX - start;
          if (Math.abs(delta) < 56) return;
          go(delta > 0 ? -1 : 1);
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="lightbox__image"
          sizes="90vw"
          priority
        />
        <figcaption id={labelId} className="lightbox__caption">
          {image.alt}
        </figcaption>
      </figure>
      <p className="lightbox__count" aria-live="polite">
        {current + 1} / {total}
      </p>
    </div>
  );
}
