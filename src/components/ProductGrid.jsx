import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/catalog';

export default function ProductGrid({ onOpenQuote, selectedCategory }) {
  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    : PRODUCTS;

  return (
    <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF6600]">
          Catálogo EPP
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
          Productos Destacados
        </h2>
        <p className="text-slate-500 text-sm mt-2">
          Equipos certificados listos para entrega inmediata al mayor y detal.
        </p>
        {selectedCategory && (
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6600] text-xs font-bold rounded-full">
            Filtrando por: {selectedCategory}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Contenedor Imagen con Badge */}
              <div className="relative bg-slate-100 h-56 overflow-hidden flex items-center justify-center p-3">
                <span className="absolute top-3 left-3 bg-[#141B24] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-10 shadow-sm">
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenido Ficha Técnica */}
              <div className="p-5">
                <p className="text-xs font-semibold text-[#FF6600] mb-1">{product.category}</p>
                <h3 className="font-bold text-slate-900 text-base mb-1">{product.name}</h3>
                <p className="text-xs font-medium text-slate-500 mb-3">{product.specs}</p>
                
                <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6600] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botón Cotizar */}
            <div className="px-5 pb-5">
              <button
                onClick={() => onOpenQuote(product)}
                className="w-full bg-[#FF6600] hover:bg-[#E65C00] text-white font-semibold text-sm py-2.5 rounded-lg transition-colors shadow-sm hover:shadow cursor-pointer"
              >
                Cotizar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
