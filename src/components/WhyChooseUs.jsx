import React from 'react';
import { Zap, Sparkles, Droplets, Truck } from 'lucide-react';
import { BENEFITS } from '../data/catalog';

export default function WhyChooseUs() {
  return (
    <section id="beneficios" className="grid grid-cols-2 border-t border-slate-200">
      {/* Columna Izquierda: ¿Por qué elegir Security Import? */}
      <div className="bg-[#141B24] text-white px-3 sm:px-8 lg:px-12 py-6 sm:py-10 flex flex-col justify-center">
        <div className="max-w-md mx-auto sm:ml-auto sm:mr-2 w-full">
          <h2 className="text-xs sm:text-xl lg:text-2xl font-extrabold text-white leading-tight">
            ¿Por Qué Elegir Security Import?
          </h2>
          <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-[#FF6600] rounded-full mt-1.5 mb-4 sm:mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-5 sm:gap-y-5">
            {BENEFITS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="space-y-0.5 sm:space-y-1.5">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#FF6600]/15 border border-[#FF6600]/30 text-[#FF6600] flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                  </div>
                  <h3 className="font-bold text-[11px] sm:text-sm text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[9px] sm:text-xs text-slate-400 leading-tight">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Columna Derecha: Proceso de Compra (Fiel a la captura 3, siempre lado a lado) */}
      <div className="bg-white px-3 sm:px-8 lg:px-12 py-6 sm:py-10 flex flex-col justify-center border-l border-slate-200">
        <div className="max-w-md mx-auto sm:mr-auto sm:ml-2 w-full">
          <h2 className="text-xs sm:text-xl lg:text-2xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Proceso de Compra
          </h2>

          <div className="relative py-1">
            {/* Paso 01 */}
            <div className="flex items-center gap-2 sm:gap-3 relative z-10 h-10 mb-4">
              <div className="w-[26px] h-[26px] rounded-full bg-[#FF6600] text-white font-extrabold text-[11px] sm:text-xs flex items-center justify-center shadow-md shrink-0">
                01
              </div>
              <span className="font-bold text-slate-900 text-[10px] sm:text-sm leading-tight">
                Asesoría Técnica
              </span>
            </div>

            {/* Paso 02 (Desplazado 56px a la derecha, círculo primero) */}
            <div className="flex items-center gap-2 sm:gap-3 relative z-10 h-10 mb-4 ml-14">
              <div className="w-[26px] h-[26px] rounded-full bg-[#FF6600] text-white font-extrabold text-[11px] sm:text-xs flex items-center justify-center shadow-md shrink-0">
                02
              </div>
              <span className="font-bold text-slate-900 text-[10px] sm:text-sm leading-tight">
                Selección de Tallas y Modelos
              </span>
            </div>

            {/* Paso 03 */}
            <div className="flex items-center gap-2 sm:gap-3 relative z-10 h-10 mb-4">
              <div className="w-[26px] h-[26px] rounded-full bg-[#FF6600] text-white font-extrabold text-[11px] sm:text-xs flex items-center justify-center shadow-md shrink-0">
                03
              </div>
              <span className="font-bold text-slate-900 text-[10px] sm:text-sm leading-tight">
                Cotización Corporativa
              </span>
            </div>

            {/* Paso 04 (Desplazado 56px a la derecha, círculo primero) */}
            <div className="flex items-center gap-2 sm:gap-3 relative z-10 h-10 ml-14">
              <div className="w-[26px] h-[26px] rounded-full bg-[#FF6600] text-white font-extrabold text-[11px] sm:text-xs flex items-center justify-center shadow-md shrink-0">
                04
              </div>
              <span className="font-bold text-slate-900 text-[10px] sm:text-sm leading-tight">
                Despacho Nacional
              </span>
            </div>

            {/* Conectores SVG matemáticamente exactos: viajan por los espacios intermedios y jamás tocan el texto */}
            <svg
              className="absolute left-0 top-0 pointer-events-none z-0"
              style={{ width: '85px', height: '210px' }}
              viewBox="0 0 85 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Conector 01 -> 02 */}
              <path
                d="M 13 33 L 13 48 L 69 48 L 69 63"
                stroke="#FF6600"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
              />
              {/* Conector 02 -> 03 (Cruza limpiamente por encima del paso 03 sin tocar el texto) */}
              <path
                d="M 69 89 L 69 104 L 13 104 L 13 119"
                stroke="#FF6600"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
              />
              {/* Conector 03 -> 04 */}
              <path
                d="M 13 145 L 13 160 L 69 160 L 69 175"
                stroke="#FF6600"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
