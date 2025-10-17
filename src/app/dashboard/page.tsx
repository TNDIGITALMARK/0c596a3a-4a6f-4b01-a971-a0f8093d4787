'use client';

import { Navigation } from '@/components/navigation';
import { LabubuImage } from '@/components/labubu-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getSellerListings, mockSellers } from '@/lib/mock-data';
import {
  Plus,
  Package,
  DollarSign,
  TrendingUp,
  Eye,
  Heart,
  Edit,
  Trash2,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DashboardPage() {
  const currentSeller = mockSellers['sarah-tokyo'];
  const myListings = getSellerListings(currentSeller.id);
  const [isCreatingListing, setIsCreatingListing] = useState(false);

  const stats = {
    totalListings: myListings.length,
    totalViews: myListings.reduce((sum, l) => sum + l.views, 0),
    totalFavorites: myListings.reduce((sum, l) => sum + l.favorites, 0),
    totalValue: myListings.reduce((sum, l) => sum + l.price, 0),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Seller Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {currentSeller.name.split(' - ')[0]}!
            </p>
          </div>
          <Button size="lg" onClick={() => setIsCreatingListing(true)}>
            <Plus className="mr-2 h-5 w-5" />
            Create New Listing
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalListings}</div>
              <p className="text-xs text-muted-foreground">Items for sale</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all listings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Favorites</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalFavorites}</div>
              <p className="text-xs text-muted-foreground">People interested</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalValue}</div>
              <p className="text-xs text-muted-foreground">Total listing value</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="create">Create Listing</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* My Listings Tab */}
          <TabsContent value="listings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Listings</CardTitle>
                <CardDescription>Manage your current marketplace listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <div
                      key={listing.id}
                      className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-full sm:w-24 aspect-square bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <LabubuImage type={listing.image} alt={listing.title} className="w-full h-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1">{listing.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {listing.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            <span>{listing.views} views</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4 text-muted-foreground" />
                            <span>{listing.favorites} favorites</span>
                          </div>
                          <div className="font-bold text-primary">${listing.price}</div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col gap-2">
                        <Link href={`/listing/${listing.id}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Create Listing Tab */}
          <TabsContent value="create" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Create New Listing</CardTitle>
                <CardDescription>Add a new Labubu item to the marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input id="title" placeholder="e.g., Winter Series Labubu 2023" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Detailed description of your item, including condition and special features..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (USD) *</Label>
                      <Input id="price" type="number" placeholder="250" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="condition">Condition *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mint">Mint</SelectItem>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="series">Series *</Label>
                      <Input id="series" placeholder="e.g., Winter Series" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="year">Year Released *</Label>
                      <Input id="year" type="number" placeholder="2023" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="series">Series Collection</SelectItem>
                        <SelectItem value="limited">Limited Edition</SelectItem>
                        <SelectItem value="seasonal">Seasonal</SelectItem>
                        <SelectItem value="special">Special Edition</SelectItem>
                        <SelectItem value="vintage">Vintage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Images *</Label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="text-muted-foreground mb-2">
                        Drag & drop images here or click to browse
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Upload up to 5 images (JPEG, PNG)
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" size="lg" className="flex-1">
                      Publish Listing
                    </Button>
                    <Button type="button" variant="outline" size="lg">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>Your listing performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Average Views per Listing</div>
                        <div className="text-2xl font-bold">
                          {Math.round(stats.totalViews / stats.totalListings)}
                        </div>
                      </div>
                      <TrendingUp className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Favorite Rate</div>
                        <div className="text-2xl font-bold">
                          {((stats.totalFavorites / stats.totalViews) * 100).toFixed(1)}%
                        </div>
                      </div>
                      <Heart className="h-8 w-8 text-pink-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Average Item Price</div>
                        <div className="text-2xl font-bold">
                          ${Math.round(stats.totalValue / stats.totalListings)}
                        </div>
                      </div>
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Seller Stats</CardTitle>
                  <CardDescription>Your marketplace reputation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Seller Rating</div>
                      <div className="text-3xl font-bold">{currentSeller.rating} ⭐</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Total Sales</div>
                      <div className="text-3xl font-bold">{currentSeller.totalSales}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Member Since</div>
                      <div className="text-lg font-medium">
                        {new Date(currentSeller.joinedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Specialization</div>
                      <div className="text-lg font-medium text-primary">
                        {currentSeller.specialization}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your seller profile and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-3xl font-bold">
                      {currentSeller.avatar}
                    </div>
                    <div>
                      <Button variant="outline">Change Avatar</Button>
                      <p className="text-xs text-muted-foreground mt-2">JPG, PNG (max 2MB)</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input id="displayName" defaultValue={currentSeller.name} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input id="specialization" defaultValue={currentSeller.specialization} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell buyers about yourself and your collection..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, Country" />
                  </div>

                  <Button type="submit" size="lg">
                    Save Changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
