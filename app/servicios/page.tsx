"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { calidades } from "./vidrio/data";
import CalidadVidrioSection from "./CalidadVidrioSection";

const servicios = [
  {
    title: "Sistemas en Aluminio de Alta Gama",
    href: "/servicios/aluminio",
    img: "/img/services/aluminio/img1.jpg",
    description:
      "Ventanas, puertas, mamparas y fachadas de aluminio a medida con rotura de puente térmico y acabados personalizados.",
    tags: [
      "Ventanas",
      "Puertas",
      "Mamparas",
      "Fachadas",
      "Barandas",
      "Pérgolas",
    ],
  },
  {
    title: "PVC Termoacústico",
    href: "/servicios/pvc-termoestatico",
    img: "/img/services/pvc/img1.jpg",
    description:
      "Ventanas y puertas en PVC termoacústico con rotura de puente térmico. Máximo aislamiento térmico y acústico en una amplia gama de colores y acabados.",
    tags: ["Ventanas", "Puertas", "Aislamiento", "Perfiles", "Acabados"],
  },
  {
    title: "Acero Inoxidable",
    href: "/servicios/acero-inoxidable",
    img: "/img/services/acero/img1.jpg",
    description:
      "Barandas, pasamanos, cocinas y escaleras en acero inoxidable con acabados cepillado, espejo, satinado o color. Durabilidad y diseño premium.",
    tags: ["Barandas", "Pasamanos", "Cocinas", "Escaleras", "Estructuras"],
  },
  {
    title: "Puerta de Ducha",
    href: "/servicios/puerta-de-ducha",
    img: "/img/services/puerta/img1.jpg",
    description:
      "Puertas de ducha con perfiles de aluminio y vidrio templado. Diseños corredizos, abatibles o plegables con tratamiento antical.",
    tags: ["Ducha", "Baño", "Vidrio templado", "Corredizas", "Abatibles"],
  },
];

const stats = [
  { valor: "4", etiqueta: "Líneas de servicio" },
  { valor: "100%", etiqueta: "A medida" },
  { valor: "RPT", etiqueta: "Puente térmico" },
  { valor: "6", etiqueta: "Paletas de color" },
];

export default function ServiciosPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div className="min-h-screen pt-20 bg-[#1a1a2e]">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={"/img/services/aluminio/img2.jpg"}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[#1a1a2e]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12121f]/90 via-[#1a1a2e]/70 to-[#1a1a2e]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />
        </div>

        <div
          ref={sectionRef}
          className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-20 sm:pt-14 sm:pb-24"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition:
                  "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
                <span className="h-px w-8 bg-brand/70" />
                Nuestros Servicios
                <span className="h-px w-8 bg-brand/70" />
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.08]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition:
                  "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s",
              }}
            >
              Soluciones de Instalación en{" "}
              <span className="relative text-brand">
                Aluminio y PVC Antiruido
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent" />
              </span>
            </h1>

            <p
              className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition:
                  "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}
            >
              Soluciones en aluminio, PVC termoacústico, acero inoxidable y
              puertas de ducha para proyectos residenciales, comerciales e
              industriales.
            </p>

            <div
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition:
                  "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s",
              }}
            >
              {stats.map((st) => (
                <div
                  key={st.etiqueta}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-4 py-5 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-brand">
                    {st.valor}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 mt-1">
                    {st.etiqueta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CINTA DIVISORIA ===================== */}
      <div className="relative h-14 sm:h-16 bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-2.5 sm:h-3 bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-3 rounded-full bg-[#1a1a2e] border border-brand/40 px-6 sm:px-8 py-2.5">
          <svg
            className="w-4 h-4 text-brand"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-brand font-semibold whitespace-nowrap">
            Sistemas y acabados premium
          </span>
          <svg
            className="w-4 h-4 text-brand"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      {/* ===================== SERVICIOS ===================== */}
      <section className="relative bg-[#10101f]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div
            className="text-center mb-14 sm:mb-20"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              <span className="h-px w-8 bg-brand/70" />
              Líneas de servicio
              <span className="h-px w-8 bg-brand/70" />
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              Soluciones para{" "}
              <span className="text-brand">cada proyecto</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Cada servicio se fabrica y se instala a medida, con materiales
              de alta calidad y acabados que garantizan durabilidad y diseño
              premium.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {servicios.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-brand/40 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100 + 100}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100 + 100}ms`,
                }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10101f] via-black/10 to-transparent" />
                </div>

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand transition-colors duration-200 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {s.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {s.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-white/[0.04] rounded-full text-[10px] font-semibold uppercase tracking-wider text-gray-400 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                    {s.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand">
                        +{s.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-white group-hover:text-brand transition-colors duration-200">
                    Ver detalle
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 group-hover:border-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
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
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calidades de Vidrio - Premium White Section */}
      <CalidadVidrioSection calidades={calidades} />
    </div>
  );
}
