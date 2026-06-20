import Link from "next/link";

export default function AluminioPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-brand font-medium mb-10 transition-colors text-sm group"
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Carpintería en{" "}
              <span className="text-brand">Aluminio</span>
            </h1>
            <p className="text-gray-500 leading-relaxed mb-4">
              Fabricamos e instalamos soluciones en aluminio para proyectos
              residenciales, comerciales e industriales. Ventanas, puertas,
              mamparas, fachadas, barandas y estructuras livianas, fabricadas
              a medida con perfiles de primera calidad.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Trabajamos con sistemas de rotura de puente térmico para máximo
              aislamiento y una amplia gama de acabados: anodizado natural,
              lacado blanco, texturado madera y colores personalizados RAL.
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
              {["Ventanas", "Puertas", "Mamparas", "Fachadas", "Barandas", "Pérgolas"].map((a) => (
                <span key={a} className="px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-gray-600 border border-gray-100">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-200 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-sm text-gray-300">Imagen principal</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
