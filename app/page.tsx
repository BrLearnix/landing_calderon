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
  "/img/backgrounds/background8.jpg",
  "/img/backgrounds/background9.jpg",
  "/img/backgrounds/background10.jpg",
  "/img/backgrounds/background11.jpg",
  "/img/backgrounds/background12.jpeg",
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
    label: "TRAYECTORIA COMPROBADA",
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
    label: "INSTALACIÓN ESPECIALIZADA",
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

const projectCategories = [
  {
    title: "Sistemas en Aluminio de Alta Gama",
    slug: "aluminio",
    image: "/img/projects/project1.jpg",
    description:
      "Ventanas, puertas, mamparas y fachadas de aluminio con rotura de puente térmico.",
    count: 5,
  },
  {
    title: "PVC Termoacústico",
    slug: "pvc-termoacustico",
    image: "/img/projects/project6.jpg",
    description:
      "Ventanas y puertas en PVC con aislamiento térmico y acústico premium.",
    count: 5,
  },
  {
    title: "Acero Inoxidable",
    slug: "acero-inoxidable",
    image: "/img/projects/project11.jpg",
    description:
      "Barandas, pasamanos, cocinas y escaleras en acero inoxidable.",
    count: 5,
  },
  {
    title: "Puerta de Ducha",
    slug: "puerta-de-ducha",
    image: "/img/projects/project16.jpg",
    description: "Puertas de ducha con perfiles de aluminio y vidrio templado.",
    count: 6,
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [currentProcess, setCurrentProcess] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProcess((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a]/90 via-[#1a1a2e]/80 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.08),transparent_70%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left pt-32 lg:pt-24">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-6">
                EXPERTOS EN INSTALACIONES ARQUITECTÓNICOS EN PVC, ALUMINIO Y
                VIDRIO QUE TRANSFORMAN TUS ESPACIOS
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 leading-[1.08] tracking-tight mb-6">
                Más de 10 años
                <br />
                Transformando espacios
                <br />
                con <span className="text-brand">calidad</span>{" "}
                <span className="text-white">y</span>{" "}
                <span className="text-brand">presicion</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Especialistas en la instalación de soluciones en PVC
                termoacústico, aluminio, vidrio y acero inoxidable, combinando
                calidad, seguridad, confort y diseño.
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
              <div className="relative w-full max-w-sm mt-24">
                <div className="absolute -inset-3 bg-gradient-to-br from-brand/20 to-transparent rounded-3xl blur-2xl opacity-60" />
                <Image
                  src={"/img/modelo4.png"}
                  alt="Calderon Group S.A.C"
                  width={280}
                  height={350}
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

      {/* Proyectos Section */}
      <section id="proyectos" className="py-20 sm:py-28 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Proyectos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Experiencia que nos <span className="text-brand">respalda</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Explore algunos de los proyectos que hemos ejecutado con éxito,
              aportando calidad, diseño y durabilidad a espacios residenciales,
              comerciales e industriales
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projectCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`/proyectos/${cat.slug}`}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-800"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-brand transition-colors duration-200">
                        {cat.title}
                      </h3>
                      <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:translate-x-1 transition-all duration-300">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-brand/60 rounded-full">
                      {cat.count} proyectos
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section
        id="nosotros"
        className="py-20 sm:py-28 relative overflow-hidden"
      >
        <img
          src={"/img/backgrounds/background1.jpg"}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.06),transparent_70%)]" />

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
              <strong className="text-gray-700">Calderon Group S.A.C.</strong>{" "}
              somos especialistas en soluciones arquitectónicas en PVC
              termoacústico, aluminio, vidrio y acero inoxidable. Con más de 10
              años de experiencia, desarrollamos proyectos residenciales,
              comerciales e industriales, destacando por nuestra calidad,
              innovación, confianza y compromiso con la satisfacción de nuestros
              clientes.
            </p>
          </div>

          {/* Trayectoria */}
          <div className="mb-20">
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 overflow-hidden">
              <div className="absolute -right-8 -top-8 text-[180px] font-bold text-brand/[0.04] leading-none select-none pointer-events-none hidden sm:block">
                10+
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
                      Calderon Group S.A.C.
                    </strong>{" "}
                    hemos trabajado con dedicación y excelencia, consolidándonos
                    como una empresa de confianza en el sector. Nuestra
                    trayectoria de más de 10 años está respaldada por la
                    ejecución exitosa de proyectos y la satisfacción de nuestros
                    clientes.
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    Hemos participado en proyectos residenciales, comerciales e
                    industriales, ofreciendo soluciones en ventanas, mamparas,
                    puertas, cerramientos y sistemas arquitectónicos en PVC
                    termoacústico, aluminio, vidrio y acero inoxidable. Cada
                    proyecto refleja nuestro compromiso con la calidad, la
                    precisión y la durabilidad.
                  </p>
                  <div className="grid grid-cols-3 gap-6 sm:gap-8">
                    {[
                      { number: "10+", label: "Años de experiencia" },
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
                  <div className="w-80 h-80 sm:w-[24rem] sm:h-[24rem] rounded-[2rem] overflow-hidden animate-float shadow-lg shadow-brand/10 relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand/30 via-transparent to-brand/10 z-10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10" />
                    <Image
                      src={"/img/about/modelo4.jpg"}
                      alt="Calderon Group S.A.C"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] contrast-110 brightness-95"
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
                Ofrecer soluciones arquitectónicas en PVC termoacústica,
                aluminio, vidrio y acero inoxidable, garantizando calidad,
                innovación y un servicio personalizado que genere valor y
                satisfacción en cada proyecto.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-brand/60" />
              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-gray-900">Visión</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Consolidarnos como una empresa líder en el sector, reconocida
                por nuestra excelencia operacional, innovación y compromiso con
                la calidad en cada proyecto que desarrollamos.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="mt-12 group relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-brand/80 to-brand/40" />
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Valores</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                "Calidad",
                "Integridad",
                "Compromiso",
                "Innovación",
                "Responsabilidad",
                "Puntualidad",
                "Trabajo en Equipo",
              ].map((valor) => (
                <span
                  key={valor}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-sm font-medium text-gray-700 hover:bg-brand/10 hover:border-brand/20 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {valor}
                </span>
              ))}
            </div>

            <p className="text-gray-500 leading-relaxed text-center">
              Son los valores que nos guían para brindar soluciones confiables,
              seguras y duraderas, superando las expectativas de nuestros
              clientes en cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Ribbon Separator */}
      <div className="relative py-3 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.15),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="flex items-center justify-center gap-6">
          <div className="hidden sm:block h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-brand/50" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand font-bold whitespace-nowrap">
              Calderon Group S.A.C.
            </span>
            <div className="w-2 h-2 rounded-full bg-brand" />
          </div>
          <div className="hidden sm:block h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-brand/50" />
        </div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />
      </div>

      {/* Proceso Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {backgrounds.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ${
              i === currentProcess
                ? "opacity-60 translate-x-0"
                : i < currentProcess
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-white/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.06),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4 animate-fade-up">
              Nuestro Proceso
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Así trabajamos en
              <br />
              <span className="text-brand">CALDERON</span>{" "}
              <span className="text-gray-900">GROUP S.A.C.</span>
            </h2>
            <p
              className="text-gray-500 leading-relaxed max-w-3xl mx-auto animate-fade-up mb-12 sm:mb-6"
              style={{ animationDelay: "0.2s" }}
            >
              Seguimos un proceso claro y profesional para garantizar calidad,
              cumplimiento y satisfacción en cada proyecto.
            </p>
          </div>

          {/* Línea de proceso - Desktop */}
          <div className="hidden lg:block relative mb-16 group/process">
            {/* Línea horizontal conectora */}
            <div className="absolute top-[47px] left-[10%] right-[10%] h-[2px] bg-gray-900 z-0 transition-opacity duration-500 group-hover/process:opacity-0" />
            {/* Puntos dorados entre pasos */}
            {[20, 30, 40, 50, 60, 70, 80].map((pos) => (
              <div
                key={pos}
                className="absolute top-[46px] w-1.5 h-1.5 rounded-full bg-brand z-0 transition-opacity duration-500 group-hover/process:opacity-0"
                style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
              />
            ))}

            <div className="grid grid-cols-5 gap-6 relative z-10 group/process">
              {[
                {
                  num: "01",
                  title: "Asesoría",
                  subtitle: "y Visita Técnica",
                  desc: "Escuchamos tus necesidades, evaluamos tu proyecto y tomamos medidas precisas en obra.",
                  img: "/img/fases/etapa1.png",
                  alt: "Asesoría",
                },
                {
                  num: "02",
                  title: "Diseño",
                  subtitle: "y Cotización",
                  desc: "Creamos un diseño único adaptado a tu espacio y necesidades, con una cotización accesible, transparente y negociable según tu presupuesto.",
                  img: "/img/fases/etapa2.png",
                  alt: "Diseño",
                },
                {
                  num: "03",
                  title: "Fabricación",
                  subtitle: "",
                  desc: "Fabricamos cada estructura con materiales certificados y maquinaria especializada asegurando precisión y durabilidad.",
                  img: "/img/fases/etapa3.png",
                  alt: "Fabricación",
                },
                {
                  num: "04",
                  title: "Instalación",
                  subtitle: "Profesional",
                  desc: "Nuestro equipo instala con precisión, limpieza y altos estándares de calidad, cumpliendo los plazos acordados.",
                  img: "/img/fases/etapa4.png",
                  alt: "Instalación",
                },
                {
                  num: "05",
                  title: "Entrega",
                  subtitle: "y Garantía",
                  desc: "Realizamos la inspección final, entregamos tu proyecto y brindamos garantía y soporte postventa.",
                  img: "/img/fases/etapa5.png",
                  alt: "Entrega",
                },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center h-full animate-slide-right transition-all duration-500 group-hover/process:opacity-40 group-hover/process:scale-[0.97] hover:!opacity-100 hover:!scale-110 hover:z-20 relative cursor-pointer"
                  style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                >
                  {/* Número */}
                  <div className="relative z-10 mb-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-900 ring-4 ring-white flex items-center justify-center z-30">
                      <span className="text-[11px] font-bold text-brand">
                        {step.num}
                      </span>
                    </div>
                    {/* Círculo con icono */}
                    <div className="w-24 h-24 rounded-full relative flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-110 group overflow-hidden">
                      <div className="absolute inset-0 rounded-full bg-brand z-0 transition-colors duration-500" />
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-900 rounded-r-full z-[1] group-hover:bg-brand transition-colors duration-500" />
                      <div className="absolute inset-[2px] rounded-full bg-white z-10" />
                      <img
                        src={
                          [
                            "/icons/chat-bubble.png",
                            "/icons/illustration.png",
                            "/icons/window.png",
                            "/icons/worker.png",
                            "/icons/shield.png",
                          ][i]
                        }
                        alt=""
                        className="relative z-20 w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Título */}
                  <h4 className="font-bold text-gray-900 text-sm mt-4 leading-tight">
                    {step.title}
                  </h4>
                  {step.subtitle && (
                    <p className="text-xs text-brand font-semibold uppercase tracking-wider mb-3">
                      {step.subtitle}
                    </p>
                  )}
                  {!step.subtitle && <div className="mb-3" />}

                  {/* Descripción */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-5 max-w-[200px]">
                    {step.desc}
                  </p>

                  {/* Imagen */}
                  <div className="w-full aspect-square rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden group/img mt-auto">
                    <img
                      src={step.img ? step.img : undefined}
                      alt={step.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Línea de proceso - Tablet */}
          <div className="hidden md:block lg:hidden relative mb-16 group/process">
            <div className="absolute top-[39px] left-[8%] right-[8%] h-[2px] bg-gray-900 z-0 transition-opacity duration-500 group-hover/process:opacity-0" />
            {[15, 27, 40, 53, 66, 79, 88].map((pos) => (
              <div
                key={pos}
                className="absolute top-[38px] w-1.5 h-1.5 rounded-full bg-brand z-0 transition-opacity duration-500 group-hover/process:opacity-0"
                style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
              />
            ))}

            <div className="grid grid-cols-5 gap-3 relative z-10 group/process">
              {[
                {
                  num: "01",
                  title: "Asesoría",
                  subtitle: "y Visita Técnica",
                  desc: "Escuchamos tus necesidades, evaluamos tu proyecto y tomamos medidas precisas en obra.",
                  img: "/img/fases/etapa1.png",
                  alt: "Asesoría",
                },
                {
                  num: "02",
                  title: "Diseño",
                  subtitle: "y Cotización",
                  desc: "Creamos un diseño único adaptado a tu espacio y necesidades, con una cotización accesible, transparente y negociable según tu presupuesto.",
                  img: "/img/fases/etapa2.png",
                  alt: "Diseño",
                },
                {
                  num: "03",
                  title: "Fabricación",
                  subtitle: "",
                  desc: "Fabricamos cada estructura con materiales certificados y maquinaria especializada.",
                  img: "/img/fases/etapa3.png",
                  alt: "Fabricación",
                },
                {
                  num: "04",
                  title: "Instalación",
                  subtitle: "Profesional",
                  desc: "Nuestro equipo instala con precisión, limpieza y altos estándares de calidad.",
                  img: "/img/fases/etapa4.png",
                  alt: "Instalación",
                },
                {
                  num: "05",
                  title: "Entrega",
                  subtitle: "y Garantía",
                  desc: "Realizamos la inspección final, entregamos tu proyecto y brindamos garantía y soporte.",
                  img: "/img/fases/etapa5.png",
                  alt: "Entrega",
                },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center h-full animate-slide-right transition-all duration-500 group-hover/process:opacity-40 group-hover/process:scale-[0.97] hover:!opacity-100 hover:!scale-110 hover:z-20 relative cursor-pointer"
                  style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                >
                  <div className="relative z-10 mb-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-900 ring-4 ring-white flex items-center justify-center z-30">
                      <span className="text-[10px] font-bold text-brand">
                        {step.num}
                      </span>
                    </div>
                    <div className="w-20 h-20 rounded-full relative flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-110 group overflow-hidden">
                      <div className="absolute inset-0 rounded-full bg-brand z-0 transition-colors duration-500" />
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-900 rounded-r-full z-[1] group-hover:bg-brand transition-colors duration-500" />
                      <div className="absolute inset-[2px] rounded-full bg-white z-10" />
                      <img
                        src={
                          [
                            "/icons/chat-bubble.png",
                            "/icons/illustration.png",
                            "/icons/window.png",
                            "/icons/worker.png",
                            "/icons/shield.png",
                          ][i]
                        }
                        alt=""
                        className="relative z-20 w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-900 text-xs mt-3 leading-tight">
                    {step.title}
                  </h4>
                  {step.subtitle && (
                    <p className="text-[10px] text-brand font-semibold uppercase tracking-wider mb-2">
                      {step.subtitle}
                    </p>
                  )}
                  {!step.subtitle && <div className="mb-2" />}

                  <p className="text-gray-500 text-[10px] leading-relaxed mb-4 max-w-[160px]">
                    {step.desc}
                  </p>

                  <div className="w-full aspect-square rounded-xl bg-gray-100 border border-gray-200 overflow-hidden group/img mt-auto">
                    <img
                      src={step.img ? step.img : undefined}
                      alt={step.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical layout */}
          <div className="md:hidden space-y-10 overflow-hidden group/process">
            {[
              {
                num: "01",
                title: "Asesoría",
                subtitle: "y Visita Técnica",
                desc: "Escuchamos tus necesidades, evaluamos tu proyecto y tomamos medidas precisas en obra.",
                img: "/img/fases/etapa1.png",
                alt: "Asesoría",
              },
              {
                num: "02",
                title: "Diseño",
                subtitle: "y Cotización",
                desc: "Creamos un diseño único adaptado a tu espacio y necesidades, con una cotización accesible, transparente y negociable según tu presupuesto.",
                img: "/img/fases/etapa2.png",
                alt: "Diseño",
              },
              {
                num: "03",
                title: "Fabricación",
                subtitle: "",
                desc: "Fabricamos cada estructura con materiales certificados y maquinaria especializada asegurando precisión y durabilidad.",
                img: "/img/fases/etapa3.png",
                alt: "Fabricación",
              },
              {
                num: "04",
                title: "Instalación",
                subtitle: "Profesional",
                desc: "Nuestro equipo instala con precisión, limpieza y altos estándares de calidad, cumpliendo los plazos acordados.",
                img: "/img/fases/etapa4.png",
                alt: "Instalación",
              },
              {
                num: "05",
                title: "Entrega",
                subtitle: "y Garantía",
                desc: "Realizamos la inspección final, entregamos tu proyecto y brindamos garantía y soporte postventa.",
                img: "/img/fases/etapa5.png",
                alt: "Entrega",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className="flex gap-4 items-start animate-slide-right transition-all duration-500 group-hover/process:opacity-40 group-hover/process:scale-[0.97] hover:!opacity-100 hover:!scale-110 hover:z-20 relative cursor-pointer"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {/* Línea vertical + círculo */}
                <div className="flex flex-col items-center shrink-0 pt-4">
                  <div className="relative z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-900 ring-3 ring-white flex items-center justify-center z-30">
                      <span className="text-[9px] font-bold text-brand">
                        {step.num}
                      </span>
                    </div>
                    <div className="w-16 h-16 rounded-full relative flex items-center justify-center shadow-sm overflow-hidden">
                      <div className="absolute inset-0 rounded-full bg-brand z-0" />
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-900 rounded-r-full z-[1] transition-colors duration-500" />
                      <div className="absolute inset-[2px] rounded-full bg-white z-10" />
                      <img
                        src={
                          [
                            "/icons/chat-bubble.png",
                            "/icons/illustration.png",
                            "/icons/window.png",
                            "/icons/worker.png",
                            "/icons/shield.png",
                          ][i]
                        }
                        alt=""
                        className="relative z-20 w-8 h-8 object-contain grayscale"
                      />
                    </div>
                  </div>
                  {i < 4 && (
                    <div className="w-[2px] h-full min-h-[20px] bg-gradient-to-b from-gray-900 to-gray-300 mt-2 transition-opacity duration-500 group-hover/process:opacity-0" />
                  )}
                </div>

                {/* Contenido */}
                <div className="flex-1 pt-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-base leading-tight">
                    {step.title}
                  </h4>
                  {step.subtitle && (
                    <p className="text-xs text-brand font-semibold uppercase tracking-wider mb-2">
                      {step.subtitle}
                    </p>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                  <div className="w-full rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden group/img h-[200px]">
                    <img
                      src={step.img ? step.img : undefined}
                      alt={step.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
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
              Transformemos su idea en realidad. Comparta los detalles de su
              proyecto y reciba una propuesta adaptada a sus necesidades.
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
                  value: "Av. Tingo María N° 1555 – Breña, Lima, Perú 15082",
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
                ¿Necesitas ayuda?, escríbenos.
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/5 min-h-[300px] lg:min-h-full bg-[#1a1a2e] flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps?q=Av.+Tingo+Mar%C3%ADa+N%C2%B0+1555+Bre%C3%B1a+Lima+Peru&output=embed"
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

      {/* Ribbon Separator */}
      <div className="relative py-3 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.15),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="flex items-center justify-center gap-6">
          <div className="hidden sm:block h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-brand/50" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand font-bold whitespace-nowrap">
              Calderon Group S.A.C.
            </span>
            <div className="w-2 h-2 rounded-full bg-brand" />
          </div>
          <div className="hidden sm:block h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-brand/50" />
        </div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />
      </div>

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
          <div className="flex animate-marquee items-center w-max">
            {(() => {
              const logos = [
                "/img/providers/logo3.svg",
                "/img/providers/logo6.png",
                "/img/providers/logo1.png",
                "/img/providers/logo2.png",
                "/img/providers/logo5.avif",
                "/img/providers/logo4.png",
              ];
              const items = [...logos, ...logos];
              return items.map((src, i) => {
                const isLogo4 = src.includes("logo4");
                return (
                  <div
                    key={i}
                    className="shrink-0 mx-8 sm:mx-16 lg:mx-24 flex items-center justify-center"
                  >
                    <div
                      className={`${isLogo4 ? "w-36 h-36 sm:w-52 sm:h-52" : "w-28 h-28 sm:w-36 sm:h-36"} flex items-center justify-center`}
                    >
                      <Image
                        src={src}
                        alt="Proveedor"
                        width={isLogo4 ? 120 : 80}
                        height={isLogo4 ? 120 : 80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>
    </>
  );
}
