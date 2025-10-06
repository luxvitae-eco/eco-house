import Link from 'next/link';
import {
  Mail,
  MapPin,
  Map,
  // Phone,
  // Facebook,
  // Twitter,
  // Instagram,
  // Linkedin
} from 'lucide-react';
import { BrandLogos } from '@/components/home/footer/brand-logos';

export function Footer() {
  return (
    <footer className="bg-background bg-grain">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-start gap-4">
              {/* First Column - Logo */}
              {/* <div> */}
              <img src="/logo.svg" alt="Eco House Three - Main View" className="w-12" />
              {/* </div> */}

              {/* Second Column - Text Content */}
              {/* <div> */}
              <h3 className="text-4xl font-light text-foreground">Lux Vitae Eco</h3>
              {/* </div> */}
            </div>
            <address className="not-italic space-y-2 mt- pl-5">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Offices and ​Service Areas Faro, Marbella, Tivat</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Map className="h-4 w-4 mr-2" />
                <span>Iberian Peninsula, Mediterranean, The Balkans</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <a href="/contact" className="hover:text-foreground transition-colors">
                  Get in touch
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/eco-home"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Eco House
              </Link>
              <Link href="/faq" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Partners</h3>
            <nav className="space-y-2">
              <Link
                href="/services"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/design"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Design
              </Link>
              <Link
                href="/development"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Development
              </Link>
              <Link
                href="/consulting"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Consulting
              </Link>
            </nav>
          </div>
        </div>
      </div>
      {/* Brand Logos Section */}
      <BrandLogos />
      {/* Copyright */}
      <div className=" border-t border-border mx-auto max-w-7xl p-6 lg:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-accent">
          <p>&copy; {new Date().getFullYear()} Lux Vitae Eco House. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
