'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container flex h-20 items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
          <div className="text-3xl">🧸</div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">LABUBU</span>
            <span className="text-xs font-semibold text-purple-400">MARKET</span>
          </div>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400" />
            <Input
              type="search"
              placeholder="Find your next Labubu..."
              className="pl-12 h-12 rounded-full border-2 border-purple-100 focus:border-purple-300 bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">
            Buy
          </Link>
          <Link href="/sell" className="hover:text-primary transition-colors">
            Sell
          </Link>
          <Link href="/#blind-boxes" className="hover:text-primary transition-colors">
            Blind Boxes
          </Link>
          <Link href="/#rare-finds" className="hover:text-primary transition-colors">
            Rare Finds
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative hover:bg-purple-50 rounded-full">
            <Heart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-[10px] font-bold text-white flex items-center justify-center shadow-md">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-purple-50 rounded-full">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-purple-50 rounded-full">
            <User className="h-5 w-5" />
          </Button>
          <Link href="/dashboard">
            <Button className="hidden sm:inline-flex rounded-full px-6 font-semibold shadow-md hover:shadow-lg">My Account</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden border-t border-purple-100 p-4 bg-white">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400" />
          <Input
            type="search"
            placeholder="Find your next Labubu..."
            className="pl-12 h-12 rounded-full border-2 border-purple-100 focus:border-purple-300 bg-white"
          />
        </div>
      </div>
    </header>
  );
}
