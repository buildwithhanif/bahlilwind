import AnimationCard from "./AnimationCard";

const animations = [
  // Entrance
  { name: "Fade In", class: "bahlil-masuk", desc: "Simple fade in", category: "Entrance" },
  { name: "Fade In Top", class: "bahlil-masuk-atas", desc: "Fade in from top", category: "Entrance" },
  { name: "Fade In Bottom", class: "bahlil-masuk-bawah", desc: "Fade in from bottom", category: "Entrance" },
  { name: "Fade In Left", class: "bahlil-masuk-kiri", desc: "Fade in from left", category: "Entrance" },
  { name: "Fade In Right", class: "bahlil-masuk-kanan", desc: "Fade in from right", category: "Entrance" },
  { name: "Zoom In", class: "bahlil-zoom-masuk", desc: "Scale up entrance", category: "Entrance" },
  { name: "Pop In", class: "bahlil-muncul", desc: "Bouncy pop in effect", category: "Entrance" },

  // Exit
  { name: "Fade Out", class: "bahlil-keluar", desc: "Simple fade out", category: "Exit" },
  { name: "Fade Out Top", class: "bahlil-keluar-atas", desc: "Fade out to top", category: "Exit" },
  { name: "Fade Out Bottom", class: "bahlil-keluar-bawah", desc: "Fade out to bottom", category: "Exit" },
  { name: "Zoom Out", class: "bahlil-zoom-keluar", desc: "Scale down exit", category: "Exit" },
  { name: "Blur Out", class: "bahlil-kabur", desc: "Blur and fade out", category: "Exit" },

  // Attention
  { name: "Shake", class: "bahlil-goyang", desc: "Horizontal shake", category: "Attention" },
  { name: "Vibrate", class: "bahlil-getar", desc: "Intense vibration", category: "Attention" },
  { name: "Pulse", class: "bahlil-kedip", desc: "Blinking pulse", category: "Attention" },
  { name: "Bounce", class: "bahlil-mental", desc: "High bounce", category: "Attention" },
  { name: "Jump", class: "bahlil-loncat", desc: "Jump up and down", category: "Attention" },
  { name: "Nod", class: "bahlil-angguk", desc: "Vertical nod", category: "Attention" },
  { name: "Head Shake", class: "bahlil-geleng", desc: "Horizontal head shake", category: "Attention" },

  // Loop
  { name: "Spin", class: "bahlil-muter", desc: "Infinite spin", category: "Loop" },
  { name: "Float", class: "bahlil-ngambang", desc: "Floating effect", category: "Loop" },
  { name: "Breathe", class: "bahlil-napas", desc: "Breathing scale", category: "Loop" },
  { name: "Wave", class: "bahlil-ombak", desc: "Waving rotation", category: "Loop" },

  // Hover
  { name: "Hover Lift", class: "hover:bahlil-angkat", desc: "Lift up on hover", category: "Hover" },
  { name: "Hover Press", class: "hover:bahlil-tekan", desc: "Press down on hover", category: "Hover" },
  { name: "Hover Glow", class: "hover:bahlil-glow", desc: "Glow effect on hover", category: "Hover" },
  { name: "Hover Scale", class: "hover:bahlil-perbesar", desc: "Scale up on hover", category: "Hover" },
];

export default function DemoGrid() {
  return (
    <section id="animations" className="py-20 bg-light-gray dark:bg-gray-900">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
            Animation <span className="text-primary">Gallery</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Click any card to trigger the animation. Hover over "Hover" cards to see the effect.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {animations.map((anim) => (
            <AnimationCard
              key={anim.class}
              name={anim.name}
              className={anim.class}
              description={anim.desc}
              category={anim.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
