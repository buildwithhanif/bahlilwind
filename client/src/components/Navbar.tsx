import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import logoImage from "@/assets/logo.png";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-black bg-white dark:bg-black dark:border-white">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden border-2 border-black bg-primary group-hover:bahlil-goyang">
            <img src={logoImage} alt="Bahlilwind Logo" className="h-full w-full object-cover" />
          </div>
          <span className="font-display text-2xl font-bold uppercase tracking-tighter italic">
            Bahlil<span className="text-primary">wind</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-mono font-bold">
          <button onClick={() => document.getElementById('animations')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline decoration-4 decoration-primary underline-offset-4 uppercase">ANIMATIONS</button>
          <button onClick={() => document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline decoration-4 decoration-primary underline-offset-4 uppercase">INSTALL</button>
          <button onClick={() => document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline decoration-4 decoration-primary underline-offset-4 uppercase">DOCS</button>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border-2 border-black dark:border-white rounded-none hover:bg-accent hover:text-accent-foreground"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <a href="https://github.com/buildwithhanif/bahlilwind" target="_blank" rel="noreferrer">
            <Button className="brutalist-btn hidden sm:flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span>STAR</span>
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
