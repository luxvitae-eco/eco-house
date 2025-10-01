import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { Separator } from '@/components/ui/separator';
import { Bed, Bath, Ruler, Car, House, HousePlus, Trees } from 'lucide-react';
import type { Metadata } from 'next';
import { ImageGallery } from '@/components/eco-house-family/image-gallery';
import '@/styles/single-page.css';

export const metadata: Metadata = {
  title: 'Eco House Family - Sustainable Construction & Building | Lux Vitae',
  description:
    'Family-friendly eco-design and sustainable construction. Professional development services for eco-friendly family homes.',
  keywords:
    'family eco house, sustainable family home, green family construction, sustainable family development, eco family construction',
  openGraph: {
    title: 'Eco House Family - Sustainable Construction & Building | Lux Vitae',
    description: 'Family-friendly eco-design and sustainable construction for building projects.',
    type: 'website',
  },
};

export default function EcoHouseFamilyPage() {
  const galleryImages = [
    { src: '/assets/eco-house-2/living-room-sheer.png', alt: 'Eco House Family - Living Room' },
    { src: '/assets/eco-house-2/lux-vitae-eco-house-family-bedroom-child.jpg', alt: 'Eco House Family - Kitchen' },
    { src: '/assets/eco-house-2/bedroom-sheer.png', alt: 'Eco House Family - Master Bedroom' },
    { src: '/assets/eco-house-2/bath-shower.png', alt: 'Eco House Family - Family Room' },
    { src: '/assets/eco-house-2/shower-toilet-2.png', alt: 'Eco House Family - Bedroom child' },
    { src: '/assets/eco-house-2/shower-toilet-3.png', alt: 'Eco House Family - Garden & Pool' },
    { src: '/assets/eco-house-2/studio-living-room-door-sheer.png', alt: 'Eco House Family - Garden & Pool' },
    { src: '/assets/eco-house-2/studio-living-room-extension-eco.png', alt: 'Eco House Family - Garden & Pool' },
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
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">The Family Courtyard</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  A thoughtfully scaled eco-home for growing families — designed for togetherness, outdoor play, and
                  everyday ease.
                </p>
              </div>

              {/* Hero Image */}
              <div className="mt-16 mx-auto max-w-4xl">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/assets/eco-house-2/lux-vitae-eco-house-family.jpg"
                    alt="Eco House Family - Main View"
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">3</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Bedrooms</p>
                </div>

                {/* Bathrooms Column */}
                <div className="text-center md:border-r">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bath className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">3</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Bathrooms</p>
                </div>

                {/* Size Column */}
                <div className="text-center md:border-r">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Ruler className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">120-140</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">m²</p>
                </div>

                {/* Parking Column */}
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">2</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Parking</p>
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery Component (Client Component) */}
          <ImageGallery galleryImages={galleryImages} />

          {/* Two Column Section */}
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/assets/lux-vitae-eco-home-2.jpg"
                    alt="Eco House Family Courtyard - Detailed View"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    Community Living with Private Retreats
                  </h2>
                  <div className="space-y-4 text-md font-light text-muted-foreground">
                    <p>
                      The Family Courtyard is our most popular model, designed to foster a sense of community while
                      providing private retreats for every family member. With 120 to 140 square meters of thoughtfully
                      designed space, it's perfect for growing families.
                    </p>
                    <p>
                      The expanded layout includes three comfortable bedrooms, a spacious family room, and enhanced
                      outdoor living areas. Advanced eco-technologies ensure your family lives sustainably without
                      compromise.
                    </p>
                    <p>
                      Features include expanded solar capacity, smart energy management, enhanced water conservation
                      systems, and a larger garden with private pool area for family enjoyment.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                    <ul className="space-y-2 text-md font-light text-muted-foreground">
                      <li>• 3 bedrooms including master suite</li>
                      <li>• Spacious family room and dining area</li>
                      <li>• Extended garden with private pool</li>
                      <li>• Enhanced solar energy system</li>
                      <li>• Advanced smart home features</li>
                      <li>• Premium sustainable materials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

          {/* CTA Eco Plan */}
          <section className="max-w-5xl mx-auto mb-16 lg:mb-24 px-8">
            <h3 className="mt-2 text-4xl font-bold text-center tracking-tight text-foreground sm:text-5xl mb-16">
              Explore our sustainable home models
            </h3>
            {/* CTA Link-Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {/* Homeowners CTA */}
              <Button variant="default" size="default" asChild className="h-auto p-4 flex-col gap-3">
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
