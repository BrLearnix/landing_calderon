import Link from "next/link";
import Image from "next/image";
import { calidades } from "./vidrio/data";

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
            <span className="text-brand">Instalación en Sistemas de Aluminio y PVC Antiruido</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones en aluminio, PVC termoacústico, acero inoxidable y
            puertas de ducha para proyectos residenciales, comerciales e
            industriales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {servicios.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-brand/30 transition-all duration-300"
            >
              <div className="flex items-stretch">
                <div className="relative w-28 shrink-0 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="112px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a2e]" />
                </div>
                <div className="flex-1 min-w-0 p-4">
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-white/[0.04] rounded-full text-[10px] font-medium text-gray-500 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                    {s.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] font-medium text-brand/60">
                        +{s.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Cinta divisoria centrada en la transición de fondo */}
      <div className="relative z-10 -mt-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
            <div className="w-2 h-2 rotate-45 bg-brand/60" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
          </div>
        </div>
      </div>

      <div className="bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Calidades de Vidrio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Calidades de <span className="text-yellow-400">Vidrio</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Selecciona el nivel de seguridad y aislamiento que tu proyecto
              requiere. Contamos con diversas opciones y colores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {calidades.map((c) => (
              <Link
                key={c.slug}
                href={`/servicios/vidrio/${c.slug}`}
                className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl hover:bg-white/[0.07] hover:border-white/[0.12] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 flex flex-col min-h-[280px]"
              >
                <div className="absolute -top-2 -right-2 w-20 h-20 rounded-full overflow-hidden border-2 border-white/[0.1] group-hover:w-48 group-hover:h-48 group-hover:border-brand/40 transition-all duration-300 z-10 shadow-lg shadow-black/40">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="192px"
                    quality={100}
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                      {c.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                        c.featured
                          ? "bg-brand/10 border border-brand/20 text-brand"
                          : "bg-white/[0.06] border border-white/[0.08] text-gray-400 group-hover:text-brand group-hover:border-brand/20 group-hover:bg-brand/10"
                      }`}
                    >
                      {c.badge}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
