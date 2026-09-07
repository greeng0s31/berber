import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, ThumbsUp, ExternalLink, Plus } from 'lucide-react';
import { REVIEWS, SALON_INFO } from '../data/salonData';

export const ReviewSection: React.FC = () => {
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedReview, setSubmittedReview] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewText.trim()) return;
    setSubmittedReview(true);
    setTimeout(() => {
      setShowReviewPrompt(false);
      setSubmittedReview(false);
      setNewReviewAuthor('');
      setNewReviewText('');
    }, 2500);
  };

  return (
    <section id="yorumlar" className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-white/15 text-[#C4A062] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Star className="w-3.5 h-3.5 fill-[#C4A062] text-[#C4A062]" />
            <span>Müşteri Memnuniyeti</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#F5F5F5] leading-none mb-4">
            GOOGLE'DA <span className="text-[#C4A062]">4.8 YILDIZ</span> <br />
            GERÇEK MÜŞTERİ GÜVENİ
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl font-normal">
            Güneştepe ve Osmangazi'deki değerli misafirlerimizin salonumuz ve saç-sakal işçiliğimiz hakkındaki gerçek geri bildirimleri.
          </p>
        </div>

        {/* Score Card Header with 4,8(25) */}
        <div className="mb-12 p-6 sm:p-8 bg-[#111111] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Score & Stars */}
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="font-display text-5xl sm:text-6xl font-black text-white">4,8</span>
                <span className="text-lg text-white/40 font-bold uppercase">/ 5.0</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#C4A062] my-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-[#C4A062] text-[#C4A062]" />
                ))}
              </div>

              <div className="text-xs uppercase tracking-wider text-white/70 font-bold">
                Toplam <strong className="text-[#C4A062]">25 Google Değerlendirmesi</strong>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">
                Türkiye'de bir berber dükkanı • Bursa / Osmangazi
              </div>
            </div>

            {/* Sub-Ratings */}
            <div className="md:col-span-5 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-white/70 uppercase tracking-wider font-semibold text-[11px]">Saç & Sakal Ustalığı</span>
                <div className="flex items-center gap-2">
                  <div className="w-28 sm:w-36 h-2 bg-black overflow-hidden border border-white/10">
                    <div className="h-full bg-[#C4A062] w-[98%]"></div>
                  </div>
                  <span className="text-white font-bold w-6 text-right">4.9</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/70 uppercase tracking-wider font-semibold text-[11px]">Hijyen & Steril Standart</span>
                <div className="flex items-center gap-2">
                  <div className="w-28 sm:w-36 h-2 bg-black overflow-hidden border border-white/10">
                    <div className="h-full bg-[#C4A062] w-[100%]"></div>
                  </div>
                  <span className="text-white font-bold w-6 text-right">5.0</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/70 uppercase tracking-wider font-semibold text-[11px]">Randevu Dakikliği</span>
                <div className="flex items-center gap-2">
                  <div className="w-28 sm:w-36 h-2 bg-black overflow-hidden border border-white/10">
                    <div className="h-full bg-[#C4A062] w-[96%]"></div>
                  </div>
                  <span className="text-white font-bold w-6 text-right">4.8</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/70 uppercase tracking-wider font-semibold text-[11px]">Güleryüz & İkram</span>
                <div className="flex items-center gap-2">
                  <div className="w-28 sm:w-36 h-2 bg-black overflow-hidden border border-white/10">
                    <div className="h-full bg-[#C4A062] w-[98%]"></div>
                  </div>
                  <span className="text-white font-bold w-6 text-right">4.9</span>
                </div>
              </div>
            </div>

            {/* Review Action Buttons matching user prompt */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <button
                onClick={() => setShowReviewPrompt(true)}
                className="w-full py-3 px-4 bg-[#C4A062] hover:bg-[#d4b378] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#C4A062]/10"
              >
                <Plus className="w-4 h-4" />
                <span>Yorum Yaz / Düzenle</span>
              </button>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-transparent hover:bg-white/5 text-white/80 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-white/20 hover:border-[#C4A062]"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C4A062]" />
                <span>Google'da Görün</span>
              </a>
            </div>

          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 bg-[#111111] border border-white/10 hover:border-[#C4A062] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* User & Rating */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-white/20 bg-black text-[#C4A062] font-black text-xs flex items-center justify-center">
                      {review.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-display font-black text-sm uppercase tracking-tight text-white">{review.author}</span>
                        {review.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-white/40">{review.date}</span>
                    </div>
                  </div>

                  <div className="flex text-[#C4A062]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C4A062]" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-5">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] uppercase tracking-wider text-white/40">
                <span className="text-[#C4A062] font-bold">{review.serviceUsed}</span>
                <span className="flex items-center gap-1 text-white/50">
                  <ThumbsUp className="w-3 h-3 text-[#C4A062]" /> Doğrulanmış
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for adding/editing review */}
        {showReviewPrompt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-md bg-[#111111] border border-white/20 p-6 sm:p-8 text-white">
              <h3 className="font-display font-black text-xl uppercase tracking-tight text-white mb-1">
                Burak Saç Tasarım'ı Değerlendirin
              </h3>
              <p className="text-xs text-white/50 mb-6 uppercase tracking-wider font-medium">
                Deneyiminizi paylaşarak diğer misafirlerimize yardımcı olun.
              </p>

              {submittedReview ? (
                <div className="py-6 text-center text-[#C4A062] space-y-2">
                  <CheckCircle className="w-12 h-12 mx-auto text-[#C4A062]" />
                  <p className="font-display font-black text-base uppercase">Yorumunuz Kaydedildi!</p>
                  <p className="text-xs text-white/60">Burak Saç Tasarım ailesi olarak sizleri ağırlamaktan mutluluk duyuyoruz.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-white/70 mb-1.5">Puanınız</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewRating(star)}
                          className="p-1 text-[#C4A062] hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${star <= newRating ? 'fill-[#C4A062] text-[#C4A062]' : 'text-white/20'}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-white/70 mb-1.5">Adınız Soyadınız</label>
                    <input
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white text-sm focus:border-[#C4A062] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-white/70 mb-1.5">Yorumunuz</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Saç kesimi, sakal tıraşı ve salon hakkındaki düşünceleriniz..."
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white text-sm focus:border-[#C4A062] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#C4A062] text-black font-display font-black text-xs uppercase tracking-widest hover:bg-[#d4b378] cursor-pointer"
                    >
                      Yorumu Paylaş
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowReviewPrompt(false)}
                      className="px-5 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/5 cursor-pointer"
                    >
                      Vazgeç
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
