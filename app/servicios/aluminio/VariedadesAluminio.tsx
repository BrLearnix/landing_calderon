"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Sistema {
  producto: string;
  apertura: string;
  vidrio: string;
  colores: string[];
  images: string[];
}

const colorPalette: Record<string, { nombre: string; hex: string }> = {
  negro: { nombre: "Negro", hex: "#1b1d22" },
  blanco: { nombre: "Blanco", hex: "#f7f7f7" },
  "roble dorado": { nombre: "Roble dorado", hex: "#c98a44" },
  gris: { nombre: "Gris", hex: "#9aa2ad" },
  antracita: { nombre: "Antracita", hex: "#3c4147" },
  natural: { nombre: "Natural", hex: "#c4cad2" },
  madera: { nombre: "Madera", hex: "#8b5a2b" },
  grafito: { nombre: "Grafito", hex: "#30363c" },
};

const servicios = (n: string[]) =>
  n.map((s) => `/img/services/aluminio/${s}`);
const proyectos = (n: string[]) => n.map((s) => `/img/projects/${s}`);

const sistemas: Sistema[] = [
  {
    producto: "Estructura Clásica",
    apertura: "Puerta, ventana y mampara",
    vidrio: "Crudo colores. Laminado de 6 y 8 mm",
    colores: ["negro", "natural", "madera"],
    images: servicios(["img1.jpg", "img2.jpg"]).concat(
      proyectos(["project2.jpg", "project3.jpg"]),
    ),
  },
  {
    producto: "Serie 20",
    apertura: "Ventana corrediza",
    vidrio: "Crudo colores. Laminado de 6 mm",
    colores: ["natural", "negro", "blanco"],
    images: servicios(["img2.jpg", "img3.jpg"]).concat(
      proyectos(["project4.jpg", "project5.jpg"]),
    ),
  },
  {
    producto: "Serie 25",
    apertura: "Ventana y mampara corrediza",
    vidrio: "Crudo colores, templado y laminado de 6 y 8 mm",
    colores: ["natural", "negro", "blanco", "madera"],
    images: servicios(["img3.jpg", "img4.jpg"]).concat(
      proyectos(["project6.jpg", "project7.jpg"]),
    ),
  },
  {
    producto: "Serie 42",
    apertura: "Ventana proyectante",
    vidrio: "Crudo colores. Laminado de 6 mm",
    colores: ["natural", "negro", "blanco"],
    images: servicios(["img4.jpg", "img5.jpg"]).concat(
      proyectos(["project8.jpg", "project9.png"]),
    ),
  },
  {
    producto: "Serie 62",
    apertura: "Ventana y mampara corredizas",
    vidrio: "Crudo colores. Laminado de 6 y 8 mm",
    colores: ["natural", "negro", "blanco"],
    images: servicios(["img5.jpg", "img6.png"]).concat(
      proyectos(["project10.jpg", "project11.jpg"]),
    ),
  },
  {
    producto: "Serie 80",
    apertura: "Mampara",
    vidrio: "Crudo colores, laminado de 6 y 8 mm e insulado",
    colores: ["natural", "negro", "blanco", "madera", "grafito"],
    images: servicios(["img6.png", "modelo.avif"]).concat(
      proyectos(["project12.jpg", "project13.jpg"]),
    ),
  },
  {
    producto: "Serie 35",
    apertura: "Puerta y mampara",
    vidrio: "Crudo colores. Laminado de 6 mm",
    colores: ["natural", "negro", "blanco"],
    images: servicios(["modelo.avif", "img1.jpg"]).concat(
      proyectos(["project14.jpg", "project15.jpg"]),
    ),
  },
  {
    producto: "Serie 71",
    apertura: "Puertas y mampara",
    vidrio: "Crudo colores. Laminado de 6 mm",
    colores: ["natural", "negro", "blanco"],
    images: proyectos(["project1.jpg", "project16.jpg", "project17.jpg", "project18.jpg"]),
  },
];

const allColors = [
  ...new Set(sistemas.flatMap((i) => i.colores)),
];

function Swatch({ color }: { color: string }) {
  const c = colorPalette[color] ?? { nombre: color, hex: "#8b8b8b" };
  return (
    <span className="group/swatch relative inline-flex" title={c.nombre}>
      <span
        className="block w-6 h-6 rounded-full border border-white/25 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover/swatch:scale-110 cursor-pointer"
        style={{ backgroundColor: c.hex }}
      />
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-900 opacity-0 translate-y-1 transition-all duration-200 group-hover/swatch:opacity-100 group-hover/swatch:translate-y-0 shadow-lg">
        {c.nombre}
      </span>
    </span>
  );
}

export default function VariedadesAluminio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openSerie, setOpenSerie] = useState<Sistema | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!openSerie) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openSerie]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!openSerie) return;
      if (e.key === "Escape") setOpenSerie(null);
      if (e.key === "ArrowRight")
        setImageIndex((i) => (i + 1) % openSerie.images.length);
      if (e.key === "ArrowLeft")
        setImageIndex(
          (i) => (i - 1 + openSerie.images.length) % openSerie.images.length,
        );
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [openSerie]);

  const openGallery = (s: Sistema) => {
    setImageIndex(0);
    setOpenSerie(s);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-white/[0.02] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          {/* Header */}
          <div
            className="text-center mb-12 sm:mb-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Variedades y sistemas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              El sistema correcto para{" "}
              <span className="text-brand">cada espacio</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Sistemas de aluminio de alta gama. Cada serie incluye su tipo de
              apertura, presentación de vidrio y la paleta de colores
              disponibles. Haz clic en una tarjeta para ver más fotos.
            </p>
          </div>

          {/* Cards grid */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {sistemas.map((it) => (
                <button
                  key={it.producto}
                  onClick={() => openGallery(it)}
                  className="group flex flex-col text-left rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-brand/30 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={it.images[0]}
                      alt={it.producto}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />
                    <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 text-[11px] font-semibold text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Ver fotos ({it.images.length})
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand transition-colors duration-200">
                      {it.producto}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {it.apertura}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
                      <div className="flex items-start justify-between gap-4 text-sm">
                        <span className="text-gray-500 shrink-0">Vidrio</span>
                        <span className="text-gray-300 text-right">
                          {it.vidrio}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-gray-500 shrink-0">Colores</span>
                        <div className="flex items-center gap-2">
                          {it.colores.map((color) => (
                            <Swatch key={color} color={color} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Color legend */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s",
            }}
          >
            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
              Paleta disponible
            </span>
            {allColors.map((color) => {
              const c = colorPalette[color];
              return (
                <span key={color} className="inline-flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-xs text-gray-400">{c.nombre}</span>
                </span>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/#cotizar"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider px-7 py-4 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
            >
              Cotizar mi sistema
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              ¿No encuentras el sistema que buscas? Contáctanos para una
              cotización personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {openSerie && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 flex flex-col"
          onClick={() => setOpenSerie(null)}
        >
          <div className="flex items-center justify-between px-5 sm:px-8 py-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {openSerie.producto}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {openSerie.apertura}
              </p>
            </div>
            <button
              onClick={() => setOpenSerie(null)}
              aria-label="Cerrar galería"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/80 hover:text-white"
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

          <div
            className="flex-1 flex items-center justify-center px-4 min-h-0"
            onClick={() => setOpenSerie(null)}
          >
            <div
              className="relative w-full max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={openSerie.images[imageIndex]}
                alt={`${openSerie.producto} ${
                  openSerie.images[imageIndex] === openSerie.images[0]
                    ? ""
                    : imageIndex + 1
                }`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
                quality={100}
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 py-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImageIndex(
                  (i) =>
                    (i - 1 + openSerie.images.length) % openSerie.images.length,
                );
              }}
              aria-label="Foto anterior"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand transition-colors flex items-center justify-center text-white"
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
            <span className="text-white/60 text-sm tabular-nums">
              {imageIndex + 1} / {openSerie.images.length}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImageIndex((i) => (i + 1) % openSerie.images.length);
              }}
              aria-label="Foto siguiente"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand transition-colors flex items-center justify-center text-white"
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

          <div className="flex justify-center gap-2 px-4 pb-6 flex-wrap">
            {openSerie.images.map((src, i) => (
              <button
                key={src}
                onClick={(e) => {
                  e.stopPropagation();
                  setImageIndex(i);
                }}
                aria-label={`Foto ${i + 1}`}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  i === imageIndex
                    ? "border-brand"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`${openSerie.producto} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
