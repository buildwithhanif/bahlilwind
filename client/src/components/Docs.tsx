import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Docs() {
  return (
    <section id="docs" className="py-20 border-b-4 border-black dark:border-white bg-white dark:bg-black">
      <div className="container max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase italic tracking-tighter mb-4">
            Documentation
          </h2>
          <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to become a Bahlilwind master.
          </p>
        </div>

        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="w-full grid grid-cols-3 h-auto p-2 bg-muted border-2 border-black dark:border-white rounded-none mb-8">
            <TabsTrigger value="usage" className="font-mono font-bold text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white rounded-none border-r-2 border-transparent data-[state=active]:border-black">USAGE</TabsTrigger>
            <TabsTrigger value="configuration" className="font-mono font-bold text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white rounded-none border-r-2 border-transparent data-[state=active]:border-black">CONFIG</TabsTrigger>
            <TabsTrigger value="api" className="font-mono font-bold text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white rounded-none">API REF</TabsTrigger>
          </TabsList>

          <TabsContent value="usage">
            <Card className="border-4 border-black dark:border-white shadow-brutal rounded-none">
              <CardHeader className="border-b-4 border-black dark:border-white bg-warning">
                <CardTitle className="font-display text-2xl uppercase">Basic Usage</CardTitle>
              </CardHeader>
              <CardContent className="p-6 font-mono space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Applying Animations</h3>
                  <p className="mb-4">Just add the class name to any element. That's it.</p>
                  <div className="bg-black text-white p-4 border-2 border-black dark:border-white">
                    <code>&lt;div class="bahlil-masuk"&gt;Hello World&lt;/div&gt;</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Hover Effects</h3>
                  <p className="mb-4">Prefix with <code>hover:</code> to trigger on hover.</p>
                  <div className="bg-black text-white p-4 border-2 border-black dark:border-white">
                    <code>&lt;button class="hover:bahlil-goyang"&gt;Hover Me&lt;/button&gt;</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Controlling Duration</h3>
                  <p className="mb-4">Use utility classes to control speed.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><code>bahlil-cepat</code>: Fast (300ms)</li>
                    <li><code>bahlil-lambat</code>: Slow (2s)</li>
                    <li><code>bahlil-santai</code>: Very Slow (3s)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="configuration">
            <Card className="border-4 border-black dark:border-white shadow-brutal rounded-none">
              <CardHeader className="border-b-4 border-black dark:border-white bg-secondary">
                <CardTitle className="font-display text-2xl uppercase">Tailwind Config</CardTitle>
              </CardHeader>
              <CardContent className="p-6 font-mono space-y-6">
                <p>If you are using the plugin, you can extend the theme in your <code>tailwind.config.js</code>.</p>
                <div className="bg-black text-white p-4 border-2 border-black dark:border-white overflow-x-auto">
                  <pre>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'bahlil-custom': 'bahlil-goyang 1s infinite',
      }
    }
  },
  plugins: [
    require('bahlilwind')
  ],
}`}</pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card className="border-4 border-black dark:border-white shadow-brutal rounded-none">
              <CardHeader className="border-b-4 border-black dark:border-white bg-accent">
                <CardTitle className="font-display text-2xl uppercase">Class Reference</CardTitle>
              </CardHeader>
              <CardContent className="p-6 font-mono">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">Entrances (Masuk)</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between"><span>bahlil-masuk</span> <span className="text-muted-foreground">Fade In</span></li>
                      <li className="flex justify-between"><span>bahlil-masuk-atas</span> <span className="text-muted-foreground">From Top</span></li>
                      <li className="flex justify-between"><span>bahlil-masuk-bawah</span> <span className="text-muted-foreground">From Bottom</span></li>
                      <li className="flex justify-between"><span>bahlil-masuk-kiri</span> <span className="text-muted-foreground">From Left</span></li>
                      <li className="flex justify-between"><span>bahlil-masuk-kanan</span> <span className="text-muted-foreground">From Right</span></li>
                      <li className="flex justify-between"><span>bahlil-zoom-masuk</span> <span className="text-muted-foreground">Zoom In</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">Attention (Perhatian)</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between"><span>bahlil-goyang</span> <span className="text-muted-foreground">Shake</span></li>
                      <li className="flex justify-between"><span>bahlil-getar</span> <span className="text-muted-foreground">Vibrate</span></li>
                      <li className="flex justify-between"><span>bahlil-kedip</span> <span className="text-muted-foreground">Pulse</span></li>
                      <li className="flex justify-between"><span>bahlil-mental</span> <span className="text-muted-foreground">Bounce</span></li>
                      <li className="flex justify-between"><span>bahlil-loncat</span> <span className="text-muted-foreground">Jump</span></li>
                      <li className="flex justify-between"><span>bahlil-muter</span> <span className="text-muted-foreground">Spin</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
