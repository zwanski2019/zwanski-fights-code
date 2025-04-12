
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

export const useEmailVerification = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const errorCode = searchParams.get('error_code');
  const errorDescription = searchParams.get('error_description');
  const hasError = Boolean(errorCode);
  
  // Automatically populate email from URL parameter
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
  
  const handleNavigateToSignIn = () => {
    navigate('/auth');
  };
  
  return {
    email,
    otp,
    isLoading,
    errorCode,
    errorDescription,
    hasError,
    setEmail,
    setOtp,
    handleVerifyWithOTP,
    handleResendCode,
    handleNavigateToSignIn
  };
};
