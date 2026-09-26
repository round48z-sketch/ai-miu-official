"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { galleryImages } from "@/content/gallery";

const total = galleryImages.length;
const CLOSE_MS = 320;

function fitPhoto(width: number, height: number, viewportW: number, viewportH: number) {
  const mobile = viewportW < 720;
  const maxW = viewportW * (mobile ? 0.96 : 0.94);
  const maxH = viewportH * (mobile ? 0.88 : 0.9);
  const scale = Math.min(maxW / width, maxH / height);

  return {
    width: Math.round(width * scale),
    height: Math.round(height * scale),
  };
}

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
  const [, setViewport] = useState(0);
  const natural = useRef<{ src: string; width: number; height: number } | null>(null);
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
    const onResize = () => setViewport((value) => value + 1);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (current === null) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyOverscroll: body.style.overscrollBehavior,
      bodyPaddingRight: body.style.paddingRight,
    };
    const scrollbar = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overscrollBehavior = "none";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      html.style.overscrollBehavior = prev.htmlOverscroll;
      body.style.overscrollBehavior = prev.bodyOverscroll;
      body.style.paddingRight = prev.bodyPaddingRight;
      window.scrollTo(0, scrollY);
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

  if (typeof document === "undefined" || current === null || !image) return null;

  const source =
    image && natural.current?.src === image.src ? natural.current : image;
  const display = source
    ? fitPhoto(source.width, source.height, window.innerWidth, window.innerHeight)
    : { width: 0, height: 0 };

  const go = (direction: -1 | 1) => {
    onIndexChange((current + direction + total) % total);
  };

  return createPortal(
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
      <button type="button" className="lightbox__nav is-prev" aria-label="前の写真" onClick={() => go(-1)} />
      <button type="button" className="lightbox__nav is-next" aria-label="次の写真" onClick={() => go(1)} />
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
        {/* Native img so Next/Image fill and global max-width cannot shrink the photo. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={display.width}
          height={display.height}
          className="lightbox__image"
          draggable={false}
          style={{ width: display.width, height: display.height }}
          onLoad={(event) => {
            const photo = event.currentTarget;
            if (!photo.naturalWidth || !photo.naturalHeight) return;
            natural.current = {
              src: image.src,
              width: photo.naturalWidth,
              height: photo.naturalHeight,
            };
            setViewport((value) => value + 1);
          }}
        />
        <figcaption id={labelId} className="lightbox__caption">
          {image.alt}
        </figcaption>
      </figure>
      <p className="lightbox__count" aria-live="polite">
        {current + 1} / {total}
      </p>
    </div>,
    document.body,
  );
}
