
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
  children: React.ReactNode;
  defaultView?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ children, defaultView = 'login' }) => {
  const [currentView, setCurrentView] = useState<'login' | 'register'>(defaultView);
  const [open, setOpen] = useState(false);

  const switchToRegister = () => setCurrentView('register');
  const switchToLogin = () => setCurrentView('login');

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm border-0 bg-transparent shadow-none p-0">
        {currentView === 'login' ? (
          <LoginForm onSwitchToRegister={switchToRegister} />
        ) : (
          <RegisterForm onSwitchToLogin={switchToLogin} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
