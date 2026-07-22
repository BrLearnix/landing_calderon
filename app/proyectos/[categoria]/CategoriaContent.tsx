"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const allProjects = [
  { src: "/img/projects/project1.jpg", category: "Aluminio" },
  { src: "/img/projects/project2.jpg", category: "Aluminio" },
  { src: "/img/projects/project3.jpg", category: "Aluminio" },
  { src: "/img/projects/project4.jpg", category: "Aluminio" },
  { src: "/img/projects/project5.jpg", category: "Aluminio" },
  { src: "/img/projects/project6.jpg", category: "PVC Termoacústico" },
  { src: "/img/projects/project7.jpg", category: "PVC Termoacústico" },
  { src: "/img/projects/project8.jpg", category: "PVC Termoacústico" },
  { src: "/img/projects/project9.png", category: "PVC Termoacústico" },
  { src: "/img/projects/project10.jpg", category: "PVC Termoacústico" },
  { src: "/img/projects/project11.jpg", category: "Acero Inoxidable" },
  { src: "/img/projects/project12.jpg", category: "Acero Inoxidable" },
  { src: "/img/projects/project13.jpg", category: "Acero Inoxidable" },
  { src: "/img/projects/project14.jpg", category: "Acero Inoxidable" },
  { src: "/img/projects/project15.jpg", category: "Acero Inoxidable" },
  { src: "/img/projects/project16.jpg", category: "Puerta de Ducha" },
  { src: "/img/projects/project17.jpg", category: "Puerta de Ducha" },
  { src: "/img/projects/project18.jpg", category: "Puerta de Ducha" },
  { src: "/img/projects/project19.jpg", category: "Puerta de Ducha" },
  { src: "/img/projects/project20.jpg", category: "Puerta de Ducha" },
  { src: "/img/projects/project21.jpg", category: "Puerta de Ducha" },
];

const categoryData: Record<
  string,
  { title: string; description: string; image: string }
> = {
  aluminio: {
    title: "Sistemas en Aluminio de Alta Gama",
    description:
      "Ventanas, puertas, mamparas y fachadas de aluminio con rotura de puente térmico.",
    image: "/img/projects/project1.jpg",
  },
  "pvc-termoacustico": {
    title: "PVC Termoacústico",
    description:
      "Ventanas y puertas en PVC con aislamiento térmico y acústico premium.",
    image: "/img/projects/project6.jpg",
  },
  "acero-inoxidable": {
    title: "Acero Inoxidable",
    description:
      "Barandas, pasamanos, cocinas y escaleras en acero inoxidable.",
    image: "/img/projects/project11.jpg",
  },
  "puerta-de-ducha": {
    title: "Puerta de Ducha",
    description: "Puertas de ducha con perfiles de aluminio y vidrio templado.",
    image: "/img/projects/project16.jpg",
  },
};

const slugToCategory: Record<string, string> = {
  aluminio: "Aluminio",
  "pvc-termoacustico": "PVC Termoacústico",
  "acero-inoxidable": "Acero Inoxidable",
  "puerta-de-ducha": "Puerta de Ducha",
};

export default function CategoriaContent({
  categoria,
}: {
  categoria: string;
}) {
  const [selectedProj, setSelectedProj] = useState<number | null>(null);

  const info = categoryData[categoria];
  const categoryName = slugToCategory[categoria];

  const filteredProjects = categoryName
    ? allProjects.filter((p) => p.category === categoryName)
    : [];

  useEffect(() => {
    if (selectedProj === null) return;
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
    return () => window.removeEventListener("keydown", handler);
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
    <div className="min-h-screen pt-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="mb-8">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
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
            Volver a proyectos
          </Link>
        </div>

        <div className="text-center mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
            Proyectos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {info.title.split("Aluminio de Alta Gama").map((part, i) =>
              i === 0 ? (
                <span key={i}>
                  {part}
                  <span className="text-yellow-400">Aluminio de Alta Gama</span>
                </span>
              ) : (
                part
              )
            )}
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">{info.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((proj, i) => (
            <div
              key={proj.src}
              onClick={() => setSelectedProj(i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 cursor-pointer"
            >
              <Image
                src={proj.src}
                alt={`Proyecto - ${proj.category}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-brand/80 rounded-full">
                  {proj.category}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
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
      </div>

      {/* Lightbox */}
      {selectedProj !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedProj(null)}
        >
          <button
            onClick={() => setSelectedProj(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
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

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProj(
                (selectedProj - 1 + filteredProjects.length) %
                  filteredProjects.length,
              );
            }}
            className="absolute left-4 sm:left-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
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
            className="relative w-full max-w-4xl aspect-[4/3] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredProjects[selectedProj].src}
              alt={`Proyecto - ${filteredProjects[selectedProj].category}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProj((selectedProj + 1) % filteredProjects.length);
            }}
            className="absolute right-4 sm:right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <span className="text-white/60 text-sm">
              {selectedProj + 1} / {filteredProjects.length}
            </span>
            <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-brand/60 rounded-full">
              {filteredProjects[selectedProj].category}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
