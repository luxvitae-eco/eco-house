'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { Separator } from '@/components/ui/separator';
import { Bed, Bath, Ruler, Car, House, HousePlus, Trees } from 'lucide-react';
import '@/styles/single-page.css';

export default function EcoHouseCouplePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/assets/eco-house-1/lux-vitae-eco-house-front-1024-768.jpg', alt: 'Eco House Couple - Exterior View' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-living-room-1024x768.jpg', alt: 'Eco House Couple - Living Room' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-kitchen-open-1024x768.jpg', alt: 'Eco House Couple - Kitchen' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-bedroom-1024x768.jpg', alt: 'Eco House Couple - Bedroom' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-bathroom-1024x768.jpg', alt: 'Eco House Couple - Bathroom' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-office-1024x768.jpg', alt: 'Eco House Couple - Home office' },
  ];

  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Sanctuary for Two</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Low-maintenance luxury for couples and small households, where every square meter supports calm,
                  connection, and sustainable living.
                </p>
              </div>

              {/* Hero Image */}
              <div className="mt-16 mx-auto max-w-4xl">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/assets/lux-vitae-eco-home-1.jpg"
                    alt="Eco House Couple - Main View"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Property Features - 4 columns */}
          <section className="pb-16">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-lg border bg-card text-card-foreground shadow-xs">
                {/* Bedrooms Column */}
                <div className="text-center md:border-r">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bed className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">2</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Bedrooms</p>
                </div>

                {/* Bathrooms Column */}
                <div className="text-center md:border-r">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bath className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">2</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Bathrooms</p>
                </div>

                {/* Size Column */}
                <div className="text-center md:border-r">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Ruler className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">80-120</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">m²</p>
                </div>

                {/* Parking Column */}
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">1</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Parking</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section - 3x2 Grid */}
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">A Home of Quiet Luxury</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Step inside your serene retreat — where every detail supports ease, connection, and light.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Two Column Section */}
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/assets/lux-vitae-eco-home-1.jpg"
                    alt="Eco House Sanctuary for Two - Detailed View"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    Perfect Balance of Comfort & Efficiency
                  </h2>
                  <div className="space-y-4 text-md font-light text-muted-foreground">
                    <p>
                      Our Sanctuary for Two is thoughtfully designed for couples or small families who value
                      sustainability without compromising on comfort. With 80 to 120 square meters of intelligently
                      planned living space, every corner serves a purpose.
                    </p>
                    <p>
                      The open-plan design maximizes natural light and airflow, while premium insulation and
                      energy-efficient systems ensure year-round comfort with minimal environmental impact.
                    </p>
                    <p>
                      Features include solar panels, rainwater harvesting, smart home integration, and a private garden
                      space perfect for growing your own organic produce.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                    <ul className="space-y-2 text-md font-light text-muted-foreground">
                      <li>• 2 bedrooms with natural lighting</li>
                      <li>• Open-plan kitchen and living area</li>
                      <li>• Private garden and outdoor space</li>
                      <li>• Solar energy system</li>
                      <li>• Smart home automation</li>
                      <li>• Sustainable building materials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-8" />

          {/* CTA Eco Plan */}
          <section className="max-w-5xl mx-auto mb-16 lg:mb-24 p-8">
            <h3 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Explore our sustainable home models
            </h3>
            {/* CTA Link-Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {/* Homeowners CTA */}
              <Button variant="outline" size="default" asChild className="h-auto p-4 flex-col gap-3">
                <Link href="/eco-house-couple" className="text-center">
                  <Trees className="h-8 w-8 mx-auto" />
                  <span className="text-md font-light">Tour the Sanctuary</span>
                </Link>
              </Button>

              {/* Professionals CTA */}
              <Button variant="default" size="default" asChild className="h-auto p-4 flex-col gap-3">
                <Link href="/eco-house-family" className="text-center">
                  <House className="h-8 w-8 mx-auto" />
                  <span className="text-md font-light">See Family Courtyard</span>
                </Link>
              </Button>

              {/* Curious CTA */}
              <Button variant="eco" size="default" asChild className="h-auto p-4 flex-col gap-3">
                <Link href="/eco-house-villa" className="text-center">
                  <HousePlus className="h-8 w-8 mx-auto" />
                  <span className="text-md font-light">Unveil Grand Villa</span>
                </Link>
              </Button>
            </div>
          </section>
        </div>
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
