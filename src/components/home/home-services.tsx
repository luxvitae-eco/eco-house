'use client';

import Image from 'next/image';
import '../../styles/home-page.css';
import { Button } from '@/components/ui/button';
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
  Award,
  Briefcase,
  Construction,
  DraftingCompass,
  Handshake,
  HelpCircle,
  HousePlus,
  LandPlot,
  Lightbulb,
  Palette,
  Sparkles,
  Settings,
  Users,
  CheckCircle,
  Leaf,
  TrendingUp,
  Scale,
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

        {/* Section 1: Our Services Overview */}
        <section className="mx-auto max-w-7xl mb-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">
              Comprehensive Solutions for Your Project
            </h2>
          </div>
        </section>

        {/* Section 2: Design Services - Image Left, Content Right */}
        <section className="mx-auto max-w-5xl my-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Image
                  src="/assets/lux-vitae-eco-home-design.jpg"
                  alt="Solar orientation and passive design principles"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground mb-4">Design Services</h3>
              <p className="text-base leading-7 text-muted-foreground mb-6">
                Creative and innovative design solutions that blend aesthetics with functionality. Our design team
                specializes in sustainable architecture, interior design, and human-centered living to create spaces
                that inspire and perform.
              </p>
              <Link
                href="/design"
                className="inline-block border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 h-11 px-6 py-2 rounded-md font-medium"
              >
                Explore Design Services
              </Link>
            </div>
          </div>
        </section>

        {/* section stepper: creative concept, sustainable architecture, interior design, inspiring spaces */}
        <section className="mx-auto max-w-7xl my-16 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Design Process</h3>
            <p className="text-base leading-7 text-muted-foreground">
              From initial concept to final execution, we follow a proven step-by-step approach to deliver exceptional
              design solutions that exceed expectations.
            </p>
          </div>

          {/* Stepper */}
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
                      <HousePlus className="h-4 w-4" />
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
              <p className="text-base text-muted-foreground">
                Each step builds upon the previous to create harmonious, sustainable spaces
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Development Services */}
        <section className="mx-auto max-w-5xl my-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Image
                  src="/assets/lux-vitae-eco-home-development.jpg"
                  alt="Solar orientation and passive design principles"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground mb-4">Development Services</h3>
              <p className="text-base leading-7 text-muted-foreground mb-6">
                From concept to completion, our development team brings projects to life with precision and expertise.
                We handle construction management, project coordination, and quality assurance to ensure your vision
                becomes reality.
              </p>
              <Link
                href="/development"
                className="inline-block border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 h-11 px-6 py-2 rounded-md font-medium"
              >
                Explore Development Services
              </Link>
            </div>
          </div>
        </section>

        {/* section stepper: concept, construction management, project coordination, quality assurance, completion */}
        <section className="mx-auto max-w-7xl my-16 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Development Process</h3>
            <p className="text-base leading-7 text-muted-foreground">
              From initial concept to final completion, we manage every aspect of your project with precision,
              expertise, and unwavering commitment to quality.
            </p>
          </div>

          {/* Stepper */}
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
                    <h4 className="font-semibold text-sm mb-1">Construction</h4>
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
                    <h4 className="font-semibold text-sm mb-1">Coordination</h4>
                    <p className="text-xs text-muted-foreground max-w-24">Team synchronization and progress tracking</p>
                  </div>
                </div>
                <StepperSeparator />
              </StepperItem>

              <StepperItem step={4} className="not-last:flex-1">
                <div className="flex flex-col items-center text-center space-y-3">
                  <StepperTrigger asChild>
                    <StepperIndicatorImproved step={4}>
                      <Award className="h-4 w-4" />
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
              <p className="text-base text-muted-foreground">
                Our systematic approach ensures every project is delivered on time and exceeds expectations
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Consulting Services - Image Left, Content Right */}
        <section className="mx-auto max-w-5xl mb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Image
                  src="/assets/lux-vitae-eco-home-consulting.jpg"
                  alt="Solar orientation and passive design principles"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground mb-4">Consulting Services</h3>
              <p className="text-base leading-7 text-muted-foreground mb-6">
                Strategic guidance and expert advice to navigate complex challenges and optimize your project outcomes.
                Our consultants provide insights on sustainability, regulations, market trends, and best practices.
              </p>
              <Link
                href="/consulting"
                className="inline-block border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 h-11 px-6 py-2 rounded-md font-medium"
              >
                Explore Consulting Services
              </Link>
            </div>
          </div>
        </section>

        {/* section stepper: sustainability, market trends, regulations, best pratices */}
        <section className="mx-auto max-w-7xl my-16 px-6 lg:px-8">
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
              <p className="text-base leading-7 text-muted-foreground">
                Our holistic consulting methodology ensures sustainable success across all project dimensions
              </p>
            </div>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

        {/* section 6: who, Network Partners */}
        <section className="text-center max-w-5xl mx-auto my-16 px-6 lg:px-8">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Network of Partners
          </h2>
          <p className={'mt-6 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px]'}>
            The right collaborators. The right place. The right way.
          </p>
          <p className={'my-6 text-base text-justify text-muted-foreground leading-relaxed'}>
            Whether you’re a homeowner dreaming of a custom eco-retreat, or a developer scaling green housing, our
            curated network of local architects, builders, and sustainability experts ensures your project is built
            responsibly, and without the usual headaches.
          </p>

          <div className="max-w-5xl mx-auto my-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-lg border bg-card text-card-foreground shadow-md p-6 lg:p-8 my-16">
              {/* Clients Column */}
              <div className="text-center md:border-r">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Clients</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Imagine your dream home</p>
              </div>
              {/* Architecture Column */}
              <div className="text-center md:border-r">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <DraftingCompass className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Architects</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Design With Purpose</p>
              </div>

              {/* Developers Column */}
              <div className="text-center md:border-r">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Construction className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Developers</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Scale With Confidence</p>
              </div>

              {/* Contractors Column */}
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Contractors</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Build With Precision</p>
              </div>
            </div>

            {/* our motivation */}
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              Every Lux Vitae Eco home is more than a shelter — it’s built to belong.
            </h3>
            <div className="flex flex-col md:flex-row items-start justify-center gap-4 mt-8">
              <div className="flex items-start gap-4">
                <LandPlot className="w-6 h-6 flex-shrink-0 text-primary" />
                <p className="text-lg leading-6">To the land it sits on.</p>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 flex-shrink-0 text-primary" />
                <p className="text-lg leading-6">To the community it joins.</p>
              </div>
              <div className="flex items-start gap-4">
                <Leaf className="w-6 h-6 flex-shrink-0 text-primary" />
                <p className="text-lg leading-6">To the future it helps create.</p>
              </div>
            </div>
            <p className={'my-6 text-[18px] leading-6 md:text-base'}>
              By integrating regenerative design, local materials, and high-performance systems,
              <br />
              we reduce harm, support ecosystems, and inspire others to build differently.
            </p>
            <p className={'my-6 text-[18px] leading-6 md:text-base'}>This is how homes become part of the solution.</p>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-20" />

        <section className="mx-auto max-w-5xl text-center my-20 px-6 lg:px-8">
          {/* CTA slogan */}
          <h3 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-16">
            Still exploring or ready to begin?
          </h3>

          {/* CTA Link-Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Homeowners CTA */}
            <Button variant="default" size="default" asChild className="h-auto p-4 flex-col gap-3">
              <Link href="/eco-home" className="text-center">
                <HousePlus className="h-8 w-8 mx-auto" />
                <span className="text-md font-light">Explore Our Eco-Home Models</span>
              </Link>
            </Button>

            {/* Professionals CTA */}
            <Button variant="default" size="default" asChild className="h-auto p-4 flex-col gap-3">
              <Link href="/services" className="text-center">
                <Handshake className="h-8 w-8 mx-auto" />
                <span className="text-md font-light">Join Our Partner Network</span>
              </Link>
            </Button>

            {/* Curious CTA */}
            <Button variant="eco" size="default" asChild className="h-auto p-4 flex-col gap-3">
              <Link href="/faq" className="text-center">
                <HelpCircle className="h-8 w-8 mx-auto" />
                <span className="text-md font-light">Your Questions, Answered.</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" /> */}
      </div>
    </>
  );
}
