'use client';

import Image from 'next/image';
import '../../styles/home-page.css';
import Link from 'next/link';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { Columns3 } from '@/components/home/plan/columns-plan';
import { Separator } from '@/components/ui/separator';
import { HomePageBackground } from '@/components/gradients/home-page-background';
import {
  Stepper,
  StepperIndicatorImproved,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from '@/components/ui/stepper';
import {
  Lightbulb,
  Building2,
  Palette,
  Sparkles,
  Briefcase,
  Settings,
  Users,
  Shield,
  CheckCircle,
  Leaf,
  TrendingUp,
  Scale,
  Award,
} from 'lucide-react';

export function HomeServices() {
  return (
    <>
      <NavigationBar />
      <div>
        <HomePageBackground />

        <section className="my-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Our Professional Services
              </h2>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-justify text-lg leading-8 text-muted-foreground">
              From innovative design concepts to comprehensive development solutions and strategic consulting, we
              provide end-to-end services to bring your sustainable vision to life. Our expert team combines creativity,
              technical expertise, and strategic thinking to deliver exceptional results.
            </p>

            <div className="mt-16 flex justify-center">
              <Columns3 />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl mb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-video bg-green-900/20 rounded-lg flex items-center justify-center">
                <Image
                  src="/assets/map-europe.png"
                  alt="Solar orientation and passive design principles"
                  fill
                  className="object-fill rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Design Services</h3>
              <p className="text-base leading-7 text-muted-foreground mb-6">
                Creative and innovative design solutions that blend aesthetics with functionality. Our design team
                specializes in sustainable architecture, interior design, and human-centered living to create spaces
                that inspire and perform.
              </p>
              <Link
                href="/design"
                className="inline-block bg-gradient-to-b from-green-500/50 to-green-600/70 text-white hover:from-green-600/60 hover:to-green-700/80 transition-all duration-200 h-11 px-6 py-2 rounded-md font-medium"
              >
                Explore Design Services
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1: Our Services Overview */}
        <section className="mx-auto max-w-7xl mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
              Comprehensive Solutions for Your Project
            </h2>
          </div>
        </section>

        {/* Section 2: Design Services - Image Left, Content Right */}
        <section className="mx-auto max-w-7xl mb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Image
                  src="/assets/luxvitae-design.jpg"
                  alt="Solar orientation and passive design principles"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Design Services</h3>
              <p className="text-base leading-7 text-muted-foreground mb-6">
                Creative and innovative design solutions that blend aesthetics with functionality. Our design team
                specializes in sustainable architecture, interior design, and human-centered living to create spaces
                that inspire and perform.
              </p>
              <Link
                href="/design"
                className="inline-block bg-gradient-to-b from-green-500/50 to-green-600/70 text-white hover:from-green-600/60 hover:to-green-700/80 transition-all duration-200 h-11 px-6 py-2 rounded-md font-medium"
              >
                Explore Design Services
              </Link>
            </div>
          </div>
        </section>

        {/* section stepper: creative concept, sustainable architecture, interior design, inspiring spaces */}
        <section className="mx-auto max-w-7xl mb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Design Process</h3>
            <p className="text-base leading-7 text-muted-foreground">
              From initial concept to final execution, we follow a proven step-by-step approach to deliver exceptional
              design solutions that exceed expectations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Stepper value={4} className="mb-8">
              <StepperItem step={1} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={1}>
                      <Lightbulb className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Creative Concept</h4>
                    <p className="text-xs text-muted-foreground max-w-24">Innovative ideas and vision development</p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={2} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={2}>
                      <Building2 className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Sustainable Architecture</h4>
                    <p className="text-xs text-muted-foreground max-w-24">Eco-friendly structural design</p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={3} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={3}>
                      <Palette className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Interior Design</h4>
                    <p className="text-xs text-muted-foreground max-w-24">Aesthetic and functional interiors</p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={4}>
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={4}>
                      <Sparkles className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Inspiring Spaces</h4>
                    <p className="text-xs text-muted-foreground max-w-24">Final touches that inspire living</p>
                  </div>
                </div>
              </StepperItem>
            </Stepper>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Each step builds upon the previous to create harmonious, sustainable spaces
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Development Services - Content Left, Image Right */}
        <section className="mx-auto max-w-7xl mb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Development Services</h3>
              <p className="text-base leading-7 text-muted-foreground mb-6">
                From concept to completion, our development team brings projects to life with precision and expertise.
                We handle construction management, project coordination, and quality assurance to ensure your vision
                becomes reality.
              </p>
              <Link
                href="/development"
                className="inline-block bg-gradient-to-b from-green-500/50 to-green-600/70 text-white hover:from-green-600/60 hover:to-green-700/80 transition-all duration-200 h-11 px-6 py-2 rounded-md font-medium"
              >
                Explore Development Services
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Image
                  src="/assets/luxvitae-development.jpg"
                  alt="Solar orientation and passive design principles"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* section stepper: concept, construction management, project coordination, quality assurance, completion */}
        <section className="mx-auto max-w-7xl mb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Development Process</h3>
            <p className="text-base leading-7 text-muted-foreground">
              From initial concept to final completion, we manage every aspect of your project with precision,
              expertise, and unwavering commitment to quality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Stepper value={5} className="mb-8">
              <StepperItem step={1} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={1}>
                      <Briefcase className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Concept</h4>
                    <p className="text-xs text-muted-foreground max-w-24">Project planning and strategy development</p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={2} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={2}>
                      <Settings className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Construction Management</h4>
                    <p className="text-xs text-muted-foreground max-w-24">
                      Resource allocation and workflow optimization
                    </p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={3} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={3}>
                      <Users className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Project Coordination</h4>
                    <p className="text-xs text-muted-foreground max-w-24">Team synchronization and progress tracking</p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={4} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={4}>
                      <Shield className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Quality Assurance</h4>
                    <p className="text-xs text-muted-foreground max-w-24">Standards verification and testing</p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={5}>
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={5}>
                      <CheckCircle className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Completion</h4>
                    <p className="text-xs text-muted-foreground max-w-24">Final delivery and project handover</p>
                  </div>
                </div>
              </StepperItem>
            </Stepper>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Our systematic approach ensures every project is delivered on time and exceeds expectations
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Consulting Services - Image Left, Content Right */}
        <section className="mx-auto max-w-7xl mb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Image
                  src="/assets/luxvitae-consulting.jpg"
                  alt="Solar orientation and passive design principles"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Consulting Services</h3>
              <p className="text-base leading-7 text-muted-foreground mb-6">
                Strategic guidance and expert advice to navigate complex challenges and optimize your project outcomes.
                Our consultants provide insights on sustainability, regulations, market trends, and best practices.
              </p>
              <Link
                href="/consulting"
                className="inline-block bg-gradient-to-b from-green-500/50 to-green-600/70 text-white hover:from-green-600/60 hover:to-green-700/80 transition-all duration-200 h-11 px-6 py-2 rounded-md font-medium"
              >
                Explore Consulting Services
              </Link>
            </div>
          </div>
        </section>

        {/* section stepper: sustainability, market trends, regulations, best pratices */}
        <section className="mx-auto max-w-7xl mb-20 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Consulting Approach</h3>
            <p className="text-base leading-7 text-muted-foreground">
              We provide comprehensive consulting services that address every aspect of sustainable development, from
              regulatory compliance to market positioning and best practice implementation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Stepper value={4} className="mb-8">
              <StepperItem step={1} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={1}>
                      <Leaf className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Sustainability</h4>
                    <p className="text-xs text-muted-foreground max-w-24">
                      Environmental impact assessment and green solutions
                    </p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={2} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={2}>
                      <TrendingUp className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Market Trends</h4>
                    <p className="text-xs text-muted-foreground max-w-24">
                      Industry analysis and emerging opportunities
                    </p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={3} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={3}>
                      <Scale className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Regulations</h4>
                    <p className="text-xs text-muted-foreground max-w-24">
                      Compliance guidance and regulatory navigation
                    </p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={4}>
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={4}>
                      <Award className="h-4 w-4" />
                    </StepperIndicatorImproved>
                  </StepperTrigger>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Best Practices</h4>
                    <p className="text-xs text-muted-foreground max-w-24">
                      Industry standards and optimization strategies
                    </p>
                  </div>
                </div>
              </StepperItem>
            </Stepper>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Our holistic consulting methodology ensures sustainable success across all project dimensions
              </p>
            </div>
          </div>
        </section>

        {/* <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-24" /> */}
      </div>
    </>
  );
}
