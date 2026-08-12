import Link from "next/link";
import Image from "next/image";
import Watermark from "@/app/components/Watermark";
import { calidades } from "../data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return calidades.map((c) => ({ slug: c.slug }));
}

export default async function VidrioDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vidrio = calidades.find((c) => c.slug === slug);

  if (!vidrio) {
    notFound();
  }

  const otherVidrios = calidades.filter((c) => c.slug !== slug);

  return (
    <div className="min-h-screen pt-20 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <Link
          href="/servicios/vidrio"
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
          Volver a calidades de vidrio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span
              className={`inline-block self-start px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                vidrio.featured
                  ? "bg-brand/10 border border-brand/20 text-brand"
                  : "bg-white/[0.06] border border-white/[0.08] text-gray-400"
              }`}
            >
              {vidrio.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              {vidrio.title}
            </h1>
            <p className="text-gray-400 leading-relaxed mb-8">
              {vidrio.description}
            </p>

            <ul className="space-y-3 mb-10">
              {vidrio.details.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <svg
                    className="w-5 h-5 text-brand shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {d}
                </li>
              ))}
            </ul>

            <a
              href="/#cotizar"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
            >
              Cotizar este vidrio
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
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={vidrio.img}
              alt={vidrio.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={100}
              priority
            />
            <Watermark size={120} opacity={0.4} />
            <a
              href={`/api/download-watermarked?src=${encodeURIComponent(vidrio.img)}&name=${encodeURIComponent(`${vidrio.slug}_${Date.now()}.jpg`)}`}
              download
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-brand/90 hover:bg-brand text-white text-xs font-semibold px-4 py-2.5 transition-colors shadow-lg shadow-black/30 z-10"
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
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Descargar
            </a>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute top-6 right-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <Image
                src={vidrio.img}
                alt={vidrio.title}
                fill
                className="object-cover"
                sizes="128px"
                quality={100}
              />
            </div>
          </div>
        </div>

        {otherVidrios.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              Otras calidades de vidrio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherVidrios.map((v) => (
                <Link
                  key={v.slug}
                  href={`/servicios/vidrio/${v.slug}`}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800"
                >
                  <Image
                    src={v.img}
                    alt={v.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={100}
                  />
                  <Watermark size={48} opacity={0.35} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand transition-colors duration-200">
                      {v.title}
                    </h3>
                    <span className="text-gray-400 text-xs">{v.badge}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
