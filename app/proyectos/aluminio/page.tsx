"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Subcategory {
  slug: string;
  title: string;
  description: string;
  cover: string;
  images: string[];
  number: string;
}

const subcategories: Subcategory[] = [
  {
    slug: "estructura-clasica",
    title: "Estructura Clásica",
    description:
      "Sistemas de aluminio con perfil clásico, ideales para ventanas y puertas convencionales con acabados de primera calidad.",
    cover: "/img/projects/aluminio/estructura-clasica/cover.jpg",
    images: [
      "/img/projects/aluminio/estructura-clasica/1.jpg",
      "/img/projects/aluminio/estructura-clasica/2.jpg",
      "/img/projects/aluminio/estructura-clasica/3.jpg",
      "/img/projects/aluminio/estructura-clasica/4.jpg",
      "/img/projects/aluminio/estructura-clasica/5.jpg",
      "/img/projects/aluminio/estructura-clasica/6.jpg",
    ],
    number: "01",
  },
  {
    slug: "serie-20",
    title: "Serie 20",
    description:
      "Perfiles de aluminio Serie 20, soluciones económicas y funcionales para proyectos residenciales y comerciales.",
    cover: "/img/projects/aluminio/serie-20/cover.jpg",
    images: [
      "/img/projects/aluminio/serie-20/1.jpg",
      "/img/projects/aluminio/serie-20/2.jpg",
      "/img/projects/aluminio/serie-20/3.jpg",
      "/img/projects/aluminio/serie-20/4.jpg",
      "/img/projects/aluminio/serie-20/5.jpg",
      "/img/projects/aluminio/serie-20/6.jpg",
    ],
    number: "02",
  },
  {
    slug: "serie-42",
    title: "Serie 42",
    description:
      "Sistema de aluminio Serie 42 con mayor resistencia y aislamiento, perfecto para zonas de alto tráfico y clima exigente.",
    cover: "/img/projects/aluminio/serie-42/cover.jpg",
    images: [
      "/img/projects/aluminio/serie-42/1.jpg",
      "/img/projects/aluminio/serie-42/2.jpg",
      "/img/projects/aluminio/serie-42/3.jpg",
      "/img/projects/aluminio/serie-42/4.jpg",
      "/img/projects/aluminio/serie-42/5.jpg",
      "/img/projects/aluminio/serie-42/6.jpg",
    ],
    number: "03",
  },
  {
    slug: "serie-62",
    title: "Serie 62",
    description:
      "Perfiles Serie 62 con rotura de puente térmico, alta eficiencia energética y confort acústico superior.",
    cover: "/img/projects/aluminio/serie-62/cover.jpg",
    images: [
      "/img/projects/aluminio/serie-62/1.jpg",
      "/img/projects/aluminio/serie-62/2.jpg",
      "/img/projects/aluminio/serie-62/3.jpg",
      "/img/projects/aluminio/serie-62/4.jpg",
      "/img/projects/aluminio/serie-62/5.jpg",
      "/img/projects/aluminio/serie-62/6.jpg",
    ],
    number: "04",
  },
  {
    slug: "serie-80",
    title: "Serie 80",
    description:
      "La Serie 80 representa lo último en tecnología de aluminio, máxima resistencia, estanqueidad y diseño premium.",
    cover: "/img/projects/aluminio/serie-80/cover.jpg",
    images: [
      "/img/projects/aluminio/serie-80/1.jpg",
      "/img/projects/aluminio/serie-80/2.jpg",
      "/img/projects/aluminio/serie-80/3.jpg",
      "/img/projects/aluminio/serie-80/4.jpg",
      "/img/projects/aluminio/serie-80/5.jpg",
      "/img/projects/aluminio/serie-80/6.jpg",
    ],
    number: "05",
  },
  {
    slug: "puertas",
    title: "Puertas",
    description:
      "Puertas de aluminio para interiores y exteriores, con diseños modernos y acabados de primera calidad.",
    cover: "/img/projects/aluminio/puertas/cover.jpg",
    images: [
      "/img/projects/aluminio/puertas/1.jpg",
      "/img/projects/aluminio/puertas/2.jpg",
      "/img/projects/aluminio/puertas/3.jpg",
      "/img/projects/aluminio/puertas/4.jpg",
      "/img/projects/aluminio/puertas/5.jpg",
      "/img/projects/aluminio/puertas/6.jpg",
    ],
    number: "06",
  },
];

export default function AluminioPage() {
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null,
  );
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  const current = subcategories.find((s) => s.slug === activeSubcategory);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubcategoryChange = useCallback(
    (slug: string | null) => {
      setIsTransitioning(true);
      setSelectedImage(null);
      setTimeout(() => {
        setActiveSubcategory(slug);
        setIsTransitioning(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    },
    [],
  );

  useEffect(() => {
    if (selectedImage === null || !current) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight")
        setSelectedImage(
          (selectedImage + 1) % current.images.length,
        );
      if (e.key === "ArrowLeft")
        setSelectedImage(
          (selectedImage - 1 + current.images.length) %
            current.images.length,
        );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedImage, current]);

  return (
    <div className="min-h-screen bg-[#0a0a14]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#0a0a14] to-[#0a0a14]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-16 sm:pb-20">
          {/* Breadcrumb */}
          <div
            className={`mb-10 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {activeSubcategory ? (
              <button
                onClick={() => handleSubcategoryChange(null)}
                className="inline-flex items-center gap-2.5 text-gray-500 hover:text-brand transition-colors duration-300 text-sm group"
              >
                <span className="w-8 h-[1px] bg-gray-600 group-hover:bg-brand group-hover:w-12 transition-all duration-300" />
                Volver a categorías
              </button>
            ) : (
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2.5 text-gray-500 hover:text-brand transition-colors duration-300 text-sm group"
              >
                <span className="w-8 h-[1px] bg-gray-600 group-hover:bg-brand group-hover:w-12 transition-all duration-300" />
                Volver a proyectos
              </Link>
            )}
          </div>

          {/* Header Content */}
          <div
            className={`text-center transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand font-medium">
                Proyectos
              </span>
              <span className="w-8 h-[1px] bg-brand" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5 leading-[1.1]">
              Sistema en{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-brand to-yellow-500">
                  Aluminio de Alta Gama
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
              </span>
            </h1>

            <p className="text-gray-400 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
              {activeSubcategory && current
                ? current.description
                : "Explore nuestros proyectos organizados por sistema y serie de aluminio."}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 sm:pb-28">
        {/* Category Selection Grid */}
        {!activeSubcategory && (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 transition-all duration-300 ${isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
          >
            {subcategories.map((sub, idx) => (
              <button
                key={sub.slug}
                onClick={() => handleSubcategoryChange(sub.slug)}
                className="group relative rounded-2xl overflow-hidden bg-[#12121e] border border-white/5 hover:border-brand/20 text-left transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(254,211,16,0.1)]"
                style={{
                  animationDelay: `${idx * 80}ms`,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${idx * 80}ms, transform 0.6s ease ${idx * 80}ms`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={sub.cover}
                    alt={sub.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121e] via-[#12121e]/40 to-transparent" />
                  <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 transition-colors duration-500" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md text-brand text-xs font-bold tracking-wider border border-white/10">
                      {sub.number}
                    </span>
                  </div>

                  {/* Count Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/80 text-[10px] font-medium uppercase tracking-wider border border-white/10">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      {sub.images.length} fotos
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors duration-300">
                    {sub.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {sub.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-brand text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Ver proyectos</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Subcategory Gallery */}
        {activeSubcategory && current && (
          <div
            className={`transition-all duration-300 ${isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
          >
            {/* Gallery Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand text-sm font-bold border border-brand/20">
                  {current.number}
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {current.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {current.images.length} proyectos
                  </p>
                </div>
              </div>

              {/* Category Pills - Other subcategories */}
              <div className="hidden lg:flex items-center gap-2">
                {subcategories
                  .filter((s) => s.slug !== activeSubcategory)
                  .slice(0, 3)
                  .map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => handleSubcategoryChange(s.slug)}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium hover:bg-brand/10 hover:border-brand/20 hover:text-brand transition-all duration-300"
                    >
                      {s.title}
                    </button>
                  ))}
              </div>
            </div>

            {/* Masonry-like Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {current.images.map((src, i) => (
                <div
                  key={src}
                  onClick={() => setSelectedImage(i)}
                  className="group relative rounded-2xl overflow-hidden bg-[#12121e] cursor-pointer border border-white/5 hover:border-brand/20 transition-all duration-500 hover:shadow-[0_0_30px_-8px_rgba(254,211,16,0.15)]"
                  style={{
                    animationDelay: `${i * 60}ms`,
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.5s ease ${i * 60 + 200}ms, transform 0.5s ease ${i * 60 + 200}ms, box-shadow 0.5s ease, border-color 0.5s ease`,
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={src}
                      alt={`${current.title} - Proyecto ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Image Index */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm text-white/80 text-[10px] font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && current && (
        <div
          className="fixed inset-0 z-[100] bg-[#0a0a14]/98 backdrop-blur-xl flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 z-10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (selectedImage - 1 + current.images.length) %
                  current.images.length,
              );
            }}
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 z-10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl aspect-[16/10] mx-4 sm:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.images[selectedImage]}
              alt={`${current.title} - Proyecto ${selectedImage + 1}`}
              fill
              className="object-contain rounded-lg"
              key={`${current.slug}-${selectedImage}`}
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (selectedImage + 1) % current.images.length,
              );
            }}
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 z-10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Bottom Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-white/40 text-sm font-medium">
                {String(selectedImage + 1).padStart(2, "0")}
              </span>
              <span className="text-white/20">/</span>
              <span className="text-white/40 text-sm font-medium">
                {String(current.images.length).padStart(2, "0")}
              </span>
            </div>
            <span className="px-4 py-2.5 rounded-2xl bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider">
              {current.title}
            </span>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2">
            {current.images.map((src, i) => (
              <button
                key={src}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(i);
                }}
                className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  i === selectedImage
                    ? "border-brand scale-110"
                    : "border-white/10 opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
