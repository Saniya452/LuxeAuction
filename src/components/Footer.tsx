
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface FooterProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDark, onThemeToggle }) => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">LuxeAuction</h3>
            <p className="text-muted-foreground mb-4">
              The world's premier platform for luxury and classic vehicle auctions.
            </p>
            <div className="flex items-center space-x-4">
              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
              <span className="text-sm text-muted-foreground">Theme</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Auctions</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Live Auctions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Upcoming Events</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Results</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Featured Cars</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Sell Your Car</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Consignment</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Appraisals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Financing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 LuxeAuction. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
