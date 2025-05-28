
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 text-center">
      <div className="bg-black/20 dark:bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
        <div className="text-2xl font-bold text-luxury-gold">{timeLeft.days}</div>
        <div className="text-xs text-foreground/60">DAYS</div>
      </div>
      <div className="bg-black/20 dark:bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
        <div className="text-2xl font-bold text-luxury-gold">{timeLeft.hours}</div>
        <div className="text-xs text-foreground/60">HOURS</div>
      </div>
      <div className="bg-black/20 dark:bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
        <div className="text-2xl font-bold text-luxury-gold">{timeLeft.minutes}</div>
        <div className="text-xs text-foreground/60">MIN</div>
      </div>
      <div className="bg-black/20 dark:bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
        <div className="text-2xl font-bold text-luxury-gold">{timeLeft.seconds}</div>
        <div className="text-xs text-foreground/60">SEC</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
