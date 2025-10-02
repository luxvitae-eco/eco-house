'use client';

import { Button } from '@/components/ui/button';

export default function TestErrorPage() {
  const triggerError = () => {
    throw new Error('This is a test error');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Test Error Page</h1>
      <p className="mb-6">Click the button below to trigger an error and test the error handling:</p>
      <Button onClick={triggerError} variant="destructive">
        Trigger Error
      </Button>
    </div>
  );
}
