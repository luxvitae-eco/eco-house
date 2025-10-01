'use client';

import React from 'react';
import { Check, Circle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// TypeScript interfaces for Timeline component
export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  status: 'completed' | 'current' | 'pending';
  icon?: React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  orientation?: 'vertical' | 'horizontal';
  className?: string;
  showConnectors?: boolean;
  variant?: 'default' | 'compact';
}

// Default icons for timeline statuses
const defaultIcons = {
  completed: <Check className="h-4 w-4" />,
  current: <Clock className="h-4 w-4" />,
  pending: <Circle className="h-4 w-4" />,
};

export function Timeline({
  items,
  orientation = 'vertical',
  className,
  showConnectors = true,
  variant = 'default',
}: TimelineProps) {
  const isVertical = orientation === 'vertical';
  const isCompact = variant === 'compact';

  return (
    <div
      className={cn('timeline', isVertical ? 'flex flex-col' : 'flex flex-row items-center overflow-x-auto', className)}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            'timeline-item relative',
            isVertical ? 'flex' : 'flex flex-col items-center flex-shrink-0',
            isVertical && !isCompact ? 'pb-8' : '',
            !isVertical ? 'px-4' : '',
          )}
        >
          {/* Timeline connector */}
          {showConnectors && index < items.length - 1 && (
            <div
              className={cn(
                'timeline-connector',
                isVertical
                  ? 'absolute left-4 top-8 h-full w-0.5 bg-border'
                  : 'absolute top-4 left-full h-0.5 w-8 bg-border',
                item.status === 'completed' ? 'bg-primary' : 'bg-muted',
              )}
            />
          )}

          {/* Timeline icon */}
          <div
            className={cn(
              'timeline-icon relative z-10 flex items-center justify-center rounded-full border-2',
              isVertical ? 'mr-4 mt-1' : 'mb-4',
              isCompact ? 'h-6 w-6' : 'h-8 w-8',
              item.status === 'completed'
                ? 'border-primary bg-primary text-primary-foreground'
                : item.status === 'current'
                  ? 'border-primary bg-background text-primary'
                  : 'border-muted bg-background text-muted-foreground',
            )}
          >
            {item.icon || defaultIcons[item.status]}
          </div>

          {/* Timeline content */}
          <div
            className={cn(
              'timeline-content flex-1',
              isVertical ? '' : 'text-center',
              isCompact ? 'space-y-1' : 'space-y-1',
            )}
          >
            <div
              className={cn(
                'timeline-title font-medium pt-1',
                item.status === 'completed'
                  ? 'text-foreground'
                  : item.status === 'current'
                    ? 'text-primary'
                    : 'text-muted-foreground',
                isCompact ? 'text-sm' : 'text-base',
              )}
            >
              {item.title}
            </div>

            {item.description && (
              <div className={cn('timeline-description text-muted-foreground', isCompact ? 'text-xs' : 'text-sm')}>
                {item.description}
              </div>
            )}

            {item.date && (
              <div className={cn('timeline-date text-muted-foreground', isCompact ? 'text-xs' : 'text-sm')}>
                {item.date}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Export specific timeline item component for custom usage
export function TimelineItem({
  item,
  showConnector = false,
  orientation = 'vertical',
  variant = 'default',
}: {
  item: TimelineItem;
  showConnector?: boolean;
  orientation?: 'vertical' | 'horizontal';
  variant?: 'default' | 'compact';
}) {
  return <Timeline items={[item]} orientation={orientation} showConnectors={showConnector} variant={variant} />;
}

export default Timeline;
