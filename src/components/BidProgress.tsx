
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface BidProgressProps {
  currentBid: number;
  reservePrice: number;
  className?: string;
}

const BidProgress: React.FC<BidProgressProps> = ({ currentBid, reservePrice, className = '' }) => {
  const progress = Math.min((currentBid / reservePrice) * 100, 100);
  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground/60">Current Bid</span>
        <span className="text-lg font-bold text-luxury-gold">{formatPrice(currentBid)}</span>
      </div>
      
      <Progress 
        value={progress} 
        className="h-3 bg-black/20 dark:bg-white/10"
      />
      
      <div className="flex justify-between items-center text-sm">
        <span className="text-foreground/60">Reserve: {formatPrice(reservePrice)}</span>
        <span className="text-foreground/80">{progress.toFixed(1)}% of reserve</span>
      </div>
    </div>
  );
};

export default BidProgress;
