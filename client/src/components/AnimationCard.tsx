import { useState } from "react";
import { Copy, Check, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimationCardProps {
  name: string;
  className: string;
  description: string;
  category: string;
}

export default function AnimationCard({ name, className, description, category }: AnimationCardProps) {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(className);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerAnimation = () => {
    setIsAnimating(false);
    // Force reflow
    setTimeout(() => setIsAnimating(true), 10);
  };

  return (
    <div 
      className="group relative flex flex-col border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
      onClick={triggerAnimation}
    >
      <div className="absolute top-2 right-2 z-20 flex gap-2">
        <button 
          onClick={handleCopy}
          className="flex h-8 w-8 items-center justify-center border-2 border-black bg-white hover:bg-gray-100 active:translate-y-0.5 active:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          title="Copy class"
        >
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>

      <div className="flex h-40 items-center justify-center overflow-hidden border-b-2 border-black bg-gray-50 dark:bg-gray-900 p-6">
        <div className={cn(
          "flex h-20 w-20 items-center justify-center border-2 border-black bg-primary text-white font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          isAnimating ? className : "",
          // Add hover effect if it's a hover class
          className.startsWith('hover:') ? className : "group-hover:" + className
        )}>
          B
        </div>
      </div>

      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground border border-black px-2 py-0.5 rounded-full">
            {category}
          </span>
          <Play className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <code className="font-mono text-sm font-bold text-primary mb-1">{className}</code>
        <p className="text-xs text-muted-foreground font-mono">{description}</p>
      </div>
    </div>
  );
}
