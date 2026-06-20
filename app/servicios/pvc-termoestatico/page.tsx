import Link from "next/link";
import Image from "next/image";

const images = [
  { src: "/img/services/pvc/img1.jpg", alt: "PVC Termoestático 4" },
  { src: "/img/services/pvc/img2.jpg", alt: "PVC Termoestático 2" },
  { src: "/img/services/pvc/img3.jpg", alt: "PVC Termoestático 3" },
  { src: "/img/services/pvc/img4.jpg", alt: "PVC Termoestático 1" },
  { src: "/img/services/pvc/img5.jpg", alt: "PVC Termoestático 5" },
  { src: "/img/services/pvc/img6.jpeg", alt: "PVC Termoestático 6" },
];

export default function PvcPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand font-medium mb-10 transition-colors text-sm group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Volver al inicio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-3">
              Servicio
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              PVC{" "}
              <span className="text-brand">Termoestático</span>
            </h1>
            <p className="text-gray-400 leading-relaxed mb-4">
              Fabricamos e instalamos ventanas y puertas en PVC termoestático
              de alta prestación. Sistemas de perfilería con rotura de puente
              térmico que garantizan máximo aislamiento térmico y acústico.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Disponemos de una amplia gama de acabados y colores, con perfiles
              de PVC rígido de alta resistencia a la intemperie, ideales para
              proyectos residenciales y comerciales.
            </p>
            <a
              href="/#cotizar"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
            >
              Cotizar proyecto
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Ventanas", "Puertas", "Aislamiento", "Perfiles", "Acabados", "Termoestático"].map((a) => (
                <span key={a} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-gray-400 border border-white/10">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl bg-gray-800 border border-white/10 shadow-sm overflow-hidden relative">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {images.slice(1).map((img, i) => (
                <div key={i} className="aspect-square rounded-xl bg-gray-800 border border-white/10 shadow-sm overflow-hidden relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
