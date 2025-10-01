import { Metadata } from 'next';
import { HomeServices } from '@/components/home/home-services';

export const metadata: Metadata = {
  title: 'Services - Design, Development & Consulting | Lux Vitae',
  description:
    'Professional services including innovative design solutions, comprehensive development, and strategic consulting for sustainable architecture and eco-friendly projects.',
  keywords:
    'design services, development services, consulting services, sustainable architecture, eco-friendly design, construction management, project consulting',
  openGraph: {
    title: 'Services - Design, Development & Consulting | Lux Vitae',
    description:
      'Professional services including innovative design solutions, comprehensive development, and strategic consulting for sustainable architecture and eco-friendly projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Design, Development & Consulting | Lux Vitae',
    description:
      'Professional services including innovative design solutions, comprehensive development, and strategic consulting for sustainable architecture and eco-friendly projects.',
  },
};

export default function ServicesPage() {
  return <HomeServices />;
}
