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
  blanco: { nombre: "Blanco", hex: "#f7f7f7" },
  negro: { nombre: "Negro", hex: "#1b1d22" },
  antracita: { nombre: "Antracita", hex: "#3c4147" },
  "gris aluminio": { nombre: "Gris aluminio", hex: "#a9adb2" },
  "gris mate": { nombre: "Gris mate", hex: "#6e747b" },
  "roble dorado": { nombre: "Roble dorado", hex: "#c98a44" },
};

const servicios = (n: string[]) =>
  n.map((s) => `/img/services/pvc/${s}`);
const proyectos = (n: string[]) => n.map((s) => `/img/projects/${s}`);

const sistemas: Sistema[] = [
  {
    producto: "Mampara",
    apertura: "Corrediza, batiente y oscilobatiente",
    vidrio: "Laminado de 6 y 8 mm + insulado",
    colores: ["blanco", "negro", "antracita", "gris aluminio", "gris mate", "roble dorado"],
    images: servicios(["img1.jpg", "img2.jpg"]).concat(
      proyectos(["project6.jpg", "project7.jpg"]),
    ),
  },
  {
    producto: "Puerta",
    apertura: "Batiente",
    vidrio: "Laminado de 6 y 8 mm + insulado",
    colores: ["blanco", "negro", "antracita", "gris aluminio", "gris mate", "roble dorado"],
    images: servicios(["img3.jpg", "img4.jpg"]).concat(
      proyectos(["project8.jpg", "project9.png"]),
    ),
  },
  {
    producto: "Ventana",
    apertura: "Corrediza, batiente y oscilobatiente",
    vidrio: "Laminado de 6 y 8 mm + insulado",
    colores: ["blanco", "negro", "antracita", "gris aluminio", "gris mate", "roble dorado"],
    images: servicios(["img5.jpg", "img6.jpeg", "modelo.png"]).concat(
      proyectos(["project10.jpg"]),
    ),
  },
];

const allColors = [...new Set(sistemas.flatMap((i) => i.colores))];

const caracteristicas = [
  {
    titulo: "Aislamiento acústico",
    descripcion: "Reduce el ruido exterior para un confort interior real.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm-12 3V9.5"
      />
    ),
  },
  {
    titulo: "Aislamiento térmico",
    descripcion: "Rotura de puente térmico que optimiza la energía.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.477 8.89c.428-.832.827-1.674 1.168-2.54a3.207 3.207 0 01-4.652 1.12A3.227 3.227 0 017.5 12a7.5 7.5 0 1013.894-3.47c-.778 1.147-1.864 2.067-3.012 2.537A9.75 9.75 0 0113.477 8.89z"
      />
    ),
  },
  {
    titulo: "Seguridad",
    descripcion: "Perfiles reforzados y cierres multipunto confiables.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
  {
    titulo: "Alta durabilidad",
    descripcion: "Resistente a la intemperie con acabados de larga vida.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    ),
  },
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

export default function VariedadesPVC() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.05 },
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
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={"/img/services/pvc/img1.jpg"}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[#1a1a2e]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12121f] via-[#1a1a2e]/85 to-[#1a1a2e]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />
        </div>

        <div
          ref={sectionRef}
          className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-20 sm:pt-10 sm:pb-28 lg:pb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Imagen principal */}
            <div
              className="relative order-2 lg:order-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition:
                  "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s",
              }}
            >
              <div className="absolute -top-6 -left-6 w-full h-full rounded-[2rem] border border-brand/30" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-brand/10 blur-3xl" />

              <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <Image
                  src={"/img/services/pvc/img2.jpg"}
                  alt="Sistema de PVC Termoacústico"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/20 text-brand">
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
                      d="M13.5 4.06a10.5 10.5 0 000 15.88M15.75 6.75a6 6 0 000 10.5M9 9.75l-3 3m3 3l3-3m-3 1.5H6a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h3"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Termoacústico Antiruido
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Vidrio laminado + insulado
                  </p>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div
              className="order-1 lg:order-2"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition:
                  "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
                <span className="h-px w-8 bg-brand/70" />
                Servicio · PVC Antiruido
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.05]">
                Sistema de{" "}
                <span className="relative text-brand">
                  PVC Termoacústico
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-brand/80 to-transparent" />
                </span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-9 max-w-xl">
                Nuestros sistemas de PVC ofrecen un aislamiento acústico y
                térmico excepcional, optimizando el confort interior, la
                eficiencia energética y la seguridad de tu hogar o proyecto,
                con acabados que aportan elegancia y valor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10">
                {caracteristicas.map((c) => (
                  <div key={c.titulo} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-brand">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {c.icono}
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {c.titulo}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {c.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
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
                <a
                  href="#variedades"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/20 hover:border-brand/50 hover:text-brand rounded-lg px-6 py-4 transition-all duration-200"
                >
                  Ver variedades
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VARIEDADES ===================== */}
      <section id="variedades" className="relative bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div
            className="text-center mb-12 sm:mb-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-dark font-semibold mb-4">
              <span className="h-px w-8 bg-brand/70" />
              Sistemas y variedades
              <span className="h-px w-8 bg-brand/70" />
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
              El sistema correcto para{" "}
              <span className="text-brand-dark">cada espacio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Mamparas, puertas y ventanas en PVC termoacústico. Cada variedad
              incluye su tipo de apertura, presentación de vidrio y la paleta de
              colores disponibles. Haz clic en una tarjeta para ver más fotos.
            </p>
          </div>

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
                  className="group flex flex-col text-left rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-brand/40 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-dark transition-colors duration-200">
                      {it.producto}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {it.apertura}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                      <div className="flex items-start justify-between gap-4 text-sm">
                        <span className="text-gray-500 shrink-0">Vidrio</span>
                        <span className="text-gray-800 text-right">
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
                    className="w-4 h-4 rounded-full border border-gray-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-xs text-gray-600">{c.nombre}</span>
                </span>
              );
            })}
          </div>

          <div
            className="mt-14 text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          >
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
