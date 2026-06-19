"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const backgrounds = [
  "/img/backgrounds/background1.jpg",
  "/img/backgrounds/background2.jpg",
  "/img/backgrounds/background3.jpg",
];

const fortalezas = [
  {
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Calidad Garantizada",
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "15+ Años",
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    label: "Equipo Profesional",
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    label: "Presupuesto a Medida",
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: "Instalación Profesional",
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    label: "Entrega a Tiempo",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {backgrounds.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            className={`object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a]/90 via-[#1a1a2e]/80 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.1),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-6">
            Expertos en Instalaciones
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Transformamos tus
            <br />
            espacios con{" "}
            <span className="text-brand">calidad</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Aluminio, PVC termoestático, acero inoxidable y puertas de ducha.
            Más de 15 años de experiencia brindando soluciones duraderas y
            elegantes para hogares y comercios.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/servicios"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
            >
              Nuestros Servicios
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Fortalezas Ribbon */}
      <section className="relative bg-[#0f0f1a] border-y border-white/5 overflow-hidden">
        {/* Mobile: marquee auto-scroll */}
        <div className="flex lg:hidden overflow-hidden">
          <div className="flex animate-marquee gap-0 py-3">
            {[...fortalezas, ...fortalezas].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 shrink-0"
              >
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
      <section id="nosotros" className="py-20 sm:py-28 bg-[#f8f8fc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Más de 15 años de{" "}
                <span className="text-brand">experiencia</span> y confianza
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                En Calderón Instalaciones nos dedicamos a la instalación de
                carpintería metálica y PVC. Trabajamos con materiales de la más
                alta calidad para garantizar resultados duraderos y estéticos.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Nuestro equipo altamente capacitado se encarga de cada proyecto
                con profesionalismo, puntualidad y atención personalizada,
                asegurando que cada detalle supere tus expectativas.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "15+", label: "Años de experiencia" },
                  { number: "500+", label: "Proyectos completados" },
                  { number: "98%", label: "Clientes satisfechos" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl sm:text-3xl font-bold text-brand">{stat.number}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-brand/40 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-400">Nuestro equipo en acción</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand rounded-2xl flex items-center justify-center shadow-lg shadow-brand/30">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Nuestro Trabajo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Proyectos Recientes
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Conoce algunos de los proyectos que hemos realizado para nuestros
              clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Aluminio", color: "bg-brand" },
              { label: "PVC", color: "bg-blue-500" },
              { label: "Acero Inoxidable", color: "bg-gray-500" },
              { label: "Puerta de Ducha", color: "bg-teal-500" },
              { label: "Aluminio", color: "bg-brand" },
              { label: "PVC", color: "bg-blue-500" },
            ].map((proj, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer"
              >
                <div className={`absolute inset-0 ${proj.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
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
              Contáctanos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Solicita tu <span className="text-brand">Cotización</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Cuéntanos sobre tu proyecto y te enviaremos un presupuesto sin
              compromiso.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all duration-200 text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all duration-200 text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all duration-200 text-sm"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all duration-200 text-sm"
                >
                  <option value="" className="bg-[#0f0f1a]">Selecciona un servicio</option>
                  <option value="aluminio" className="bg-[#0f0f1a]">Aluminio</option>
                  <option value="pvc" className="bg-[#0f0f1a]">PVC Termoestático</option>
                  <option value="acero" className="bg-[#0f0f1a]">Acero Inoxidable</option>
                  <option value="ducha" className="bg-[#0f0f1a]">Puerta de Ducha</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all duration-200 text-sm resize-none"
                  placeholder="Describe tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
              >
                Enviar Cotización
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
