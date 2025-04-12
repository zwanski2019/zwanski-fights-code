
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { CardContent, CardFooter } from '@/components/ui/card';

interface EmailVerificationFormProps {
  email: string;
  otp: string;
  isLoading: boolean;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOtpChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onResendCode: () => void;
  onBackToSignIn: () => void;
}

const EmailVerificationForm: React.FC<EmailVerificationFormProps> = ({
  email,
  otp,
  isLoading,
  onEmailChange,
  onOtpChange,
  onSubmit,
  onResendCode,
  onBackToSignIn
}) => {
  return (
    <form onSubmit={onSubmit}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={onEmailChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="otp" className="text-sm font-medium">Verification Code</label>
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={onOtpChange}
            render={({ slots }) => (
              <InputOTPGroup>
                {slots.map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} index={index} />
                ))}
              </InputOTPGroup>
            )}
          />
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify Email"}
        </Button>
        <Button 
          variant="outline" 
          type="button" 
          className="w-full"
          onClick={onResendCode}
          disabled={isLoading}
        >
          Resend Verification Code
        </Button>
        <Button
          variant="ghost"
          type="button"
          className="w-full"
          onClick={onBackToSignIn}
          disabled={isLoading}
        >
          Back to Sign In
        </Button>
      </CardFooter>
    </form>
  );
};

export default EmailVerificationForm;
