
import React from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import AuthModal from './AuthModal';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, onThemeToggle }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">
              LuxeAuction
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
                Auctions
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
                Cars
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
                About
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            
            <AuthModal defaultView="login">
              <Button variant="outline" className="hidden sm:inline-flex">
                Sign In
              </Button>
            </AuthModal>
            
            <AuthModal defaultView="register">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                Register
              </Button>
            </AuthModal>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
