"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Calidad {
  title: string;
  slug: string;
  img: string;
  description: string;
  badge: string;
  featured: boolean;
  details: string[];
}

const iconPaths: Record<number, string> = {
  0: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  1: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  2: "M13 10V3L4 14h7v7l9-11h-7z",
  3: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
};

function CalidadCard({
  calidad,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  calidad: Calidad;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isHovered = hoveredIndex === index;
  const anotherHovered = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <div
      ref={ref}
      className="group flex flex-col"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      style={{
        opacity: visible ? (anotherHovered ? 0.4 : 1) : 0,
        transform: visible
          ? `translateY(0) scale(${isHovered ? 1.03 : 1})`
          : "translateY(32px)",
        transition: `opacity 0.4s ease, transform 0.4s ease, ${visible ? `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms` : ""}`,
        zIndex: isHovered ? 10 : 1,
      }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={calidad.img}
          alt={calidad.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full backdrop-blur-sm ${
              calidad.featured
                ? "bg-brand/90 text-black"
                : "bg-white/90 text-gray-700"
            }`}
          >
            {calidad.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 bg-[#ebebeb] p-[15px]">
        {/* Title with curved top */}
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full h-3 -mt-3"
            viewBox="0 0 400 12"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,4 L400,12 L400,12 L0,12 Z"
              fill="#1a1a2e"
            />
          </svg>
          <div className="bg-[#1a1a2e] px-5 py-4 relative overflow-hidden -mx-[15px]">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-tight">
              <span className="text-white block">Vidrio</span>
              <span className="text-brand block">
                {calidad.title.replace("Vidrio ", "")}
              </span>
            </h3>
            <div className="w-1/2 h-0.5 bg-brand/50 rounded-full mt-3" />
            <svg
              className="absolute bottom-0 right-0 w-1/2 h-3"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0,12 L100,12 C140,12 180,2 200,0 L200,12 Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {calidad.description}
        </p>

        {/* Benefits */}
        <div className="mt-auto">
          <div className="border-t border-gray-100 pt-5">
            <ul className="space-y-3">
              {calidad.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-brand/8 flex items-center justify-center group-hover/item:bg-brand/15 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={iconPaths[i] || iconPaths[0]}
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm leading-snug pt-1">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/servicios/vidrio/${calidad.slug}`}
          className="flex items-center justify-center gap-2 mt-6 py-3 bg-brand text-white text-sm font-semibold rounded-sm hover:bg-brand-dark transition-colors duration-300"
        >
          <span>Ver detalle</span>
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
        </Link>
      </div>
    </div>
  );
}

export default function CalidadVidrioSection({
  calidades,
}: {
  calidades: Calidad[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="calidades-vidrio" ref={sectionRef} className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        {/* Header */}
        <div
          className="text-center mb-16 sm:mb-20"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-brand" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand font-medium">
              Calidades de Vidrio
            </span>
            <span className="w-8 h-[1px] bg-brand" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Calidades de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-brand to-yellow-600">
              Vidrio
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Selecciona el nivel de seguridad y aislamiento que tu proyecto
            requiere. Contamos con diversas opciones y colores.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-14">
          {calidades.map((c, i) => (
            <CalidadCard key={c.slug} calidad={c} index={i} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
