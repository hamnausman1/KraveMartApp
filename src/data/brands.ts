export interface Brand {
  id: string;
  name: string;
  nameUrdu: string;
  image: string;
  description: string;
  descriptionUrdu: string;
}

export const brands: Brand[] = [
  {
    id: 'brand-1',
    name: 'Nestle',
    nameUrdu: 'نیسلے',
    image: 'https://images.unsplash.com/photo-1632054010678-7f2e5a1a7355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXN0bGUlMjBicmFuZCUyMGxvZ298ZW58MXx8fHwxNzYzOTc2NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Global food & beverage company',
    descriptionUrdu: 'عالمی خوراک اور مشروبات کمپنی',
  },
  {
    id: 'brand-2',
    name: 'Unilever',
    nameUrdu: 'یونیلیور',
    image: 'https://images.unsplash.com/photo-1749480111086-f22c6a5a361c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmlsZXZlciUyMGJyYW5kJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYzOTc2NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Consumer goods & personal care',
    descriptionUrdu: 'صارفین کے سامان اور ذاتی نگہداشت',
  },
  {
    id: 'brand-3',
    name: 'National Foods',
    nameUrdu: 'نیشنل فوڈز',
    image: 'https://images.unsplash.com/photo-1650400675098-b03c8c6b5b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpb25hbCUyMGZvb2RzJTIwcGFraXN0YW58ZW58MXx8fHwxNzYzOTc2NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pakistani spices & food products',
    descriptionUrdu: 'پاکستانی مصالحے اور خوراک',
  },
  {
    id: 'brand-4',
    name: 'Shan Foods',
    nameUrdu: 'شان فوڈز',
    image: 'https://images.unsplash.com/photo-1651959653830-5c8cb576e134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFuJTIwbWFzYWxhJTIwc3BpY2VzfGVufDF8fHx8MTc2Mzk3NjcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Premium masala & recipe mixes',
    descriptionUrdu: 'پریمیم مصالحہ اور ریسپی مکس',
  },
  {
    id: 'brand-5',
    name: 'Tapal Tea',
    nameUrdu: 'تپل چائے',
    image: 'https://images.unsplash.com/photo-1651834689695-3b88ae5c533a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXBhbCUyMHRlYSUyMHBha2lzdGFufGVufDF8fHx8MTc2Mzk3NjcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Premium tea brands',
    descriptionUrdu: 'پریمیم چائے کے برانڈز',
  },
  {
    id: 'brand-6',
    name: 'Lipton',
    nameUrdu: 'لپٹن',
    image: 'https://images.unsplash.com/photo-1729774091788-895834432680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcHJvZHVjdHMlMjBjb29raW5nfGVufDF8fHx8MTc2Mzk3NjcxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tea & beverage products',
    descriptionUrdu: 'چائے اور مشروبات کی مصنوعات',
  },
  {
    id: 'brand-7',
    name: 'Knorr',
    nameUrdu: 'نور',
    image: 'https://images.unsplash.com/photo-1724365314552-1b9e034f9e34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwYnJhbmQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjM5NzY3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Soups, sauces & seasonings',
    descriptionUrdu: 'سوپ، چٹنیاں اور مصالحے',
  },
  {
    id: 'brand-8',
    name: 'Lays',
    nameUrdu: 'لیز',
    image: 'https://images.unsplash.com/photo-1694101493190-acc6c4418ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBjaGlwcyUyMGJhZ3xlbnwxfHx8fDE3NjM5MDkxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Potato chips & snacks',
    descriptionUrdu: 'آلو کے چپس اور سنیکس',
  },
  {
    id: 'brand-9',
    name: 'Pepsi',
    nameUrdu: 'پیپسی',
    image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBzaSUyMGJvdHRsZXxlbnwxfHx8fDE3NjM5MTYwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Carbonated soft drinks',
    descriptionUrdu: 'کاربونیٹڈ نرم مشروبات',
  },
  {
    id: 'brand-10',
    name: 'Coca Cola',
    nameUrdu: 'کوکا کولا',
    image: 'https://images.unsplash.com/photo-1648569883125-d01072540b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NhJTIwY29sYSUyMGJvdHRsZXxlbnwxfHx8fDE3NjM4ODI4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Soft drinks & beverages',
    descriptionUrdu: 'نرم مشروبات',
  },
];

export function getBrandById(id: string): Brand | undefined {
  return brands.find(brand => brand.id === id);
}
