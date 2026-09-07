import { ServiceItem, ReviewItem, GalleryItem, WorkingDay } from '../types';

export const SALON_INFO = {
  name: 'Burak Saç Tasarım',
  tagline: 'Modern Erkek Kuaförü & Saç Tasarım Stüdyosu',
  rating: 4.8,
  reviewCount: 25,
  category: "Türkiye'de bir berber dükkanı",
  address: 'Bursa Güneştepe Fatih Caddesi, Ataş Sk 9 D, 16160 Osmangazi̇/Bursa',
  addressShort: 'Ataş Sk. No:9/D, Güneştepe, Osmangazi / Bursa',
  phone: '0533 129 03 59',
  phoneClean: '05331290359',
  phoneInternational: '+905331290359',
  whatsappUrl: 'https://wa.me/905331290359',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bursa+g%C3%BCne%C5%9Ftepe+fatih+caddesi+Ata%C5%9F+Sk+9+D+16160+Osmangazi+Bursa',
  openingTime: '09:00',
  closingTime: '21:00',
  openDays: 'Pazartesi - Cumartesi: 09:00 - 21:00 | Pazar: 10:00 - 19:00',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'sac-kesimi',
    name: 'Modern Saç Kesimi & Yıkama',
    category: 'hair',
    categoryLabel: 'Saç Hizmetleri',
    duration: '35-40 dk',
    price: '350 ₺',
    popular: true,
    description: 'Yüz hattınıza ve saç yapınıza özel danışmanlık, makas & makine kesimi, arındırıcı saç yıkama ve stil fönü.',
    features: ['Kişiye özel saç analizi', 'Ferahlatıcı saç yıkama & saç kremi', 'Mat/parlak pomad ile stil dokunuşu', 'Ense temizliği ve özel losyon']
  },
  {
    id: 'sakal-tasarim',
    name: 'Sakal Tasarımı & Sıcak Havlu Bakımı',
    category: 'beard',
    categoryLabel: 'Sakal Hizmetleri',
    duration: '25-30 dk',
    price: '200 ₺',
    popular: false,
    description: 'Yüz şeklinize göre simetrik sakal kontürü, geleneksel sıcak havlu buharı, ustura traşı ve besleyici sakal yağı.',
    features: ['Geleneksel sıcak havlu kompresi', 'Ustura ile keskin yanak & boyun hattı', 'Sakal yumuşatıcı balsam & organik yağ', 'Cilt yatıştırıcı ferahlatıcı kolonya']
  },
  {
    id: 'komple-bakim',
    name: 'Komple Saç & Sakal VIP Paket',
    category: 'vip',
    categoryLabel: 'VIP Paketler',
    duration: '60 dk',
    price: '500 ₺',
    popular: true,
    description: 'Tepeden tırnağa yenilenme: Modern saç kesimi, sıcak havlulu sakal tasarımı, saç yıkama, yüz peelingi ve maske.',
    features: ['Modern saç kesimi & stil fönü', 'Sıcak havlulu ustura sakal dizaynı', 'Kil veya siyah nokta yüz maskesi', 'Kulak ve burun hijyenik bakımı']
  },
  {
    id: 'cilt-bakimi',
    name: 'Erkek Özel Cilt & Gözenek Bakımı',
    category: 'care',
    categoryLabel: 'Cilt Bakımı',
    duration: '30 dk',
    price: '300 ₺',
    popular: false,
    description: 'Buhar terapisiyle gözenek açma, siyah nokta arındırma, doğal kil maskesi ve canlandırıcı nemlendirici masaj.',
    features: ['Ozonlu buhar uygulaması', 'Cilt yenileyici soyulabilir maske', 'Tonik ile gözenek sıkılaştırma', 'Rahatlatıcı yüz & şakak masajı']
  },
  {
    id: 'damat-paketi',
    name: 'Damat & Özel Gün VIP Bakımı',
    category: 'vip',
    categoryLabel: 'VIP Paketler',
    duration: '90 dk',
    price: '1.250 ₺',
    popular: false,
    description: 'Düğün, nişan ve özel günleriniz için eksiksiz protokollü saç & sakal tasarımı, derinlemesine cilt bakımı ve kalıcı stil.',
    features: ['Kişiye özel prova & saç-sakal tasarımı', 'Premium cilt & nemlendirici bakım', 'Kaş, ense ve kulak detay temizliği', 'Özel içecek & kahve ikramı']
  },
  {
    id: 'keratin-bakim',
    name: 'Keratin Saç Bakımı & Düzleştirme',
    category: 'care',
    categoryLabel: 'Cilt Bakımı',
    duration: '50 dk',
    price: '450 ₺',
    popular: false,
    description: 'Elektriklenen ve yıpranmış saç telleri için yoğun protein & keratin yüklemesi, doğal parlaklık ve ipeksi doku.',
    features: ['Hasarlı saç tellerini onarma', 'Uzun süreli kabarma önleyici etki', 'Saça sağlıklı ve canlı görünüm']
  },
  {
    id: 'cocuk-kesimi',
    name: 'Çocuk Saç Kesimi',
    category: 'hair',
    categoryLabel: 'Saç Hizmetleri',
    duration: '25 dk',
    price: '250 ₺',
    popular: false,
    description: 'Çocuklara özel sabırlı, eğlenceli ve hassas makas kesimi ile modern saç modelleri.',
    features: ['Çocuk dostu yaklaşım', 'Hızlı ve konforlu makas kesimi', 'Sürpriz ikram']
  },
  {
    id: 'agda-kas',
    name: 'Kulak - Burun Ağdası & Kaş Dizaynı',
    category: 'care',
    categoryLabel: 'Cilt Bakımı',
    duration: '15 dk',
    price: '150 ₺',
    popular: false,
    description: 'İstenmeyen kulak ve burun kıllarının hijyenik ağda ile alınması ve doğal erkek kaş kontürü.',
    features: ['Acısız özel granül ağda', 'Doğal hatları koruyan kaş düzenleme', 'Hızlı ve pratik hijyen']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Modern Skin Fade & Textured Crop',
    category: 'fade',
    categoryLabel: 'Fade & Modern',
    imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop',
    description: 'Kusursuz geçişli cilt sıfırlaması (skin fade) ve dokulu üst saç tasarımı.'
  },
  {
    id: '2',
    title: 'Sıcak Havlu Ustura Sakal Dizaynı',
    category: 'beard',
    categoryLabel: 'Sakal Tasarımı',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop',
    description: 'Geleneksel sıcak havlu buharı ve net açılı jilet kontürüyle dolgun sakal görünümü.'
  },
  {
    id: '3',
    title: 'Klasik Centilmen & Side Part',
    category: 'classic',
    categoryLabel: 'Klasik & Centilmen',
    imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop',
    description: 'İş hayatı ve klasik giyim tarzıyla mükemmel uyum sağlayan zamansız makas kesimi.'
  },
  {
    id: '4',
    title: 'Low Taper Fade & Doğal Bukleler',
    category: 'fade',
    categoryLabel: 'Fade & Modern',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop',
    description: 'Kulak üstü ve ense bölgesinde hafif geçiş, doğal ve hacimli saç formu.'
  },
  {
    id: '5',
    title: 'Salon Detayları & Steril Ekipmanlar',
    category: 'salon',
    categoryLabel: 'Salon Atmosferi',
    imageUrl: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1000&auto=format&fit=crop',
    description: 'Her müşteri sonrası UV sterilizasyondan geçen profesyonel ekipmanlarımız.'
  },
  {
    id: '6',
    title: 'Hacimli Pompadour & Keskin Hatlar',
    category: 'classic',
    categoryLabel: 'Klasik & Centilmen',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    description: 'Ön kısmı kaldırılmış, parlak fön ve kaliteli pomadla sabitlenmiş asil duruş.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Emre Çelik',
    initials: 'EÇ',
    rating: 5,
    date: '2 hafta önce',
    comment: 'Güneştepe bölgesinde uzun zamandır aradığım esnaflık ve ustalığı Burak Bey de buldum. Saç kesimi çok titiz, sakal traşındaki sıcak havlu uygulaması resmen terapi gibi. Randevu saatinde tam koltuktaydım, hiç beklemedim. Kesinlikle tavsiye ederim.',
    serviceUsed: 'Komple Saç & Sakal VIP Paket',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Murat Yılmaz',
    initials: 'MY',
    rating: 5,
    date: '1 ay önce',
    comment: 'Fade kesimde Bursa da tek geçerim. Saçınızın yapısını dinliyor, ne istediğinizi anlıyor ve tam istediğinizden bile daha iyi sonuç çıkarıyor. Dükkan tertemiz ve aletler steril.',
    serviceUsed: 'Modern Saç Kesimi',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Serkan Ataş',
    initials: 'SA',
    rating: 5,
    date: '3 hafta önce',
    comment: 'Osmangazi de gidebileceğiniz en samimi ve profesyonel berber. Çay kahve ikramı, güler yüz ve saç tasarımı 10 numara. 4.8 puanı sonuna kadar hak ediyor.',
    serviceUsed: 'Sakal Tasarımı & Sıcak Havlu',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Doğukan Kurt',
    initials: 'DK',
    rating: 5,
    date: '2 ay önce',
    comment: 'Düğün öncesi damat traşım için gittim. Burak usta gerçekten işinin ehli. Saçım ve sakalım bütün gün bozulmadı, fotoğraflarda harika çıktı. Teşekkürler Burak Saç Tasarım!',
    serviceUsed: 'Damat & Özel Gün Bakımı',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Ahmet Faruk B.',
    initials: 'AF',
    rating: 4,
    date: '3 ay önce',
    comment: 'Güneştepe Fatih Caddesi nde kolay bulunabilir bir konumda. Temiz, dakik ve işine özen gösteren bir berber. Randevusuz gitmeyin randevuyla gidince çok rahat ediyorsunuz.',
    serviceUsed: 'Modern Saç Kesimi',
    verified: true
  }
];

export const WORKING_SCHEDULE = [
  { day: 'Pazartesi', hours: '09:00 - 21:00', open: true },
  { day: 'Salı', hours: '09:00 - 21:00', open: true },
  { day: 'Çarşamba', hours: '09:00 - 21:00', open: true },
  { day: 'Perşembe', hours: '09:00 - 21:00', open: true },
  { day: 'Cuma', hours: '09:00 - 21:00', open: true },
  { day: 'Cumartesi', hours: '09:00 - 21:00', open: true },
  { day: 'Pazar', hours: '10:00 - 19:00 (Özel Randevu)', open: true },
];

export const SALON_FEATURES = [
  {
    title: 'Randevulu & Sıra Beklemeden',
    description: 'Zamanınız değerlidir. WhatsApp üzerinden veya telefonla aldığınız randevuda koltuğunuz sizi bekler.',
    icon: 'Clock'
  },
  {
    title: '100% Steril & Hijyenik Ekipmanlar',
    description: 'Tek kullanımlık boyunluklar, jiletler ve her işlem sonrası dezenfekte edilen profesyonel makaslar.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Kişiye Özel Saç & Sakal Analizi',
    description: 'Kafa yapınıza, sakal yönünüze ve yüz anatominize en uygun kesim ve stil danışmanlığı.',
    icon: 'Sparkles'
  },
  {
    title: 'Sıcak Havlu Terapisi',
    description: 'Cildinizi gözeneklerinden tazeleyen, yatıştırıcı doğal yağlarla desteklenen geleneksel sıcak havlu keyfi.',
    icon: 'Flame'
  }
];
