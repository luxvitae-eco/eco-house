'use client';

import { useState } from 'react';
import Image from 'next/image';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
// import { SinglePageCardGradient } from '@/components/gradients/single-page-card-gradient';
// import { Separator } from '@/components/ui/separator';

interface GalleryImage {
  src: string;
  alt: string;
}

interface ServicePageContentProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  galleryTitle: string;
  gallerySubtitle: string;
  galleryImages: GalleryImage[];
  contentImage: string;
  contentAlt: string;
  contentTitle: string;
  contentDescription: string[];
  featuresTitle: string;
  features: string[];
}

export function ServicePageContent({
  title,
  subtitle,
  heroImage,
  heroAlt,
  galleryTitle,
  gallerySubtitle,
  galleryImages,
  contentImage,
  contentAlt,
  contentTitle,
  contentDescription,
  featuresTitle,
  features,
}: ServicePageContentProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <NavigationBar />
      <div>
        <SinglePageGradient />

        {/* Hero Section */}
        <section className="relative px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">{title}</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{subtitle}</p>
            </div>

            {/* Hero Image */}
            <div className="mt-16 mx-auto max-w-4xl">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt={heroAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - 3x2 Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">{galleryTitle}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{gallerySubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Column Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={contentImage}
                  alt={contentAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">{contentTitle}</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  {contentDescription.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{featuresTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
