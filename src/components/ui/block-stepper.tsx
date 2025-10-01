'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

export interface StepperStep {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface BlockStepperProps {
  steps: StepperStep[];
  title?: string;
  showNumbers?: boolean; // Option to show/hide numbers when using icons
}

export function BlockStepper({ steps, title = 'Our Process', showNumbers = true }: BlockStepperProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Current Step Display */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-secondary text-primary-foreground text-xl font-bold mb-4">
          {steps[currentStep].icon ? (
            <div className="flex flex-col items-center justify-center">
              {steps[currentStep].icon}
              {showNumbers && <span className="text-xs mt-1">{steps[currentStep].number}</span>}
            </div>
          ) : (
            steps[currentStep].number
          )}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{steps[currentStep].title}</h3>
        <p className="text-muted-foreground">{steps[currentStep].description}</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentStep ? 'bg-primary' : index < currentStep ? 'bg-primary/60' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>

        <Button
          variant="outline"
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
