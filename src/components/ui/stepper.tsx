'use client';

import React, { createContext, useContext, forwardRef } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// TypeScript interfaces for Stepper component
export interface StepperContextValue {
  currentStep: number;
  totalSteps: number;
  onStepChange?: (step: number) => void;
}

export interface StepperProps {
  value: number;
  onValueChange?: (value: number) => void;
  children: React.ReactNode;
  className?: string;
}

export interface StepperItemProps {
  step: number;
  children: React.ReactNode;
  className?: string;
}

export interface StepperIndicatorProps {
  className?: string;
  children?: React.ReactNode;
}

export interface StepperTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface StepperSeparatorProps {
  className?: string;
}

// Context for Stepper state management
const StepperContext = createContext<StepperContextValue | undefined>(undefined);

const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('Stepper components must be used within a Stepper');
  }
  return context;
};

// Main Stepper component
export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ value, onValueChange, children, className, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const totalSteps = childrenArray.length;

    const contextValue: StepperContextValue = {
      currentStep: value,
      totalSteps,
      onStepChange: onValueChange,
    };

    return (
      <StepperContext.Provider value={contextValue}>
        <div ref={ref} className={cn('flex items-center justify-between w-full', className)} {...props}>
          {children}
        </div>
      </StepperContext.Provider>
    );
  },
);
Stepper.displayName = 'Stepper';

// StepperItem component
export const StepperItem = forwardRef<HTMLDivElement, StepperItemProps>(
  ({ step, children, className, ...props }, ref) => {
    const { currentStep } = useStepperContext();
    const isActive = step === currentStep;
    const isCompleted = step < currentStep;

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center',
          className,
          // Handle flex-1 for all items except the last one
          className?.includes('not-last:flex-1') ? 'not-last:flex-1' : '',
        )}
        data-step={step}
        data-active={isActive}
        data-completed={isCompleted}
        {...props}
      >
        {children}
      </div>
    );
  },
);
StepperItem.displayName = 'StepperItem';

// StepperTrigger component
export const StepperTrigger = forwardRef<HTMLButtonElement, StepperTriggerProps>(
  ({ asChild = false, children, className, onClick, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const childProps = children.props as any;
      return React.cloneElement(children, {
        ...childProps,
        ref,
        className: cn(className, childProps?.className),
        onClick: (e: React.MouseEvent) => {
          onClick?.();
          childProps?.onClick?.(e);
        },
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          className,
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  },
);
StepperTrigger.displayName = 'StepperTrigger';

// StepperIndicator component
export const StepperIndicator = forwardRef<HTMLDivElement, StepperIndicatorProps>(
  ({ className, children, ...props }, ref) => {
    const { currentStep } = useStepperContext();
    const stepperItem = React.useContext(StepperContext);

    // Get the step number from the parent StepperItem
    const step = parseInt((ref as any)?.current?.closest('[data-step]')?.dataset?.step || '1');
    const isActive = step === currentStep;
    const isCompleted = step < currentStep;

    return (
      <div
        ref={ref}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors',
          isCompleted
            ? 'border-primary bg-primary text-primary-foreground'
            : isActive
              ? 'border-primary bg-background text-primary'
              : 'border-muted bg-background text-muted-foreground',
          className,
        )}
        {...props}
      >
        {children || (isCompleted ? <Check className="h-4 w-4" /> : step)}
      </div>
    );
  },
);
StepperIndicator.displayName = 'StepperIndicator';

// StepperSeparator component
export const StepperSeparator = forwardRef<HTMLDivElement, StepperSeparatorProps>(({ className, ...props }, ref) => {
  const { currentStep } = useStepperContext();
  const stepperItem = React.useContext(StepperContext);

  // Get the step number from the parent StepperItem
  const step = parseInt((ref as any)?.current?.closest('[data-step]')?.dataset?.step || '1');
  const isCompleted = step < currentStep;

  return (
    <div
      ref={ref}
      className={cn('flex-1 h-0.5 mx-2 transition-colors', isCompleted ? 'bg-primary' : 'bg-muted', className)}
      {...props}
    />
  );
});
StepperSeparator.displayName = 'StepperSeparator';

// Improved StepperIndicator that works better with the step detection
export const StepperIndicatorImproved = forwardRef<HTMLDivElement, StepperIndicatorProps & { step: number }>(
  ({ className, children, step, ...props }, ref) => {
    const { currentStep } = useStepperContext();
    const isActive = step === currentStep;
    const isCompleted = step < currentStep;

    return (
      <div
        ref={ref}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors',
          isCompleted
            ? 'border-primary bg-primary text-primary-foreground'
            : isActive
              ? 'border-primary bg-background text-primary'
              : 'border-muted bg-background text-muted-foreground',
          className,
        )}
        {...props}
      >
        {children || (isCompleted ? <Check className="h-4 w-4" /> : step)}
      </div>
    );
  },
);
StepperIndicatorImproved.displayName = 'StepperIndicatorImproved';

export default Stepper;
