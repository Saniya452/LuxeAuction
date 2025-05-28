
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, TrendingUp, Users, Zap } from 'lucide-react';

const SellYourCar: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Maximum Value",
      description: "Competitive bidding ensures you get the best price for your vehicle"
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Access to international buyers and collectors"
    },
    {
      icon: Zap,
      title: "Fast Process",
      description: "From listing to sale in as little as 7-14 days"
    },
    {
      icon: Camera,
      title: "Professional Photos",
      description: "Free professional photography to showcase your car"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-gold/5 to-luxury-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Sell Your Car</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of sellers who have successfully sold their vehicles through our premium auction platform.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-luxury-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                List Your Car
              </Button>
              <Button variant="outline" size="lg" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sell your car"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-gradient-to-r from-luxury-gold/10 to-transparent">
                  <h3 className="text-lg font-semibold mb-2">Get Started Today</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team will guide you through every step of the selling process
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellYourCar;
