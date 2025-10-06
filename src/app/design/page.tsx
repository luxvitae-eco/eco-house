import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { SinglePageCardGradient } from '@/components/gradients/single-page-card-gradient';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlockStepper, type StepperStep } from '@/components/ui/block-stepper';
import {
  DraftingCompass,
  House,
  // Sun,
  // Droplets,
  // Wind,
  // Users,
  Zap,
  Leaf,
  MapPin,
  PencilRuler,
  Lightbulb,
  FileCheck,
  Wrench,
} from 'lucide-react';
// import { FileText, Users, Target, TrendingUp, Clock, Award Leaf, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import '@/styles/single-page.css';

export const metadata: Metadata = {
  title: 'Design Services | Eco House Solutions',
  description:
    'Explore our sustainable design services for eco-friendly homes. Professional architectural and interior design with environmental consciousness.',
  keywords: ['eco design', 'sustainable architecture', 'green building design', 'environmental design'],
  authors: [{ name: 'Lux Vitae Eco House Solutions Team' }],
  creator: 'Lux Vitae Eco',
  publisher: 'Lux Vitae Eco House Solutions',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Design Services | Eco House Solutions',
    description: 'Explore our sustainable design services for eco-friendly homes.',
    type: 'website',
    locale: 'en_US',
  },
};

// Define design process steps
const consultingSteps: StepperStep[] = [
  {
    number: 1,
    title: 'Site analysis and climate assessment',
    description: 'Comprehensive evaluation of site conditions and environmental factors',
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    number: 2,
    title: 'Conceptual design development',
    description: 'Initial design concepts based on site analysis and client requirements',
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    number: 3,
    title: 'Sustainability integration planning',
    description: 'Integration of sustainable technologies and eco-friendly solutions',
    icon: <Leaf className="h-6 w-6" />,
  },
  {
    number: 4,
    title: 'Design refinement and optimization',
    description: 'Detailed refinement to optimize performance and efficiency',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    number: 5,
    title: 'Technical documentation',
    description: 'Complete technical drawings and specification documentation',
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    number: 6,
    title: 'Construction support',
    description: 'Ongoing support during construction phase to ensure design integrity',
    icon: <Wrench className="h-6 w-6" />,
  },
];

export default function DesignPage() {
  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-16">
            <div className="mx-auto max-w-2xl text-center px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Design That Belongs</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">Rooted in Place, Light, and Life</p>
              <p className="text-lg leading-8 text-muted-foreground">
                Sustainable architecture, meaningfully designed.
              </p>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-8" />

          {/* Design Philosophy */}
          {/*           <section className="py-16">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center tracking-tight text-foreground">Our Design Philosophy</h2>
              <p className="mt-4 text-lg text-justify text-muted-foreground">
                We design homes that belong, to their land, their climate, and their time. Every project begins with
                passive principles: orientation for sun and breeze, thermal mass for stability, and natural materials
                for health. We prioritize local identity using regional materials and design for legacy, creating spaces
                that endure, adapt, and heal.
              </p>
            </div>
          </section> */}

          {/* Two Column Section */}
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/assets/lux-vitae-eco-house-family.jpg"
                    alt="Eco House Sanctuary for Two - Detailed View"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-center tracking-tight text-foreground">
                    Our Design Philosophy
                  </h2>
                  <p className="mt-4 text-lg text-justify text-muted-foreground">
                    We design homes that belong, to their land, their climate, and their time. Every project begins with
                    passive principles: orientation for sun and breeze, thermal mass for stability, and natural
                    materials for health.
                  </p>
                  <p className="mt-4 text-lg text-justify text-muted-foreground">
                    We prioritize local identity using regional materials and design for legacy, creating spaces that
                    endure, adapt, and heal.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-8" />

          {/* Design segment */}
          <section className="my-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Design Services</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Environment, efficiency, and lasting sustainability.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <House className="h-6 w-6 text-primary" />
                      Homeowners
                    </CardTitle>
                    <CardDescription>Certified eco-friendly building materials</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Concept to Construction Documentation</li>
                      <li>• Material & Finish Curation (local wood, stone, non-toxic paints)</li>
                      <li>• Energy Modeling + Certification Roadmap (Passive House, LEED)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PencilRuler className="h-6 w-6 text-primary" />
                      Architects & Developers
                    </CardTitle>
                    <CardDescription>Contractors, engineers, certifiers</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sustainable Design Integration</li>
                      <li>• Prefab-Ready Detailing</li>
                      <li>• Partner Network Coordination</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="my-16">
            <div className="mx-auto max-w-2xl text-center px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Solutions for Every Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Bringing your vision to life through expert sustainable architecture that enhance both life and
                environment.
              </p>
            </div>
          </section>

          {/* Design Services */}
          <section className="my-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-light">
                      <DraftingCompass className="h-6 w-6 text-primary" />
                      Architectural Design
                    </CardTitle>
                    <CardDescription>Complete architectural planning and design</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Full architectural services from initial concept to detailed construction drawings, ensuring every
                      element supports sustainability goals.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Concept development</li>
                      <li>• Detailed floor plans</li>
                      <li>• 3D visualization</li>
                      <li>• Construction documentation</li>
                    </ul>
                    <div className="mt-6">
                      <Image
                        alt="Eco-home design"
                        width={480}
                        height={480}
                        src="/assets/lux-vitae-eco-design-520x520.jpg"
                        className="object-cover rounded-lg w-full h-auto"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 480px"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-light">
                      <Zap className="h-6 w-6 text-primary" />
                      Energy Systems
                    </CardTitle>
                    <CardDescription>Integrated renewable energy solutions</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Design and integration of solar panels, battery storage, and smart home systems for maximum energy
                      efficiency and independence.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Solar panel optimization</li>
                      <li>• Battery storage design</li>
                      <li>• Smart home integration</li>
                      <li>• Energy monitoring systems</li>
                    </ul>
                    <div className="mt-6">
                      <Image
                        alt="Eco-Home Solar Energy"
                        width={480}
                        height={480}
                        src="/assets/lux-vitae-solar-520x520.jpg"
                        className="object-cover rounded-lg w-full h-auto"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 480px"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-light">
                      <Leaf className="h-6 w-6 text-primary" />
                      Landscape Integration
                    </CardTitle>
                    <CardDescription>Sustainable landscape and garden design</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Native plant selection, rainwater harvesting, and food garden design that complements your
                      eco-home&apos;s sustainability features.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Native plant gardens</li>
                      <li>• Rainwater collection</li>
                      <li>• Organic food gardens</li>
                      <li>• Permaculture principles</li>
                    </ul>
                    <div className="mt-6">
                      <Image
                        alt="Eco-Home Water Conservation"
                        width={480}
                        height={480}
                        src="/assets/lux-vitae-water-520x520.jpg"
                        className="object-cover rounded-lg w-full h-auto"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 480px"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Our Process - Stepper Section */}
          <section className="my-16">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Design Process</h2>
                <p className="text-lg text-justify text-muted-foreground mt-6  px-6 lg:px-8">
                  Our homes are designed to be a reflection of who we are, and to create a sense of belonging and
                  community. We believe that home is more than just a place to call home; it’s a place to connect with
                  friends, family, and neighbors. That’s why we take the time to listen to your needs and preferences,
                  and work closely with you to create a design that reflects your unique style and personality.
                </p>
              </div>

              <BlockStepper steps={consultingSteps} showNumbers={false} />
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-20" />

          {/* Call to Action */}
          <section className="mb-20">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                <SinglePageCardGradient />

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Ready to Design Your Sustainable Home?</CardTitle>
                  <CardDescription>Let&apos;s create a design that reflects your values and lifestyle</CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground mb-8">
                    Our design team is ready to help you create a beautiful, sustainable home that works in harmony with
                    the environment while meeting all your lifestyle needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/contact">Start Your Design Journey</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/eco-home">View House Plans</Link>
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
