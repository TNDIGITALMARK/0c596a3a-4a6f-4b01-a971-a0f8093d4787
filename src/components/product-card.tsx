'use client';

import Link from 'next/link';
import { Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LabubuImage } from './labubu-image';
import type { Listing } from '@/lib/types';

interface ProductCardProps {
  listing: Listing;
}

export function ProductCard({ listing }: ProductCardProps) {
  return (
    <Link href={`/listing/${listing.id}`}>
      <div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
          <LabubuImage type={listing.image} alt={listing.title} className="w-full h-full group-hover:scale-105 transition-transform duration-300" />

          {/* Favorite Button */}
          <button
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white shadow-lg hover:bg-pink-50 transition-colors z-10"
            onClick={(e) => {
              e.preventDefault();
              // Handle favorite
            }}
          >
            <Heart className="h-4 w-4 text-pink-500" />
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {listing.verificationStatus === 'verified' && (
              <Badge className="bg-gradient-to-r from-purple-600 to-purple-500 text-white border-0 shadow-lg">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
            {listing.isLimited && (
              <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 border-0 shadow-lg hover:from-yellow-400 hover:to-yellow-500">
                Limited
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-base line-clamp-2 group-hover:text-primary transition-colors">
              {listing.title}
            </h3>
          </div>

          <div className="text-sm text-muted-foreground mb-4 font-medium">{listing.series}</div>

          {/* Price and Action */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">${listing.price}</div>
              {listing.originalPrice && (
                <div className="text-sm text-muted-foreground line-through">
                  ${listing.originalPrice}
                </div>
              )}
            </div>
            <Button size="sm" className="rounded-full px-5 font-semibold shadow-md hover:shadow-lg">
              Buy Now
            </Button>
          </div>

          {/* Seller Info */}
          <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-sm font-bold text-white shadow-md">
              {listing.seller.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">{listing.seller.name}</div>
              <div className="text-xs text-muted-foreground font-medium">
                ⭐ {listing.seller.rating} · {listing.seller.totalSales} sales
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
