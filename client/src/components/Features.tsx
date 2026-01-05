import { Zap, Wind, Code, Feather, Globe, Smile } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Zero Config",
    description: "No complex setup. Just import and start animating immediately."
  },
  {
    icon: Wind,
    title: "Tailwind Native",
    description: "Built specifically for Tailwind CSS. Works seamlessly with your existing stack."
  },
  {
    icon: Smile,
    title: "Indonesian Flavor",
    description: "Memorable, fun naming convention that brings joy to your codebase."
  },
  {
    icon: Code,
    title: "Copy-Paste Ready",
    description: "Click any animation to copy the class name. Developer experience first."
  },
  {
    icon: Feather,
    title: "Lightweight",
    description: "<5kb gzipped. Your users won't even notice it's there."
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Compatible with any framework that supports CSS or Tailwind."
  }
];

export default function Features() {
  return (
    <section className="py-20 border-b-4 border-black bg-white dark:bg-black dark:border-white">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all bg-white dark:bg-gray-900"
            >
              <div className="h-12 w-12 bg-primary text-white border-2 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase mb-3">{feature.title}</h3>
              <p className="font-mono text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
