'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="text-2xl">🧸</div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight">LABUBU</span>
            <span className="text-xs font-medium text-muted-foreground">MARKET</span>
          </div>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Find your next Labubu..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
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
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Link href="/dashboard">
            <Button className="hidden sm:inline-flex">My Account</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden border-t p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Find your next Labubu..."
            className="pl-10 w-full"
          />
        </div>
      </div>
    </header>
  );
}
