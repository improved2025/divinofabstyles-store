import { GenderLanding } from "@/components/landing/gender-landing";
import { menPageData } from "@/lib/landing-data";

export default function MenPage() {
  return <GenderLanding data={menPageData} />;
}