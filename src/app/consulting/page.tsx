import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { SinglePageCardGradient } from '@/components/gradients/single-page-card-gradient';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlockStepper, type StepperStep } from '@/components/ui/block-stepper';
import {
  FileText,
  Users,
  Target,
  TrendingUp,
  Clock,
  Award,
  MapPin,
  Lightbulb,
  Leaf,
  Zap,
  FileCheck,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Consulting - Technical Consulting & Architecture Advice | Lux Vitae',
  description:
    'Technical consulting and architecture advice for sustainable building projects. Expert guidance on eco-friendly construction and design.',
  keywords: 'technical consulting, architecture advice, sustainable consulting, eco consulting, building consultation',
  openGraph: {
    title: 'Consulting - Technical Consulting & Architecture Advice | Lux Vitae',
    description: 'Technical consulting and architecture advice for sustainable building projects.',
    type: 'website',
  },
};

// Define consulting process steps
const consultingSteps: StepperStep[] = [
  {
    number: 1,
    title: 'Initial consultation and assessment',
    description: 'Comprehensive evaluation of site conditions and environmental factors',
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    number: 2,
    title: 'Strategy development and planning',
    description: 'Initial design concepts based on site analysis and client requirements',
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    number: 3,
    title: 'Implementation roadmap creation',
    description: 'Integration of sustainable technologies and eco-friendly solutions',
    icon: <Leaf className="h-6 w-6" />,
  },
  {
    number: 4,
    title: 'Ongoing support and monitoring',
    description: 'Detailed refinement to optimize performance and efficiency',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    number: 5,
    title: 'Performance evaluation',
    description: 'Complete technical drawings and specification documentation',
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    number: 6,
    title: 'Continuous improvement recommendations',
    description: 'Ongoing support during construction phase to ensure design integrity',
    icon: <Wrench className="h-6 w-6" />,
  },
];

export default function ConsultingPage() {
  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-16">
            <div className="mx-auto max-w-2xl text-center px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Consulting Services</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Technical consulting and architecture advice for sustainable building projects. Expert guidance to
                navigate complex challenges and optimize your eco-friendly construction.
              </p>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-8" />

          {/* Consulting Philosophy */}
          <section className="my-16">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Consulting Approach</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Comprehensive expertise and strategic guidance for every phase of your sustainable building journey.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-primary" />
                      Technical Assessment
                    </CardTitle>
                    <CardDescription>Comprehensive technical feasibility analysis</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <img
                        src="/assets/lux-vitae-technical-520.jpg"
                        alt="Certification Support"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-base leading-7 text-muted-foreground">
                      Our technical assessments provide detailed analysis of project feasibility, regulatory
                      requirements, and optimal sustainable building strategies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-6 w-6 text-primary" />
                      Strategic Planning
                    </CardTitle>
                    <CardDescription>Goal-oriented project planning and optimization</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <img
                        src="/assets/lux-vitae-strategy-520.jpg"
                        alt="Certification Support"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-base leading-7 text-muted-foreground">
                      We develop comprehensive strategies that align your sustainability goals with practical
                      construction realities and budget considerations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Technical Consulting */}
          <section className="my-16">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Technical Consulting</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Expert technical guidance for complex sustainable building challenges
                </p>
              </div>

              <Tabs defaultValue="feasibility" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="feasibility">
                    Feasibility <span className="hidden md:pl-2 md:block">Studies</span>
                  </TabsTrigger>
                  <TabsTrigger value="optimization">
                    Performance <span className="hidden md:pl-2 md:block">Optimization</span>
                  </TabsTrigger>
                  <TabsTrigger value="certification">
                    Certification <span className="hidden md:pl-2 md:block">Support</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="feasibility">
                  <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm mt-6">
                    <SinglePageCardGradient />
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-6 w-6 text-primary" />
                        Feasibility Studies
                      </CardTitle>
                      <CardDescription>Comprehensive project viability assessment</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2">
                          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <img
                              src="/assets/lux-vitae-eco-home-consulting-520x520.jpg"
                              alt="Feasibility Studies"
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2">
                          <p className="text-sm text-muted-foreground mb-4">
                            Detailed analysis of technical, environmental, and financial feasibility for your
                            sustainable building project.
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Site analysis & assessment</li>
                            <li>• Regulatory compliance review</li>
                            <li>• Cost-benefit analysis</li>
                            <li>• Risk assessment</li>
                          </ul>
                          <div className="mt-6">
                            <Button asChild>
                              <Link href="/contact">Get Technical Consulting</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="optimization">
                  <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm mt-6">
                    <SinglePageCardGradient />
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                        Performance Optimization
                      </CardTitle>
                      <CardDescription>Maximizing efficiency and sustainability</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2">
                          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <img
                              src="/assets/lux-vitae-eco-home-design-plan.jpg"
                              alt="Performance Optimization"
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2">
                          <p className="text-sm text-muted-foreground mb-4">
                            Optimization strategies to enhance energy efficiency, reduce costs, and maximize
                            environmental benefits.
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Energy efficiency analysis</li>
                            <li>• Material optimization</li>
                            <li>• Cost reduction strategies</li>
                            <li>• Performance monitoring</li>
                          </ul>
                          <div className="mt-6">
                            <Button asChild>
                              <Link href="/contact">Get Performance Optimization Advice</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="certification">
                  <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm mt-6">
                    <SinglePageCardGradient />
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-6 w-6 text-primary" />
                        Certification Support
                      </CardTitle>
                      <CardDescription>Green building certification guidance</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2">
                          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <img
                              src="/assets/lux-vitae-eco-house-couple.jpg"
                              alt="Certification Support"
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2">
                          <p className="text-sm text-muted-foreground mb-4">
                            Expert support for achieving green building certifications and meeting sustainability
                            standards.
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• LEED certification</li>
                            <li>• Energy Star compliance</li>
                            <li>• Local green standards</li>
                            <li>• Documentation support</li>
                          </ul>
                          <div className="mt-6">
                            <Button asChild>
                              <Link href="/contact">Get Certification Support</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Architectural Advice */}
          <section className="my-16">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Architectural Advice</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Professional architectural guidance for sustainable design excellence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-6 w-6 text-primary" />
                      Design Review & Optimization
                    </CardTitle>
                    <CardDescription>Expert review of architectural plans and designs</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Professional review of existing designs with recommendations for improved sustainability,
                      functionality, and cost-effectiveness.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Design efficiency analysis</li>
                      <li>• Sustainability improvements</li>
                      <li>• Code compliance review</li>
                      <li>• Cost optimization suggestions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-6 w-6 text-primary" />
                      Project Lifecycle Support
                    </CardTitle>
                    <CardDescription>Ongoing consultation throughout your project</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Continuous support from initial planning through construction completion, ensuring your project
                      stays on track and meets sustainability goals.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pre-construction planning</li>
                      <li>• Construction oversight</li>
                      <li>• Quality assurance</li>
                      <li>• Post-completion evaluation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Our Process - Stepper Section */}
          <section className="my-16">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Process</h2>
              </div>

              <BlockStepper steps={consultingSteps} />
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

          {/* Call to Action */}
          <section className="mb-20">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                <SinglePageCardGradient />

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Need Expert Guidance for Your Project?</CardTitle>
                  <CardDescription>
                    Get professional consulting support to ensure your sustainable building success
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground mb-8">
                    Our consulting team brings decades of experience in sustainable architecture and construction. Let
                    us help you navigate challenges and optimize your project for success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/contact">Schedule Consultation</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/eco-home">View Our Work</Link>
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
