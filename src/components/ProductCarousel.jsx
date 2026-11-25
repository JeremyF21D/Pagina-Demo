import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/catalog';

export default function ProductCarousel({ onOpenQuote, selectedCategory, onSelectCategory }) {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filters = [
    { label: 'Todos', value: null },
    { label: 'Calzado Saga', value: 'Calzado de Seguridad' },
    { label: 'Protección Visual', value: 'Protección Visual' },
    { label: 'Guantes Anticortes', value: 'Guantes Anticortes' },
  ];

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    : PRODUCTS;

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons);
      return () => el.removeEventListener('scroll', updateScrollButtons);
    }
  }, [filteredProducts]);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = 280;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-12 sm:pb-14 relative">
      {/* Título Centrado y Controles */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Productos Destacados
        </h2>

        {/* Filtros Rápidos */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {filters.map((f) => {
            const active =
              (!selectedCategory && f.value === null) ||
              (selectedCategory && f.value && selectedCategory.toLowerCase().includes(f.value.toLowerCase()));

            return (
              <button
                key={f.label}
                onClick={() => onSelectCategory && onSelectCategory(f.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-[#FF6600] text-white shadow-sm shadow-orange-500/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#FF6600]'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Flechas de Navegación del Carrusel */}
      <div className="flex justify-end gap-2.5 mb-4">
        <button
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          aria-label="Anterior producto"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
            canScrollLeft
              ? 'border-slate-300 bg-white text-slate-700 hover:border-[#FF6600] hover:text-[#FF6600] hover:shadow-md active:scale-95'
              : 'border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          aria-label="Siguiente producto"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
            canScrollRight
              ? 'border-slate-300 bg-white text-slate-700 hover:border-[#FF6600] hover:text-[#FF6600] hover:shadow-md active:scale-95'
              : 'border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Riel Horizontal de Tarjetas */}
      <div
        ref={carouselRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex-none w-[240px] sm:w-[260px] bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-start group"
          >
            <div>
              {/* Imagen Limpia del Producto con Contraste Suave */}
              <div className="bg-[#EEF1F5] rounded-t-2xl p-4 flex items-center justify-center h-44 sm:h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-36 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                />
              </div>

              {/* Ficha Técnica Fiel al Mockup */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-slate-900 text-sm leading-snug min-h-[2.5rem] flex items-center justify-center">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 min-h-[2rem]">
                  {product.specs}
                </p>
              </div>
            </div>

            {/* Botón Cotizar */}
            <div className="px-4 pb-4">
              <button
                onClick={() => onOpenQuote(product)}
                className="w-full bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold text-xs sm:text-sm py-2.5 rounded-lg transition-all shadow-sm hover:shadow cursor-pointer"
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
