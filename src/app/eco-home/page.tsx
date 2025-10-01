import { HomeEco } from '@/components/home/home-eco';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eco Home - Sustainable Living Solutions | Lux Vitae',
  description:
    'Discover our eco-friendly house models designed for sustainable living. From cozy 2-bedroom homes to spacious 4-bedroom family residences, each eco home blends comfort with environmental responsibility.',
  keywords:
    'eco home, sustainable house, green building, eco-friendly homes, sustainable living, environmentally friendly homes, green architecture',
  openGraph: {
    title: 'Lux Vitae Eco Home - Sustainable Living Solutions',
    description:
      'Explore our thoughtfully designed eco-house models that provide a blueprint for life in harmony with the planet.',
    type: 'website',
  },
};

export default function EcoHomePage() {
  return <HomeEco />;
}
