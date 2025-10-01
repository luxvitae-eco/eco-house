import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { SinglePageCardGradient } from '@/components/gradients/single-page-card-gradient';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import '@/styles/single-page.css';

export default function FAQ() {
  const faqData = [
    {
      id: 'item-1',
      question: 'How much does an eco-home cost compared to a traditional home?',
      answer:
        'Our eco-homes are competitively priced, often within 5–15% of conventional builds. While some systems, like solar or Energy Recovery Ventilator (ERV) add upfront cost, they slash utility bills by 60–80%, paying for themselves in 5–10 years. Plus, many regions offer green building grants or tax incentives.',
      cta: 'Want a personalized estimate?',
      link: '/contact',
      linkText: 'Book a 15-min Budget Consult',
    },
    {
      id: 'item-2',
      question: 'How long does it take to build an eco-home?',
      answer:
        "Typically 6–10 months from permit to keys, similar to custom homes. Our prefab components and integrated partner network reduce delays. Weather, site complexity, and customization can affect timeline, we'll map yours out in Week 1.",
      cta: 'See our',
      link: '/services',
      linkText: 'Project Timeline',
    },
    {
      id: 'item-3',
      question: 'Do you build outside your region service areas?',
      answer:
        'We design and consult anywhere, but physical builds are currently focused in the Iberian Peninsula, Mediterranean, and the Balkans. Through our Partner Network, we can connect you with vetted local builders trained in our systems, so you get the Lux Vitae Eco standard, wherever you are.',
      cta: 'Explore our',
      link: '/services',
      linkText: 'Partner Network',
      additionalLink: '/contact',
      additionalLinkText: 'Inquire About Your Location',
    },
    {
      id: 'item-4',
      question: 'What certifications do your homes meet?',
      answer:
        "All homes meet or exceed Passive House principles for energy efficiency. Many are LEED Gold or Net-Zero Ready. We tailor certifications to your goals, whether it's energy, materials, water, or wellness, living building challenge.",
      cta: 'Download our',
      link: '/contact',
      linkText: 'Certification Guide PDF',
    },
    {
      id: 'item-5',
      question: 'Can I customize the floor plan or materials?',
      answer:
        "Absolutely. Our models are starting points, not templates. We'll adapt layouts, finishes, and systems to your lifestyle, site, and budget. Love reclaimed wood? Want a pottery studio? We'll make it happen, sustainably.",
      cta: 'Start with our',
      link: '/contact',
      linkText: 'Customization Worksheet',
    },
    {
      id: 'item-6',
      question: 'Are eco-homes harder to maintain?',
      answer:
        'Quite the opposite. We use durable, low-maintenance materials (metal roofs, fiber-cement siding, polished concrete) and smart systems that alert you to issues before they become problems. Less upkeep, more living.',
      cta: 'See our',
      link: '/contact',
      linkText: 'Maintenance Guide',
    },
    {
      id: 'item-7',
      question: "What's included in the price?",
      answer:
        'Our base price includes: architectural plans and permits, high-performance shell (walls, roof, windows), core systems (solar-ready, ERV, rainwater), interior finishes (flooring, paint, fixtures), landscaping (native, low-water), performance handover plus warranty',
      cta: 'Download our',
      link: '/contact',
      linkText: 'Scope of Work PDF',
      additionalLink: '/contact',
      additionalLinkText: 'Schedule a Walkthrough',
    },
  ];

  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />
        <div className="relative z-10">
          {/* Section 1: Title and Subtitle */}
          <section className="pt-32 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                  Frequently Asked Questions
                </h1>
                <p className="mt-6 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] text-muted-foreground">
                  These answers are designed to bring clarity, confidence, and calm to your journey.
                  <br /> We’ve gathered the most common questions we hear from homeowners, architects, and builders — so
                  you can explore, compare, and decide with ease.
                </p>
              </div>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-8" />

          {/* Section 2: Accordion Component */}
          <section className="my-16">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground pt-4 pb-6">
                      <p className="mb-4">{faq.answer}</p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm text-foreground">→ {faq.cta}</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={faq.link}>
                            <Lock className="mr-2" size={16} />
                            {faq.linkText}
                          </Link>
                        </Button>
                        {faq.additionalLink && (
                          <>
                            <span className="text-sm text-muted-foreground">or</span>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={faq.additionalLink}>{faq.additionalLinkText}</Link>
                            </Button>
                          </>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-8" />

          {/* Call to Action */}
          <section className="py-16">
            <div className="mx-auto max-w-2xl">
              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                <SinglePageCardGradient />

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Still wondering what’s right for you?</CardTitle>
                  <CardDescription>
                    Get professional support to ensure your sustainable building success
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground mb-8">
                    Whether you’re dreaming of your forever eco-home or planning your next sustainable development,
                    we’re here to bring clarity, confidence, and calm.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/contact">Schedule Consultation</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/development">Join Our Partner Network</Link>
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
