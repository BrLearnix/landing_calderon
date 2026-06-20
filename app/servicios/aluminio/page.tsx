import Link from "next/link";

const benefits = [
  {
    title: "Durabilidad excepcional",
    desc: "Resistente a la corrosión, impactos y condiciones climáticas extremas. No se oxida ni deforma con el paso del tiempo.",
    icon: "shield",
  },
  {
    title: "Ligereza estructural",
    desc: "Relación peso-resistencia óptima que permite diseños más amplios y sofisticados sin sobrecargar las estructuras.",
    icon: "weight",
  },
  {
    title: "Cero mantenimiento",
    desc: "No requiere pintura, barnices ni tratamientos periódicos. Su mantenimiento se limita a una limpieza ocasional.",
    icon: "sparkles",
  },
  {
    title: "Eficiencia energética",
    desc: "Con rotura de puente térmico, el aluminio contribuye al aislamiento térmico y acústico, reduciendo el consumo energético.",
    icon: "energy",
  },
  {
    title: "Versatilidad estética",
    desc: "Disponible en una amplia gama de colores y acabados. Se adapta a estilos arquitectónicos clásicos, modernos e industriales.",
    icon: "palette",
  },
  {
    title: "Compromiso ambiental",
    desc: "Material 100% reciclable y reciclado en gran parte. Su producción genera menor huella de carbono frente a otros materiales.",
    icon: "leaf",
  },
];

const applications = [
  {
    title: "Ventanas",
    desc: "Sistemas corredizos, batientes, oscilobatientes y proyectantes con rotura de puente térmico.",
    features: ["Máximo aislamiento térmico y acústico", "Sistemas de drenaje oculto", "Perfiles reforzados"],
  },
  {
    title: "Puertas",
    desc: "Puertas peatonales, corredizas, plegables, enrollables y de acceso vehicular.",
    features: ["Cerraduras multipunto de alta seguridad", "Deslizamiento suave y silencioso", "Acabados personalizables"],
  },
  {
    title: "Mamparas",
    desc: "Divisiones de ambientes, cerramientos de terraza y oficinas con paneles de aluminio y vidrio.",
    features: ["Perfiles minimalistas", "Sistemas deslizantes y abatibles", "Integración con cortinas y persianas"],
  },
  {
    title: "Fachadas",
    desc: "Sistemas de muro cortina, fachadas ventiladas y revestimientos exteriores.",
    features: ["Drenaje y ventilación de la cámara", "Alta resistencia al viento", "Estética contemporánea"],
  },
  {
    title: "Barandas",
    desc: "Pasamanos, barandas y protecciones para escaleras, balcones y terrazas.",
    features: ["Sujeción invisible", "Combinación con vidrio templado", "Diseños personalizados"],
  },
  {
    title: "Estructuras",
    desc: "Pérgolas, toldos, cobertizos y cubiertas livianas para exteriores.",
    features: ["Estructuras autoportantes", "Lamas orientables", "Integración con iluminación LED"],
  },
];

const finishes = [
  { name: "Anodizado natural", desc: "Acabado plateado clásico, máxima resistencia a la corrosión." },
  { name: "Lacado blanco", desc: "Acabado liso en blanco puro, el más demandado para interiores." },
  { name: "Lacado texturado", desc: "Acabado con textura similar a la madera, ideal para ambientes cálidos." },
  { name: "Color personalizado", desc: "Disponible en cualquier color RAL para proyectos exclusivos." },
];

const testimonials = [
  {
    name: "María Gutiérrez",
    role: "Propietaria de vivienda",
    text: "Instalaron ventanas de aluminio en toda mi casa. El cambio en el aislamiento térmico y acústico fue notable. El equipo fue puntual y muy profesional.",
  },
  {
    name: "Carlos Mendoza",
    role: "Arquitecto",
    text: "Trabajamos con Calderón Instalaciones para un proyecto de fachada comercial. La calidad de los acabados y el cumplimiento de plazos superaron nuestras expectativas.",
  },
  {
    name: "Ana Torres",
    role: "Gerente de obra",
    text: "Su experiencia en carpintería de aluminio es evidente. Nos asesoraron en la elección de perfiles y acabados, logrando un resultado impecable dentro del presupuesto.",
  },
];

const faqs = [
  {
    q: "¿Qué tipo de aluminio utilizan?",
    a: "Trabajamos con perfiles de aluminio de primera calidad, con certificación ISO 9001. Ofrecemos sistemas con y sin rotura de puente térmico, según los requerimientos del proyecto.",
  },
  {
    q: "¿Cuánto tiempo toma la fabricación e instalación?",
    a: "Los plazos varían según la magnitud del proyecto. Una ventana puede fabricarse en 7-10 días hábiles, mientras que proyectos integrales pueden tomar de 2 a 4 semanas. Siempre te daremos una fecha estimada antes de comenzar.",
  },
  {
    q: "¿Hacen instalación en obra gruesa o solo en acabados?",
    a: "Realizamos instalación en cualquier etapa de la obra. Podemos trabajar desde la obra gruesa, colocando premarcos, hasta la instalación final en la etapa de acabados.",
  },
  {
    q: "¿Ofrecen garantía en sus trabajos?",
    a: "Sí, todos nuestros trabajos cuentan con garantía. Respadaldamos la calidad de los materiales y la mano de obra. Los detalles específicos se entregan por escrito al finalizar el proyecto.",
  },
  {
    q: "¿Realizan proyectos fuera de la ciudad?",
    a: "Sí, hemos realizado proyectos en diversas localidades. Consulta por disponibilidad y condiciones para proyectos fuera de nuestra zona de cobertura habitual.",
  },
];

export default function AluminioPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* ============ HERO ============ */}
      <section className="relative bg-[#0f0f1a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28 relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-brand font-medium mb-10 transition-colors text-sm group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Volver al inicio
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
                Servicio especializado
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                Carpintería en{" "}
                <span className="text-brand">Aluminio</span>
              </h1>
              <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-xl">
                Fabricamos e instalamos soluciones integrales en aluminio para
                proyectos residenciales, comerciales e industriales. Ventanas,
                puertas, fachadas y estructuras con la más alta calidad.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/#cotizar"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
                >
                  Cotizar proyecto
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#aplicaciones"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium rounded-lg transition-all duration-200 text-sm px-6 py-3.5"
                >
                  Ver aplicaciones
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand/15 via-brand/5 to-transparent flex items-center justify-center border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZWQzMTAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
                <svg className="w-40 h-40 text-brand/20 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand text-gray-900 rounded-2xl px-5 py-3 shadow-xl shadow-brand/30">
                <p className="text-2xl font-bold leading-none">15+</p>
                <p className="text-[10px] font-medium uppercase tracking-wider">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ESTADÍSTICAS ============ */}
      <section className="relative bg-[#1a1a2e] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Proyectos entregados" },
              { number: "15+", label: "Años de experiencia" },
              { number: "98%", label: "Clientes satisfechos" },
              { number: "12", label: "Años de garantía" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand to-brand/70 bg-clip-text text-transparent">{s.number}</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BENEFICIOS ============ */}
      <section className="py-20 sm:py-28 bg-[#f8f8fc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              ¿Por qué elegir{" "}
              <span className="text-brand">aluminio</span>?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              El aluminio es el material más utilizado en carpintería arquitectónica
              por su equilibrio perfecto entre rendimiento, estética y sostenibilidad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand transition-colors duration-300">
                  {b.icon === "shield" && (
                    <svg className="w-5 h-5 text-brand group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {b.icon === "weight" && (
                    <svg className="w-5 h-5 text-brand group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  )}
                  {b.icon === "sparkles" && (
                    <svg className="w-5 h-5 text-brand group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                  {b.icon === "energy" && (
                    <svg className="w-5 h-5 text-brand group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {b.icon === "palette" && (
                    <svg className="w-5 h-5 text-brand group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )}
                  {b.icon === "leaf" && (
                    <svg className="w-5 h-5 text-brand group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ APLICACIONES ============ */}
      <section id="aplicaciones" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Aplicaciones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Soluciones para cada{" "}
              <span className="text-brand">espacio</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Desde ventanas hasta fachadas integrales, cubrimos todas las
              necesidades de carpintería en aluminio.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {applications.map((app) => (
              <div
                key={app.title}
                className="group bg-[#f8f8fc] rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-brand/20 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors duration-300">
                    <svg className="w-6 h-6 text-brand group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{app.desc}</p>
                    <ul className="space-y-1">
                      {app.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                          <svg className="w-3.5 h-3.5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACABADOS ============ */}
      <section className="py-20 sm:py-28 bg-[#f8f8fc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
                Acabados
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                Acabados y{" "}
                <span className="text-brand">personalización</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Ofrecemos una amplia variedad de acabados para que cada proyecto
                refleje el estilo y la personalidad de nuestros clientes. Desde
                el clásico anodizado hasta colores personalizados RAL.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {finishes.map((f) => (
                  <div key={f.name} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-4 h-4 rounded-full bg-brand/30 border-2 border-brand/60" />
                      <h4 className="text-sm font-bold text-gray-900">{f.name}</h4>
                    </div>
                    <p className="text-xs text-gray-500 pl-7">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand/20 via-brand/5 to-transparent flex items-center justify-center border border-brand/10">
                <div className="text-center p-8">
                  <svg className="w-32 h-32 text-brand/20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-400">Galería de proyectos</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
                <p className="text-xs text-gray-500">Más de</p>
                <p className="text-lg font-bold text-brand">50+</p>
                <p className="text-[10px] text-gray-400">colores disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESO ============ */}
      <section className="py-20 sm:py-28 bg-[#0f0f1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Metodología
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Nuestro proceso de trabajo
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Un método probado que garantiza resultados predecibles y de alta calidad
              en cada proyecto.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                { step: "01", title: "Consulta y medición", desc: "Visita técnica al lugar del proyecto. Tomamos medidas precisas y analizamos tus necesidades, estilo y presupuesto.", color: "from-brand to-brand" },
                { step: "02", title: "Diseño y propuesta", desc: "Elaboramos planos detallados, selección de perfiles, acabados y herrajes. Te presentamos una cotización transparente.", color: "from-brand to-brand/70" },
                { step: "03", title: "Fabricación", desc: "Producimos cada pieza en nuestro taller con maquinaria CNC de última generación y estrictos controles de calidad.", color: "from-brand to-brand/50" },
                { step: "04", title: "Instalación y entrega", desc: "Instalamos con equipo especializado, dejamos todo limpio y funcionando. Realizamos pruebas de funcionamiento contigo.", color: "from-brand to-brand/30" },
              ].map((step, i) => (
                <div key={step.step} className="relative">
                  <div className="text-center lg:text-left">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand to-brand/60 flex items-center justify-center mx-auto lg:mx-0 mb-5 shadow-lg shadow-brand/20">
                      <span className="text-xl font-bold text-gray-900">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIOS ============ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Lo que dicen nuestros{" "}
              <span className="text-brand">clientes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#f8f8fc] rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 sm:py-28 bg-[#f8f8fc]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Preguntas{" "}
              <span className="text-brand">frecuentes</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-2xl border border-gray-100 open:border-brand/20 open:shadow-sm transition-all duration-300">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <svg className="w-4 h-4 text-brand shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-20 sm:py-28 bg-[#0f0f1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center relative">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-brand font-semibold mb-4">
            Cotización
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            ¿Listo para comenzar tu proyecto en{" "}
            <span className="text-brand">aluminio</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Solicita una cotización sin compromiso. Te visitamos, tomamos medidas
            y te presentamos una propuesta detallada con los mejores precios del
            mercado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#cotizar"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider px-8 py-4 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
            >
              Solicitar cotización
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:+51987654321"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium rounded-lg transition-all duration-200 text-sm px-8 py-4"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
