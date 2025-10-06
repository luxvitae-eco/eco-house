'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Stepper,
  StepperIndicatorImproved,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from '@/components/ui/stepper';

const steps = [1, 2, 3, 4];
const ecoSteps = [
  { id: 1, title: 'Planning', description: 'Design and permits' },
  { id: 2, title: 'Foundation', description: 'Site preparation' },
  { id: 3, title: 'Construction', description: 'Building phase' },
  { id: 4, title: 'Completion', description: 'Final inspection' },
];

export function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(2);
  const [ecoCurrentStep, setEcoCurrentStep] = useState(1);

  return (
    <div className="space-y-8">
      {/* Basic Stepper Example */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Stepper</CardTitle>
          <CardDescription>Simple stepper with checkmarks for completed steps</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Stepper value={currentStep} onValueChange={setCurrentStep}>
            {steps.map((step) => (
              <StepperItem key={step} step={step} className="not-last:flex-1">
                <StepperTrigger asChild>
                  <StepperIndicatorImproved step={step} />
                </StepperTrigger>
                {step < steps.length && <StepperSeparator />}
              </StepperItem>
            ))}
          </Stepper>

          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              className="w-32"
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              className="w-32"
              onClick={() => setCurrentStep((prev) => Math.min(steps.length, prev + 1))}
              disabled={currentStep >= steps.length}
            >
              Next
            </Button>
          </div>

          <p className="text-muted-foreground text-center text-xs" role="region" aria-live="polite">
            Step {currentStep} of {steps.length}
          </p>
        </CardContent>
      </Card>

      {/* Eco-House Project Stepper */}
      <Card>
        <CardHeader>
          <CardTitle>Eco-House Project Progress</CardTitle>
          <CardDescription>Track your eco-house construction progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Stepper value={ecoCurrentStep} onValueChange={setEcoCurrentStep}>
            {ecoSteps.map((step, index) => (
              <StepperItem key={step.id} step={step.id} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-2">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={step.id} />
                  </StepperTrigger>
                  <div className="text-sm">
                    <div className="font-medium">{step.title}</div>
                    <div className="text-muted-foreground text-xs">{step.description}</div>
                  </div>
                </div>
                {index < ecoSteps.length - 1 && <StepperSeparator />}
              </StepperItem>
            ))}
          </Stepper>

          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setEcoCurrentStep((prev) => Math.max(1, prev - 1))}
              disabled={ecoCurrentStep === 1}
            >
              Previous Phase
            </Button>
            <Button
              onClick={() => setEcoCurrentStep((prev) => Math.min(ecoSteps.length, prev + 1))}
              disabled={ecoCurrentStep >= ecoSteps.length}
            >
              Next Phase
            </Button>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm font-medium">Current Phase: {ecoSteps[ecoCurrentStep - 1]?.title}</p>
            <p className="text-xs text-muted-foreground">{ecoSteps[ecoCurrentStep - 1]?.description}</p>
          </div>
        </CardContent>
      </Card>

      {/* Compact Stepper */}
      <Card>
        <CardHeader>
          <CardTitle>Compact Stepper</CardTitle>
          <CardDescription>Minimal stepper for tight spaces</CardDescription>
        </CardHeader>
        <CardContent>
          <Stepper value={2}>
            {[1, 2, 3].map((step, index) => (
              <StepperItem key={step} step={step} className="not-last:flex-1">
                <StepperIndicatorImproved step={step} className="h-6 w-6 text-xs" />
                {index < 2 && <StepperSeparator />}
              </StepperItem>
            ))}
          </Stepper>
        </CardContent>
      </Card>
    </div>
  );
}

export default StepperDemo;
