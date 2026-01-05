import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoGrid from "@/components/DemoGrid";
import Features from "@/components/Features";
import Installation from "@/components/Installation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <DemoGrid />
        <Installation />
      </main>
      <Footer />
    </div>
  );
}
