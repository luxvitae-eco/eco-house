import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { Separator } from '@/components/ui/separator';
import { Bed, Bath, Ruler, Car, House, HousePlus, Trees } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Metadata } from 'next';
import { ImageGallery } from '@/components/eco-house-villa/image-gallery';

export const metadata: Metadata = {
  title: 'Eco House Villa - Sustainable Construction & Building | Lux Vitae',
  description:
    'Luxury eco-design and sustainable construction. Professional development services for high-end eco-friendly villas.',
  keywords:
    'luxury eco house, sustainable villa, green villa construction, sustainable villa development, eco villa construction',
  openGraph: {
    title: 'Eco House Villa - Sustainable Construction & Building | Lux Vitae',
    description: 'Luxury eco-design and sustainable construction for high-end villa projects.',
    type: 'website',
  },
};

export default function EcoHouseVillaPage() {
  const galleryImages = [
    { src: '/assets/eco-house-3/lux-vitae-eco-villa-hall.jpg', alt: 'Eco House Villa - Hall Luxury Pool & Garden' },
    { src: '/assets/eco-house-3/lux-vitae-eco-villa-dinning.jpg', alt: 'Eco House Villa - Dinning Space' },
    { src: '/assets/eco-house-3/lux-vitae-eco-villa-bedroom.jpg', alt: 'Eco House Villa - Bedroom' },
    { src: '/assets/eco-house-3/lux-villa-eco-villa-bathroom-full.jpg', alt: 'Eco House Villa - Bathroom Full' },
    { src: '/assets/eco-house-3/lux-vitae-eco-villa-bath-shower.jpg', alt: 'Eco House Villa - Shower' },
    { src: '/assets/eco-house-3/lux-vitae-eco-villa-home-office.jpg', alt: 'Eco House Villa - Home Office' },
  ];

  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">The Grand Villa</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Generous, regenerative living for those who seek space, legacy, and deep connection to landscape.
                </p>
              </div>

              {/* Hero Image */}
              <div className="mt-16 mx-auto max-w-4xl">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/assets/eco-house-3/lux-vitae-eco-villa-view.jpg"
                    alt="Eco House Villa - Main View"
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
          <section className="my-8">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-lg border bg-card text-card-foreground shadow-xs">
                {/* Bedrooms Column */}
                <div className="text-center md:border-r">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bed className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">4+</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Bedrooms</p>
                </div>

                {/* Bathrooms Column */}
                <div className="text-center md:border-r">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bath className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">4</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Bathrooms</p>
                </div>

                {/* Size Column */}
                <div className="text-center md:border-r">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Ruler className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">180-240</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">m²</p>
                </div>

                {/* Parking Column */}
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">2+</h3>
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
                    src="/assets/eco-house-3/lux-vitae-eco-villa-garden.jpg"
                    alt="Eco House Villa - Detailed View"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    Spacious Luxury for Extended Living
                  </h2>
                  <div className="space-y-4 text-md font-light text-muted-foreground">
                    <p>
                      The Grand Villa is designed for larger families or those who need extra room for hobbies, guests,
                      or a dedicated workspace. With 180 to 240 square meters of premium sustainable living space, it
                      offers uncompromising luxury and environmental responsibility.
                    </p>
                    <p>
                      The expansive design includes four generous bedrooms, multiple living areas, a home office space,
                      and luxurious outdoor amenities. State-of-the-art eco-technologies ensure maximum efficiency and
                      comfort for the whole family.
                    </p>
                    <p>
                      Premium features include comprehensive solar systems, advanced climate control, luxury pool and
                      spa area, and extensive gardens perfect for entertaining and relaxation.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                    <ul className="space-y-2 text-md font-light text-muted-foreground">
                      <li>• 4 bedrooms including luxury master suite</li>
                      <li>• Multiple living areas and home office</li>
                      <li>• Luxury pool, spa, and entertainment areas</li>
                      <li>• Comprehensive solar and energy systems</li>
                      <li>• Premium smart home automation</li>
                      <li>• Luxury sustainable materials throughout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery Component (Client Component) */}
          <ImageGallery galleryImages={galleryImages} />

          {/* Customize Your Grand Villa - Header */}
          <section className="my-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-4">
                Customize Your Eco Villa
              </h2>
              <p className="text-lg text-muted-foreground text-justify max-w-3xl mx-auto">
                Tailor layouts and finishes across your main living spaces, from the living room to the dining area, all
                crafted with sustainable materials for timeless comfort. Elevate your eco-home with our optional annex,
                a dedicated studio space. This addition is exceptionally versatile, functioning perfectly as a quiet
                home office, an inspiring creative studio, or comfortable guest accommodations.
              </p>
              <div className="h-full w-full flex items-center justify-center mt-8">
                <Image
                  src="/assets/eco-house-3/lux-vitae-eco-villa-annex-custom.jpg"
                  alt="Annex Studio Option"
                  width={1280}
                  height={480}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Customize Your Grand Villa - Optional Upgrade */}
          <section className="bg-muted/20">
            <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Carousel */}
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                      <CarouselItem className="h-full p-0">
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/assets/eco-house-3/lux-vitae-eco-villa-annex-creative.jpg"
                            alt="Annex Studio View"
                            width={1080}
                            height={564}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full p-0">
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/assets/eco-house-3/lux-vite-eco-villa-annex-studio.jpg"
                            alt="Annex Studio Option - Studio"
                            width={1080}
                            height={564}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full p-0">
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/assets/eco-house-3/lux-vitae-eco-villa-annex-architect.jpg"
                            alt="Annex Studio Option -  House Office"
                            width={1080}
                            height={564}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full p-0">
                        <div className="h-full w-full flex items-center justify-center">
                          <Image
                            src="/assets/eco-house-3/lux-vitae-eco-villa-annex-workshop.jpg"
                            alt="Annex Studio Option - Workshop"
                            width={1080}
                            height={564}
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
                      space, adds approximately 40-60 square meters of premium, functional customized area: home office,
                      creative studio, or guest accommodation.
                    </p>
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
          <section className="max-w-5xl mx-auto my-16 px-6 lg:px-8">
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
              <Button variant="outline" size="default" asChild className="h-auto p-4 flex-col gap-3">
                <Link href="/eco-house-villa" className="text-center">
                  <HousePlus className="h-8 w-8 mx-auto" />
                  <span className="text-md font-light">Unveil The Grand Villa</span>
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
