
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CountdownTimer from './CountdownTimer';

const LiveAuctions: React.FC = () => {
  const auctions = [
    {
      id: 1,
      title: "1969 Dodge Charger R/T",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      currentBid: 85000,
      endDate: new Date(Date.now() + 6 * 60 * 60 * 1000),
      isLive: true
    },
    {
      id: 2,
      title: "2021 Porsche 911 GT3",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      currentBid: 195000,
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      isLive: false
    },
    {
      id: 3,
      title: "1965 Shelby Cobra 427",
      image: "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      currentBid: 425000,
      endDate: new Date(Date.now() + 18 * 60 * 60 * 1000),
      isLive: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live & <span className="gradient-text">Upcoming Auctions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these exclusive opportunities to own legendary vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auctions.map((auction) => (
            <Card key={auction.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-luxury-gold/20">
              <div className="relative overflow-hidden">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {auction.isLive && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white animate-pulse">
                    🔴 LIVE
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{auction.title}</CardTitle>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-luxury-gold">
                    ${auction.currentBid.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">Current Bid</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CountdownTimer targetDate={auction.endDate} compact />
                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                  {auction.isLive ? 'Bid Now' : 'Watch Auction'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveAuctions;
