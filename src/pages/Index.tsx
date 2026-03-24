import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <Gallery />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
