
import React from 'react';
import { Search, Gavel, CreditCard, Trophy } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Listings",
      description: "Explore our curated collection of premium vehicles from verified sellers worldwide.",
      step: "01"
    },
    {
      icon: Gavel,
      title: "Place Bids",
      description: "Join live auctions or place advance bids on your dream car with confidence.",
      step: "02"
    },
    {
      icon: CreditCard,
      title: "Win & Pay Securely",
      description: "Complete your purchase through our secure payment system with buyer protection.",
      step: "03"
    },
    {
      icon: Trophy,
      title: "Take Delivery",
      description: "Coordinate safe delivery or pickup of your newly acquired vehicle.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your journey to owning exceptional vehicles in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-luxury-gold/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-luxury-gold text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-luxury-gold/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
