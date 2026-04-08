import { HeroSection } from "@/components/home/hero-section";
import { SectionSplit } from "@/components/home/section-split";
import { NewArrivalsPreview } from "@/components/home/new-arrivals-preview";
import { EditorialBanner } from "@/components/home/editorial-banner";
import { FeaturedStyles } from "@/components/home/featured-styles";
import { NewsletterStrip } from "@/components/home/newsletter-strip";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SectionSplit />
      <NewArrivalsPreview />
      <EditorialBanner />
      <FeaturedStyles />
      <NewsletterStrip />
    </main>
  );
}