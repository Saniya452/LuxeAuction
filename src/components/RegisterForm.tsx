
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const password = watch('password');

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register data:', data);
    // Handle registration logic here
  };

  return (
    <Card className="w-full max-w-xs mx-auto glass-effect border-white/20">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-lg font-bold gradient-text">Join LuxeAuction</CardTitle>
        <CardDescription className="text-xs">Create your account</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="space-y-0.5">
              <Label htmlFor="firstName" className="text-xs">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                {...register('firstName', { required: 'First name is required' })}
                className="bg-background/50 h-7 text-xs"
              />
              {errors.firstName && (
                <p className="text-[10px] text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            
            <div className="space-y-0.5">
              <Label htmlFor="lastName" className="text-xs">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                {...register('lastName', { required: 'Last name is required' })}
                className="bg-background/50 h-7 text-xs"
              />
              {errors.lastName && (
                <p className="text-[10px] text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-0.5">
            <Label htmlFor="email" className="text-xs">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="bg-background/50 h-7 text-xs"
            />
            {errors.email && (
              <p className="text-[10px] text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-0.5">
            <Label htmlFor="password" className="text-xs">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                }
              })}
              className="bg-background/50 h-7 text-xs"
            />
            {errors.password && (
              <p className="text-[10px] text-red-500">{errors.password.message}</p>
            )}
          </div>
          
          <div className="space-y-0.5">
            <Label htmlFor="confirmPassword" className="text-xs">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              {...register('confirmPassword', { 
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match'
              })}
              className="bg-background/50 h-7 text-xs"
            />
            {errors.confirmPassword && (
              <p className="text-[10px] text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          
          <div className="flex items-center space-x-1.5 py-1">
            <Checkbox
              id="acceptTerms"
              {...register('acceptTerms', { required: 'You must accept the terms' })}
              className="h-3 w-3"
            />
            <Label htmlFor="acceptTerms" className="text-[10px] leading-tight">
              I agree to the{' '}
              <Button variant="link" className="p-0 h-auto text-primary text-[10px]">
                Terms
              </Button>
              {' '}and{' '}
              <Button variant="link" className="p-0 h-auto text-primary text-[10px]">
                Privacy Policy
              </Button>
            </Label>
          </div>
          {errors.acceptTerms && (
            <p className="text-[10px] text-red-500">{errors.acceptTerms.message}</p>
          )}
          
          <Button type="submit" className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold h-7 text-xs">
            Create Account
          </Button>
        </form>
        
        <Separator className="my-2" />
        
        <div className="space-y-1">
          <Button variant="outline" className="w-full h-6 text-[10px]">
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full h-6 text-[10px]">
            Continue with Apple
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="text-center pt-0 pb-2">
        <p className="text-[10px] text-muted-foreground">
          Already have an account?{' '}
          <Button variant="link" onClick={onSwitchToLogin} className="p-0 h-auto text-primary text-[10px]">
            Sign in
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
