import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="inicio" className="relative bg-[#141B24] text-white overflow-hidden">
      {/* Trama decorativa sutil con cuadrícula de puntos */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FF6600_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 relative z-10">
        {/* Layout Horizontal Fiel a la Referencia (2 columnas tanto en Móvil como en Desktop) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 items-center">
          {/* Columna Izquierda: Textos y Botón */}
          <div className="space-y-2 sm:space-y-4">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded bg-white text-[#FF6600] text-[8px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
              EQUIPAMIENTO CERTIFICADO
            </div>

            <h1 className="text-sm sm:text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Protección Industrial<br />
              y Seguridad de Alto<br />
              Rendimiento.
            </h1>

            {/* Línea naranja debajo del título fiel al mockup */}
            <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-[#FF6600] rounded-full" />

            <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm max-w-md leading-relaxed line-clamp-2 sm:line-clamp-none">
              Calzado de seguridad, protección visual y guantes de alta resistencia.
            </p>

            <div className="pt-1 sm:pt-2">
              <a
                href="#productos"
                className="inline-flex items-center gap-1.5 bg-[#FF6600] hover:bg-[#E65C00] text-white font-semibold px-3 py-1.5 sm:px-6 sm:py-3 rounded-lg shadow-lg shadow-orange-600/30 transition-all text-[10px] sm:text-sm cursor-pointer"
              >
                Ver Catálogo
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Columna Derecha: Collage HD Transparente Nítido */}
          <div className="relative flex items-center justify-center">
            <img
              src="/assets/hero-products-hd.png"
              alt="Equipamiento Industrial Security Import"
              className="w-full max-w-[240px] sm:max-w-md md:max-w-lg object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
