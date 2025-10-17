'use client';

import { Navigation } from '@/components/navigation';
import { LabubuImage } from '@/components/labubu-image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getListingById, mockListings } from '@/lib/mock-data';
import { Heart, Share2, Shield, Package, MapPin, Clock, Star, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

export default function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const listing = getListingById(resolvedParams.id);

  if (!listing) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Listing Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedListings = mockListings
    .filter((l) => l.id !== listing.id && l.series === listing.series)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{' '}
          /{' '}
          <Link href="/#all-listings" className="hover:text-foreground">
            Listings
          </Link>{' '}
          / {listing.title}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
              <LabubuImage type={listing.image} alt={listing.title} className="w-full h-full" />
              {listing.isLimited && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                  Limited Edition
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-3">
              {listing.images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-muted rounded-lg overflow-hidden border-2 border-transparent hover:border-primary cursor-pointer transition-colors"
                >
                  <LabubuImage type={img} alt={`${listing.title} ${idx + 1}`} className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <h1 className="text-3xl md:text-4xl font-bold flex-1">{listing.title}</h1>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-2 mb-4">
                {listing.verificationStatus === 'verified' && (
                  <Badge className="bg-primary">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified Authentic
                  </Badge>
                )}
                <Badge variant="outline">{listing.condition.toUpperCase()}</Badge>
                <Badge variant="secondary">{listing.series}</Badge>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <div className="text-4xl font-bold text-primary">${listing.price}</div>
                {listing.originalPrice && (
                  <div className="text-xl text-muted-foreground line-through">
                    ${listing.originalPrice}
                  </div>
                )}
              </div>

              <p className="text-muted-foreground">{listing.description}</p>
            </div>

            <Separator />

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <div className="font-medium">Condition</div>
                  <div className="text-sm text-muted-foreground">{listing.condition}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <div className="font-medium">Year</div>
                  <div className="text-sm text-muted-foreground">{listing.year}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-muted-foreground">Ships worldwide</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <div className="font-medium">Views</div>
                  <div className="text-sm text-muted-foreground">{listing.views}</div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Seller Info */}
            <div className="bg-muted/50 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-xl font-bold">
                  {listing.seller.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg">{listing.seller.name}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{listing.seller.rating} rating</span>
                    <span>•</span>
                    <span>{listing.seller.totalSales} sales</span>
                  </div>
                  {listing.seller.specialization && (
                    <div className="text-sm text-primary mt-1">{listing.seller.specialization}</div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Seller
                </Button>
                <Link href={`/seller/${listing.seller.id}`}>
                  <Button variant="outline">View Profile</Button>
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full text-lg h-14">
                Buy Now - ${listing.price}
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Add to Cart
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-4">
              <div className="flex flex-col items-center gap-1">
                <Shield className="h-5 w-5" />
                <span>Buyer Protection</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Package className="h-5 w-5" />
                <span>Secure Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Star className="h-5 w-5" />
                <span>Verified Seller</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Tabs */}
        <Tabs defaultValue="details" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-6 space-y-4">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm text-muted-foreground">Series</dt>
                  <dd className="font-medium">{listing.series}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Year Released</dt>
                  <dd className="font-medium">{listing.year}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Condition</dt>
                  <dd className="font-medium capitalize">{listing.condition}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Category</dt>
                  <dd className="font-medium">{listing.category}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Verification</dt>
                  <dd className="font-medium capitalize">{listing.verificationStatus}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Limited Edition</dt>
                  <dd className="font-medium">{listing.isLimited ? 'Yes' : 'No'}</dd>
                </div>
              </dl>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="mt-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Shipping Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium mb-1">Worldwide Shipping Available</div>
                  <p className="text-sm text-muted-foreground">
                    This item ships from the seller's location. Shipping costs calculated at checkout.
                  </p>
                </div>
                <div>
                  <div className="font-medium mb-1">Estimated Delivery</div>
                  <p className="text-sm text-muted-foreground">3-7 business days (varies by location)</p>
                </div>
                <div>
                  <div className="font-medium mb-1">Insurance Included</div>
                  <p className="text-sm text-muted-foreground">
                    All shipments include insurance for items over $100
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Seller Reviews</h3>
              <div className="text-center py-8 text-muted-foreground">
                <Star className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                <p>
                  Seller has {listing.seller.rating} rating from {listing.seller.totalSales} sales
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Items */}
        {relatedListings.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">More from {listing.series}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedListings.map((item) => (
                <Link key={item.id} href={`/listing/${item.id}`}>
                  <div className="group bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square bg-muted">
                      <LabubuImage type={item.image} alt={item.title} className="w-full h-full" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary mb-2">
                        {item.title}
                      </h3>
                      <div className="text-xl font-bold text-primary">${item.price}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
