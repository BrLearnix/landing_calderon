import Link from "next/link";
import Image from "next/image";

const servicios = [
  {
    title: "Aluminio",
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
    title: "PVC Termoestático",
    href: "/servicios/pvc-termoestatico",
    img: "/img/services/pvc/img1.jpg",
    description:
      "Ventanas y puertas en PVC termoestático con rotura de puente térmico. Máximo aislamiento térmico y acústico en una amplia gama de colores y acabados.",
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
            <span className="text-brand">Instalación metálica y PVC</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones en aluminio, PVC termoestático, acero inoxidable y
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
    </div>
  );
}
