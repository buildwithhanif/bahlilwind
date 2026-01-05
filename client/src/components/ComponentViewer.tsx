import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, Eye, Code } from "lucide-react";
import { toast } from "sonner";

interface ComponentViewerProps {
  title: string;
  description?: string;
  component: React.ReactNode;
  code: string;
}

export default function ComponentViewer({ title, description, component, code }: ComponentViewerProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full mb-16 scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      <div className="border border-white/10 rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm">
        <Tabs defaultValue="preview" className="w-full">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <TabsList className="bg-black/50 border border-white/10">
              <TabsTrigger value="preview" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <Eye className="w-4 h-4 mr-2" /> Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <Code className="w-4 h-4 mr-2" /> Code
              </TabsTrigger>
            </TabsList>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={copyToClipboard}
              className="text-muted-foreground hover:text-white hover:bg-white/10"
            >
              {copied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? "Copied" : "Copy Code"}
            </Button>
          </div>

          <TabsContent value="preview" className="mt-0">
            <div className="p-8 min-h-[400px] flex items-center justify-center bg-grid-white/[0.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black pointer-events-none" />
              <div className="w-full max-w-5xl mx-auto">
                {component}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-0">
            <div className="relative max-h-[500px] overflow-y-auto bg-[#0d1117] p-4 font-mono text-sm">
              <pre className="text-gray-300">
                <code>{code}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
