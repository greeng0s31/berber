import React from 'react';
import { Scissors, Phone, MapPin, Star, Navigation, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white/60 text-xs pt-16 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C4A062] text-black flex items-center justify-center font-bold">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display font-black text-base text-white tracking-tight uppercase">
                  BURAK SAÇ TASARIM
                </span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-[#C4A062] font-bold">
                  BURSA / OSMANGAZİ
                </span>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-xs font-normal">
              Bursa Güneştepe'de modern erkek saç ve sakal tasarımı. Randevulu, hijyenik ve kişiye özel ustalık standartları.
            </p>

            <div className="flex items-center gap-1 text-[#C4A062]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-[#C4A062] text-[#C4A062]" />
              ))}
              <span className="text-white font-bold ml-1">4.8</span>
              <span className="text-white/40 ml-1">(25 Google Yorumu)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-black text-sm uppercase tracking-wider text-white">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 uppercase tracking-wider text-[11px] font-bold">
              <li>
                <a href="#hizmetler" className="hover:text-[#C4A062] transition-colors">Hizmetlerimiz & Fiyatlar</a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-[#C4A062] transition-colors">Müşteri Yorumları</a>
              </li>
              <li>
                <a href="#iletisim" className="hover:text-[#C4A062] transition-colors">Konum ve Harita</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-3">
            <h4 className="font-display font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C4A062]" />
              Çalışma Saatleri
            </h4>
            <ul className="space-y-2 text-white/60">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span className="uppercase text-[11px]">Pazartesi - Cumartesi:</span>
                <span className="text-white font-bold">09:00 - 21:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span className="uppercase text-[11px]">Pazar:</span>
                <span className="text-white font-bold">10:00 - 19:00</span>
              </li>
              <li className="pt-1 text-[10px] uppercase tracking-wider text-[#C4A062] font-semibold">
                * Sıra beklememek için randevu almanız tavsiye edilir.
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-display font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C4A062]" />
              İletişim & Adres
            </h4>
            <p className="text-white/70 leading-relaxed font-normal">
              {SALON_INFO.address}
            </p>
            <div className="pt-1">
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="text-[#C4A062] hover:underline font-display font-black text-base block tracking-tight"
              >
                0533 129 03 59
              </a>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Doğrudan Arama & WhatsApp</span>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="px-4 py-2.5 bg-[#C4A062] text-black font-display font-black text-xs uppercase tracking-widest hover:bg-[#d4b378] transition-colors cursor-pointer"
              >
                Hızlı Randevu Al
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[10px] uppercase tracking-widest font-semibold">
          <p>© {new Date().getFullYear()} Burak Saç Tasarım. Osmangazi / Bursa. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <span>Türkiye'de bir berber dükkanı</span>
            <span>•</span>
            <a href={SALON_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A062] flex items-center gap-1">
              <Navigation className="w-3 h-3 text-[#C4A062]" />
              Yol Tarifi
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
