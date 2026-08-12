"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Watermark from "./Watermark";

interface ImageGalleryProps {
  mainImage: string;
  thumbnails: string[];
  extraImages: string[];
  alt: string;
}

export default function ImageGallery({
  mainImage,
  thumbnails,
  extraImages,
  alt,
}: ImageGalleryProps) {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const allThumbs = showAll
    ? [...thumbnails, ...extraImages]
    : thumbnails;
  const allImages = [mainImage, ...allThumbs];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selected) return;
      const idx = allImages.indexOf(selected);
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft" && idx > 0) setSelected(allImages[idx - 1]);
      if (e.key === "ArrowRight" && idx < allImages.length - 1)
        setSelected(allImages[idx + 1]);
    },
    [selected, allImages]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <div className="space-y-4">
        <div
          className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-sm cursor-pointer group"
          onClick={() => setSelected(mainImage)}
        >
          <Image
            src={mainImage}
            alt={alt}
            width={600}
            height={450}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Watermark size={96} opacity={0.4} />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {allThumbs.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-sm cursor-pointer group"
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 2}`}
                width={200}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <Watermark size={48} opacity={0.35} />
            </div>
          ))}
        </div>

        {extraImages.length > 0 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full py-3 rounded-xl border border-dashed border-white/20 text-sm text-gray-400 hover:text-brand hover:border-brand/40 transition-all duration-200 font-medium"
          >
            {showAll ? "− Ver menos" : "+ Ver más imágenes"}
          </button>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {allImages.indexOf(selected) > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = allImages.indexOf(selected);
                setSelected(allImages[idx - 1]);
              }}
              className="absolute left-4 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {allImages.indexOf(selected) < allImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = allImages.indexOf(selected);
                setSelected(allImages[idx + 1]);
              }}
              className="absolute right-4 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <Watermark size={220} opacity={0.45} />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs">
            {allImages.indexOf(selected) + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  );
}
