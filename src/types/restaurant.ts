export interface MenuItem {
  id: string;
  name: string;
  italianName?: string;
  category: 'pizzas' | 'pastas_entrees' | 'desserts_drinks';
  subCategory?: string;
  price: string;
  description: string;
  ingredients: string[];
  dietary: ('Vegetarian' | "Chef's Signature" | 'House Special' | 'Family Recipe')[];
  image: string;
  highlight?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  favoriteDish: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: number;
  diningType: 'dine_in' | 'celebration_private' | 'catering_inquiry';
  notes: string;
}

export interface DaySchedule {
  day: string;
  shortDay: string;
  open: string;
  close: string;
  isClosed: boolean;
  dayIndex: number; // 0 = Sunday, 1 = Monday, etc.
}
