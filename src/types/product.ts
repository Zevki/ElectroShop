export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isNew: boolean;
  isBestSelling: boolean;
  stock: number;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}