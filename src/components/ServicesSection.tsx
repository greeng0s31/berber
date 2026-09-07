import React, { useState } from 'react';
import { Clock, Check, Sparkles, Scissors } from 'lucide-react';
import { SERVICES } from '../data/salonData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'beard' | 'care' | 'vip'>('all');

  const categories = [
    { id: 'all', label: 'Tüm Hizmetler' },
    { id: 'hair', label: 'Saç Kesimi & Stil' },
    { id: 'beard', label: 'Sakal & Tıraş' },
    { id: 'care', label: 'Cilt & Bakım' },
    { id: 'vip', label: 'VIP Paketler' },
  ];

  const filteredServices =
    activeTab === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeTab);

  return (
    <section id="hizmetler" className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-white/15 text-[#C4A062] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Scissors className="w-3.5 h-3.5" />
            <span>Fiyat Listesi & Menü</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#F5F5F5] leading-none mb-4">
            USTA İŞÇİLİK, <br />
            <span className="text-[#C4A062]">ŞEFFAF FİYATLAR</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl font-normal">
            Burak Saç Tasarım'da her hizmet, en kaliteli profesyonel bakım ürünleri ve tek kullanımlık steril ekipmanlarla uygulanır.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#C4A062] text-black font-black shadow-lg shadow-[#C4A062]/10'
                  : 'bg-[#111111] text-white/60 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="fiyatlar">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative p-6 sm:p-8 bg-[#111111] border transition-all duration-300 flex flex-col justify-between ${
                service.popular
                  ? 'border-[#C4A062]'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-[#C4A062] text-black font-black text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  Öne Çıkan Seçim
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-3 pt-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C4A062]">
                    {service.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50 bg-black/60 px-2.5 py-0.5 border border-white/10">
                    <Clock className="w-3 h-3 text-white/40" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Title & Price */}
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                    {service.name}
                  </h3>
                  <span className="font-display font-black text-2xl text-[#C4A062] shrink-0">
                    {service.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-white/60 mb-6 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-[#C4A062] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <button
                onClick={() => onSelectService(service.id)}
                className={`w-full py-3 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  service.popular
                    ? 'bg-[#C4A062] hover:bg-[#d4b378] text-black shadow-md shadow-[#C4A062]/10'
                    : 'bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-[#C4A062] hover:text-[#C4A062]'
                }`}
              >
                <span>Hizmeti Seç & Randevu Al</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
