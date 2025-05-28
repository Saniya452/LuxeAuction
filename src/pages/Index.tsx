
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LiveAuctions from '@/components/LiveAuctions';
import FeaturedCars from '@/components/FeaturedCars';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import Testimonials from '@/components/Testimonials';
import SellYourCar from '@/components/SellYourCar';
import RecentlySold from '@/components/RecentlySold';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      <HeroSection />
      <LiveAuctions />
      <FeaturedCars />
      <HowItWorks />
      <TrustSection />
      <Testimonials />
      <SellYourCar />
      <RecentlySold />
      <FAQ />
      <Newsletter />
      <Footer isDark={isDark} onThemeToggle={toggleTheme} />
    </div>
  );
};

export default Index;
