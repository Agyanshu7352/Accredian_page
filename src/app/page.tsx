
import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  StatsSection,
  PartnersSection,
  EdgeSection,
  DomainsSection,
  CourseSegmentationSection,
  WhoShouldJoinSection,
  CATFrameworkSection,
  HowWeDeliverSection,
  FAQSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <PartnersSection />
        <EdgeSection />
        <DomainsSection />
        <CourseSegmentationSection />
        <WhoShouldJoinSection />
        <CATFrameworkSection />
        <HowWeDeliverSection />
        <FAQSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
