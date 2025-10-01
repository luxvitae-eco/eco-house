'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export function ImageGallery({ galleryImages }: { galleryImages: { src: string; alt: string }[] }) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* Gallery Section - 3x2 Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Generous Living, Thoughtfully Built</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore expansive terraces, guest suites, and regenerative details designed for legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-center p-4 text-sm">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          {selectedImage && (
            <>
              <DialogTitle className="sr-only">{selectedImage.alt}</DialogTitle>
              <div className="flex items-center justify-center w-full">
                <div className="relative" style={{ width: '100%', height: '672px' }}>
                  <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-contain" />
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-white text-lg">{selectedImage.alt}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
