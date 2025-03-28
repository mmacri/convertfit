import { HeroSection } from "@/components/home/hero-section";
import { PopularComparisons } from "@/components/home/popular-comparisons";
import { MissionSection } from "@/components/home/mission-section";
import { StorePartners } from "@/components/home/store-partners";
import { PopularCategories } from "@/components/home/popular-categories";
import { LatestArticles } from "@/components/home/latest-articles";
import { NewsletterSignup } from "@/components/home/newsletter-signup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularComparisons />
      <MissionSection />
      <StorePartners />
      <PopularCategories />
      <LatestArticles />
      <NewsletterSignup />
    </>
  );
}
