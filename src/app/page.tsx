'use client';

import { Navigation } from '@/components/navigation';
import { ProductCard } from '@/components/product-card';
import { LabubuImage } from '@/components/labubu-image';
import { Button } from '@/components/ui/button';
import { mockListings, mockCategories, getFeaturedListings } from '@/lib/mock-data';
import { ArrowRight, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredListings = getFeaturedListings();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Discover the World of{' '}
              <span className="text-primary">Labubu</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
              Collectibles for Your Favorite Dolls
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button size="lg" className="text-base">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="text-base">
                  Start Selling
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="relative">
              <LabubuImage
                type="pink-crown"
                alt="Featured Labubu"
                className="w-full aspect-square rounded-2xl shadow-2xl"
              />
              <div className="absolute -right-4 -bottom-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg">
                ⭐ New Arrivals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container px-4 md:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Collections</h2>
            <p className="text-muted-foreground">Curated picks from top sellers</p>
          </div>
          <Link href="/#all-listings">
            <Button variant="ghost">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <ProductCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container px-4 md:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Browse by Category</h2>
          <p className="text-muted-foreground">Find exactly what you're looking for</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockCategories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <div className="group relative bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 aspect-square">
                <LabubuImage
                  type={category.image}
                  alt={category.name}
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Why Choose Us?</h3>
            <p className="text-muted-foreground text-sm">
              Connect with 10,000+ verified collectors worldwide
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Vintage Finds</h3>
            <p className="text-muted-foreground text-sm">
              Discover rare and limited edition pieces from collectors
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🌍</div>
            </div>
            <h3 className="font-bold text-lg mb-2">Global Community</h3>
            <p className="text-muted-foreground text-sm">
              Join collectors from 50+ countries trading daily
            </p>
          </div>
        </div>
      </section>

      {/* All Listings */}
      <section id="all-listings" className="container px-4 md:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">All Listings</h2>
          <p className="text-muted-foreground">Browse the complete marketplace</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockListings.map((listing) => (
            <ProductCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="text-2xl">🧸</div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-extrabold tracking-tight">LABUBU</span>
                  <span className="text-xs font-medium text-gray-400">MARKET</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                The premier marketplace for Labubu collectors worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get updates on new listings
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-sm"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 Labubu Market. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}