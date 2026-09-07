import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink, MessageCircle } from 'lucide-react';
import { SALON_INFO, WORKING_SCHEDULE } from '../data/salonData';

export const LocationAndHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Get current day of week (0: Sun, 1: Mon, ..., 6: Sat)
  const now = new Date();
  const dayIndex = now.getDay(); // 0 is Sunday
  // Map JS day to Turkish index: 0(Sun) -> 6, 1(Mon) -> 0, etc.
  const scheduleIndex = dayIndex === 0 ? 6 : dayIndex - 1;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="iletisim" className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-white/15 text-[#C4A062] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Konum & Ulaşım</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#F5F5F5] leading-none mb-4">
            GÜNEŞTEPE'DE <br />
            <span className="text-[#C4A062]">KOLAY ULAŞIM & PARK</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl font-normal">
            Bursa Osmangazi Güneştepe Fatih Caddesi üzerinde, Ataş Sokak No: 9 D adresindeyiz. Kolay park imkanı mevcuttur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 bg-[#111111] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black border border-white/20 text-[#C4A062] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-black text-lg uppercase tracking-tight text-white mb-1">
                    Dükkan Açık Adresi
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#C4A062] font-semibold mt-1">
                    Güneştepe Fatih Caddesi üzeri, Ataş Sokak No: 9 D • 16160 Osmangazi/Bursa
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
                <a
                  id="directions-google-link"
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#C4A062] hover:bg-[#d4b378] text-black font-display font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#C4A062]/10"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Yol Tarifi Başlat</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 hover:border-[#C4A062] text-white hover:text-[#C4A062] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Adres Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Adresi Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Communication */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone */}
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="p-5 bg-[#111111] border border-white/10 hover:border-[#C4A062] transition-colors flex items-center gap-3.5 group shadow-lg"
              >
                <div className="w-10 h-10 bg-black border border-white/20 group-hover:border-[#C4A062] text-[#C4A062] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-white/40">Telefonla Hemen Ara</span>
                  <span className="block font-display font-black text-sm uppercase tracking-tight text-white group-hover:text-[#C4A062] transition-colors">
                    {SALON_INFO.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#111111] border border-white/10 hover:border-[#C4A062] transition-colors flex items-center gap-3.5 group shadow-lg"
              >
                <div className="w-10 h-10 bg-black border border-white/20 group-hover:border-[#C4A062] text-[#C4A062] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-white/40">WhatsApp Mesaj Hattı</span>
                  <span className="block font-display font-black text-sm uppercase tracking-tight text-white group-hover:text-[#C4A062] transition-colors">
                    0533 129 03 59
                  </span>
                </div>
              </a>

            </div>

            {/* Working Hours Table */}
            <div className="p-6 sm:p-7 bg-[#111111] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C4A062]" />
                  <h3 className="font-display font-black text-sm uppercase tracking-wider text-white">Çalışma Saatleri</h3>
                </div>
                <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-black text-[#C4A062] border border-white/15 font-bold">
                  Açılış: 09:00
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {WORKING_SCHEDULE.map((schedule, idx) => {
                  const isCurrent = idx === scheduleIndex;
                  return (
                    <div
                      key={schedule.day}
                      className={`flex items-center justify-between py-2 px-3 transition-colors ${
                        isCurrent
                          ? 'bg-black border border-[#C4A062] text-white font-bold'
                          : 'text-white/60 hover:text-white border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 bg-[#C4A062] animate-pulse"></span>
                        )}
                        <span className="uppercase tracking-wider text-[11px]">{schedule.day}</span>
                        {isCurrent && (
                          <span className="text-[10px] text-[#C4A062] uppercase tracking-widest font-black">
                            (Bugün)
                          </span>
                        )}
                      </div>
                      <span className={isCurrent ? 'text-[#C4A062] font-black' : 'text-white/80'}>
                        {schedule.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Interactive Maps Frame */}
          <div className="lg:col-span-6">
            <div className="bg-[#111111] border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Map header info */}
              <div className="p-4 bg-black border-b border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#C4A062] animate-ping"></div>
                  <span className="font-display font-black uppercase tracking-wider text-white text-xs">
                    Burak Saç Tasarım Harita Konumu
                  </span>
                </div>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4A062] hover:underline flex items-center gap-1 font-bold text-[11px] uppercase tracking-wider"
                >
                  Büyük Harita <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Embed */}
              <div className="relative w-full h-[400px] sm:h-[450px] bg-black">
                <iframe
                  title="Burak Saç Tasarım Konumu Bursa Osmangazi"
                  src="https://maps.google.com/maps?q=Bursa+G%C3%BCne%C5%9Ftepe+Fatih+Caddesi+Ata%C5%9F+Sk+9+D+16160+Osmangazi+Bursa&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
                  loading="lazy"
                />

                {/* Floating Map Pin Overlay Banner */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/95 border border-white/20 shadow-2xl flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="font-display font-black text-xs sm:text-sm uppercase tracking-tight text-white">Burak Saç Tasarım</h4>
                    <p className="text-[11px] uppercase tracking-wider text-white/60">Ataş Sk. No: 9 D, Güneştepe / Osmangazi</p>
                  </div>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#C4A062] hover:bg-[#d4b378] text-black font-display font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-md shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Yol Tarifi</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
