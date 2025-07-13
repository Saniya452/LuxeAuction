
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

const RecentlySold: React.FC = () => {
  const soldCars = [
    {
      id: 1,
      title: "1963 Porsche 911 Carrera",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      soldPrice: 105000,
      estimateRange: "$95K - $115K",
      bidders: 13,
      soldDate: "2 days ago"
    },
    {
      id: 2,
      title: "1970 Chevelle SS 454",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      soldPrice: 78500,
      estimateRange: "$70K - $85K",
      bidders: 9,
      soldDate: "5 days ago"
    },
    {
      id: 3,
      title: "2019 McLaren 720S",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      soldPrice: 285000,
      estimateRange: "$260K - $300K",
      bidders: 21,
      soldDate: "1 week ago"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recently <span className="gradient-text">Sold</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the latest auction results and market trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {soldCars.map((car) => (
            <Card key={car.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                  SOLD
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{car.title}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sold for:</span>
                    <span className="text-xl font-bold text-green-600">
                      ${car.soldPrice.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Estimate:</span>
                    <span>{car.estimateRange}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Bidders:</span>
                    <span className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1 text-luxury-gold" />
                      {car.bidders}
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground pt-2 border-t">
                    Sold {car.soldDate}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlySold;
