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
      <div className="group relative bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <LabubuImage type={listing.image} alt={listing.title} className="w-full h-full" />

          {/* Favorite Button */}
          <button
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors z-10"
            onClick={(e) => {
              e.preventDefault();
              // Handle favorite
            }}
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </button>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {listing.verificationStatus === 'verified' && (
              <Badge className="bg-primary text-primary-foreground">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
            {listing.isLimited && (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-900 hover:bg-yellow-100">
                Limited
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {listing.title}
            </h3>
          </div>

          <div className="text-xs text-muted-foreground mb-3">{listing.series}</div>

          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-bold text-primary">${listing.price}</div>
              {listing.originalPrice && (
                <div className="text-xs text-muted-foreground line-through">
                  ${listing.originalPrice}
                </div>
              )}
            </div>
            <Button size="sm" className="rounded-full">
              Buy Now
            </Button>
          </div>

          {/* Seller Info */}
          <div className="mt-3 pt-3 border-t flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs font-bold">
              {listing.seller.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium truncate">{listing.seller.name}</div>
              <div className="text-xs text-muted-foreground">
                ⭐ {listing.seller.rating} · {listing.seller.totalSales} sales
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
