import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, MessageCircle, AlertCircle, Scissors } from 'lucide-react';
import { SERVICES, SALON_INFO } from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedServiceId,
}) => {
  const [serviceId, setServiceId] = useState<string>(selectedServiceId || 'sac-kesimi');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('14:00');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
    // Default date to today or tomorrow
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, [selectedServiceId, isOpen]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const timeSlots = [
    '09:30', '10:15', '11:00', '12:00', '13:30', 
    '14:15', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Lütfen adınızı ve soyadınızı belirtin.');
      return;
    }

    const message = `Merhaba Burak Saç Tasarım 👋
Web siteniz üzerinden randevu talebi oluşturmak istiyorum:

✂️ Hizmet: ${currentService.name} (${currentService.price})
📅 Tarih: ${date}
⏰ Tercih Edilen Saat: ${time}
👤 İsim: ${name}
📞 Telefon: ${phone || 'Belirtilmedi'}
${notes ? `📝 Not: ${notes}\n` : ''}
Bu saat için müsaitliğiniz var mıdır? Teşekkürler.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/905331290359?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#111111] border border-white/20 shadow-2xl p-6 sm:p-8 text-white my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-black text-[#C4A062] border border-[#C4A062] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white">
              Randevu Talebiniz İletildi!
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed font-normal">
              WhatsApp üzerinden Burak Usta'ya randevu detaylarınız aktarıldı. En kısa sürede onayınız paylaşılacaktır.
            </p>
            <div className="p-4 bg-black border border-white/15 text-left text-xs space-y-2 max-w-xs mx-auto">
              <div className="text-white/60"><strong className="text-white uppercase font-bold">Hizmet:</strong> {currentService.name}</div>
              <div className="text-white/60"><strong className="text-white uppercase font-bold">Tarih:</strong> {date} / {time}</div>
              <div className="text-white/60"><strong className="text-white uppercase font-bold">İsim:</strong> {name}</div>
            </div>
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-[#C4A062] hover:bg-[#d4b378] text-black font-display font-black text-xs uppercase tracking-widest cursor-pointer shadow-lg shadow-[#C4A062]/10"
              >
                Pencereyi Kapat
              </button>
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="text-xs uppercase tracking-wider text-[#C4A062] hover:underline font-bold"
              >
                Acil Arama: 0533 129 03 59
              </a>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 bg-[#C4A062] text-black flex items-center justify-center font-bold">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                  Hızlı Randevu Talebi
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-[#C4A062] font-bold">
                  Burak Saç Tasarım • Güneştepe, Osmangazi
                </p>
              </div>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1.5">
                  İşlem / Hizmet Seçin
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.price} - {s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C4A062]" />
                    Randevu Tarihi
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C4A062]" />
                    Saat Dilimi
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C4A062]" />
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Mehmet Demir"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none placeholder-white/30"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C4A062]" />
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    placeholder="05XX XXX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none placeholder-white/30"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1.5">
                  Özel İstek veya Stil Notu (İsteğe Bağlı)
                </label>
                <textarea
                  rows={2}
                  placeholder="İstediğiniz özel bir saç stili veya detay varsa yazabilirsiniz..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none placeholder-white/30 resize-none"
                />
              </div>

              {/* Notice */}
              <div className="p-3 bg-black border border-white/15 flex items-start gap-2.5 text-xs text-white/70">
                <AlertCircle className="w-4 h-4 text-[#C4A062] shrink-0 mt-0.5" />
                <span className="font-normal text-[11px] leading-relaxed">
                  Randevu talebiniz doğrudan Burak Saç Tasarım WhatsApp hattına iletilir ve dakikalar içinde randevu saat onayınız verilir.
                </span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C4A062] hover:bg-[#d4b378] text-black font-display font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#C4A062]/10 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp İle Randevuyu Gönder
                </button>

                <div className="text-center">
                  <span className="text-[11px] uppercase tracking-wider text-white/40">veya doğrudan telefonla arayın: </span>
                  <a
                    href={`tel:${SALON_INFO.phoneClean}`}
                    className="text-xs font-bold text-[#C4A062] hover:underline inline-flex items-center gap-1 ml-1"
                  >
                    <Phone className="w-3 h-3" />
                    {SALON_INFO.phone}
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
