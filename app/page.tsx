"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const backgrounds = [
  "/img/backgrounds/background1.jpg",
  "/img/backgrounds/background2.jpg",
  "/img/backgrounds/background3.jpg",
  "/img/backgrounds/background4.jpg",
  "/img/backgrounds/background5.jpg",
  "/img/backgrounds/background6.jpg",
  "/img/backgrounds/background7.jpg",
];

const fortalezas = [
  {
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    label: "Calidad Garantizada",
  },
  {
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "15+ Años",
  },
  {
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    label: "Equipo Profesional",
  },
  {
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    label: "Presupuesto a Medida",
  },
  {
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    label: "Instalación Profesional",
  },
  {
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    ),
    label: "Entrega a Tiempo",
  },
];

const projects = [
  { src: "/img/projects/project1.jpeg", label: "Ventanas en serie" },
  { src: "/img/projects/project2.jpg", label: "Acero inoxidable" },
  { src: "/img/projects/project3.jpg", label: "Puerta de ducha" },
  { src: "/img/projects/project4.jpg", label: "ventanas en serie" },
  { src: "/img/projects/project5.jpg", label: "Puerta de ducha" },
  { src: "/img/projects/project6.jpg", label: "Ventanas en serie" },
  { src: "/img/projects/project7.jpg", label: "Pvc Termoestatico" },
  { src: "/img/projects/project8.jpg", label: "Puerta de Ducha" },
  { src: "/img/projects/project9.jpg", label: "Acero inoxidable" },
];

const perPage = 6;
const projectPages: { src: string; label: string }[][] = [];
for (let i = 0; i < projects.length; i += perPage) {
  projectPages.push(projects.slice(i, i + perPage));
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [projPage, setProjPage] = useState(0);
  const [selectedProj, setSelectedProj] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedProj === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProj(null);
      if (e.key === "ArrowRight")
        setSelectedProj((selectedProj + 1) % projects.length);
      if (e.key === "ArrowLeft")
        setSelectedProj((selectedProj - 1 + projects.length) % projects.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedProj]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {backgrounds.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            className={`object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-50" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a]/80 via-[#1a1a2e]/70 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.08),transparent_70%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left pt-20 lg:pt-0">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-6">
                Expertos en Pvc y Aluminio
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                Transformamos
                <br />
                tus espacios
                <br />
                con <span className="text-brand">calidad</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Aluminio, PVC termoestático, acero inoxidable y puertas de
                ducha. Más de 15 años de experiencia brindando soluciones
                duraderas y elegantes para hogares y comercios.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <a
                  href="/servicios"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
                >
                  Nuestros Servicios
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
                <a
                  href="/#cotizar"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white hover:bg-white/5 font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider"
                >
                  Cotiza Ahora
                </a>
              </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 to-transparent rounded-3xl blur-2xl opacity-60" />
                <Image
                  src="/img/modelo2.png"
                  alt="Calderón Instalaciones"
                  width={600}
                  height={700}
                  className="relative w-full h-auto object-contain drop-shadow-2xl animate-float"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 40%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 40%, transparent 100%)",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Fortalezas Ribbon */}
      <section className="relative bg-[#0f0f1a] border-y border-white/5 overflow-hidden">
        {/* Mobile: marquee auto-scroll */}
        <div className="flex lg:hidden overflow-hidden">
          <div className="flex animate-marquee gap-0 py-3">
            {[...fortalezas, ...fortalezas].map((f, i) => (
              <div key={i} className="flex items-center gap-3 px-5 shrink-0">
                <div className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  {f.icon}
                </div>
                <span className="text-[10px] font-mono font-medium uppercase tracking-[0.15em] text-white/80 whitespace-nowrap">
                  {f.label}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20 ml-3" />
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: grid */}
        <div className="hidden lg:flex px-12">
          <div className="grid grid-cols-6 w-full">
            {fortalezas.map((f, i) => (
              <div
                key={f.label}
                className="group flex items-center justify-center gap-3 px-3 py-3 animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <span className="text-[10px] font-mono font-medium uppercase tracking-[0.15em] text-white/80 group-hover:text-white transition-colors duration-300">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section
        id="nosotros"
        className="py-20 sm:py-28 bg-[#f8f8fc] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/[0.03] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-20">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Nuestra empresa, nuestro{" "}
              <span className="text-brand">compromiso</span>
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
              En{" "}
              <strong className="text-gray-700">Calderón Instalaciones</strong>{" "}
              somos una empresa especializada en la instalación de carpintería
              metálica y PVC. Con más de 15 años de trayectoria, nos hemos
              consolidado como un referente de calidad, profesionalismo y
              confianza en el sector.
            </p>
          </div>

          {/* Trayectoria */}
          <div className="mb-20">
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 overflow-hidden">
              <div className="absolute -right-8 -top-8 text-[180px] font-bold text-brand/[0.04] leading-none select-none pointer-events-none hidden sm:block">
                15+
              </div>
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent hidden sm:block" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4 text-center sm:text-left">
                    Experiencia y trayectoria
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    Desde nuestros inicios, en{" "}
                    <strong className="text-gray-700">
                      Calderón Instalaciones
                    </strong>{" "}
                    nos hemos dedicado con pasión y profesionalismo a cada
                    proyecto. Nuestra trayectoria de más de 15 años nos avala,
                    respaldada por cientos de clientes satisfechos que confían
                    en nuestro trabajo.
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    Hemos participado en proyectos residenciales, comerciales e
                    industriales, desarrollando una amplia experiencia en
                    instalaciones de aluminio, PVC termoestático, acero
                    inoxidable y puertas de ducha. Cada obra ejecutada es un
                    testimonio de nuestro compromiso con la calidad y el
                    detalle.
                  </p>
                  <div className="grid grid-cols-3 gap-6 sm:gap-8">
                    {[
                      { number: "15+", label: "Años de experiencia" },
                      { number: "500+", label: "Proyectos completados" },
                      { number: "98%", label: "Clientes satisfechos" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center lg:text-left"
                      >
                        <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand to-brand/70 bg-clip-text text-transparent">
                          {stat.number}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] rounded-[2rem] overflow-hidden animate-float">
                    <Image
                      src="/img/about/modelo4.jpg"
                      alt="Calderón Instalaciones"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-brand/60" />
              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-gray-900">Misión</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Proveer soluciones integrales en carpintería metálica y PVC,
                ofreciendo instalaciones de alta calidad que superen las
                expectativas de nuestros clientes, mediante un equipo
                profesional comprometido con la excelencia, la innovación y el
                servicio personalizado.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-brand/60" />
              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-gray-900">Visión</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Ser reconocidos como la empresa líder en instalaciones de
                carpintería metálica y PVC en la región, destacando por nuestra
                calidad, responsabilidad y capacidad de innovación,
                contribuyendo al desarrollo y bienestar de nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-20 sm:py-28 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Proyectos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Nuestros Trabajos <span className="text-brand">recientes</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Conoce algunos de los proyectos que hemos realizado para nuestros
              clientes.
            </p>
          </div>

          {/* Mobile: all projects stacked vertically */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
            {projects.map((proj, i) => (
              <div
                key={i}
                onClick={() => setSelectedProj(i)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 cursor-pointer"
              >
                <Image
                  src={proj.src}
                  alt={`Proyecto de ${proj.label}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-brand/80 rounded-full mb-2">
                    {proj.label}
                  </span>
                  <h3 className="text-white font-semibold text-sm">
                    Proyecto de {proj.label}
                  </h3>
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

          {/* Desktop: carousel with 6 visible at a time */}
          <div className="hidden lg:block overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${projPage * 100}%)` }}
            >
              {projectPages.map((group, gi) => (
                <div
                  key={gi}
                  className="grid grid-cols-3 gap-6 min-w-0 w-full shrink-0"
                >
                  {group.map((proj, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedProj(gi * perPage + i)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 cursor-pointer"
                    >
                      <Image
                        src={proj.src}
                        alt={`Proyecto de ${proj.label}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-brand/80 rounded-full mb-2">
                          {proj.label}
                        </span>
                        <h3 className="text-white font-semibold text-sm">
                          Proyecto de {proj.label}
                        </h3>
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
              ))}
            </div>
          </div>
          {/* Desktop pagination controls */}
          <div className="hidden lg:flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setProjPage(Math.max(0, projPage - 1))}
              disabled={projPage === 0}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
            <div className="flex gap-2">
              {projectPages.map((_, gi) => (
                <button
                  key={gi}
                  onClick={() => setProjPage(gi)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    gi === projPage
                      ? "bg-brand w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setProjPage(Math.min(projectPages.length - 1, projPage + 1))
              }
              disabled={projPage === projectPages.length - 1}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
        </div>
      </section>

      {/* Cotizar Section */}
      <section id="cotizar" className="py-20 sm:py-28 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Pide tu cotización{" "}
              <span className="text-brand">sin compromiso</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Cuéntanos tu proyecto y te enviaremos un presupuesto personalizado
              a la brevedad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Info */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  label: "Dirección",
                  value: "Av. Tengo María N° 1555 - Breña, Lima, Perú 15082",
                  href: null,
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                  label: "Teléfono",
                  value: "+51 937 481 094",
                  href: "tel:+51937481094",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  label: "Correo",
                  value: "groupcalderon1@gmail.com",
                  href: "mailto:groupcalderon1@gmail.com",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  label: "Horario",
                  value: "Lun–Vie: 8:00–18:00 | Sáb: 9:00–14:00",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-white hover:text-brand transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/51937481094"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all duration-200 text-sm shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 mt-4"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/5 min-h-[300px] lg:min-h-full bg-[#1a1a2e] flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps?q=Av.+Tengo+Mar%C3%ADa+N%C2%B0+1555+Bre%C3%B1a+Lima+Peru&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación"
                className="grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proveedores Section */}
      <section className="relative py-16 overflow-hidden bg-[#0f0f1a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12">
          <div className="text-center mb-8">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Proveedores
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Trabajamos con las{" "}
              <span className="text-brand">mejores marcas</span>
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="flex animate-marquee items-center">
            {(() => {
              const logos = [
                "/img/providers/logo1.png",
                "/img/providers/logo2.png",
                "/img/providers/logo3.png",
                "/img/providers/logo4.png",
              ];
              const repeat = 6;
              return Array.from({ length: logos.length * repeat }).map(
                (_, i) => {
                  const src = logos[i % logos.length];
                  return (
                    <div
                      key={i}
                      className="shrink-0 mx-8 sm:mx-16 lg:mx-24 flex items-center justify-center"
                    >
                      <div className="w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                        <Image
                          src={src}
                          alt="Proveedor"
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  );
                },
              );
            })()}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {selectedProj !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedProj(null)}
        >
          <button
            onClick={() => setSelectedProj(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <svg
              className="w-6 h-6"
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
                (selectedProj - 1 + projects.length) % projects.length,
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <svg
              className="w-6 h-6"
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
            className="relative max-w-5xl max-h-[85vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[selectedProj].src}
              alt={`Proyecto de ${projects[selectedProj].label}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProj((selectedProj + 1) % projects.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <svg
              className="w-6 h-6"
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-white text-sm">
            {selectedProj + 1} / {projects.length} &mdash;{" "}
            {projects[selectedProj].label}
          </div>
        </div>
      )}
    </>
  );
}
