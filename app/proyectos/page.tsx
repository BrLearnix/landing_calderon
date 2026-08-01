import Image from "next/image";

const projectCategories = [
  {
    title: "Sistemas en Aluminio de Alta Gama",
    slug: "aluminio",
    image: "/img/projects/project1.jpg",
    description: "Ventanas, puertas, mamparas y fachadas de aluminio con rotura de puente térmico.",
  },
  {
    title: "PVC Termoacústico",
    slug: "pvc-termoacustico",
    image: "/img/projects/project6.jpg",
    description: "Ventanas y puertas en PVC con aislamiento térmico y acústico premium.",
  },
  {
    title: "Acero Inoxidable",
    slug: "acero-inoxidable",
    image: "/img/projects/project11.jpg",
    description: "Barandas, pasamanos, cocinas y escaleras en acero inoxidable.",
  },
  {
    title: "Puerta de Ducha",
    slug: "puerta-de-ducha",
    image: "/img/projects/project16.jpg",
    description: "Puertas de ducha con perfiles de aluminio y vidrio templado.",
  },
];

export default function ProyectosPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="text-center mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
            Proyectos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Experiencia que nos{" "}
            <span className="text-brand">respalda</span>
          </h1>
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
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
