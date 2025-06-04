import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
