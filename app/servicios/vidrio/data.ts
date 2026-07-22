export const calidades = [
  {
    title: "Vidrio Crudo",
    slug: "vidrio-crudo",
    img: "/img/vidrios/grudo.jpg",
    description:
      "Vidrio en su estado básico, sin tratar. Es frágil y, al romperse, se quiebra en fragmentos puntiagudos. Se emplea principalmente en ventanas interiores y de menor exigencia.",
    badge: "Uso en interiores estándar",
    featured: false,
    details: [
      "Estado básico sin tratamiento",
      "Fragmentos puntiagudos al romperse",
      "Uso principal en ventanas interiores",
      "Menor resistencia mecánica",
    ],
  },
  {
    title: "Vidrio Laminado",
    slug: "vidrio-laminado",
    img: "/img/vidrios/laminado.jpg",
    description:
      "Formado por dos capas de vidrio unidas por una lámina PVB. Si se rompe, los fragmentos quedan adheridos a la lámina, reduciendo el riesgo de lesiones. Ofrece protección UV y reducción del ruido.",
    badge: "Seguridad y Aislamiento Acústico",
    featured: true,
    details: [
      "Dos capas de vidrio con lámina PVB",
      "Fragmentos adheridos al romperse",
      "Protección UV integrada",
      "Reducción significativa de ruido",
    ],
  },
  {
    title: "Vidrio Templado",
    slug: "vidrio-templado",
    img: "/img/vidrios/templado.jpg",
    description:
      "Vidrio de seguridad sometido a calentamiento y enfriamiento rápido. Es más resistente a impactos y cambios de temperatura. Si se rompe, se fragmenta en trozos pequeños y no afilados.",
    badge: "Ideal para mamparas y puertas",
    featured: false,
    details: [
      "Tratamiento térmico de alta resistencia",
      "5x más resistente que el crudo",
      "Fragmentos pequeños y no afilados",
      "Resistente a cambios de temperatura",
    ],
  },
  {
    title: "Vidrio Insulado",
    slug: "vidrio-insulado",
    img: "/img/vidrios/insulado.jpg",
    description:
      "Compuesto por dos vidrios laminados de 6 mm con PVB, unidos con silicona estructural, y cámara de aire con separador de aluminio.",
    badge: "Máximo aislamiento térmico y acústico",
    featured: false,
    details: [
      "Doble vidrio laminado de 6 mm",
      "Cámara de aire con separador de aluminio",
      "Unión con silicona estructural",
      "Máximo aislamiento térmico y acústico",
    ],
  },
];

export type Calidad = (typeof calidades)[number];
