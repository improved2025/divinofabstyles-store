import { GenderLanding } from "@/components/landing/gender-landing";
import { womenPageData } from "@/lib/landing-data";

export default function WomenPage() {
  return <GenderLanding data={womenPageData} />;
}