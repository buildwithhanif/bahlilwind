import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import logoImage from "@/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-primary/20 group-hover:bahlil-goyang">
            <img src={logoImage} alt="Bahlilwind Logo" className="h-full w-full object-cover" />
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-white">
            Bahlil<span className="text-primary">wind</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">COMPONENTS</button>
          <button onClick={() => document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">DOCS</button>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/buildwithhanif/bahlilwind" target="_blank" rel="noreferrer">
            <Button variant="outline" size="sm" className="border-white/10 bg-white/5 hover:bg-white/10 text-white gap-2 rounded-full">
              <Github className="h-4 w-4" />
              <span>Star on GitHub</span>
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
