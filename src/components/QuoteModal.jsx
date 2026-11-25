import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

// Ícono SVG de WhatsApp
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function QuoteModal({ product, onClose }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    quantity: '10',
    phone: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const productName = product ? product.name : 'Dotación Corporativa General EPP';
    
    let message = `Hola Security Import, deseo solicitar una cotización formal:\n`;
    message += `• *Producto:* ${productName}\n`;
    if (product?.specs) {
      message += `• *Especificaciones:* ${product.specs}\n`;
    }
    message += `• *Cantidad estimada:* ${form.quantity} unidades\n`;
    message += `• *Nombre y Apellido:* ${form.name}\n`;
    if (form.company) {
      message += `• *Empresa:* ${form.company}\n`;
    }
    if (form.phone) {
      message += `• *Teléfono de contacto:* ${form.phone}\n`;
    }
    if (form.notes) {
      message += `• *Notas:* ${form.notes}\n`;
    }

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative my-8 animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">
          Cotización Directa
        </span>
        <h3 className="text-xl font-extrabold text-slate-900 mt-1">
          {product ? product.name : 'Cotización General EPP'}
        </h3>
        {product?.specs && (
          <p className="text-xs text-slate-500 mt-0.5">{product.specs}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nombre y Apellido *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Ej. Carlos Pérez"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6600]/30 focus:border-[#FF6600]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Empresa (Opcional)
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Nombre empresa"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6600]/30 focus:border-[#FF6600]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Cantidad estimada *
              </label>
              <input
                type="number"
                min="1"
                required
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6600]/30 focus:border-[#FF6600]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Teléfono de Contacto (Opcional)
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+58 412 1234567"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6600]/30 focus:border-[#FF6600]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Enviar solicitud por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
