import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComponentViewer from "@/components/ComponentViewer";
import { 
  HeroSection, heroCode,
  FeaturesSection, featuresCode,
  PricingSection, pricingCode,
  TestimonialsSection, testimonialsCode,
  CTASection, ctaCode
} from "@/components/library";
import { ArrowRight, Layers, Zap, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const scrollToComponents = () => {
    const element = document.getElementById('components');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-primary selection:text-white font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Main Landing Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Bahlilwind UI is now public
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Beautiful UI components <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 glow-text">
                built for dark mode.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Copy and paste beautifully designed components into your apps. Accessible. Customizable. Open Source.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Button size="lg" onClick={scrollToComponents} className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
                Browse Components <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full px-8 h-12">
                <a href="https://github.com/buildwithhanif/bahlilwind" target="_blank" rel="noreferrer">Star on GitHub</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Copy & Paste</h3>
                <p className="text-muted-foreground">Simply copy the code and paste it into your project. No complex installation required.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dark Mode First</h3>
                <p className="text-muted-foreground">Designed specifically for dark mode interfaces with glowing accents and glassmorphism.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 text-green-500">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fully Responsive</h3>
                <p className="text-muted-foreground">Every component is fully responsive and looks great on mobile, tablet, and desktop.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Component Library */}
        <section id="components" className="py-24">
          <div className="container max-w-6xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Component Library</h2>
              <p className="text-muted-foreground text-lg">Explore our collection of production-ready components.</p>
            </div>

            <div className="space-y-24">
              <ComponentViewer 
                title="Hero Sections" 
                description="High-impact headers with glowing effects and entrance animations."
                component={<HeroSection />} 
                code={heroCode} 
              />
              
              <ComponentViewer 
                title="Feature Sections" 
                description="Bento-grid style layouts to showcase your product features."
                component={<FeaturesSection />} 
                code={featuresCode} 
              />
              
              <ComponentViewer 
                title="Pricing Tables" 
                description="Clear and conversion-focused pricing cards."
                component={<PricingSection />} 
                code={pricingCode} 
              />
              
              <ComponentViewer 
                title="Testimonials" 
                description="Social proof components to build trust."
                component={<TestimonialsSection />} 
                code={testimonialsCode} 
              />
              
              <ComponentViewer 
                title="Call to Action" 
                description="High-conversion bottom sections to drive signups."
                component={<CTASection />} 
                code={ctaCode} 
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
