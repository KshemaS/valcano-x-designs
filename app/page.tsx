import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import DesignProcess from "@/components/DesignProcess";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <Portfolio />
        <DesignProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


