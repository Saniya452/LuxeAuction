
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface BidProgressProps {
  currentBid: number;
  reservePrice: number;
  className?: string;
}

const BidProgress: React.FC<BidProgressProps> = ({ currentBid, reservePrice, className = '' }) => {
  // Add safety checks for undefined values
  const safeBid = currentBid || 0;
  const safeReserve = reservePrice || 1; // Prevent division by zero
  
  const progress = Math.min((safeBid / safeReserve) * 100, 100);
  const formatPrice = (price: number) => `$${(price || 0).toLocaleString()}`;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground/60">Current Bid</span>
        <span className="text-lg font-bold text-luxury-gold">{formatPrice(safeBid)}</span>
      </div>
      
      <Progress 
        value={progress} 
        className="h-3 bg-black/20 dark:bg-white/10"
      />
      
      <div className="flex justify-between items-center text-sm">
        <span className="text-foreground/60">Reserve: {formatPrice(safeReserve)}</span>
        <span className="text-foreground/80">{progress.toFixed(1)}% of reserve</span>
      </div>
    </div>
  );
};

export default BidProgress;
