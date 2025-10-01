'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BackToTopProps {
  showAfterScroll?: number;
  className?: string;
  showLabel?: boolean;
}

export function BackToTop({ showAfterScroll = 200, className, showLabel = false }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [showAfterScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out',
        'opacity-0 translate-y-2 animate-in fade-in slide-in-from-bottom-2',
        isVisible && 'opacity-100 translate-y-0',
        className,
      )}
    >
      <Button
        onClick={scrollToTop}
        variant="default"
        size={showLabel ? 'default' : 'icon'}
        className={cn(
          'shadow-lg hover:shadow-xl transition-all duration-200',
          'border border-lime-700/20 backdrop-blur-sm',
          showLabel && 'pl-3 pr-4 gap-2',
        )}
        aria-label="Back to top"
      >
        <ChevronUp className="h-4 w-4" />
        {showLabel && <span className="text-sm font-medium">Top</span>}
      </Button>
    </div>
  );
}
