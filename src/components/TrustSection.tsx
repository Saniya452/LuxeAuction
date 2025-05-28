
import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Verified Sellers",
      description: "All sellers undergo rigorous verification process"
    },
    {
      icon: Award,
      title: "Secure Transactions",
      description: "Bank-level security with buyer protection guarantee"
    },
    {
      icon: Users,
      title: "Live Auction Rooms",
      description: "Real-time bidding with professional auctioneers"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Expert assistance throughout your buying journey"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Successful Auctions" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "$2.5B+", label: "Total Sales Volume" },
    { value: "150+", label: "Countries Served" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">LuxeAuction</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by collectors and enthusiasts worldwide for premium vehicle transactions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                <point.icon className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
