'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Handshake, Construction, DraftingCompass, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface PlanTier {
  name: string;
  thumb: string;
  period: string;
  description: string;
  icon: string;
  featured?: boolean;
  label: string;
  modalContent: {
    title: string;
    description: string;
    features: string[];
    process: string[];
  };
}

const planTiers: PlanTier[] = [
  {
    name: 'Design',
    thumb: '/assets/lux-vitae-eco-home-design-1.jpg',
    period: 'Inspired Spaces, Rooted in Place',
    description:
      'We create innovative design solutions that harmonize aesthetics and functionality within sustainable architecture.',
    icon: 'drafting-compass',
    label: 'Explore Our Approach',
    modalContent: {
      title: 'Sustainable Design Solutions',
      description:
        'Our design approach integrates cutting-edge sustainable technologies with timeless architectural principles to create homes that are both beautiful and environmentally responsible.',
      features: [
        'Passive solar design optimization',
        'Natural ventilation systems',
        'Sustainable material selection',
        'Energy-efficient building envelope',
        'Water conservation strategies',
        'Biophilic design integration',
      ],
      process: [
        'Site analysis and climate assessment',
        'Conceptual design development',
        'Sustainability integration planning',
        'Design refinement and optimization',
        'Technical documentation',
        'Construction support',
      ],
    },
  },
  {
    name: 'Development',
    thumb: '/assets/lux-vitae-eco-home-development.jpg',
    period: 'Precision-Built & Sustainable Integration',
    description:
      'We lead eco-house developments from concept to completion with technical precision and sustainability at the core.',
    icon: 'construction',
    featured: true,
    label: 'See How We Deliver',
    modalContent: {
      title: 'End-to-End Development Excellence',
      description:
        'From initial concept through final handover, our development process ensures every eco-house meets the highest standards of sustainability, quality, and performance.',
      features: [
        'Project management and coordination',
        'Sustainable construction methods',
        'Quality assurance and monitoring',
        'Timeline and budget optimization',
        'Regulatory compliance management',
        'Post-completion support',
      ],
      process: [
        'Project initiation and planning',
        'Permit acquisition and approvals',
        'Construction management',
        'Quality control and testing',
        'Systems commissioning',
        'Final delivery and documentation',
      ],
    },
  },
  {
    name: 'Consulting',
    thumb: '/assets/lux-vitae-eco-home-consulting.jpg',
    period: 'Guiding Your Green Vision Forward',
    description: 'We provide comprehensive consulting services that address every aspect of sustainable development.',
    icon: 'handshake',
    label: 'Get Expert Guidance',
    modalContent: {
      title: 'Strategic Sustainability Consulting',
      description:
        'Our expert consultants provide strategic guidance to help you navigate the complexities of sustainable development and achieve your environmental and business goals.',
      features: [
        'Sustainability strategy development',
        'Environmental impact assessment',
        'Certification guidance (LEED, BREEAM)',
        'Market analysis and feasibility studies',
        'Regulatory compliance consulting',
        'Technology integration planning',
      ],
      process: [
        'Initial consultation and assessment',
        'Strategy development and planning',
        'Implementation roadmap creation',
        'Ongoing support and monitoring',
        'Performance evaluation',
        'Continuous improvement recommendations',
      ],
    },
  },
];

// Icon rendering function
const renderIcon = (iconName: string) => {
  const iconProps = {
    className: 'w-8 h-8 bg-primary/10 border border-gray-700 rounded-full text-primary p-1',
    'aria-hidden': true,
  };

  switch (iconName) {
    case 'drafting-compass':
      return <DraftingCompass {...iconProps} />;
    case 'construction':
      return <Construction {...iconProps} />;
    case 'handshake':
      return <Handshake {...iconProps} />;
    default:
      return <Users {...iconProps} />;
  }
};

export function Columns3() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div className="isolate mx-auto grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {planTiers.map((tier) => (
        <div key={tier.name} className="rounded-lg bg-background/70 backdrop-blur-[6px] overflow-hidden">
          <div className="flex gap-5 flex-col rounded-lg rounded-b-none plan-card-border">
            {/* Featured card background elements */}
            {tier.featured && (
              <>
                <div className="featured-yellow-highlight-bg"></div>
                <div className="featured-hard-blur-bg"></div>
                <div className="featured-vertical-hard-blur-bg"></div>
                <div className="featured-soft-blur-bg"></div>
              </>
            )}

            {/* Header */}
            <div
              className={`flex justify-between items-center px-8 pt-8 ${tier.featured ? 'featured-plan-title' : ''}`}
            >
              <div className="flex items-center gap-[10px]">
                {renderIcon(tier.icon)}
                <p className="text-[20px] leading-[30px] font-semibold">{tier.name}</p>
              </div>
              {tier.featured && (
                <div className="flex items-center px-3 py-1 rounded-xs border border-secondary-foreground/10 text-[14px] h-[29px] leading-[21px] featured-card-badge">
                  Eco-House
                </div>
              )}
            </div>

            {/* Thumb Image */}
            <div className="mt-6 px-8">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  alt={tier.name}
                  fill
                  src={tier.thumb}
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="font-medium text-[12px] mt-2 text-center">{tier.period}</div>
            </div>

            {/* Separator */}
            <div className="px-8">
              <Separator className="shrink-0 h-[1px] w-full bg-border" />
            </div>

            {/* Description */}
            <div className="px-8 font-light text-[14px] leading-[24px]">{tier.description}</div>
          </div>

          {/* CTA Button with Modal */}
          <div className="px-8 mt-8">
            <Dialog open={openModal === tier.name} onOpenChange={(open) => setOpenModal(open ? tier.name : null)}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full h-11 px-5 py-[12px]">
                  {tier.label}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl font-bold">
                    {renderIcon(tier.icon)}
                    {tier.modalContent.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed pl-[42px]">
                    {tier.modalContent.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 pl-[42px]">
                  {/* Features Section */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {tier.modalContent.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary font-bold mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process Section */}
                  <div className="pl-[42px]">
                    <h3 className="text-lg font-semibold mb-3">Our {tier.name} Process</h3>
                    <ol className="space-y-2">
                      {tier.modalContent.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="bg-primary text-primary-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center mt-0.5 font-semibold">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ))}
    </div>
  );
}
