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
      <section className="container px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-primary mb-4">
              ✨ Welcome to Labubu Market
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Discover Rare{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Labubu
              </span>{' '}
              Collectibles
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Join thousands of collectors worldwide. Find, trade, and cherish your favorite Labubu treasures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-white">
                  Start Selling
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-3xl blur-3xl"></div>
              <LabubuImage
                type="pink-crown"
                alt="Featured Labubu"
                className="relative w-full aspect-square rounded-3xl shadow-2xl"
              />
              <div className="absolute -right-6 -bottom-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-6 py-3 rounded-full font-bold shadow-xl">
                ⭐ New Arrivals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container px-4 md:px-6 py-16 bg-gradient-to-b from-purple-50/30 to-transparent">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground">Curated picks from top sellers</p>
          </div>
          <Link href="/#all-listings">
            <Button variant="ghost" className="text-base hover:bg-purple-50">
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredListings.map((listing) => (
            <ProductCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container px-4 md:px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Browse by Category</h2>
          <p className="text-lg text-muted-foreground">Find exactly what you're looking for</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mockCategories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-square">
                <LabubuImage
                  type={category.image}
                  alt={category.name}
                  className="w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/30 to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold text-xl mb-1">{category.name}</h3>
                  <p className="text-white/90 text-sm font-medium">{category.count} items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container px-4 md:px-6 py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Labubu Market?</h2>
          <p className="text-lg text-muted-foreground">Join the most trusted collectibles community</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform">
              <Users className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="font-bold text-xl mb-3">Verified Collectors</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connect with 10,000+ verified collectors worldwide in a safe and trusted marketplace
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform">
              <TrendingUp className="h-10 w-10 text-pink-600" />
            </div>
            <h3 className="font-bold text-xl mb-3">Rare Vintage Finds</h3>
            <p className="text-muted-foreground leading-relaxed">
              Discover rare and limited edition pieces from passionate collectors around the globe
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform">
              <div className="text-4xl">🌍</div>
            </div>
            <h3 className="font-bold text-xl mb-3">Global Community</h3>
            <p className="text-muted-foreground leading-relaxed">
              Join collectors from 50+ countries trading and sharing their love for Labubu daily
            </p>
          </div>
        </div>
      </section>

      {/* All Listings */}
      <section id="all-listings" className="container px-4 md:px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">All Listings</h2>
          <p className="text-lg text-muted-foreground">Browse the complete marketplace</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockListings.map((listing) => (
            <ProductCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white mt-24">
        <div className="container px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-6">
                <div className="text-3xl">🧸</div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-extrabold tracking-tight">LABUBU</span>
                  <span className="text-sm font-medium text-purple-200">MARKET</span>
                </div>
              </div>
              <p className="text-purple-100 leading-relaxed">
                The premier marketplace for Labubu collectors worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">About Us</h4>
              <ul className="space-y-3 text-purple-100">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-purple-100">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-purple-100 mb-4 leading-relaxed">
                Subscribe to get updates on new listings
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-purple-200 focus:bg-white/20 focus:border-white/40 transition-all"
                />
                <Button size="sm" className="bg-white text-purple-900 hover:bg-purple-50 font-semibold">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-purple-100">
            © 2025 Labubu Market. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}