
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CountdownTimer from './CountdownTimer';
import BidProgress from './BidProgress';

const LiveAuctions = () => {
  const auctions = [
    {
      id: 1,
      title: "1967 Porsche 911S",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      currentBid: 85000,
      reservePrice: 95000,
      timeLeft: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
      totalBids: 24,
      isLive: true
    },
    {
      id: 2,
      title: "2022 McLaren 720S",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      currentBid: 245000,
      reservePrice: 275000,
      timeLeft: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5 hours
      totalBids: 18,
      isLive: true
    },
    {
      id: 3,
      title: "1969 Dodge Charger R/T",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      currentBid: 72000,
      reservePrice: 85000,
      timeLeft: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours
      totalBids: 31,
      isLive: true
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Live <span className="gradient-text">Auctions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bid on exclusive vehicles in real-time. Don't miss your chance to own a piece of automotive history.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auctions.map((auction) => (
            <Card key={auction.id} className="car-hover group overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <div className="relative">
                <img 
                  src={auction.image} 
                  alt={auction.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {auction.isLive && (
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 animate-pulse">
                    🔴 LIVE
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{auction.title}</h3>
                
                <div className="space-y-4">
                  <BidProgress 
                    currentBid={auction.currentBid} 
                    reservePrice={auction.reservePrice} 
                  />
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Time Remaining</p>
                    <CountdownTimer targetDate={auction.timeLeft} />
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{auction.totalBids} bids</span>
                    <span>Reserve: ${auction.reservePrice.toLocaleString()}</span>
                  </div>
                  
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                    Place Bid
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveAuctions;
