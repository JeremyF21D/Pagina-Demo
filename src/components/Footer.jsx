import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO } from '../data/catalog';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer id="contacto" className="bg-[#141B24] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Barra Newsletter Fiel al Mockup */}
        <div className="bg-[#1E2733] rounded-xl p-4 sm:p-5 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-700/60 shadow-lg">
          <h3 className="font-bold text-white text-sm sm:text-base text-center md:text-left">
            Recibe novedades y catálogo
          </h3>
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full sm:w-80 px-4 py-2.5 rounded-lg bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6600]"
            />
            <button
              type="submit"
              className="bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold px-6 py-2.5 rounded-lg text-xs sm:text-sm shrink-0 cursor-pointer shadow-sm transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
        {sent && (
          <p className="text-center text-xs text-emerald-400 -mt-8 mb-8 animate-in fade-in">
            ¡Suscripción confirmada! Te enviaremos el catálogo pronto.
          </p>
        )}

        {/* Columnas del Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800 text-xs">
          {/* Logo y Misión */}
          <div className="space-y-4">
            <Logo darkText={false} />
            <p className="text-slate-400 leading-relaxed">
              Importadores autorizados de equipamiento certificado y EPP.
            </p>
          </div>

          {/* Enlaces Rápidos con chevron */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-[#FF6600] flex items-center justify-between group">
                  <span>Sobre Nosotros</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#FF6600]" />
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-[#FF6600] flex items-center justify-between group">
                  <span>Nuestros Clientes</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#FF6600]" />
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#FF6600] flex items-center justify-between group">
                  <span>Certificaciones</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#FF6600]" />
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#FF6600] block">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Categorías de Productos */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Categorías de Productos</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#productos" className="hover:text-[#FF6600]">Calzado de Seguridad</a></li>
              <li><a href="#productos" className="hover:text-[#FF6600]">Protección Visual</a></li>
              <li><a href="#productos" className="hover:text-[#FF6600]">Guantes y Manos</a></li>
              <li><a href="#productos" className="hover:text-[#FF6600]">Seguridad Industrial</a></li>
            </ul>
          </div>

          {/* Contacto Fiel al Mockup */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6600] shrink-0" />
                <span>+1(317) 355-6789</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6600] shrink-0" />
                <span>m@securityimport.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                <div>
                  <p>Maracaibo/International Office</p>
                  <p className="text-[11px] text-slate-500">280° 57' N, 390° 47' W</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>Copyright © Security Import</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <div className="flex items-center gap-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#FF6600] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contacto"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#FF6600] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contacto"
                aria-label="Twitter"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#FF6600] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
