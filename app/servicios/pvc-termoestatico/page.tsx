import Link from "next/link";
import ImageGallery from "@/app/components/ImageGallery";

export default function PvcPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand font-medium mb-10 transition-colors text-sm group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
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
          Volver al inicio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-3">
              Servicio
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              PVC <span className="text-brand">Termoestático</span>
            </h1>
            <p className="text-gray-400 leading-relaxed mb-8">
              Ventanas y puertas en PVC termoestático con rotura de puente
              térmico. Máximo aislamiento térmico y acústico, perfiles
              resistentes a la intemperie y una amplia gama de colores y
              acabados.
            </p>
            <a
              href="/#cotizar"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
            >
              Cotizar servicios
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
            </a>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Ventanas",
                "Puertas",
                "Aislamiento",
                "Perfiles",
                "Acabados",
                "Termoestático",
              ].map((a) => (
                <span
                  key={a}
                  className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-gray-400 border border-white/10"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <ImageGallery
            mainImage="/img/services/pvc/img1.jpg"
            thumbnails={["modelo.png", "img2.jpg", "img3.jpg"].map(
              (s) => `/img/services/pvc/${s}`,
            )}
            extraImages={["img4.jpg", "img5.jpg", "img6.jpeg"].map(
              (s) => `/img/services/pvc/${s}`,
            )}
            alt="PVC Termoestático"
          />
        </div>
      </div>
    </div>
  );
}
