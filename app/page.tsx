import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Differentiators from "./components/Differentiators";
import Features from "./components/Features";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Differentiators />
      <Features />
      <Privacy />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
