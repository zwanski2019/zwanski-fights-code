
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const MagicLinkVerify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const errorCode = searchParams.get('error_code');
  const errorDescription = searchParams.get('error_description');
  const hasError = Boolean(errorCode);
  
  // Automatically populate email if it's in the URL
  useEffect(() => {
    const emailFromParams = searchParams.get('email');
    if (emailFromParams) {
      setEmail(decodeURIComponent(emailFromParams));
    }
  }, [searchParams]);

  const handleVerifyWithOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !otp) {
      toast({
        title: "Missing information",
        description: "Please enter your email and verification code",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'email'
      });
      
      if (error) throw error;
      
      toast({
        title: "Verification successful",
        description: "You have been verified and logged in",
      });
      
      navigate('/wordpress');
    } catch (error: any) {
      toast({
        title: "Verification failed",
        description: error.message || "Failed to verify your email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleResendCode = async () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to resend the verification code",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
      });
      
      if (error) throw error;
      
      toast({
        title: "Verification code sent",
        description: "Check your email for the new verification code",
      });
    } catch (error: any) {
      toast({
        title: "Failed to send code",
        description: error.message || "Failed to send the verification code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Email Verification</CardTitle>
          <CardDescription className="text-center">
            {hasError 
              ? "Your verification link has expired. Please enter your email and a new code to continue." 
              : "Enter the verification code sent to your email"}
          </CardDescription>
        </CardHeader>
        
        {hasError && (
          <CardContent>
            <Alert variant="destructive" className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Verification Error</AlertTitle>
              <AlertDescription>
                {errorDescription || "Your verification link is invalid or has expired."}
              </AlertDescription>
            </Alert>
          </CardContent>
        )}
        
        <form onSubmit={handleVerifyWithOTP}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="otp" className="text-sm font-medium">Verification Code</label>
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={setOtp}
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
              onClick={handleResendCode}
              disabled={isLoading}
            >
              Resend Verification Code
            </Button>
            <Button
              variant="ghost"
              type="button"
              className="w-full"
              onClick={() => navigate('/auth')}
              disabled={isLoading}
            >
              Back to Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default MagicLinkVerify;
