import Image from 'next/image';
import Link from 'next/link';

interface LogoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  url?: string; // Optional URL for logos that should be clickable
}

const logos: LogoItem[] = [
  {
    src: '/assets/logo/rainwater-collection.svg',
    alt: 'Rainwater Collection System',
    width: 105,
    height: 24,
    url: 'https://en.wikipedia.org/wiki/Rainwater_harvesting',
  },
  {
    src: '/assets/logo/natural.svg',
    alt: 'Natural Logo',
    width: 120,
    height: 16,
    url: 'https://en.wikipedia.org/wiki/Natural_building',
  },
  {
    src: '/assets/logo/logo_ecolabel_transparent.svg',
    alt: 'Europe ecolabel',
    width: 64,
    height: 64,
    url: 'https://ec.europa.eu/environment/ecolabel/',
  },
  {
    src: '/assets/logo/adiabatic-cooling.svg',
    alt: 'Adiabatic Cooling System',
    width: 140,
    height: 24,
    url: 'https://en.wikipedia.org/wiki/Evaporative_cooler',
  },
  {
    src: '/assets/logo/Delivering-BREEAM-05.svg',
    alt: 'Delivering-BREEAM-01',
    width: 64,
    height: 64,
    url: 'https://www.breeam.com/',
  },
];

export function BrandLogos() {
  return (
    <section className="brand-logos" aria-label="Technologies used">
      <div className="mx-auto max-w-7xl text-center px-8 my-8">
        <div className="flex flex-row flex-wrap gap-4 justify-center md:justify-between items-center md:gap-1">
          {logos.map((logo) =>
            logo.url ? (
              <Link
                key={logo.alt}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="inline-block"
                />
              </Link>
            ) : (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                width={logo.width}
                height={logo.height}
                className="opacity-60 hover:opacity-100 transition-opacity duration-200"
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
