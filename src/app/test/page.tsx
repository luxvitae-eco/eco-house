'use client';

import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Timeline, TimelineItem } from '@/components/ui/timeline';
import {
  Stepper,
  StepperIndicator,
  StepperIndicatorImproved,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from '@/components/ui/stepper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  AlertCircle,
  Info,
  ChevronDown,
  CheckCircle,
  Clock,
  Package,
  Star,
  Layers,
  Construction,
  Sun,
  Droplet,
  Award,
  ClipboardCheck,
  Zap,
  Droplets,
  Leaf,
  LineChart,
  BadgeCheck,
  Users,
  MessageSquare,
  MapPin,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { Share } from '@/components/shared';

export default function TestPage() {
  const { toast } = useToast();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [stepperValue, setStepperValue] = useState(2);

  // Carousel data examples
  const ecoFeatures = [
    {
      id: 1,
      title: 'Solar Energy',
      description: 'Harness renewable solar power for sustainable living',
      icon: '☀️',
    },
    {
      id: 2,
      title: 'Water Conservation',
      description: 'Advanced rainwater harvesting and recycling systems',
      icon: '💧',
    },
    {
      id: 3,
      title: 'Green Materials',
      description: 'Eco-friendly building materials and insulation',
      icon: '🌿',
    },
    {
      id: 4,
      title: 'Smart Design',
      description: 'Energy-efficient architecture and natural ventilation',
      icon: '🏠',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Our eco-house has exceeded all expectations. The energy savings are incredible!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Architect',
      content: 'The sustainable design principles are beautifully integrated into every aspect.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Environmental Consultant',
      content: 'A perfect example of how modern living can be environmentally responsible.',
      rating: 5,
    },
  ];

  // Timeline data examples
  const projectTimelineData: TimelineItem[] = [
    {
      id: '1',
      title: 'Planning',
      description: 'Initial project planning and design phase',
      date: 'Jan 15',
      status: 'completed',
      icon: <CheckCircle className="h-4 w-4" />,
    },
    {
      id: '2',
      title: 'Development',
      description: 'Active development in progress',
      date: 'Feb 1',
      status: 'current',
      icon: <Clock className="h-4 w-4" />,
    },
    {
      id: '3',
      title: 'Testing',
      description: 'Quality assurance and testing',
      date: 'Mar 1',
      status: 'pending',
    },
  ];

  const orderTimelineData: TimelineItem[] = [
    {
      id: 'order-1',
      title: 'Order Placed',
      description: 'Your order has been confirmed',
      date: '2 hours ago',
      status: 'completed',
    },
    {
      id: 'order-2',
      title: 'Processing',
      description: 'Preparing your items',
      date: 'Current',
      status: 'current',
      icon: <Package className="h-4 w-4" />,
    },
    {
      id: 'order-3',
      title: 'Shipped',
      description: 'On the way to your address',
      date: 'Est. 2-3 days',
      status: 'pending',
    },
  ];

  const showToast = () => {
    toast({
      title: 'Test Toast',
      description: 'This is a test toast notification.',
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">UI Components Test Page</h1>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Share Component */}
          <Card>
            <CardHeader>
              <CardTitle>Share</CardTitle>
              <CardDescription>Content sharing component</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <div className="flex justify-center">
                <Share title="Lux Vitae Eco House" description="Check out this amazing eco-friendly house design!" />
              </div>
              <div className="flex justify-center">
                <Share title="Lux Vitae Eco House" description="Check out this amazing eco-friendly house design!">
                  <Button variant="eco">Share this page</Button>
                </Share>
              </div>
            </CardContent>
          </Card>

          {/* Logo identity and favicon*/}

          {/* Logo */}
          <Card>
            <CardHeader>
              <CardTitle>Logo</CardTitle>
              <CardDescription>Lux Vitae full logo</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-8">
              <img src="/assets/lux-vitae-logo.svg" alt="Lux Vitae Logo" className="h-16 w-auto dark:invert" />
            </CardContent>
          </Card>

          {/* Logo Minified */}
          <Card>
            <CardHeader>
              <CardTitle>Logo Minified</CardTitle>
              <CardDescription>Lux Vitae compact logo</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-8">
              <img
                src="/assets/lux-vitae-logo-min.svg"
                alt="Lux Vitae Logo Minified"
                className="h-16 w-auto dark:invert"
              />
            </CardContent>
          </Card>

          {/* Logo Icon */}
          <Card>
            <CardHeader>
              <CardTitle>Logo Icon</CardTitle>
              <CardDescription>Lux Vitae icon mark</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-8">
              <img src="/assets/lux-vitae-icon.svg" alt="Lux Vitae Icon" className="h-16 w-16 dark:invert" />
            </CardContent>
          </Card>

          {/* Button Component */}
          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>Various button variants and sizes</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="eco">Eco</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <div className="flex gap-2">
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🎯</Button>
              </div>
            </CardContent>
          </Card>

          {/* Input & Label */}
          <Card>
            <CardHeader>
              <CardTitle>Input & Label</CardTitle>
              <CardDescription>Form input components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" disabled placeholder="Disabled input" />
              </div>
            </CardContent>
          </Card>

          {/* Alert */}
          <Card>
            <CardHeader>
              <CardTitle>Alert</CardTitle>
              <CardDescription>Alert notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>This is an informational alert.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>This is a destructive alert.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Collapsible content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>Yes. It comes with default styles.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Select */}
          <Card>
            <CardHeader>
              <CardTitle>Select</CardTitle>
              <CardDescription>Dropdown selection component</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Tab navigation component</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Account settings content.</TabsContent>
                <TabsContent value="password">Password settings content.</TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Table */}
          <Card>
            <CardHeader>
              <CardTitle>Table</CardTitle>
              <CardDescription>Data table component</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>Inactive</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
              <CardDescription>Loading placeholder component</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>

          {/* Separator */}
          <Card>
            <CardHeader>
              <CardTitle>Separator</CardTitle>
              <CardDescription>Visual divider component</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>Content above</div>
              <Separator />
              <div>Content below</div>
              <div className="flex items-center space-x-4">
                <div>Left</div>
                <Separator orientation="vertical" className="h-4" />
                <div>Right</div>
              </div>
            </CardContent>
          </Card>

          {/* Dialog */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Modal dialog component</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>This is a dialog description.</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>Dialog content goes here.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Sheet */}
          <Card>
            <CardHeader>
              <CardTitle>Sheet</CardTitle>
              <CardDescription>Side panel component</CardDescription>
            </CardHeader>
            <CardContent>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sheet Title</SheetTitle>
                    <SheetDescription>This is a sheet description.</SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p>Sheet content goes here.</p>
                  </div>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>

          {/* Dropdown Menu */}
          <Card>
            <CardHeader>
              <CardTitle>Dropdown Menu</CardTitle>
              <CardDescription>Context menu component</CardDescription>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Open Menu
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          {/* Toast */}
          <Card>
            <CardHeader>
              <CardTitle>Toast</CardTitle>
              <CardDescription>Notification toast component</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={showToast}>Show Toast</Button>
            </CardContent>
          </Card>

          {/* Timeline - Project Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Timeline - Project</CardTitle>
              <CardDescription>Vertical timeline for project tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <Timeline items={projectTimelineData} orientation="vertical" variant="default" />
            </CardContent>
          </Card>

          {/* Timeline - Order Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Timeline - Order</CardTitle>
              <CardDescription>Compact timeline for order status</CardDescription>
            </CardHeader>
            <CardContent>
              <Timeline items={orderTimelineData} orientation="vertical" variant="compact" />
            </CardContent>
          </Card>

          {/* Stepper Component */}
          <Card>
            <CardHeader>
              <CardTitle>Stepper</CardTitle>
              <CardDescription>Step-by-step progress indicator</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Stepper value={stepperValue} onValueChange={setStepperValue}>
                {[1, 2, 3, 4].map((step, index) => (
                  <StepperItem key={step} step={step} className="not-last:flex-1">
                    <StepperTrigger asChild>
                      <StepperIndicatorImproved step={step} />
                    </StepperTrigger>
                    {index < 3 && <StepperSeparator />}
                  </StepperItem>
                ))}
              </Stepper>
              <div className="flex justify-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setStepperValue((prev) => Math.max(1, prev - 1))}
                  disabled={stepperValue === 1}
                >
                  Prev
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setStepperValue((prev) => Math.min(4, prev + 1))}
                  disabled={stepperValue === 4}
                >
                  Next
                </Button>
              </div>
              <p className="text-center text-xs text-muted-foreground">Step {stepperValue} of 4</p>
            </CardContent>
          </Card>

          {/* Carousel - Manual Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Carousel - Manual</CardTitle>
              <CardDescription>Navigate manually with arrow buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {ecoFeatures.map((feature) => (
                    <CarouselItem key={feature.id}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center p-6">
                            <div className="text-4xl mb-2">{feature.icon}</div>
                            <h3 className="font-semibold text-center mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          {/* Carousel - Auto-play */}
          <Card>
            <CardHeader>
              <CardTitle>Carousel - Auto-play</CardTitle>
              <CardDescription>Automatically advances every 3 seconds</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full max-w-xs mx-auto" plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent>
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center p-6">
                            <div className="flex mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                              ))}
                            </div>
                            <p className="text-sm text-center mb-4 italic">"{testimonial.content}"</p>
                            <div className="text-center">
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          {/* Development Process Icons */}
          <Card>
            <CardHeader>
              <CardTitle>Development Process</CardTitle>
              <CardDescription>Icons representing construction phases and systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <span className="text-sm">Phases</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Construction className="h-5 w-5 text-primary" />
                  <span className="text-sm">Build</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-5 w-5 text-primary" />
                  <span className="text-sm">Passive Solar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplet className="h-5 w-5 text-primary" />
                  <span className="text-sm">Water Systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm">Certifications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm">QA / Compliance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sustainability Metrics Icons */}
          <Card>
            <CardHeader>
              <CardTitle>Sustainability Metrics</CardTitle>
              <CardDescription>Icons for measuring environmental performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm">Energy Use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplets className="h-5 w-5 text-primary" />
                  <span className="text-sm">Water Consumption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span className="text-sm">Carbon Impact</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  <span className="text-sm">Performance Trends</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm">Certifications Achieved</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partner With Us Icons */}
          <Card>
            <CardHeader>
              <CardTitle>Partner With Us</CardTitle>
              <CardDescription>Icons representing collaboration and partnership</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">Collaboration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="text-sm">Communication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Site-specific Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm">Documentation & Specs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm">Risk-managed Delivery</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Toaster component must be included for toasts to work */}
      <Toaster />
    </div>
  );
}
