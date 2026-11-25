import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Productos', href: '#productos' },
    { label: 'Marcas', href: '#categorias' },
    { label: 'Soluciones EPP', href: '#beneficios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" aria-label="Security Import Inicio" className="transition-opacity hover:opacity-90">
          <Logo darkText={true} />
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors hover:text-[#FF6600] ${
                idx === 0 ? 'text-slate-900 border-b-2 border-[#FF6600] pb-1' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Cotización Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenQuote({ name: 'Dotación Corporativa General EPP' })}
            className="bg-[#FF6600] hover:bg-[#E65C00] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
          >
            Solicitar Cotización
          </button>
        </div>

        {/* Botón Menú Móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-medium text-slate-700 hover:text-[#FF6600] border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote({ name: 'Dotación Corporativa General EPP' });
            }}
            className="w-full bg-[#FF6600] hover:bg-[#E65C00] text-white font-semibold py-3 rounded-lg mt-3 transition-colors shadow-sm cursor-pointer"
          >
            Solicitar Cotización
          </button>
        </div>
      )}
    </header>
  );
}
