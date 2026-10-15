import { HeroSection } from "@/components/home/hero-section";
import { SectionSplit } from "@/components/home/section-split";
import { JewelrySpotlight } from "@/components/home/jewelry-spotlight";
import { NewArrivalsPreview } from "@/components/home/new-arrivals-preview";
import { FeaturedProductsPreview } from "@/components/home/featured-products-preview";
import { EditorialBanner } from "@/components/home/editorial-banner";
import { FeaturedStyles } from "@/components/home/featured-styles";
import { NewsletterStrip } from "@/components/home/newsletter-strip";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SectionSplit />

      <JewelrySpotlight />

      <NewArrivalsPreview />
      <FeaturedProductsPreview />
      <EditorialBanner />
      <FeaturedStyles />
      <NewsletterStrip />
    </main>
  );
}