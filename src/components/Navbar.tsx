import React, { useState, useEffect } from 'react';
import { Scissors, Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { getSalonOpenStatus } from '../utils/businessHours';

interface NavbarProps {
  onOpenAppointment: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [salonStatus, setSalonStatus] = useState(getSalonOpenStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Refresh every 30 seconds
    const interval = setInterval(() => {
      setSalonStatus(getSalonOpenStatus());
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Hizmetler & Fiyatlar', href: '#hizmetler' },
    { label: 'Yorumlar', href: '#yorumlar' },
    { label: 'Konum & İletişim', href: '#iletisim' },
  ];

  return (
    <>
      {/* Top info bar */}
      <div id="top-announcement-bar" className="bg-[#0A0A0A] border-b border-white/10 text-[11px] uppercase tracking-widest py-2 px-4 text-white/50 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-[#C4A062]" />
              Güneştepe Fatih Cd., Ataş Sk. 9 D, Osmangazi / Bursa
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C4A062]" />
              Açılış: 09:00 (Pzt - Cmt: 09:00 - 21:00)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border text-[10px] font-bold tracking-wider uppercase ${
              salonStatus.isOpen ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40' : 'bg-[#111111] text-white/60 border-white/10'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${salonStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-white/40'}`}></span>
              {salonStatus.isOpen ? 'Şu An Açık' : `${salonStatus.statusText} (${salonStatus.scheduleText})`}
            </span>
            <a 
              href={`tel:${SALON_INFO.phoneClean}`}
              className="text-[#C4A062] hover:text-white font-bold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              {SALON_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80 py-3'
            : 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Bold Typography */}
          <a href="#" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-9 h-9 border border-white/20 bg-[#111111] flex items-center justify-center text-[#C4A062] group-hover:border-[#C4A062] transition-colors">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <div className="font-display font-black text-xl sm:text-2xl tracking-tighter text-[#F5F5F5] group-hover:opacity-90 transition-opacity">
                BURAK <span className="text-[#C4A062]">SAÇ TASARIM</span>
              </div>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/40 font-bold -mt-0.5">
                OSMANGAZİ / BURSA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-white/60">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#C4A062] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C4A062] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons & Rating Pill */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 border-r border-white/10 pr-4">
              <span className="text-[#C4A062] font-bold text-sm">4.8</span>
              <div className="flex text-[#C4A062] text-xs">★★★★★</div>
              <span className="text-[10px] text-white/40 uppercase tracking-wider">(25 Yorum)</span>
            </div>

            <a
              id="nav-call-button"
              href={`tel:${SALON_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold tracking-wider uppercase text-white/90 bg-[#111111] border border-white/15 hover:border-[#C4A062] hover:text-[#C4A062] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C4A062]" />
              <span>0533 129 03 59</span>
            </a>

            <button
              id="nav-book-button"
              onClick={() => onOpenAppointment()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black tracking-widest uppercase text-black bg-[#C4A062] hover:bg-[#d4b378] shadow-lg shadow-[#C4A062]/10 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Randevu Al</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenAppointment()}
              className="p-2 text-xs font-black uppercase text-black bg-[#C4A062]"
              aria-label="Randevu al"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/70 hover:text-[#C4A062] border border-white/10 transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 bg-[#0A0A0A] border-b border-white/10 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <div className="pb-3 border-b border-white/10 flex items-center justify-between text-xs uppercase tracking-wider text-white/50">
                <span>Çalışma Durumu:</span>
                <span className={`font-bold ${salonStatus.isOpen ? 'text-emerald-400' : 'text-white/60'}`}>
                  {salonStatus.isOpen ? '● Şu An Açık (09:00 - 21:00)' : `○ ${salonStatus.statusText} (${salonStatus.scheduleText})`}
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-2 text-sm uppercase tracking-widest font-bold text-white/80 hover:text-[#C4A062] hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 font-black text-xs uppercase tracking-widest text-black bg-[#C4A062]"
                >
                  <Calendar className="w-4 h-4" />
                  Hızlı Randevu Al
                </button>
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="w-full flex items-center justify-center gap-2 py-3 font-bold text-xs uppercase tracking-wider text-white bg-[#111111] border border-white/20"
                >
                  <Phone className="w-4 h-4 text-[#C4A062]" />
                  Hemen Ara: 0533 129 03 59
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
