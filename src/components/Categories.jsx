import React from 'react';
import { CATEGORIES } from '../data/catalog';

export default function Categories({ selectedCategory, onSelectCategory }) {
  return (
    <section id="categorias" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-6 sm:-mt-12 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-10">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-8 items-center">
          {/* Título Izquierda */}
          <div className="lg:col-span-3 text-center sm:text-left">
            <h2 className="text-lg sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Categorías<br className="hidden sm:inline" /> Principales
            </h2>
            <div className="w-10 sm:w-14 h-1 bg-[#FF6600] rounded-full mt-1.5 sm:mt-3 mx-auto sm:mx-0" />
          </div>

          {/* Grid de 6 Tarjetas (3 columnas x 2 filas como en el mockup) */}
          <div className="lg:col-span-9 grid grid-cols-3 gap-2 sm:gap-4">
            {CATEGORIES.map((cat) => {
              const IconComponent = cat.icon;
              const isSelected = selectedCategory === cat.title;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory && onSelectCategory(isSelected ? null : cat.title)}
                  className={`p-2 sm:p-5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center text-center group ${
                    isSelected
                      ? 'border-[#FF6600] bg-orange-50/50 shadow-md ring-2 ring-[#FF6600]/20'
                      : 'border-slate-200/90 bg-white hover:border-[#FF6600] hover:shadow-md'
                  }`}
                >
                  <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-[#FF6600] mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 sm:w-8 sm:h-8 stroke-[1.75]" />
                  </div>
                  <span className="font-bold text-slate-900 text-[10px] sm:text-sm group-hover:text-[#FF6600] transition-colors leading-tight">
                    {cat.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
