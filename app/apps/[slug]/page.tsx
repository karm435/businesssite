import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppHero from '@/components/AppHero';
import AppFeatures from '@/components/AppFeatures';
import AppTestimonials from '@/components/AppTestimonials';
import CTA from '@/components/CTA';
import appsData from '@/data/apps.json';
import { notFound } from 'next/navigation';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  // Return an array of objects with the slug parameter for each app
  return appsData.apps.map((app) => ({
    slug: app.slug,
  }));
}

export default function AppPage({ params }: { params: { slug: string } }) {
  // Find the app data based on the slug
  const app = appsData.apps.find(app => app.slug === params.slug);
  
  // If app not found, show 404
  if (!app) {
    return notFound();
  }

  return (
    <main>
      <Header />
      <AppHero
        name={app.name}
        tagline={app.tagline}
        description={app.description}
        url={app.url}
        accentColor={app.color}
        imageSrc={`/images/${app.slug}-hero.png`}
      />
      <AppFeatures
        title={`${app.name} Features`}
        description={`Discover what makes ${app.name} the perfect solution for your needs.`}
        features={app.features}
        accentColor={app.color}
      />
      <AppTestimonials
        title={`What Users Say About ${app.name}`}
        testimonials={app.testimonials}
        accentColor={app.color}
      />
      <CTA 
        title={`Ready to Experience ${app.name}?`}
        description="Download now and transform the way you work. Available on iOS."
        buttonText="Download on App Store"
        buttonLink="https://apps.apple.com"
        secondaryButtonText="Learn More"
        secondaryButtonLink={app.url}
      />
      <Footer />
    </main>
  );
} 