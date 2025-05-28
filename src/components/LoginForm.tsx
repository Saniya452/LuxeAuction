
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
    // Handle login logic here
  };

  return (
    <Card className="w-full max-w-sm mx-auto glass-effect border-white/20">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold gradient-text">Welcome Back</CardTitle>
        <CardDescription className="text-sm">Sign in to your account</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="bg-background/50 h-9"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="password" className="text-sm">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
              className="bg-background/50 h-9"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>
          
          <Button type="submit" className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold h-9">
            Sign In
          </Button>
        </form>
        
        <div className="mt-3">
          <Button variant="link" className="w-full text-muted-foreground text-sm h-8">
            Forgot your password?
          </Button>
        </div>
        
        <Separator className="my-4" />
        
        <div className="space-y-2">
          <Button variant="outline" className="w-full h-9 text-sm">
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full h-9 text-sm">
            Continue with Apple
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="text-center pt-0">
        <p className="text-xs text-muted-foreground">
          Don't have an account?{' '}
          <Button variant="link" onClick={onSwitchToRegister} className="p-0 h-auto text-primary text-xs">
            Sign up
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
