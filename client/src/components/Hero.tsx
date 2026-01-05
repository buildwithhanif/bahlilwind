import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const installCmd = "npm install bahlilwind";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full overflow-hidden border-b-4 border-black bg-white dark:bg-black dark:border-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 border-2 border-black bg-accent px-4 py-1 font-mono text-sm font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bahlil-masuk-kiri">
            <span className="animate-pulse">●</span>
            v1.0.0 Release
          </div>
          
          <h1 className="font-display text-6xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter bahlil-masuk-bawah bahlil-delay-1">
            Tailwind <br/>
            <span className="text-primary italic">Animations</span> <br/>
            Sat-set.
          </h1>
          
          <p className="text-xl font-mono text-muted-foreground max-w-lg bahlil-masuk-bawah bahlil-delay-2">
            Copy-paste animation classes. No config. No setup. Langsung jalan. The most "Bahlil" animation library for developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 bahlil-masuk-bawah bahlil-delay-3">
            <a href="#animations">
              <Button className="brutalist-btn text-lg h-14 w-full sm:w-auto">
                BROWSE ANIMATIONS <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <div 
              onClick={handleCopy}
              className="brutalist-btn-secondary cursor-pointer flex items-center justify-between gap-4 h-14 w-full sm:w-auto font-mono text-sm"
            >
              <span>{installCmd}</span>
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
            </div>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[500px] w-full border-4 border-black bg-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] overflow-hidden flex items-center justify-center bahlil-zoom-masuk bahlil-delay-2">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-50 mix-blend-multiply"></div>
          
          <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
            <div className="h-32 w-32 bg-white border-4 border-black flex items-center justify-center font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bahlil-muter">
              MUTER
            </div>
            <div className="h-32 w-32 bg-accent border-4 border-black flex items-center justify-center font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bahlil-loncat">
              LONCAT
            </div>
            <div className="h-32 w-32 bg-secondary border-4 border-black flex items-center justify-center font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bahlil-kedip">
              KEDIP
            </div>
            <div className="h-32 w-32 bg-primary text-white border-4 border-black flex items-center justify-center font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bahlil-goyang">
              GOYANG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
