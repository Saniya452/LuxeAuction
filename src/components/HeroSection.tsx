
import React from 'react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import BidProgress from './BidProgress';

const HeroSection: React.FC = () => {
  // Mock auction end date (24 hours from now)
  const auctionEndDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-light dark:bg-gradient-luxury z-0" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Own the <span className="gradient-text">Legend</span>.
                <br />
                Bid on Premium Cars.
                <br />
                <span className="gradient-text">Live</span>.
              </h1>
              
              <p className="text-xl text-foreground/80 leading-relaxed max-w-md">
                Discover exclusive auctions for luxury and rare vehicles around the world.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform duration-200"
              >
                Explore Auctions
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black px-8 py-4 text-lg hover:scale-105 transition-all duration-200"
              >
                List Your Car
              </Button>
            </div>

            {/* Live Auction Info */}
            <div className="space-y-4 p-6 bg-black/10 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-red-500">LIVE AUCTION</span>
              </div>
              
              <h3 className="text-lg font-semibold">2022 McLaren P1 GTR</h3>
              
              <CountdownTimer targetDate={auctionEndDate} />
              
              <BidProgress currentBid={385000} reservePrice={450000} />
            </div>
          </div>

          {/* Right Content - Featured Car */}
          <div className="relative animate-scale-in z-30">
            <div className="relative group">
              {/* Car Image Container with Hover Effects */}
              <div className="car-hover relative z-10 rounded-2xl overflow-hidden bg-gradient-to-br from-black/20 to-transparent p-8">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="2022 McLaren P1 GTR"
                  className="w-full h-auto object-cover rounded-xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 z-5" />
              
              {/* Car Info Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/40 dark:bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 z-20">
                <h3 className="text-lg font-semibold text-white">2022 McLaren P1 GTR</h3>
                <p className="text-sm text-white/80">Limited Edition • 3.8L Twin-Turbo V8 • 986 HP</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-luxury-gold font-semibold">Current Bid: $385,000</span>
                  <span className="text-xs text-white/60">18 bids</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-luxury-gold/10 rounded-full blur-xl animate-glow z-15" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl animate-glow z-15" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-25">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
