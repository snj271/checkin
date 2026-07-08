import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Collections from "./components/Collections";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import HowToOrder from "./components/HowToOrder";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import Enquiry from "./components/Enquiry";
import Footer from "./components/Footer";
import Floating from "./components/Floating";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Collections />
        <Features />
        <Gallery />
        <HowToOrder />
        <Reviews />
        <FAQ />
        <Location />
        <Enquiry />
      </main>
      <Footer />
      <Floating />
    </div>
  );
}
