
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="relative overflow-hidden group hover:scale-110 transition-all duration-300"
    >
      <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all duration-500 ${isDark ? '-rotate-90 scale-0' : ''}`} />
      <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 ${isDark ? 'rotate-0 scale-100' : ''}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
