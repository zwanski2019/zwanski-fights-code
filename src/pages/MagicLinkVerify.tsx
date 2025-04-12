
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import EmailVerificationForm from '@/components/auth/EmailVerificationForm';
import VerificationError from '@/components/auth/VerificationError';
import { useEmailVerification } from '@/hooks/useEmailVerification';

const MagicLinkVerify = () => {
  const {
    email,
    otp,
    isLoading,
    errorDescription,
    hasError,
    setEmail,
    setOtp,
    handleVerifyWithOTP,
    handleResendCode,
    handleNavigateToSignIn
  } = useEmailVerification();

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
        
        {hasError && <VerificationError errorDescription={errorDescription} />}
        
        <EmailVerificationForm
          email={email}
          otp={otp}
          isLoading={isLoading}
          onEmailChange={(e) => setEmail(e.target.value)}
          onOtpChange={setOtp}
          onSubmit={handleVerifyWithOTP}
          onResendCode={handleResendCode}
          onBackToSignIn={handleNavigateToSignIn}
        />
      </Card>
    </div>
  );
};

export default MagicLinkVerify;
