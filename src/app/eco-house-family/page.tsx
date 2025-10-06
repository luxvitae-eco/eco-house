import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { Separator } from '@/components/ui/separator';
import { Bed, Bath, Ruler, Car, House, HousePlus, Trees } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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
    {
      src: '/assets/eco-house-2/lux-vitae-eco-house-family-living-dinning.jpg',
      alt: 'Eco House Family - Kitchen open',
    },
    { src: '/assets/eco-house-2/lux-vitae-eco-house-family-kitchen-open.jpg', alt: 'Eco House Family - Kitchen open' },
    {
      src: '/assets/eco-house-2/lux-vitae-eco-house-family-bedroom-suite.jpg',
      alt: 'Eco House Family - Bedroom Suite',
    },
    {
      src: '/assets/eco-house-2/lux-vitae-eco-house-family-bedroom-child.jpg',
      alt: 'Eco House Family - Bedroom Child',
    },
    {
      src: '/assets/eco-house-2/lux-vitae-eco-house-family-bathroom-full.jpg',
      alt: 'Eco House Family - Bathroom full',
    },
    {
      src: '/assets/eco-house-2/lux-vitae-eco-house-family-garage-side.jpg',
      alt: 'Eco House Family - Side-Load Garage',
    },
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
                    src="/assets/eco-house-2/lux-vitae-eco-house-family-courtyard.jpg"
                    alt="Lux Vitae Eco House Family Courtyard"
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
          <section className="mb-16">
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">140-160</h3>
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

          {/* Two Column Section */}
          <section className="my-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/assets/eco-house-2/lux-vitae-eco-house-family.jpg"
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
                      providing private retreats for every family member. With 140 to 160 square meters of thoughtfully
                      designed space, it&apos;s perfect for growing families.
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

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

          {/* Image Gallery Component (Client Component) */}
          <ImageGallery galleryImages={galleryImages} />

          {/* Customize Your Family Courtyard - Optional Upgrade */}
          <section className="my-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
                Customize Your Family Courtyard
              </h2>
              <p className="text-lg text-muted-foreground text-justify max-w-3xl mx-auto">
                Tailor layouts and finishes across your main living spaces, from the living room to the dining area, all
                crafted with sustainable materials for timeless comfort. Elevate your eco-home with our optional annex,
                a dedicated studio space. This addition is exceptionally versatile, functioning perfectly as a quiet
                home office, an inspiring creative studio, or comfortable guest accommodations.
              </p>
              <div className="h-full w-full flex items-center justify-center mt-8">
                <Image
                  src="/assets/eco-house-2/lux-vitae-eco-house-family-annex-studio-custom.jpg"
                  alt="Annex Studio Option"
                  width={1280}
                  height={480}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Carousel */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                      <CarouselItem className="h-full p-0">
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/assets/eco-house-2/lux-vitae-custom-annex-1.jpg"
                            alt="Annex/Studio Option - View 3"
                            width={800}
                            height={450}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full p-0">
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/assets/eco-house-2/lux-vitae-custom-house-office.jpg"
                            alt="Annex Studio Option - House Office"
                            width={800}
                            height={800}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full p-0">
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/assets/eco-house-2/lux-vitae-custom-kitchen.jpg"
                            alt="Annex Studio Option - Custom Kitchen"
                            width={800}
                            height={800}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full p-0">
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/assets/eco-house-2/lux-vitae-custom-living-playroom.jpg"
                            alt="Annex Studio Option - Living Playroom"
                            width={800}
                            height={800}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full p-0">
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/assets/eco-house-2/lux-vitae-custom-kitchen-smart-home.jpg"
                            alt="Annex Studio Option - Kitchen Smart Home"
                            width={800}
                            height={800}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
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

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

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
              <Button variant="outline" size="default" asChild className="h-auto p-4 flex-col gap-3">
                <Link href="/eco-house-family" className="text-center">
                  <House className="h-8 w-8 mx-auto" />
                  <span className="text-md font-light">See Family Courtyard</span>
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
