'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../../styles/home-page.css';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { HeroSection } from '@/components/home/hero-section/hero-section';
import { Columns3 } from '@/components/home/plan/columns-plan';
import { Separator } from '@/components/ui/separator';
import { Timeline, TimelineItem } from '@/components/ui/timeline';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HomePageBackground } from '@/components/gradients/home-page-background';
import {
  Compass,
  Droplets,
  Users,
  DraftingCompass,
  Construction,
  Handshake,
  HousePlus,
  HouseWifi,
  LandPlot,
  Leaf,
  Settings,
  Sun,
  Trees,
  Zap,
  Award,
  HelpCircle,
} from 'lucide-react';
import Image from 'next/image';

export function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/assets/eco-house-1/lux-vitae-eco-home-1.jpg', alt: 'Eco House Gallery - Modern Living Room' },
    { src: '/assets/eco-house-1/lux-vitae-eco-home-2.jpg', alt: 'Eco House Gallery - Sustainable Kitchen' },
    { src: '/assets/eco-house-1/lux-vitae-eco-home-3.jpg', alt: 'Eco House Gallery - Comfortable Bedroom' },
    { src: '/assets/eco-house-1/lux-vitae-eco-home-4.jpg', alt: 'Eco House Gallery - Eco-Friendly Bathroom' },
    { src: '/assets/eco-house-1/lux-vitae-eco-home-5.jpg', alt: 'Eco House Gallery - Beautiful Exterior View' },
    { src: '/assets/eco-house-1/lux-vitae-eco-home-6.jpg', alt: 'Eco House Gallery - Sustainable Garden' },
  ];

  const projectTimelineData: TimelineItem[] = [
    {
      id: '1',
      title: 'Site & Sustainability Audit',
      description: 'Solar mapping, soil health, biodiversity, local codes. We design with the land, not against it.',
      status: 'completed',
      icon: <LandPlot className="h-4 w-4" />,
    },
    {
      id: '2',
      title: 'Design & Cert Integration',
      description:
        'Passive strategies, material palette, roadmap to LEED or Passive House, sustainability baked in from Day 1.',
      status: 'completed',
      icon: <DraftingCompass className="h-4 w-4" />,
    },
    {
      id: '3',
      title: 'Prefab & Precision Build',
      description: 'Off-site fabrication meets on-site craftsmanship, less waste, faster timeline, flawless execution.',
      status: 'current',
      icon: <Settings className="h-4 w-4" />,
    },
    {
      id: '4',
      title: 'Systems Commissioning',
      description: 'Energy, water, air — all tested, tuned, and optimized before you turn the key.',
      status: 'pending',
      icon: <Zap className="h-4 w-4" />,
    },
    {
      id: '5',
      title: 'Performance & Handover',
      description: 'Dashboards, guides, and ongoing support, so your home thrives for decades.',
      status: 'pending',
      icon: <Award className="h-4 w-4" />,
    },
  ];

  const ecoFeatures = [
    {
      id: 1,
      title: 'Passive Design Principles',
      description: 'Orientation for free comfort from the sun and breeze',
      icon: <Compass className="h-9 w-9 mx-auto text-stone-500" />,
    },
    {
      id: 2,
      title: 'Solar Energy',
      description: 'Harness renewable solar power for sustainable living',
      icon: <Sun className="h-9 w-9 mx-auto text-yellow-500" />,
    },
    {
      id: 3,
      title: 'Green Materials',
      description: 'Eco-friendly building materials and insulation',
      icon: <Trees className="h-9 w-9 mx-auto text-green-500" />,
    },
    {
      id: 4,
      title: 'Water Conservation',
      description: 'Advanced rainwater harvesting and recycling systems',
      icon: <Droplets className="h-9 w-9 mx-auto text-blue-500" />,
    },
    {
      id: 5,
      title: 'Smart Design',
      description: 'Energy-efficient architecture and natural ventilation',
      icon: <HouseWifi className="h-9 w-9 mx-auto text-indigo-500" />,
    },
  ];

  return (
    <>
      <NavigationBar />
      <div>
        <HomePageBackground />

        {/* Section 1: we, Lux Vitae Eco-House Network */}
        <section className="my-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Lux Vitae Eco</h1>
              {/* <p className="mt-2 text-lg leading-8 text-muted-foreground">
              We are a network of passionate individuals committed to creating sustainable living spaces.
            </p> */}
            </div>
            <p className="mt-6 text-center text-[18px] leading-[27px] md:text-[20px] md:leading-[30px]">
              The professional network for building the future of sustainable homes.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-justify text-lg leading-8 text-muted-foreground">
              We connect vetted construction firms, architects, engineers, interior designers, and real estate
              professionals, united by a commitment to healthy, efficient, and beautiful living spaces.
              {/* Your curated ecosystem for the future of sustainable living.
            We bring together vetted construction companies, visionary architects, expert engineers, inspired interior designers, 
            and forward-thinking real estate professionals—united by a commitment to high-performance, healthy, and beautiful homes.

            Your trusted network for building the future of sustainable living space.
            At Lux Vitae Eco-House, we’ve created a curated ecosystem: a trusted network 
            of vetted construction companies, visionary architects, expert engineers, inspired interior designers, 
            and forward-thinking real estate professionals. */}
            </p>
            <div className="mt-16 flex justify-center">
              <Columns3 />
            </div>
          </div>
        </section>

        {/* section 2: why, our Vision Building a Greener future */}
        <HeroSection />

        {/* Section 3: what, Examples of Eco-Homes */}
        <section className="my-16">
          <div className="mx-auto max-w-7xl text-center px-6 lg:px-8">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Eco-Homes</h2>
            <p className={'mt-6 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px]'}>
              Thoughtful Design for Light, Life & Legacy
            </p>
            <p className={'mx-auto mt-6 max-w-2xl text-justify text-lg leading-8 text-muted-foreground'}>
              An ecological home is more than a structure — it’s an integrated system designed to perform in harmony
              with its environment. Lux Vitae eco-homes fuse innovative technology with timeless design to dramatically
              reduce energy use, eliminate waste, and nurture healthier, more resilient living spaces. This is more than
              architecture — it’s a necessary evolution in how we build, live, and belong to nature.
            </p>
            {/* Gallery Grid 3x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

        {/* Section 4: how, build eco-houses */}
        <section className="mx-auto my-16 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Building Process</h2>
            <p className={'mt-6 text-[18px] text-center leading-[27px] md:text-[20px] md:leading-[30px]'}>
              The Three Pillars of Our Approach
            </p>
            {/* grid with three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Pillar 1: Responsibly */}
              <div className="text-center space-y-4">
                <div className="flex flex-1 justify-center bg-secondary border rounded-lg w-16 p-2 mx-auto mb-4">
                  <Trees className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Responsibly
                  <br />
                  Rooted in Place & Nature
                </h3>
                <p className="text-base  text-justify text-muted-foreground leading-relaxed">
                  We begin by listening to the land — solar paths, native ecology, community context. Every decision
                  honors the environment and the people who live here.
                </p>
              </div>
              {/* Pillar 2: Precisely */}
              <div className="text-center space-y-4">
                <div className="flex flex-1 justify-center bg-secondary border rounded-lg w-16 p-2 mx-auto mb-4">
                  <DraftingCompass className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Precisely
                  <br />
                  Engineered for Performance
                </h3>
                <p className="text-base text-justify text-muted-foreground leading-relaxed">
                  From prefab precision to energy modeling and air-tightness testing — we design, build, and verify for
                  lasting comfort, efficiency, and resilience.
                </p>
              </div>
              {/* Pillar 3: Together */}
              <div className="text-center space-y-4">
                <div className="flex flex-1 justify-center bg-secondary border rounded-lg w-16 p-2 mx-auto mb-4">
                  <Handshake className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Cooperatively
                  <br />
                  Aligned in Process
                </h3>
                <p className="text-base text-justify text-muted-foreground leading-relaxed">
                  Architects, builders, homeowners, certifiers — we align everyone early, communicate clearly, and share
                  tools and data so the process feels effortless.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

        {/* section 5: When, Project Timeline */}
        <section className="mx-auto my-16 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Vertical timeline for project tracking */}
              <div className="p-8">
                <div className="mx-auto max-w-4xl text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Our Project Timeline</h3>
                  <p className="text-lg text-muted-foreground">
                    From site assessment to final handover — a proven methodology for every eco-house project
                  </p>
                </div>
                <div className="mx-auto max-w-3xl">
                  <Timeline items={projectTimelineData} orientation="vertical" variant="default" />
                </div>
              </div>
              {/* features carousel component */}
              <div className="p-8">
                <div className="mx-auto max-w-4xl text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Eco-House Features</h3>
                  <p className="text-lg text-muted-foreground">
                    Navigate manually with arrow buttons to explore our sustainable solutions
                  </p>
                </div>
                <div className="mx-auto max-w-md">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {ecoFeatures.map((feature) => (
                        <CarouselItem key={feature.id}>
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <div className="text-center space-y-4">
                                  <div className="text-4xl mb-4">{feature.icon}</div>
                                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

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

            <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

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
          </div>
        </section>

        {/* <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" /> */}

        {/* section 7: our motivation */}
        {/*       <section className="text-center max-w-4xl mx-auto my-16 px-6 lg:px-8">
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Every Lux Vitae eco-home is more than a shelter — it’s built to belong.
        </h3>
        <div className="flex flex-col md:flex-row items-start justify-center gap-4 mt-8">
          <div className="flex items-start gap-4">
            <LandPlot className="w-6 h-6 flex-shrink-0" />
            <p className="text-lg leading-6">To the land it sits on.</p>
          </div>
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 flex-shrink-0" />
            <p className="text-lg leading-6">To the community it joins.</p>
          </div>
          <div className="flex items-start gap-4">
            <Leaf className="w-6 h-6 flex-shrink-0" />
            <p className="text-lg leading-6">To the future it helps create.</p>
          </div>
        </div>
        <p className={'my-6 text-[18px] leading-7 md:text-base md:leading-6'}>
          By integrating regenerative design, local materials, and high-performance systems,<br />
          we reduce harm, support ecosystems, and inspire others to build differently.
        </p>
        <p className={'my-6 text-[18px] leading-7 md:text-[20px] md:leading-6'}>
          This is how homes become part of the solution.
        </p>
      </section> */}

        <Separator className="shrink-0 bg-border h-[1px] w-full footer-border mb-24" />
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
