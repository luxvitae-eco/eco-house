import Image from 'next/image';

export function HeroSection() {
  return (
    <section className={'mx-auto max-w-7xl px-[32px] relative flex items-center justify-between mb-16'}>
      <div className={'text-center w-full '}>
        <h2 className={'mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl'}>Our Mindful Vision</h2>
        <p className={'mt-6 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px]'}>
          Building a Greener, Healthier, and Sustainable Future.
        </p>
        <div className={'mt-12 w-full max-w-5xl mx-auto'}>
          <div className={'relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl'}>
            <Image
              src="https://res.cloudinary.com/dgz0pkrna/image/upload/t_wide-1280/eco-house-luxvitae-10_uvpu1t.png"
              alt="Eco House - Modern sustainable architecture"
              fill
              className="object-cover shadow-sm"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
