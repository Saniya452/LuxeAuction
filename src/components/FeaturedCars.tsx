
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedCars: React.FC = () => {
  const featuredCars = [
    {
      id: 1,
      title: "1961 Ferrari 250 GT SWB",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "Est. $8.5M - $10M",
      badge: "🔥 Trending",
      features: ["Matching Numbers", "Concours Condition", "Period Racing History"]
    },
    {
      id: 2,
      title: "2022 McLaren P1 GTR",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "Est. $3.2M - $3.8M",
      badge: "✨ Collector's Choice",
      features: ["Track Only", "1 of 58", "Factory Delivery"]
    },
    {
      id: 3,
      title: "1970 Plymouth 'Cuda 440",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "Est. $125K - $150K",
      badge: "🚗 Low Mileage",
      features: ["Original Paint", "Numbers Matching", "12K Miles"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top <span className="gradient-text">Featured Cars</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium and rare vehicles from around the world
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <Card key={car.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-luxury-gold/20">
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-black/80 text-white">
                  {car.badge}
                </Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.title}</h3>
                <p className="text-lg font-semibold text-luxury-gold mb-4">{car.price}</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
