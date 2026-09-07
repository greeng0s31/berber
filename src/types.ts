export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'beard' | 'care' | 'vip';
  categoryLabel: string;
  duration: string;
  price: string;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  initials: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fade' | 'classic' | 'beard' | 'salon';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface WorkingDay {
  dayName: string;
  hours: string;
  isToday: boolean;
  isOpen: boolean;
}
