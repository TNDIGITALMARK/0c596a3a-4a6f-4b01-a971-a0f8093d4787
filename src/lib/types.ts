export type ListingCondition = 'mint' | 'excellent' | 'good' | 'fair';
export type VerificationStatus = 'verified' | 'pending' | 'none';
export type ListingStatus = 'active' | 'sold' | 'reserved';

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  totalSales: number;
  verified: boolean;
  joinedDate: string;
  specialization?: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  condition: ListingCondition;
  seller: Seller;
  series: string;
  year: number;
  isLimited: boolean;
  isFeatured: boolean;
  status: ListingStatus;
  verificationStatus: VerificationStatus;
  views: number;
  favorites: number;
  listedDate: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  listingId: string;
  content: string;
  timestamp: string;
  read: boolean;
}
