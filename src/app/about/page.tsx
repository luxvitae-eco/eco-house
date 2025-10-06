import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { SinglePageCardGradient } from '@/components/gradients/single-page-card-gradient';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, HandHelping, Home, Leaf, Lightbulb, Users, Droplets, TextSearch, Trees, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import '@/styles/single-page.css';

export const metadata: Metadata = {
  title: 'About Lux Vitae Eco - Design and build your eco house with vetted professionals',
  description:
    'Building the future of sustainable homes — the Mediterranean’s trusted eco house network. Technical consulting and architecture advice for sustainable building projects. Expert guidance on eco-friendly house construction and design.',
  keywords:
    'eco, casa, house, portugal, espana, italia, architecture, design, professional, technical consulting, architecture advice, sustainable consulting, eco consulting, building consultation',
  openGraph: {
    title: 'About Lux Vitae Eco - Design and build your eco house with vetted professionals',
    description: 'Technical consulting and architecture advice for sustainable building projects.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-16">
            <div className="mx-auto max-w-2xl text-center px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">About Lux Vitae Eco</h1>
              <div className="mt-6 text-lg leading-8 text-muted-foreground">
                <p>Redefining Sustainable Housing</p>
                <p>
                  A platform, a network, and a partner empowering professionals and homeowners to build truly
                  sustainable homes — together.
                </p>
              </div>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-8" />

          <section className="max-w-4xl mx-auto my-16">
            {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-2"> */}
            <div className="mx-auto text-center max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Purpose</h2>
              <p className="text-lg text-muted-foreground my-4">
                Transforming the way people think about sustainable living
              </p>
              <p className="text-base text-justify leading-8 text-muted-foreground">
                We believe sustainable living shouldn&apos;t mean compromising on beauty, comfort, or performance. Our
                mission is to transform how homes are designed, built, and lived in, ensuring they heal rather than
                harm. We envision a world where every home contributes to environmental regeneration, all while being
                accessible, affordable, and awe-inspiring.
              </p>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-8" />

          <section className="max-w-7xl px-6 lg:px-8 mx-auto my-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-16">
              How We Make It Happen
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                <SinglePageCardGradient />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Homeowners & Private Clients
                  </CardTitle>
                  <CardDescription>Bespoke Eco-House Services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-muted-foreground">
                    From concept to certification — we design, develop, and consult on homes that are beautiful,
                    efficient, and deeply connected to place.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                <SinglePageCardGradient />

                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="h-6 w-6 text-primary" />
                    Architects, Builders & Developers
                  </CardTitle>
                  <CardDescription>Trusted Partner Network + Eco-Database</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-base leading-7 text-muted-foreground">
                    Access vetted collaborators and a curated library of materials, systems, and certifications — so you
                    can build smarter, faster, greener.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

          <section className="max-w-4xl mx-auto my-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-8">
              What Makes Us Different
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl text-primary">
                    <Leaf />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Sustainable Materials</h3>
                <p className="text-sm text-justify text-muted-foreground">
                  We meticulously select and integrate only eco-friendly, renewable, and regionally-sourced materials,
                  ensuring both superior quality and a minimal environmental footprint in every construction.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl text-primary">
                    <Zap />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Energy Efficient</h3>
                <p className="text-sm text-justify text-muted-foreground">
                  Our homes incorporate advanced solar energy systems, intelligent smart home technology, and superior
                  insulation to significantly reduce consumption and enhance your comfort year-round.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl text-primary">
                    <Lightbulb />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Smart Design</h3>
                <p className="text-sm text-justify text-muted-foreground">
                  Innovative layouts and architectural solutions that expertly maximize natural light, optimize airflow,
                  and foster a profound, seamless connection to the surrounding natural environment.
                </p>
              </div>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

          <section className="max-w-4xl mx-auto my-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-8">
              Our platform combines
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl text-primary">
                    <TextSearch />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Curated Eco-Database</h3>
                <p className="text-sm text-justify text-muted-foreground">
                  Access our meticulously curated database of sustainable materials, high-performance systems, and
                  essential green building certifications to inform every aspect of your project.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl text-primary">
                    <Handshake />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Trusted Partner Network</h3>
                <p className="text-sm text-justify text-muted-foreground">
                  Connect with our exclusive network of rigorously vetted architects, skilled builders, and expert
                  consultants, all committed to sustainable excellence and proven results.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl text-primary">
                    <HandHelping />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Tailored Services</h3>
                <p className="text-sm text-justify text-muted-foreground">
                  Discover our comprehensive range of customizable services, thoughtfully designed to meet the unique
                  needs and distinct visions of both homeowners and property developers.
                </p>
              </div>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

          {/* Call to Action */}
          <section className="mb-20">
            <div className="mx-auto max-w-2xl">
              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                <SinglePageCardGradient />

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Start Your Journey</CardTitle>
                  <CardDescription>
                    Get professional consulting support to ensure your sustainable building success
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground mb-8">
                    Our team brings decades of experience in sustainable architecture and construction. Let us help you
                    navigate challenges and optimize your project for success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/eco-home">Explore Our Design Process</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Join Our Partner Network</Link>
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
