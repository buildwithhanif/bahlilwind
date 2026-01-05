import { Github, Twitter, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary border-2 border-white"></div>
              <span className="font-display text-2xl font-bold uppercase italic">
                Bahlil<span className="text-primary">wind</span>
              </span>
            </div>
            <p className="font-mono text-sm text-gray-400">
              Tailwind CSS Animation Library untuk Developer Sat-set.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm text-gray-500">
          <p className="flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Manus AI
          </p>
          <div className="flex items-center gap-1">
            <span>Bahlil approved</span>
            <span className="text-green-500">✓</span>
          </div>
          <p>© 2024 Bahlilwind. MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
