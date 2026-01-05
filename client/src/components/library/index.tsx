import { Check, Star, ArrowRight, Zap, Shield, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- 1. HERO SECTION ---
export const HeroSection = () => (
  <div className="relative overflow-hidden rounded-xl bg-black border border-white/10 py-24 px-6 md:px-12 text-center">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none bahlil-napas" />
    
    <div className="relative z-10 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-8 bahlil-masuk-atas">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        v2.0 is now available
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 bahlil-masuk bahlil-lambat">
        Build faster with <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 glow-text">Bahlilwind UI</span>
      </h1>
      
      <p className="text-xl text-muted-foreground mb-10 bahlil-masuk-bawah bahlil-delay-200">
        Beautifully designed components built with Tailwind CSS and Bahlilwind animations. Dark mode first.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bahlil-masuk-bawah bahlil-delay-300">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 hover:bahlil-goyang">
          Get Started <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full px-8 h-12">
          View Documentation
        </Button>
      </div>
    </div>
  </div>
);

export const heroCode = `export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-black py-24 px-6 text-center">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none bahlil-napas" />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bahlil-masuk">
          Build faster with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Bahlilwind UI
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 bahlil-masuk-bawah">
          Beautifully designed components built with Tailwind CSS.
        </p>
        
        <div className="flex gap-4 justify-center bahlil-masuk-bawah">
          <button className="bg-blue-600 text-white rounded-full px-8 py-3 hover:bahlil-goyang">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}`;

// --- 2. FEATURES SECTION ---
export const FeaturesSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-black rounded-xl border border-white/10">
    <div className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group bahlil-masuk-kiri">
      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:bahlil-loncat">
        <Zap className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
      <p className="text-muted-foreground">Optimized for speed and performance. Built with the latest web technologies to ensure your application loads instantly.</p>
    </div>
    
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group bahlil-masuk-kanan">
      <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 group-hover:bahlil-muter">
        <Shield className="w-6 h-6 text-purple-500" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Secure by Default</h3>
      <p className="text-muted-foreground">Enterprise-grade security baked in.</p>
    </div>
    
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group bahlil-masuk-atas">
      <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6 group-hover:bahlil-kedip">
        <BarChart className="w-6 h-6 text-green-500" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Analytics</h3>
      <p className="text-muted-foreground">Real-time insights into your data.</p>
    </div>
    
    <div className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 border border-white/10 bahlil-masuk-bawah">
      <h3 className="text-2xl font-bold text-white mb-2">And much more...</h3>
      <p className="text-muted-foreground">Discover all the possibilities with our comprehensive toolkit.</p>
    </div>
  </div>
);

export const featuresCode = `export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Large Card */}
      <div className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group bahlil-masuk-kiri">
        <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 group-hover:bahlil-loncat">
          <Zap className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
        <p className="text-gray-400">Optimized for speed and performance.</p>
      </div>
      
      {/* Small Card */}
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group bahlil-masuk-kanan">
        <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 group-hover:bahlil-muter">
          <Shield className="w-6 h-6 text-purple-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Secure</h3>
        <p className="text-gray-400">Enterprise-grade security.</p>
      </div>
    </div>
  );
}`;

// --- 3. PRICING SECTION ---
export const PricingSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-black rounded-xl">
    {['Starter', 'Pro', 'Enterprise'].map((plan, i) => (
      <div key={plan} className={`relative p-8 rounded-2xl border ${i === 1 ? 'border-primary bg-primary/5' : 'border-white/10 bg-white/5'} flex flex-col bahlil-masuk-bawah`} style={{ animationDelay: `${i * 100}ms` }}>
        {i === 1 && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
            MOST POPULAR
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{plan}</h3>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-4xl font-bold text-white">${i === 0 ? '0' : i === 1 ? '29' : '99'}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <ul className="space-y-4 mb-8 flex-1">
          {[1, 2, 3, 4].map((_, j) => (
            <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary" />
              <span>Feature {j + 1} included</span>
            </li>
          ))}
        </ul>
        <Button className={`w-full ${i === 1 ? 'bg-primary hover:bg-primary/90' : 'bg-white/10 hover:bg-white/20'} text-white`}>
          Choose {plan}
        </Button>
      </div>
    ))}
  </div>
);

export const pricingCode = `export default function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Pro Plan (Highlighted) */}
      <div className="relative p-8 rounded-2xl border border-blue-500 bg-blue-500/5 flex flex-col bahlil-masuk-bawah">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
          MOST POPULAR
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-4xl font-bold text-white">$29</span>
          <span className="text-gray-400">/month</span>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
          Choose Pro
        </button>
      </div>
    </div>
  );
}`;

// --- 4. TESTIMONIALS SECTION ---
export const TestimonialsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-black rounded-xl border border-white/10">
    {[1, 2].map((_, i) => (
      <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors bahlil-masuk">
        <div className="flex gap-1 text-yellow-500 mb-4">
          {[1, 2, 3, 4, 5].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
        </div>
        <p className="text-lg text-white mb-6">"This library completely transformed how we build our user interfaces. The dark mode components are simply stunning."</p>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-500" />
          <div>
            <div className="font-bold text-white">Alex Chen</div>
            <div className="text-sm text-muted-foreground">Frontend Developer</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const testimonialsCode = `export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-white/5 border border-white/10 bahlil-masuk">
        <div className="flex gap-1 text-yellow-500 mb-4">
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
        </div>
        <p className="text-lg text-white mb-6">"Simply stunning components."</p>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
          <div>
            <div className="font-bold text-white">Alex Chen</div>
            <div className="text-sm text-gray-400">Frontend Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// --- 5. CTA SECTION ---
export const CTASection = () => (
  <div className="relative overflow-hidden rounded-xl bg-primary p-12 md:p-20 text-center">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
    
    <div className="relative z-10 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 bahlil-masuk-atas">
        Ready to ship your next project?
      </h2>
      <p className="text-xl text-white/80 mb-8 bahlil-masuk-bawah">
        Join thousands of developers building better UIs with Bahlilwind.
      </p>
      <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 font-bold hover:bahlil-mental">
        Get Access Now
      </Button>
    </div>
  </div>
);

export const ctaCode = `export default function CTA() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-blue-600 p-20 text-center">
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 bahlil-masuk-atas">
          Ready to ship?
        </h2>
        <p className="text-xl text-white/80 mb-8 bahlil-masuk-bawah">
          Join thousands of developers.
        </p>
        <button className="bg-white text-blue-600 rounded-full px-8 py-3 font-bold hover:bahlil-mental">
          Get Access Now
        </button>
      </div>
    </div>
  );
}`;
