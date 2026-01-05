import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Installation() {
  const [activeTab, setActiveTab] = useState<'npm' | 'cdn' | 'plugin'>('npm');
  const [copied, setCopied] = useState(false);

  const codes = {
    npm: "npm install bahlilwind",
    cdn: '<link href="https://cdn.bahlilwind.com/bahlilwind.min.css" rel="stylesheet">',
    plugin: `// tailwind.config.js
module.exports = {
  plugins: [
    require('bahlilwind')
  ]
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codes[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="py-20 border-t-4 border-black bg-white dark:bg-black dark:border-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
              How to <span className="text-primary">Install</span>
            </h2>
            <p className="font-mono text-lg text-muted-foreground mb-8">
              Get started in seconds. Choose your preferred method below. No complex configuration required.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 border-2 border-black bg-accent/20">
                <div className="h-10 w-10 flex items-center justify-center bg-accent border-2 border-black font-bold text-xl">1</div>
                <p className="font-mono font-bold">Install the package</p>
              </div>
              <div className="flex items-center gap-4 p-4 border-2 border-black bg-primary/10">
                <div className="h-10 w-10 flex items-center justify-center bg-primary text-white border-2 border-black font-bold text-xl">2</div>
                <p className="font-mono font-bold">Add to tailwind.config.js</p>
              </div>
              <div className="flex items-center gap-4 p-4 border-2 border-black bg-secondary">
                <div className="h-10 w-10 flex items-center justify-center bg-white border-2 border-black font-bold text-xl">3</div>
                <p className="font-mono font-bold">Start using classes!</p>
              </div>
            </div>
          </div>

          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-gray-900 text-white overflow-hidden">
            <div className="flex border-b-2 border-gray-700">
              <button 
                onClick={() => setActiveTab('npm')}
                className={cn(
                  "px-6 py-3 font-mono font-bold hover:bg-gray-800 transition-colors",
                  activeTab === 'npm' ? "bg-primary text-white" : "text-gray-400"
                )}
              >
                NPM
              </button>
              <button 
                onClick={() => setActiveTab('cdn')}
                className={cn(
                  "px-6 py-3 font-mono font-bold hover:bg-gray-800 transition-colors",
                  activeTab === 'cdn' ? "bg-primary text-white" : "text-gray-400"
                )}
              >
                CDN
              </button>
              <button 
                onClick={() => setActiveTab('plugin')}
                className={cn(
                  "px-6 py-3 font-mono font-bold hover:bg-gray-800 transition-colors",
                  activeTab === 'plugin' ? "bg-primary text-white" : "text-gray-400"
                )}
              >
                PLUGIN
              </button>
            </div>

            <div className="p-6 relative group">
              <button 
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded bg-gray-800 hover:bg-gray-700 border border-gray-600 transition-all opacity-0 group-hover:opacity-100"
              >
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
              
              <pre className="font-mono text-sm overflow-x-auto">
                <code className="language-bash">
                  {activeTab === 'npm' && <span className="flex items-center gap-2"><Terminal className="h-4 w-4 text-green-400" /> {codes.npm}</span>}
                  {activeTab !== 'npm' && codes[activeTab]}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
