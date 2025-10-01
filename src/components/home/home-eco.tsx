'use client';

import '../../styles/home-page.css';
import Link from 'next/link';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { ColumnsHouse } from '@/components/home/plan/columns-house';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HomePageBackground } from '@/components/gradients/home-page-background';
import {
  AirVent,
  Award,
  BrickWall,
  Cctv,
  Compass,
  Droplets,
  House,
  HousePlus,
  HouseWifi,
  Sun,
  SwatchBook,
  Trees,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

export function HomeEco() {
  return (
    <>
      <NavigationBar />
      <div>
        <HomePageBackground />

        <section className="mt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Eco House Designed for Life
              </h2>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-justify text-lg leading-8 text-muted-foreground">
              Our thoughtfully designed eco house models provide a blueprint for a life in harmony with nature. Each
              model, from a cozy couple's retreat to a spacious family residence, is a canvas for your dreams, blending
              sustainable architecture with unparalleled comfort.
            </p>
            <div className="mt-16 flex justify-center">
              <ColumnsHouse />
            </div>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

        {/* Section 1: Features Section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-8">What’s Inside Every Eco House</h2>
            <p className="mx-auto mt-6 max-w-2xl text-justify text-lg leading-8 text-muted-foreground">
              Every Lux Vitae eco house includes these high-performance systems as standard — because sustainability is
              non-negotiable. Finishes, materials, and colors are thoughtfully customizable: choose from local wood,
              regional stone, flooring, and palettes that reflect your style and place.
            </p>
          </div>
        </section>

        {/* Section 2: features - grid cols 3 */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          <h3 className="text-2xl font-bold tracking-tight text-center text-foreground mb-8">
            Standard in Every Lux Vitae Eco House
          </h3>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 items-start">
            <div className="border rounded-lg p-4">
              <p className="inline-flex items-center font-medium py-2">
                <span className="bg-secondary rounded-full p-1 mr-2">
                  <Compass className="h-5 w-5 mx-auto" />
                </span>{' '}
                Passive Design Principles
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Free comfort from the sun and breeze.
                <br />
                Oriented for optimal solar gain with thermal mass floors and strategic window placement to minimize
                mechanical heating andcooling.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="inline-flex items-center font-medium py-2">
                <span className="bg-secondary rounded-full p-1 mr-2">
                  <BrickWall className="h-5 w-5 mx-auto" />
                </span>{' '}
                High-Performance Windows & Insulation
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Quiet, cozy, and ultra-efficient.
                <br />
                High-efficiency glazing, super-insulated walls, and thermal-break frames with enhanced acoustic
                insulation provide comfort in every season.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="inline-flex items-center font-medium py-2">
                <span className="bg-secondary rounded-full p-1 mr-2">
                  <Sun className="h-5 w-5 mx-auto" />
                </span>{' '}
                Solar Renewable Energy
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Energy independence, built in.
                <br />
                Solar panels with optional battery storage, designed to offset 50–80% of your energy use. All homes are
                pre-wired for seamless renewable integration.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="inline-flex items-center font-medium py-2">
                <span className="bg-secondary rounded-full p-1 mr-2">
                  <Droplets className="h-5 w-5 mx-auto" />
                </span>{' '}
                Rainwater & Greywater Systems
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Every drop counts.
                <br />
                Harvest rainwater for irrigation and reuse greywater from sinks/showers for landscaping, cutting
                municipal water use by up to 50%.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="inline-flex items-center font-medium py-2">
                <span className="bg-secondary rounded-full p-1 mr-2">
                  <AirVent className="h-5 w-5 mx-auto" />
                </span>{' '}
                Smart Ventilation & Air Quality
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Breathe easy, year-round.
                <br />
                Energy Recovery Ventilator (ERV) with passive cross-flow design ensure fresh, filtered air and smart
                sensors that monitor humidity and VOCs.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="inline-flex items-center font-medium py-2">
                <span className="bg-secondary rounded-full p-1 mr-2">
                  <Zap className="h-5 w-5 mx-auto" />
                </span>{' '}
                Healthy, Efficient Appliances
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Effortless efficiency, healthier living.
                <br />
                Induction cooktops, heat-pump dryers, and Energy Star refrigerators 40–60% more efficient than
                conventional models.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="inline-flex items-center font-medium py-2">
                <span className="bg-secondary rounded-full p-1 mr-2">
                  <HouseWifi className="h-5 w-5 mx-auto" />
                </span>{' '}
                Smart Home Integration
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Control your comfort, not your bills.
                <br />
                Monitor energy, water, and air quality in real time with intuitive dashboards that help you optimize
                performance and reduce waste.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="inline-flex items-center font-medium py-2">
                <span className="bg-secondary rounded-full p-1 mr-2">
                  <Trees className="h-5 w-5 mx-auto" />
                </span>{' '}
                Regenerative Landscaping
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Beauty that gives back
                <br />
                Native, drought-tolerant plants, edible gardens, and permeable surfaces that manage stormwater, support
                pollinators, and eliminate chemical runoff.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="inline-flex items-center font-medium py-2">
                <span className="bg-secondary rounded-full p-1 mr-2">
                  <SwatchBook className="h-5 w-5 mx-auto" />
                </span>{' '}
                Local Materials & Finishes
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                Rooted in Place
                <br />
                Regional materials, non-toxic and low-VOC finishes, reducing emissions, supporting local makers, and
                honoring the landscape’s natural character.{' '}
              </p>
            </div>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

        {/* Section 3: Security Solutions - Image Left, Content Right */}
        <section className="mx-auto max-w-7xl  px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Image
                  src="/assets/eco-house-3/lux-vitae-eco-home-door.jpg"
                  alt="Solar orientation and passive design principles"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="inline-flex items-center text-2xl font-bold tracking-tight text-foreground mb-4">
                <Cctv className="h-6 w- mr-2" /> Eco House Security Solutions
              </h3>
              <p className="text-base leading-7 text-muted-foreground mb-4">Integrated Home Protection</p>
              <p className="text-base leading-7 text-muted-foreground mb-4">
                We provide professional installation of smart home security alarms and CCTV (Closed-Circuit Television)
                systems through our trusted partner network.
              </p>
              <p className="text-base leading-7 text-muted-foreground mb-4">
                These solutions offer enhanced safety and remote monitoring, delivering a complete and intelligent
                security system for both homeowners and professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Green Labels - Content Left, Image Right */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="inline-flex items-center text-2xl font-bold tracking-tight text-foreground mb-4">
                <Award className="h-6 w-6 mr-2" /> Green Labels & Certifications
              </h3>
              <p className="text-base leading-7 text-muted-foreground mb-4">
                Certifications aren't mere badges; they're tangible proof of commitment.
              </p>
              <p className="text-base leading-7 text-muted-foreground mb-4">
                For homeowners, they mean healthier air, lower bills, and peace of mind. For professionals, they ensure
                compliance, performance verification, and added value.
              </p>
              <p className="text-base leading-7 text-muted-foreground">
                Beyond the certifications, every Lux Vitae eco house consistently meets rigorous third-party standards,
                ensuring true sustainability and giving you complete peace of mind.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Image
                  src="/assets/eco-house-air.jpg"
                  alt="Solar orientation and passive design principles"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

        {/* Section 5: CLASSIFICATION */}
        <section className="px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-4">Our property classification</h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-4">
              Not sure what type of property fits your needs?
            </p>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Understanding property types, sizes, styles, and locations helps you find the perfect sustainable house,
              whether near the city or at nature’s edge.
            </p>

            {/* TABLE 1: PRIMARY CLASSIFICATION */}
            <div className="mb-16">
              <h3 className="flex items-center text-xl font-bold p-4 mb-4">
                <span className="w-8 h-8 bg-lime-700/50 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  1
                </span>
                Primary Classification: Property Type
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm font-light text-muted-frontend rounded-tl-lg rounded-tr-lg shadow-md bg-radial-[at_50%_50%] from-lime-800/40 via-lime-900/30 to-green-950/50 to-90%">
                  <thead className="rounded-full text-muted-frontend">
                    <tr className="border-b border-lime-900/50 font-base">
                      <th className="px-4 py-3 text-left">Property Type</th>
                      <th className="px-4 py-3 text-left">Description</th>
                      <th className="px-4 py-3 text-left">Common Variants</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-lime-900/50">
                    <tr className="hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Single-Family Home</td>
                      <td className="px-4 py-2">Standalone house on its own lot.</td>
                      <td className="px-4 py-2">Ranch, Bungalow, Cottage</td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Condominium (Condo)</td>
                      <td className="px-4 py-2">Individual unit in multi-unit building.</td>
                      <td className="px-4 py-2">High-rise, Townhouse-style</td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Townhouse</td>
                      <td className="px-4 py-2">Multi-floor, attached to neighbors.</td>
                      <td className="px-4 py-2">Rowhouse, End-unit</td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Villa</td>
                      <td className="px-4 py-2">Luxury detached home, often resort-style.</td>
                      <td className="px-4 py-2">Beach, Country, Golf villa</td>
                    </tr>
                    <tr className="border-b border-lime-900/50 hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Multi-Family</td>
                      <td className="px-4 py-2">2+ units (owner-occupied or rental).</td>
                      <td className="px-4 py-2">Duplex, Triplex, Fourplex</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TABLE 2: SECONDARY CLASSIFICATION */}
            <div className="mb-16">
              <h3 className="flex items-center text-xl font-bold p-4 mb-4">
                <span className="w-8 h-8 bg-lime-700/50 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  2
                </span>
                Secondary Classification: Bedroom Count
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm font-light text-muted-frontend rounded-tl-lg rounded-tr-lg shadow-md bg-radial-[at_50%_50%] from-lime-800/40 via-lime-900/30 to-green-950/50 to-90%">
                  <thead className="rounded-full text-muted-frontend">
                    <tr className="border-b border-lime-900/50 font-base">
                      <th className="px-4 py-3 text-left">Label</th>
                      <th className="px-4 py-3 text-left">Bedrooms</th>
                      <th className="px-4 py-3 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-lime-900/50">
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Studio</td>
                      <td className="px-4 py-2">0</td>
                      <td className="px-4 py-2">Open living/sleeping area</td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">1-Bedroom</td>
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Ideal for singles or couples</td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">2-Bedroom</td>
                      <td className="px-4 py-2">2</td>
                      <td className="px-4 py-2">Most common for small families</td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">3-Bedroom</td>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">Standard family home</td>
                    </tr>
                    <tr className="border-b border-lime-900/50 hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">4+ Bedrooms</td>
                      <td className="px-4 py-2">4 or more</td>
                      <td className="px-4 py-2">Larger families or income potential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TABLE 3: TERTIARY CLASSIFICATION */}
            <div className="mb-16">
              <h3 className="flex items-center text-xl font-bold p-4 mb-4">
                <span className="w-8 h-8 bg-lime-700/50 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  3
                </span>
                Tertiary Classification: Style & Lifestyle
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm font-light text-muted-frontend rounded-tl-lg rounded-tr-lg shadow-md bg-radial-[at_50%_50%] from-lime-800/40 via-lime-900/30 to-green-950/50 to-90%">
                  <thead className="rounded-full text-muted-frontend">
                    <tr className="border-b border-lime-900/50 font-base">
                      <th className="px-4 py-3 text-left text-sm">Term</th>
                      <th className="px-4 py-3 text-left text-sm ">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-lime-900/50">
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Residence</td>
                      <td className="px-4 py-2">
                        Formal term for any dwelling — often used in luxury, legal contexts.
                      </td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Villa</td>
                      <td className="px-4 py-2">
                        Luxury detached home — often implies pool, garden, high-end finishes.
                      </td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Cottage</td>
                      <td className="px-4 py-2">Small, cozy, often rural or vacation home.</td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Bungalow</td>
                      <td className="px-4 py-2">Single-story home, often with porch.</td>
                    </tr>
                    <tr className="border-b border-lime-900/50 hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Eco-Home</td>
                      <td className="px-4 py-2">
                        Our brand term — implies sustainable systems, materials, certifications.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TABLE 4: LOCATION-BASED MODIFIERS */}
            <div>
              <h3 className="flex items-center text-xl font-bold p-4 mb-4">
                <span className="w-8 h-8 bg-lime-700/50 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  4
                </span>
                Location-Based Modifiers (Boundary Living)
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm font-light text-muted-frontend rounded-tl-lg rounded-tr-lg shadow-md bg-radial-[at_50%_50%] from-lime-800/40 via-lime-900/30 to-green-950/50 to-90%">
                  <thead className="rounded-full text-muted-frontend">
                    <tr className="border-b border-lime-900/50 font-base">
                      <th className="px-4 py-3 text-left">Term</th>
                      <th className="px-4 py-3 text-left">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-lime-900/50">
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Urban Eco-Home</td>
                      <td className="px-4 py-2">In city or dense suburb — walkable, transit-oriented.</td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Suburban Eco-Home</td>
                      <td className="px-4 py-2">Low-density, near city, with yard/garden.</td>
                    </tr>
                    <tr className="hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Edge Community</td>
                      <td className="px-4 py-2">
                        Our brand term — at nature, urban interface. Tranquil yet connected.
                      </td>
                    </tr>
                    <tr className="border-b border-lime-900/50 hover:hover:bg-secondary/20 transition">
                      <td className="px-4 py-2">Rural Retreat</td>
                      <td className="px-4 py-2">Remote, nature-focused — less “boundary,” more escape.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

        {/* CTA Eco Plan */}
        <section className="max-w-5xl mx-auto mb-16 lg:mb-24 px-8">
          <h3 className="my-4 text-4xl font-bold text-center tracking-tight text-foreground sm:text-5xl mb-16">
            Explore our sustainable home models
          </h3>
          {/* CTA Link-Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <span className="text-md font-light">Unveil Grand Villa</span>
              </Link>
            </Button>
          </div>
        </section>

        <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-24" />
      </div>
    </>
  );
}
