'use client';

import { Share } from '@/components/shared';
import { Button } from '@/components/ui/button';

export default function TestSharePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Share Component Test</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Default Share Button</h2>
            <div className="flex justify-center my-4">
              <Share title="Lux Vitae Eco House" description="Check out this amazing eco-friendly house design!" />
            </div>
            <p className="text-muted-foreground">
              This is the default share button that uses our custom Share component.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Custom Share Button</h2>
            <div className="flex justify-center my-4">
              <Share title="Lux Vitae Eco House" description="Check out this amazing eco-friendly house design!">
                <Button variant="eco">Share this page</Button>
              </Share>
            </div>
            <p className="text-muted-foreground">
              This is a custom share button that uses our custom Share component with a custom trigger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
