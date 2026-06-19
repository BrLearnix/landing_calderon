import Link from "next/link";

export default function AceroPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-brand hover:text-brand-dark font-medium mb-8 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Acero Inoxidable</h1>
        <p className="text-lg text-gray-600">Contenido próximamente...</p>
      </div>
    </div>
  );
}
