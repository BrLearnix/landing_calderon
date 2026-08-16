"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Project {
  src: string;
  category: string;
  name: string;
  description: string;
}

const allProjects: Project[] = [
  {
    src: "/img/projects/aluminio/image47.png",
    category: "Aluminio",
    name: "Proyecto Ancón",
    description:
      "Ventanales y mamparas de aluminio con rotura de puente térmico frente al mar. Acabados naturales que maximizan luz y panorámicas.",
  },
  {
    src: "/img/projects/aluminio/image49.png",
    category: "Aluminio",
    name: "Obra Carabayllo",
    description:
      "Sistema integral de ventanas y puertas corredizas de aluminio para vivienda residencial, priorizando ventilación y luminosidad.",
  },
  {
    src: "/img/projects/aluminio/image50.png",
    category: "Aluminio",
    name: "Proyecto Los Olivos",
    description:
      "Puertas y ventanas de aluminio de diseño moderno en edificio de departamentos, con perfiles de alta durabilidad.",
  },
  {
    src: "/img/projects/pvc/image51.png",
    category: "PVC Termoacústico",
    name: "Obra PVC",
    description:
      "Ventanas termoacústicas de PVC que elevan el confort del hogar, reduciendo ruido y pérdida térmica.",
  },
  {
    src: "/img/projects/pvc/image53.png",
    category: "PVC Termoacústico",
    name: "Obra PVC Carabayllo",
    description:
      "Ventanas y puertas en PVC para vivienda en Carabayllo, con aislamiento acústico y térmico premium.",
  },
  {
    src: "/img/projects/pvc/image54.png",
    category: "PVC Termoacústico",
    name: "Casa Playa Ancón",
    description:
      "Mamparas y ventanas de PVC en casa de playa en Ancón, resistentes a la brisa marina con vidrio laminado.",
  },
  {
    src: "/img/projects/pvc/image55.png",
    category: "PVC Termoacústico",
    name: "Oficina La Molina",
    description:
      "Cerramientos de PVC para oficina corporativa, garantizando aislamiento acústico y eficiencia energética.",
  },
  {
    src: "/img/projects/acero/image56.png",
    category: "Acero Inoxidable",
    name: "Balcón Vidrio Templado",
    description:
      "Baranda de acero inoxidable con vidrio templado para balcón: seguridad, elegancia y vista panorámica despejada.",
  },
  {
    src: "/img/projects/acero/image58.png",
    category: "Acero Inoxidable",
    name: "Obra Huachipa",
    description:
      "Barandas y pasamanos de acero inoxidable para escaleras y áreas exteriores, con acabados pulidos de larga vida.",
  },
  {
    src: "/img/projects/ducha/image59.png",
    category: "Puerta de Ducha",
    name: "Ducha Moderna",
    description:
      "Puerta de ducha fija en vidrio templado con perfil de aluminio. Diseño minimalista para baño moderno.",
  },
  {
    src: "/img/projects/ducha/image60.png",
    category: "Puerta de Ducha",
    name: "Ducha Puerta Corrediza",
    description:
      "Puerta de ducha corrediza en vidrio templado que optimiza el espacio del baño con perfiles de aluminio.",
  },
  {
    src: "/img/projects/ducha/image61.png",
    category: "Puerta de Ducha",
    name: "Obra Los Girasoles",
    description:
      "Puertas de ducha en vidrio templado para proyecto residencial, con instalación profesional y acabados impecables.",
  },
  {
    src: "/img/projects/ducha/image62.png",
    category: "Puerta de Ducha",
    name: "Proyecto Miraflores",
    description:
      "Puertas de ducha de alta gama en departamento de Miraflores, con vidrio templado y perfiles de aluminio.",
  },
];

const categoryData: Record<
  string,
  { title: string; description: string; image: string }
> = {
  aluminio: {
    title: "Sistemas en Aluminio de Alta Gama",
    description:
      "Ventanas, puertas, mamparas y fachadas de aluminio con rotura de puente térmico.",
    image: "/img/projects/aluminio/image47.png",
  },
  "pvc-termoacustico": {
    title: "PVC Termoacústico",
    description:
      "Ventanas y puertas en PVC con aislamiento térmico y acústico premium.",
    image: "/img/projects/pvc/image51.png",
  },
  "acero-inoxidable": {
    title: "Acero Inoxidable",
    description:
      "Barandas, pasamanos, cocinas y escaleras en acero inoxidable.",
    image: "/img/projects/acero/image56.png",
  },
  "puerta-de-ducha": {
    title: "Puerta de Ducha",
    description: "Puertas de ducha con perfiles de aluminio y vidrio templado.",
    image: "/img/projects/ducha/image59.png",
  },
};

const slugToCategory: Record<string, string> = {
  aluminio: "Aluminio",
  "pvc-termoacustico": "PVC Termoacústico",
  "acero-inoxidable": "Acero Inoxidable",
  "puerta-de-ducha": "Puerta de Ducha",
};

function useRevealOnScroll<T extends HTMLElement>(threshold = 0.08) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function CategoriaContent({
  categoria,
}: {
  categoria: string;
}) {
  const [selectedProj, setSelectedProj] = useState<number | null>(null);
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();

  const info = categoryData[categoria];
  const categoryName = slugToCategory[categoria];

  const filteredProjects = categoryName
    ? allProjects.filter((p) => p.category === categoryName)
    : [];

  useEffect(() => {
    if (selectedProj === null) return;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProj(null);
      if (e.key === "ArrowRight")
        setSelectedProj((selectedProj + 1) % filteredProjects.length);
      if (e.key === "ArrowLeft")
        setSelectedProj(
          (selectedProj - 1 + filteredProjects.length) %
            filteredProjects.length,
        );
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [selectedProj, filteredProjects.length]);

  if (!info) {
    return (
      <div className="min-h-screen pt-20 bg-[#1a1a2e] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">
            Categoría no encontrada.
          </p>
          <Link href="/proyectos" className="text-brand hover:underline">
            Volver a proyectos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a14]">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={info.image}
            alt={info.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[#1a1a2e]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#1a1a2e]/80 to-[#1a1a2e]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-8 sm:pb-10">
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2.5 text-gray-400 hover:text-brand transition-colors duration-300 text-sm group"
            >
              <span className="w-8 h-[1px] bg-gray-600 group-hover:bg-brand group-hover:w-12 transition-all duration-300" />
              Volver a proyectos
            </Link>
          </div>

          <div
            ref={ref}
            className={`mt-8 flex flex-col items-start gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand font-semibold">
              <span className="h-px w-8 bg-brand/70" />
              Proyectos · {categoryName}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-3xl">
              {info.title.split("Aluminio de Alta Gama").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="relative inline-block">
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-brand to-yellow-500">
                        Aluminio de Alta Gama
                      </span>
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
                    </span>
                  </span>
                ) : (
                  part
                )
              )}
            </h1>
            <div className="flex items-start gap-4 max-w-2xl">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {info.description}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 backdrop-blur-sm">
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "proyecto" : "proyectos"}
              </span>
              <span className="text-gray-500 text-sm">
                Toca una tarjeta para ver el proyecto en detalle
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GRID ===================== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-2 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((proj, i) => (
            <div
              key={proj.src}
              onClick={() => setSelectedProj(i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 cursor-pointer border border-white/5 hover:border-brand/30 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(254,211,16,0.15)]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 90}ms, transform 0.6s ease ${i * 90}ms, border-color 0.4s ease, box-shadow 0.4s ease`,
              }}
            >
              <Image
                src={proj.src}
                alt={proj.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-white font-bold text-lg leading-snug mb-1.5">
                    {proj.name}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2 opacity-90 transition-opacity duration-500">
                    {proj.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span>Ver proyecto</span>
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

              {/* Index badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md text-white/90 text-[11px] font-bold border border-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Hover ring */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition-all duration-500 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No se encontraron proyectos en esta categoría.
            </p>
          </div>
        )}
      </section>

      {/* ===================== LIGHTBOX ===================== */}
      {selectedProj !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
          onClick={() => setSelectedProj(null)}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4">
            <div className="min-w-0">
              <p className="text-white font-bold text-lg sm:text-xl truncate">
                {filteredProjects[selectedProj].name}
              </p>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-0.5">
                {filteredProjects[selectedProj].category}
              </p>
            </div>
            <button
              onClick={() => setSelectedProj(null)}
              aria-label="Cerrar"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/80 hover:text-white shrink-0"
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
          </div>

          {/* Body */}
          <div
            className="flex-1 flex items-center justify-center px-4 sm:px-20 min-h-0"
            onClick={() => setSelectedProj(null)}
          >
            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProj(
                  (selectedProj - 1 + filteredProjects.length) %
                    filteredProjects.length,
                );
              }}
              aria-label="Anterior"
              className="absolute left-4 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-colors z-10"
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

            <div
              className="relative w-full max-w-4xl aspect-[4/3] my-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={filteredProjects[selectedProj].src}
                src={filteredProjects[selectedProj].src}
                alt={filteredProjects[selectedProj].name}
                fill
                className="object-contain rounded-xl"
                sizes="(max-width: 1024px) 100vw, 80vw"
                quality={100}
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProj(
                  (selectedProj + 1) % filteredProjects.length,
                );
              }}
              aria-label="Siguiente"
              className="absolute right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-colors z-10"
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
          </div>

          {/* Description bar */}
          <div className="px-5 sm:px-8 pb-4 max-w-3xl mx-auto text-center">
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {filteredProjects[selectedProj].description}
            </p>
          </div>

          {/* Footer: counter + thumbnails */}
          <div className="pb-6">
            <div className="flex items-center justify-center gap-2 pb-4">
              <span className="text-white/70 text-sm font-medium tabular-nums">
                {String(selectedProj + 1).padStart(2, "0")}
              </span>
              <span className="text-white/30">/</span>
              <span className="text-white/70 text-sm font-medium tabular-nums">
                {String(filteredProjects.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex justify-center gap-2 px-4 overflow-x-auto">
              {filteredProjects.map((proj, i) => (
                <button
                  key={proj.src}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProj(i);
                  }}
                  aria-label={`Ver ${proj.name}`}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                    i === selectedProj
                      ? "border-brand scale-110"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={proj.src}
                    alt={proj.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
