import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { SinglePageCardGradient } from '@/components/gradients/single-page-card-gradient';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlockStepper, type StepperStep } from '@/components/ui/block-stepper';
import {
  Hammer,
  ShieldCheck,
  Recycle,
  Users,
  Award,
  TreePine,
  Palette,
  Sun,
  Droplets,
  Zap,
  Wind,
  Leaf,
  MapPin,
  Lightbulb,
  FileCheck,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import '@/styles/single-page.css';

export const metadata: Metadata = {
  title: 'Development - Sustainable Construction & Building | Lux Vitae',
  description:
    'Core principles of eco-design and sustainable construction. Professional development services for eco-friendly building projects.',
  keywords: 'sustainable construction, eco development, green building, sustainable development, eco construction',
  openGraph: {
    title: 'Development - Sustainable Construction & Building | Lux Vitae',
    description: 'Core principles of eco-design and sustainable construction for building projects.',
    type: 'website',
  },
};

// Define development process steps
const consultingSteps: StepperStep[] = [
  {
    number: 1,
    title: 'Project initiation and planning',
    description: 'Comprehensive evaluation of site conditions and environmental factors',
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    number: 2,
    title: 'Permit acquisition and approvals',
    description: 'Initial design concepts based on site analysis and client requirements',
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    number: 3,
    title: 'Construction management',
    description: 'Integration of sustainable technologies and eco-friendly solutions',
    icon: <Leaf className="h-6 w-6" />,
  },
  {
    number: 4,
    title: 'Quality control and testing',
    description: 'Detailed refinement to optimize performance and efficiency',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    number: 5,
    title: 'Systems commissioning',
    description: 'Complete technical drawings and specification documentation',
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    number: 6,
    title: 'Final delivery and documentation',
    description: 'Ongoing support during construction phase to ensure design integrity',
    icon: <Wrench className="h-6 w-6" />,
  },
];

export default function DevelopmentPage() {
  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Development Process</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Core principles of eco-design and sustainable construction that transform your vision into an
                  environmentally responsible reality.
                </p>
              </div>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-8" />

          {/* Development Philosophy */}
          <section className="my-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Development Approach</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Every phase of construction is carefully managed to minimize environmental impact while maximizing
                  quality.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Recycle className="h-6 w-6 text-primary" />
                      Sustainable Materials
                    </CardTitle>
                    <CardDescription>Certified eco-friendly building materials</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-base leading-7 text-muted-foreground">
                      We source only certified sustainable materials, prioritizing locally-sourced options that reduce
                      transportation emissions while supporting regional economies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TreePine className="h-6 w-6 text-primary" />
                      Zero-Waste Construction
                    </CardTitle>
                    <CardDescription>Minimizing waste throughout the building process</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-base leading-7 text-muted-foreground">
                      Our construction methods prioritize waste reduction through precise planning, material
                      optimization, and comprehensive recycling programs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Development Services */}
          <section className="my-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Construction Excellence</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Professional development services for sustainable building projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Hammer className="h-6 w-6 text-primary" />
                      Construction Management
                    </CardTitle>
                    <CardDescription>End-to-end project management</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Complete project oversight from groundbreaking to final inspection, ensuring timeline adherence
                      and quality standards.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Project planning & scheduling</li>
                      <li>• Quality control monitoring</li>
                      <li>• Budget management</li>
                      <li>• Timeline coordination</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                      Quality Assurance
                    </CardTitle>
                    <CardDescription>Comprehensive quality control systems</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Rigorous quality control processes ensure every aspect of construction meets our high standards
                      for sustainability and durability.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Material inspection</li>
                      <li>• Construction audits</li>
                      <li>• Performance testing</li>
                      <li>• Certification compliance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-6 w-6 text-primary" />
                      Expert Team
                    </CardTitle>
                    <CardDescription>Skilled craftspeople and specialists</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Our team combines traditional craftsmanship with cutting-edge sustainable building techniques for
                      exceptional results.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Certified builders</li>
                      <li>• Sustainability specialists</li>
                      <li>• Local craftspeople</li>
                      <li>• Technical experts</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section className="my-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Development Process</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  A systematic approach to sustainable construction excellence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle>Phase 1: Planning & Preparation</CardTitle>
                    <CardDescription>Thorough site analysis and sustainable planning</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      We begin with comprehensive site assessment, soil analysis, and environmental impact evaluation to
                      ensure optimal building placement and minimal ecosystem disruption.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Site survey and analysis</li>
                      <li>• Permits and approvals</li>
                      <li>• Material sourcing</li>
                      <li>• Timeline development</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle>Phase 2: Construction & Quality</CardTitle>
                    <CardDescription>Sustainable building with continuous monitoring</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Construction proceeds with careful attention to sustainable practices, quality control, and
                      regular progress monitoring to ensure adherence to our environmental standards.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Foundation and structure</li>
                      <li>• Systems installation</li>
                      <li>• Finishing and details</li>
                      <li>• Final inspection</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Our Process - Stepper Section */}
          <section className="my-16">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Development Process
                </h2>
              </div>

              <BlockStepper steps={consultingSteps} showNumbers={false} />
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

          {/* Call to Action */}
          <section className="mb-20">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                <SinglePageCardGradient />

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Ready to Build Your Sustainable Future?</CardTitle>
                  <CardDescription>
                    Let&apos;s bring your eco-home vision to life with expert construction services
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground mb-8">
                    Our experienced development team is ready to manage every aspect of your sustainable building
                    project, from initial planning through final completion.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/contact">Start Your Project</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/consulting">Get Expert Advice</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
