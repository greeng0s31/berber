import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingActionBarProps {
  onOpenAppointment: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenAppointment }) => {
  return (
    <aside aria-label="Hızlı iletişim ve randevu" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 flex items-center justify-center sm:justify-end">
      <div className="flex items-center gap-2 p-1.5 bg-[#0A0A0A]/95 backdrop-blur-md border border-white/20 shadow-2xl shadow-black">
        
        {/* Quick Call */}
        <a
          href={`tel:${SALON_INFO.phoneClean}`}
          className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#111111] hover:bg-white/5 text-white/80 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors"
          aria-label="Telefonla ara"
        >
          <Phone className="w-3.5 h-3.5 text-[#C4A062]" />
          <span className="hidden sm:inline">0533 129 03 59</span>
          <span className="sm:hidden">Ara</span>
        </a>

        {/* Yol Tarifi */}
        <a
          href={SALON_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#111111] hover:bg-white/5 text-white/80 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors"
          aria-label="Yol tarifi al"
        >
          <Navigation className="w-3.5 h-3.5 text-[#C4A062]" />
          <span className="hidden sm:inline">Yol Tarifi</span>
          <span className="sm:hidden">Harita</span>
        </a>

        {/* WhatsApp Fast Appointment */}
        <button
          onClick={onOpenAppointment}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#C4A062] hover:bg-[#d4b378] text-black text-xs font-display font-black uppercase tracking-widest transition-colors cursor-pointer shadow-lg shadow-[#C4A062]/10"
          aria-label="WhatsApp Randevu"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Randevu Al</span>
        </button>

      </div>
    </aside>
  );
};
