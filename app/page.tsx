import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cost from "./components/Cost";
import Research from "./components/Research";
import Alternatives from "./components/Alternatives";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Principles from "./components/Principles";
import FAQ from "./components/faq";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollRuler from "./components/ScrollRuler";
import { ScreenTimeProvider } from "./components/ScreenTime";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-bg text-ink">
      <Navbar />
      <ScrollRuler />
      <ScreenTimeProvider>
        <main>
          <Hero />
          <Cost />
          <Research />
          <Alternatives />
          <HowItWorks />
          <Features />
          <Principles />
          <FAQ />
          <CTA />
        </main>
      </ScreenTimeProvider>
      <Footer />
    </div>
  );
}
