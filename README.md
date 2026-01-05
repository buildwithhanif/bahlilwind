# Bahlilwind 💨

**Tailwind CSS Animation Library untuk Developer Sat-set.**

Bahlilwind is a collection of copy-paste ready Tailwind CSS animations with an Indonesian flavor. Designed for developers who want to add personality to their projects without the hassle of complex configurations.

> **Developed by [vibecoding.id](https://vibecoding.id)**

## Features

- **Zero Configuration**: Just import and start animating.
- **Tailwind Native**: Built specifically for Tailwind CSS.
- **Indonesian Flavor**: Memorable, fun naming convention (e.g., `bahlil-masuk`, `bahlil-goyang`).
- **Lightweight**: <5kb gzipped.
- **Works Everywhere**: Compatible with any framework that supports CSS or Tailwind.

## Installation

### Option 1: NPM (Recommended)

```bash
npm install bahlilwind
```

Then add the plugin to your `tailwind.config.js`:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('bahlilwind')
  ]
}
```

### Option 2: CDN

Add this link to your HTML `<head>`:

```html
<link href="https://cdn.bahlilwind.com/bahlilwind.min.css" rel="stylesheet">
```

## Usage

Simply add the classes to your HTML elements:

```html
<!-- Entrance Animation -->
<div class="bahlil-masuk">
  Hello World!
</div>

<!-- Attention Animation on Hover -->
<button class="hover:bahlil-goyang">
  Hover Me!
</button>

<!-- Loop Animation -->
<div class="bahlil-muter">
  I'm spinning!
</div>
```

## Available Animations

### Entrance (Masuk)
- `bahlil-masuk`: Fade in
- `bahlil-masuk-atas`: Fade in from top
- `bahlil-masuk-bawah`: Fade in from bottom
- `bahlil-masuk-kiri`: Fade in from left
- `bahlil-masuk-kanan`: Fade in from right
- `bahlil-zoom-masuk`: Scale up entrance
- `bahlil-muncul`: Pop in effect

### Exit (Keluar)
- `bahlil-keluar`: Fade out
- `bahlil-keluar-atas`: Fade out to top
- `bahlil-keluar-bawah`: Fade out to bottom
- `bahlil-zoom-keluar`: Scale down exit
- `bahlil-kabur`: Blur out and fade

### Attention (Perhatian)
- `bahlil-goyang`: Shake horizontal
- `bahlil-getar`: Vibrate/tremor
- `bahlil-kedip`: Pulse/blink
- `bahlil-mental`: Bounce
- `bahlil-loncat`: Jump
- `bahlil-angguk`: Nod (vertical bounce)
- `bahlil-geleng`: Head shake (horizontal)

### Loop (Muter Terus)
- `bahlil-muter`: Spin infinitely
- `bahlil-ngambang`: Float up and down
- `bahlil-napas`: Breathing scale effect
- `bahlil-ombak`: Wave motion

## License

MIT License © 2026 Bahlilwind. Developed by vibecoding.id.
