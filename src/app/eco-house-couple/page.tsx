import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { Separator } from '@/components/ui/separator';
import { Bed, Bath, Ruler, Car, House, HousePlus, Trees } from 'lucide-react';
import type { Metadata } from 'next';
import { ImageGallery } from '@/components/eco-house-couple/image-gallery';

export const metadata: Metadata = {
  title: 'Eco House Couple - Sustainable Construction & Building | Lux Vitae',
  description:
    'Core principles of eco-design and sustainable construction. Professional development services for eco-friendly building projects.',
  keywords: 'sustainable construction, eco development, green building, sustainable development, eco construction',
  openGraph: {
    title: 'Eco House Couple - Sustainable Construction & Building | Lux Vitae',
    description: 'Core principles of eco-design and sustainable construction for building projects.',
    type: 'website',
  },
};

export default function EcoHouseCouplePage() {
  const galleryImages = [
    { src: '/assets/eco-house-1/lux-vitae-eco-house-seaside.jpg', alt: 'Eco House Couple - Seaside' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-terrace.jpg', alt: 'Eco House Couple - Terrace View' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-living-space.jpg', alt: 'Eco House Couple - Open Living Space' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-office.jpg', alt: 'Eco House Couple - Home Office' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-bedroom.jpg', alt: 'Eco House Couple - Bedroom' },
    { src: '/assets/eco-house-1/lux-vitae-eco-house-bathroom.jpg', alt: 'Eco House Couple - Bathroom' },
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
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">The Sanctuary for Two</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Low-maintenance luxury for couples and small households, where every square meter supports calm,
                  connection, and sustainable living.
                </p>
              </div>

              {/* Hero Image */}
              <div className="mt-16 mx-auto max-w-4xl">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/assets/eco-house-1/lux-vitae-eco-house-sanctuary.jpg"
                    alt="Eco House Couple - Main View"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
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

          {/* Two Column Section */}
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/assets/eco-house-1/lux-vitae-eco-house-sanctuary-garden.jpg"
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

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

          {/* Image Gallery Component (Client Component) */}
          <ImageGallery galleryImages={galleryImages} />

          {/* Customize Your Eco-House - Optional Upgrade */}
          <section className="my-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
                Customize Your Eco-Home
              </h2>
              <p className="text-lg text-muted-foreground text-justify max-w-3xl mx-auto">
                Tailor layouts and finishes across your main living spaces, from the living room to the dining area, all
                crafted with sustainable materials for timeless comfort. Elevate your eco-home with our optional annex,
                a dedicated studio space. This addition is exceptionally versatile, functioning perfectly as a quiet
                home office, an inspiring creative studio, or comfortable guest accommodations.
              </p>
              {/*               <div className="h-full w-full flex items-center justify-center mt-8">
                <Image
                  src="/assets/eco-house-2/lux-vitae-eco-house-family-annex-studio-custom.jpg"
                  alt="Annex Studio Option"
                  width={1280}
                  height={480}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div> */}
            </div>
          </section>

          {/* Customize Your Family Courtyard - Optional Upgrade */}
          <section className="py-16 bg-muted/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/assets/eco-house-1/lux-vitae-eco-house-custom.jpg"
                    alt="Eco-House Optional Annex"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Our Home Designs & Options</h3>
                  <div className="space-y-4 text-md font-light text-muted-foreground">
                    <p>
                      Custom living spaces are the foundation of our design. Our optional annex, a dedicated studio
                      space, adds approximately 30-40 square meters of premium, functional area. This versatile addition
                      can be customized to serve as:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Home office or creative studio</li>
                      <li>• Guest accommodation with private entrance</li>
                      <li>• Wellness or meditation space</li>
                    </ul>
                    <p>
                      The annex features the same high-performance eco-standards as the main home, including
                      energy-efficient glazing, sustainable materials, and seamless integration with your home&apos;s
                      smart systems.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button variant="eco" size="lg" asChild>
                      <Link href="/contact">Inquire About Pricing</Link>
                    </Button>
                    <p className="mt-3 text-sm text-muted-foreground">
                      * Available as an upgrade option. Pricing varies based on specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Eco Plan */}
          <section className="max-w-5xl mx-auto mb-16 lg:mb-24 px-8">
            <h3 className="mt-2 text-4xl font-bold text-center tracking-tight text-foreground sm:text-5xl mb-16">
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
                  <span className="text-md font-light">See the Family Courtyard</span>
                </Link>
              </Button>

              {/* Curious CTA */}
              <Button variant="default" size="default" asChild className="h-auto p-4 flex-col gap-3">
                <Link href="/eco-house-villa" className="text-center">
                  <HousePlus className="h-8 w-8 mx-auto" />
                  <span className="text-md font-light">Unveil the Grand Villa</span>
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
