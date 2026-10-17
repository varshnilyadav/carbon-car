import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import BrandIntro from "@/components/sections/BrandIntro";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import StudioExperience from "@/components/sections/StudioExperience";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import BookingForm from "@/components/sections/BookingForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <BrandsMarquee />
        <BrandIntro />
        <Services />
        <Process />
        <StudioExperience />
        <Gallery />
        <Testimonials />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
