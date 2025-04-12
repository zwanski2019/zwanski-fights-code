
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { CardContent } from '@/components/ui/card';

interface VerificationErrorProps {
  errorDescription: string | null;
}

const VerificationError: React.FC<VerificationErrorProps> = ({ errorDescription }) => {
  return (
    <CardContent>
      <Alert variant="destructive" className="mb-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Verification Error</AlertTitle>
        <AlertDescription>
          {errorDescription || "Your verification link is invalid or has expired."}
        </AlertDescription>
      </Alert>
    </CardContent>
  );
};

export default VerificationError;
