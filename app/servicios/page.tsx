import Link from "next/link";
import Image from "next/image";

const servicios = [
  {
    title: "Aluminio",
    href: "/servicios/aluminio",
    img: null,
    description:
      "Ventanas, puertas, mamparas, fachadas, barandas y estructuras livianas fabricadas a medida con perfiles de primera calidad.",
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
    title: "PVC Termoestático",
    href: "/servicios/pvc-termoestatico",
    img: "/img/services/pvc/img1.jpg",
    description:
      "Ventanas y puertas en PVC termoestático con rotura de puente térmico para máximo aislamiento térmico y acústico.",
    tags: ["Ventanas", "Puertas", "Aislamiento", "Perfiles", "Acabados"],
  },
  {
    title: "Acero Inoxidable",
    href: "/servicios/acero-inoxidable",
    img: "/img/services/acero/img1.jpg",
    description:
      "Barandas, pasamanos, cocinas, escaleras y estructuras en acero inoxidable con acabados cepillado, espejo, satinado y color.",
    tags: ["Barandas", "Pasamanos", "Cocinas", "Escaleras", "Estructuras"],
  },
  {
    title: "Puerta de Ducha",
    href: "/servicios/puerta-de-ducha",
    img: "/img/services/puerta/img1.jpg",
    description:
      "Puertas de ducha con perfiles de aluminio y vidrio templado de seguridad. Diseños corredizos, abatibles y plegables.",
    tags: ["Ducha", "Baño", "Vidrio templado", "Corredizas", "Abatibles"],
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Soluciones de{" "}
            <span className="text-brand">Instalación metálica y PVC</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados para proyectos
            residenciales, comerciales e industriales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicios.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-5">
                <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                  {s.img ? (
                    <Image
                      src={s.img}
                      alt={s.title}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand/10 flex items-center justify-center text-brand">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-white/5 rounded-md text-[10px] font-medium text-gray-500 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
