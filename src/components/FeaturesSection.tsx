import React from 'react';
import { Clock, ShieldCheck, Sparkles, Flame, Award, CheckCircle2 } from 'lucide-react';
import { SALON_FEATURES } from '../data/salonData';

export const FeaturesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#C4A062]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C4A062]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C4A062]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#C4A062]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C4A062]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-white/15 text-[#C4A062] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Neden Burak Saç Tasarım?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#F5F5F5] leading-none mb-4">
            SADECE TIRAŞ DEĞİL, <br />
            <span className="text-[#C4A062]">KİŞİSEL BİR DENEYİM</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl font-normal">
            Bursa Güneştepe'de erkek bakım standartlarını yükselten, dakik randevu sistemi, hijyen ve kusursuz müşteri memnuniyetini ilk sıraya koyan salon kültürü.
          </p>
        </div>

        {/* Feature Cards in architectural grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SALON_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-[#111111] border border-white/10 hover:border-[#C4A062] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 border border-white/20 bg-black flex items-center justify-center mb-6 group-hover:border-[#C4A062] transition-colors">
                  {getIcon(feature.icon)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 block mb-1">
                  0{idx + 1} / STANDART
                </span>
                <h3 className="font-display font-black text-lg uppercase tracking-tight text-white mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C4A062] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Garantili Kalite</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
