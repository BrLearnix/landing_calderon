"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const menuItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    submenu: [
      { label: "Aluminio", href: "/servicios/aluminio" },
      { label: "PVC Termoestático", href: "/servicios/pvc-termoestatico" },
      { label: "Acero Inoxidable", href: "/servicios/acero-inoxidable" },
      { label: "Puerta de Ducha", href: "/servicios/puerta-de-ducha" },
    ],
  },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Proyectos", href: "/#proyectos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleOpen = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f0f1a]/70 backdrop-blur-lg shadow-sm border-b border-white/5"
          : "bg-[#0f0f1a]/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-14" : "h-28"
          }`}
        >
          <a
            href="/"
            onClick={handleNavClick}
            className="flex items-center shrink-0"
          >
            <Image
              src="/img/logo1.png"
              alt="Calderón"
              width={scrolled ? 100 : 200}
              height={scrolled ? 100 : 200}
              className="transition-all duration-500"
            />
          </a>

          <nav
            className={`hidden lg:flex items-center transition-all duration-500 ${
              scrolled ? "gap-4 xl:gap-6" : "gap-6 xl:gap-8"
            }`}
          >
            {menuItems.map((item) =>
              item.submenu ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleOpen}
                  onMouseLeave={handleClose}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="relative text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 flex items-center gap-1.5 py-1 group text-white/70 hover:text-brand"
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
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
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left ${
                        dropdownOpen ? "scale-x-100" : ""
                      }`}
                    />
                  </button>

                  <div
                    ref={dropdownRef}
                    className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 ${
                      scrolled ? "mt-2" : "mt-4"
                    } w-56 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-[#1a1a2e] rounded-lg shadow-2xl shadow-black/40 border border-white/5 overflow-hidden">
                      <div className="py-1.5">
                        {item.submenu.map((sub, idx) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={handleNavClick}
                            className={`flex items-center gap-3 px-5 py-2.5 text-sm text-gray-400 hover:text-brand hover:bg-white/5 transition-all duration-150 ${
                              idx < item.submenu.length - 1 ? "" : ""
                            }`}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="relative text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 py-1 group text-white/70 hover:text-brand"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ),
            )}

            <div
              className={`flex items-center transition-all duration-500 ${
                scrolled
                  ? "gap-1.5 lg:gap-2 xl:gap-3"
                  : "gap-2 lg:gap-3 xl:gap-4"
              }`}
            >
              <a
                href="https://web.facebook.com/profile.php?id=61591142784305"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 text-white/50 hover:text-brand"
                aria-label="Facebook"
              >
                <svg
                  className={`transition-all duration-500 ${scrolled ? "w-3.5 h-3.5" : "w-4 h-4"}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/calderon_group"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 text-white/50 hover:text-brand"
                aria-label="Instagram"
              >
                <svg
                  className={`transition-all duration-500 ${scrolled ? "w-3.5 h-3.5" : "w-4 h-4"}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@calderon_gruop_sac"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 text-white/50 hover:text-brand"
                aria-label="TikTok"
              >
                <svg
                  className={`transition-all duration-500 ${scrolled ? "w-3.5 h-3.5" : "w-4 h-4"}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>

            <a
              href="/#cotizar"
              onClick={handleNavClick}
              className={`inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-xs uppercase tracking-wider shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 ${
                scrolled ? "px-4 py-2" : "px-5 py-2.5"
              }`}
            >
              Cotizar
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative rounded-lg flex items-center justify-center transition-all duration-200 text-white hover:bg-white/10 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            }`}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div
              className={`relative flex flex-col justify-between transition-all duration-500 ${
                scrolled ? "w-4 h-3" : "w-5 h-4"
              }`}
            >
              <span
                className={`block rounded-full transition-all duration-300 bg-white ${
                  scrolled ? "h-[1px]" : "h-[1.5px]"
                } ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                style={
                  scrolled && mobileOpen
                    ? { transform: "rotate(45deg) translateY(7px)" }
                    : {}
                }
              />
              <span
                className={`block rounded-full transition-all duration-300 bg-white ${
                  scrolled ? "h-[1px]" : "h-[1.5px]"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block rounded-full transition-all duration-300 bg-white ${
                  scrolled ? "h-[1px]" : "h-[1.5px]"
                } ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                style={
                  scrolled && mobileOpen
                    ? { transform: "rotate(-45deg) translateY(-7px)" }
                    : {}
                }
              />
            </div>
          </button>
        </div>
      </div>
    </header>

      <div
        className={`fixed inset-0 bg-black/60 lg:hidden transition-opacity duration-300 z-[60] ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#1a1a2e] lg:hidden flex flex-col transition-transform duration-300 ease-out z-[70] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
          <div className="flex items-center">
            <div className="w-auto h-8 flex items-center">
              <Image
                src="/img/logo1.png"
                alt="Calderón"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-label="Cerrar menú"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="shrink-0 px-4 pb-3 pt-2 border-b border-white/5">
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://web.facebook.com/profile.php?id=61591142784305"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-brand/15 flex items-center justify-center text-gray-400 hover:text-brand transition-all duration-200"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/calderon_group"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-brand/15 flex items-center justify-center text-gray-400 hover:text-brand transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@calderon_gruop_sac"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-brand/15 flex items-center justify-center text-gray-400 hover:text-brand transition-all duration-200"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {menuItems.map((item) =>
            item.submenu ? (
              <div key={item.label}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${
                    dropdownOpen
                      ? "text-brand"
                      : "text-gray-400 hover:text-brand"
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
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
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    dropdownOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="ml-3 space-y-0.5 pb-2 pt-1">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={handleNavClick}
                        className="block px-4 py-2.5 text-sm text-gray-500 hover:text-brand hover:bg-white/5 rounded-lg transition-all duration-150"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="block px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 hover:text-brand transition-all duration-200"
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        <div className="shrink-0 border-t border-white/5">
          <a
            href="/#cotizar"
            onClick={handleNavClick}
            className="flex items-center justify-center gap-2 w-full px-5 py-4 bg-brand hover:bg-brand-dark text-white font-semibold transition-all duration-200 text-xs uppercase tracking-wider"
          >
            Cotizar
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
