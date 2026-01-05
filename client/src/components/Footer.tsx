import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary/20 border border-primary/50"></div>
              <span className="font-sans text-xl font-bold tracking-tight">
                Bahlil<span className="text-primary">wind</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Beautiful UI components built for dark mode.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/buildwithhanif/bahlilwind" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            Developed by <span className="text-white font-medium">vibecoding.id</span>
          </p>
          <p>© 2026 Bahlilwind. MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
