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
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
    // Default date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
    setErrorMessage('');
    setSubmitted(false);
  }, [selectedServiceId, isOpen]);

  // Support ESC key and prevent body background scroll
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const timeSlots = [
    '09:30', '10:15', '11:00', '12:00', '13:30', 
    '14:15', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().slice(0, 60);
    const cleanPhone = phone.trim().slice(0, 25);
    const cleanNotes = notes.trim().slice(0, 250);

    if (!cleanName) {
      setErrorMessage('Lütfen adınızı ve soyadınızı giriniz.');
      return;
    }
    setErrorMessage('');

    const message = `Merhaba Burak Saç Tasarım 👋
Web siteniz üzerinden randevu talebi oluşturmak istiyorum:

✂️ Hizmet: ${currentService.name} (${currentService.price})
📅 Tarih: ${date}
⏰ Tercih Edilen Saat: ${time}
👤 İsim: ${cleanName}
📞 Telefon: ${cleanPhone || 'Belirtilmedi'}
${cleanNotes ? `📝 Not: ${cleanNotes}\n` : ''}
Bu saat için müsaitliğiniz var mıdır? Teşekkürler.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/905331290359?text=${encodedMessage}`;
    
    // Open WhatsApp safely
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#111111] border border-white/20 shadow-2xl my-auto sm:my-6 max-h-[92vh] flex flex-col overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with high-contrast, always visible close button */}
        <div className="sticky top-0 bg-[#161616] border-b border-white/10 px-4 py-3 sm:px-6 sm:py-3.5 flex items-center justify-between z-30 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#C4A062] text-black flex items-center justify-center font-bold">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-black text-sm sm:text-base uppercase tracking-tight text-white leading-none">
                Hızlı Randevu Talebi
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-[#C4A062] font-bold mt-1">
                Burak Saç Tasarım • Güneştepe, Osmangazi
              </p>
            </div>
          </div>

          {/* Close Button - prominent, always visible on mobile */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/25 text-white hover:text-[#C4A062] transition-colors cursor-pointer text-xs font-bold uppercase tracking-wider shrink-0"
            aria-label="Pencereyi Kapat"
          >
            <X className="w-4 h-4" />
            <span className="text-[11px] font-bold">Kapat</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 text-white space-y-3.5">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-black text-[#C4A062] border border-[#C4A062] flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                Randevu Talebiniz İletildi!
              </h3>
              <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed font-normal">
                WhatsApp üzerinden Burak Usta'ya randevu detaylarınız aktarıldı. En kısa sürede onayınız paylaşılacaktır.
              </p>
              <div className="p-3.5 bg-black border border-white/15 text-left text-xs space-y-1.5 max-w-xs mx-auto">
                <div className="text-white/60"><strong className="text-white uppercase font-bold">Hizmet:</strong> {currentService.name}</div>
                <div className="text-white/60"><strong className="text-white uppercase font-bold">Tarih:</strong> {date} / {time}</div>
                <div className="text-white/60"><strong className="text-white uppercase font-bold">İsim:</strong> {name}</div>
              </div>
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 bg-[#C4A062] hover:bg-[#d4b378] text-black font-display font-black text-xs uppercase tracking-widest cursor-pointer shadow-lg"
                >
                  Pencereyi Kapat
                </button>
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="text-xs uppercase tracking-wider text-[#C4A062] hover:underline font-bold"
                >
                  Telefonla Ara: {SALON_INFO.phone}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendWhatsApp} className="space-y-3.5">
              {errorMessage && (
                <div className="p-2.5 bg-red-950/70 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1">
                  Hizmet Seçin
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-3 py-2.5 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.price} - {s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#C4A062]" />
                    Randevu Tarihi
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C4A062]" />
                    Saat Dilimi
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#C4A062]" />
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={60}
                    placeholder="Örn: Mehmet Demir"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    className="w-full px-3 py-2 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none placeholder-white/30"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#C4A062]" />
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    maxLength={20}
                    placeholder="05XX XXX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none placeholder-white/30"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1">
                  Özel İstek / Not (İsteğe Bağlı)
                </label>
                <textarea
                  rows={2}
                  maxLength={250}
                  placeholder="İstediğiniz özel bir stil veya not varsa belirtebilirsiniz..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-black border border-white/20 text-white text-xs focus:border-[#C4A062] focus:outline-none placeholder-white/30 resize-none"
                />
              </div>

              {/* Notice */}
              <div className="p-2.5 bg-black/60 border border-white/10 flex items-start gap-2 text-xs text-white/70">
                <AlertCircle className="w-3.5 h-3.5 text-[#C4A062] shrink-0 mt-0.5" />
                <span className="font-normal text-[10px] sm:text-[11px] leading-relaxed">
                  Randevu talebiniz WhatsApp hattımıza iletilir ve dakikalar içinde randevu saat onayınız verilir.
                </span>
              </div>

              {/* Action Buttons - Dual Buttons (WhatsApp Submit + Easy Close) */}
              <div className="pt-1 flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#C4A062] hover:bg-[#d4b378] text-black font-display font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp İle Gönder</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="py-3 px-4 bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/20 text-white/80 hover:text-white text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                  >
                    Kapat
                  </button>
                </div>

                <div className="text-center pt-1">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">veya doğrudan arayın: </span>
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
          )}
        </div>
      </div>
    </div>
  );
};
