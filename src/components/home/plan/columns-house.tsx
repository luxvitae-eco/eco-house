import Image from 'next/image';
import Link from 'next/link';
import { CircleCheck, TreePine, Home, HousePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface PlanTier {
  name: string;
  thumb: string;
  period: string;
  description: string;
  icon: string;
  label: string;
  featured?: boolean;
  features: string[];
  href: string;
}

const planTiers: PlanTier[] = [
  {
    name: 'Sanctuary for Two',
    thumb: '/assets/lux-vitae-eco-home-1.jpg',
    period: 'Low-maintenance luxury for two, your next chapter.',
    description:
      'Designed for two — where comfort is curated, space is intentional, and every day feels effortlessly yours.',
    icon: 'tree-pine',
    label: 'Tour the Sanctuary',
    features: [
      '2 bedrooms with natural lighting',
      'Open-plan kitchen and living area',
      'Private garden and outdoor space',
      'Solar energy system',
      'Smart home automation',
      'Sustainable building materials',
    ],
    href: '/eco-house-couple',
  },
  {
    name: 'Family Courtyard',
    thumb: '/assets/lux-vitae-eco-home-2.jpg',
    period: 'Designed for growing families with zoned quiet space.',
    description: 'Our most loved family home — where togetherness thrives and quiet moments find their place.',
    icon: 'home',
    label: 'See Family Layout',
    featured: true,
    features: [
      '3+ bedrooms including master suite',
      'Spacious family room and dining area',
      'Extended garden with private pool',
      'Enhanced solar energy system',
      'Advanced smart home features',
      'Premium sustainable materials',
    ],
    href: '/eco-house-family',
  },
  {
    name: 'Grand Villa',
    thumb: '/assets/lux-vitae-eco-home-3.jpg',
    period: 'Estate for creation, connection, and evolution.',
    description:
      'Our residence — where growing families, creative passions, and welcoming guests all find their perfect space.',
    icon: 'house-plus',
    label: 'Unveil Lux Vitae Estate',
    features: [
      '4+ bedrooms including luxury master suite',
      'Multiple living areas and home office',
      'Luxury pool, spa, and entertainment areas',
      'Comprehensive solar and energy systems',
      'Premium smart home automation',
      'Luxury sustainable materials throughout',
    ],
    href: '/eco-house-villa',
  },
];

// Icon rendering function
const renderIcon = (iconName: string) => {
  const iconProps = {
    className: 'w-8 h-8 bg-black border border-gray-700 rounded-full text-amber-200 p-1',
    'aria-hidden': true,
  };

  switch (iconName) {
    case 'tree-pine':
      return <TreePine {...iconProps} />;
    case 'home':
      return <Home {...iconProps} />;
    case 'house-plus':
      return <HousePlus {...iconProps} />;
    default:
      return <Home {...iconProps} />;
  }
};

export function ColumnsHouse() {
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
                  Bespoke
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
                  className="object-cover"
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
            <div className="px-8 text-[16px] leading-[24px]">{tier.description}</div>
          </div>

          {/* CTA Button */}
          <div className="px-8 mt-8">
            <Button asChild variant="outline" className="w-full h-11 px-5 py-[10px]">
              <Link href={tier.href}>{tier.label}</Link>
            </Button>
          </div>

          {/* Features List */}
          <ul className="p-8 flex flex-col gap-4">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex gap-x-3">
                <CircleCheck className="h-5 w-5 text-base text-muted-foreground" aria-hidden="true" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
