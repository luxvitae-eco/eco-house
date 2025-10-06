'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="text-center">
            <p className="text-6xl font-bold text-primary">Oops!</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Something went wrong</h1>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Sorry, we encountered an unexpected error. Please try again.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button onClick={() => reset()}>Try again</Button>
              <Button variant="outline" asChild>
                <Link href="/">Return to Home Page</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-24" />
      </body>
    </html>
  );
}
