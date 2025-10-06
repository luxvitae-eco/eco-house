import { NavigationBar } from '@/components/home/header/navigation-bar';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { TimelineDemo } from '@/components/shared/timeline-demo';
import '@/styles/single-page.css';

export default function TimelineDemoPage() {
  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />

        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Timeline Component</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Showcase of the reusable Timeline component with various configurations
              </p>
            </div>

            <TimelineDemo />
          </div>
        </div>
      </div>
    </>
  );
}
