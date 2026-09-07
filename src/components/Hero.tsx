import React from 'react';
import { Star, MapPin, Phone, Calendar, Navigation, ShieldCheck, Clock, Scissors, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenAppointment: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section id="hero-section" className="relative border-b border-white/10 bg-[#0A0A0A] overflow-hidden">
      {/* Subtle grid accent background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Bold Typography Display */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Category / Location Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-white/15 text-[#C4A062] text-[11px] font-bold uppercase tracking-[0.25em]">
                <Scissors className="w-3.5 h-3.5 text-[#C4A062]" />
                BURSA OSMANGAZİ • GÜNEŞTEPE
              </span>

              {/* Google Review Badge matching user prompt: 4,8 (25) */}
              <a
                href="#yorumlar"
                id="hero-rating-badge"
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-white/10 hover:border-[#C4A062] transition-colors text-[11px] text-white/70"
              >
                <span className="text-[#C4A062] font-black">4.8</span>
                <span className="text-[#C4A062] text-xs">★★★★★</span>
                <span className="text-white/40 uppercase tracking-wider">(25 Yorum)</span>
              </a>
            </div>

            {/* Monumental Headline */}
            <h1 
              style={{ lineHeight: 0.88 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-[96px] font-black uppercase tracking-tighter text-[#F5F5F5] mb-6 select-none"
            >
              SINIRLARIN <br />
              <span className="text-[#C4A062]">ÖTESİNDE</span> <br />
              BİR TARZ
            </h1>

            {/* Sub-headline description */}
            <p className="max-w-xl text-base sm:text-lg text-white/70 leading-relaxed font-normal mb-8">
              Bursa Güneştepe'de modern erkek saç kesimi, kusursuz sakal tasarımı ve kişisel bakımda birinci sınıf hizmet. Randevulu, sıra beklemeden, steril ve seçkin atmosfer.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10">
              <button
                id="hero-book-cta"
                onClick={() => onOpenAppointment()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 font-display font-black text-xs sm:text-sm uppercase tracking-widest text-black bg-[#C4A062] hover:bg-[#d4b378] shadow-xl shadow-[#C4A062]/10 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Randevu Al (WhatsApp)</span>
              </button>

              <a
                id="hero-call-cta"
                href={`tel:${SALON_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#111111] border border-white/15 hover:border-[#C4A062] hover:text-[#C4A062] transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#C4A062]" />
                <span>0533 129 03 59</span>
              </a>

              <a
                id="hero-directions-cta"
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#C4A062]" />
                <span>Yol Tarifi</span>
              </a>
            </div>

            {/* Bottom Meta Data Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-[10px] uppercase tracking-[0.25em] font-bold text-white/50">
              <div className="flex flex-col gap-1">
                <span className="text-white/30">Konum</span>
                <span className="text-white/90 truncate">Güneştepe, Osmangazi / Bursa</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/30">Çalışma Saatleri</span>
                <span className="text-white/90">Hergün: 09:00 - 21:00</span>
              </div>
              <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                <span className="text-white/30">Hizmet Türü</span>
                <span className="text-[#C4A062]">Randevulu & Hijyenik</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Sidebar matching Design HTML */}
          <div className="lg:col-span-5 flex flex-col border border-white/10 bg-[#111111] overflow-hidden">
            
            {/* Visual Header with Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b border-white/10">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop"
                alt="Burak Saç Tasarım Bursa Berber Koltuğu"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#C4A062]">
                  Burak Saç Tasarım
                </span>
                <span className="px-2.5 py-1 bg-emerald-950/90 border border-emerald-800 text-[10px] font-bold uppercase tracking-widest text-emerald-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Açık
                </span>
              </div>
            </div>

            {/* Featured Services List */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#C4A062] uppercase tracking-[0.2em] text-xs font-black">
                  Öne Çıkan Servisler
                </h3>
                <a href="#hizmetler" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white flex items-center gap-1">
                  Tümü <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <ul className="space-y-4 text-sm sm:text-base font-medium">
                <li 
                  onClick={() => onOpenAppointment('modern-sac-kesimi')}
                  className="flex justify-between items-center border-b border-white/5 pb-3 hover:text-[#C4A062] cursor-pointer transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Modern Saç Kesimi</span>
                  <span className="text-[#C4A062] font-display font-black text-lg">₺350</span>
                </li>
                <li 
                  onClick={() => onOpenAppointment('sakal-tasarimi-ustura')}
                  className="flex justify-between items-center border-b border-white/5 pb-3 hover:text-[#C4A062] cursor-pointer transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Sakal Tasarımı & Sıcak Havlu</span>
                  <span className="text-[#C4A062] font-display font-black text-lg">₺200</span>
                </li>
                <li 
                  onClick={() => onOpenAppointment('vip-komple-bakim')}
                  className="flex justify-between items-center border-b border-white/5 pb-3 hover:text-[#C4A062] cursor-pointer transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">V.I.P Komple Paket</span>
                  <span className="text-[#C4A062] font-display font-black text-lg">₺600</span>
                </li>
              </ul>
            </div>

            {/* Solid Gold Appointment / Call Block from Design HTML */}
            <a
              href={`tel:${SALON_INFO.phoneClean}`}
              className="bg-[#C4A062] p-6 sm:p-8 text-black flex flex-col justify-center hover:bg-[#d4b378] transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="uppercase text-[10px] font-black tracking-widest opacity-80 mb-1 block">
                  Hızlı Randevu & İletişim
                </span>
                <Phone className="w-5 h-5 text-black group-hover:rotate-12 transition-transform" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black tracking-tight">
                0533 129 03 59
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-75 mt-1">
                Aramak veya WhatsApp için tıklayın
              </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
