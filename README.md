<div align="center">

# ⚡ Electric Border CSS

**Stunning animated electric border effect using pure CSS and SVG**

[![NPM Version](https://img.shields.io/npm/v/electric-border-css?color=00fffb)](https://www.npmjs.com/package/electric-border-css)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](./COMPONENTS.md)
[![Framework Support](https://img.shields.io/badge/Frameworks-React%20%7C%20Next%20%7C%20Vue%20%7C%20Svelte-purple.svg)](#-framework-support)

[**Live Demo**](https://hammadxcm.github.io/electric-border-css) • [**Documentation**](./COMPONENTS.md) • [**Examples**](./EXAMPLES.md) • [**Playground**](./examples.html)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
  - [HTML/CSS](#htmlcss)
  - [React](#react)
  - [Next.js](#nextjs)
  - [Vue 3](#vue-3)
  - [Svelte](#svelte)
- [Framework Support](#-framework-support)
- [Color Presets](#-color-presets)
- [Customization](#-customization)
- [Props/API](#-propsapi)
- [Browser Support](#-browser-support)
- [Examples](#-examples)
- [Troubleshooting](#-troubleshooting)
- [FAQ](#-faq)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Design**
- Pure CSS & SVG animations
- 8+ stunning color presets
- Fully customizable colors
- Smooth, elegant effects
- Responsive on all devices

</td>
<td width="50%">

### 🚀 **Developer Experience**
- React, Next.js, Vue, Svelte ready
- Full TypeScript support
- Zero dependencies
- NPM package available
- Interactive playground included

</td>
</tr>
<tr>
<td width="50%">

### ⚡ **Performance**
- GPU-accelerated animations
- Hardware optimization
- Minimal bundle size
- Lazy-load compatible
- 60 FPS smooth

</td>
<td width="50%">

### ♿ **Accessibility**
- Respects `prefers-reduced-motion`
- Semantic HTML structure
- Keyboard navigation
- ARIA-compatible
- Screen reader friendly

</td>
</tr>
</table>

---

## 🚀 Quick Start

### HTML/CSS

**1. Download or CDN (Coming Soon)**

```html
<!-- Option 1: Local Files -->
<link rel="stylesheet" href="style.css">

<!-- Option 2: CDN (Coming Soon) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/electric-border-css/style.css">
```

**2. Add HTML Structure**

```html
<!-- SVG Filter (place once per page) -->
<svg class="svg-container" style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="turbulent-displace" colorInterpolationFilters="sRGB">
      <!-- Filter definitions (see quick-start.html for full code) -->
    </filter>
  </defs>
</svg>

<!-- Your Electric Border Card -->
<div class="card-container">
  <div class="inner-container">
    <div class="border-outer">
      <div class="main-card"></div>
    </div>
    <div class="glow-layer-1"></div>
    <div class="glow-layer-2"></div>
  </div>

  <div class="overlay-1"></div>
  <div class="overlay-2"></div>
  <div class="background-glow"></div>

  <div class="content-container">
    <div class="content-top">
      <div class="scrollbar-glass">Featured</div>
      <p class="title">Your Title</p>
    </div>
    <hr class="divider" />
    <div class="content-bottom">
      <p class="description">Your description here.</p>
    </div>
  </div>
</div>
```

**3. Use Color Presets (Optional)**

```html
<!-- Apply preset class for instant color -->
<div class="card-container electric-purple">
<div class="card-container electric-pink">
<div class="card-container electric-green">
```

💡 **Pro Tip**: Copy `quick-start.html` for a complete working example!

---

### React

**Installation**

```bash
npm install electric-border-css
# or
yarn add electric-border-css
# or
pnpm add electric-border-css
```

**Basic Usage**

```tsx
import { ElectricBorder } from 'electric-border-css/react';
import 'electric-border-css/react/ElectricBorder.css';

function App() {
  return (
    <ElectricBorder
      preset="purple"
      label="Featured"
      title="Electric Border"
      description="Beautiful animated effect"
    />
  );
}
```

**With Custom Content**

```tsx
<ElectricBorder preset="cyan" width={400} height={600}>
  <div className="custom-content">
    <h1>Custom Content</h1>
    <p>Full control over the card content!</p>
    <button onClick={handleClick}>Action</button>
  </div>
</ElectricBorder>
```

**TypeScript Support**

```tsx
import type { ElectricBorderProps } from 'electric-border-css/react';

const props: ElectricBorderProps = {
  preset: 'purple',
  width: 350,
  height: 500,
  animationSpeed: 3,
  glowIntensity: 0.7,
};

<ElectricBorder {...props} />
```

📚 [**Full React Documentation →**](./components/react/README.md)

---

### Next.js

**Installation**

```bash
npm install electric-border-css
```

**App Router (Next.js 13+)**

```tsx
// app/page.tsx
import { ElectricBorder } from 'electric-border-css/nextjs';

export default function Page() {
  return (
    <ElectricBorder
      preset="cyan"
      label="Interactive"
      title="Click to Navigate"
      href="/dashboard"
    />
  );
}
```

**Pages Router (Next.js 12 and below)**

```tsx
// pages/index.tsx
import { ElectricBorder } from 'electric-border-css/nextjs';

export default function Home() {
  return (
    <ElectricBorder
      preset="purple"
      title="My Card"
    />
  );
}
```

**Dynamic Routes**

```tsx
const products = [
  { id: 1, name: 'Product 1', color: 'purple' },
  { id: 2, name: 'Product 2', color: 'cyan' },
];

export default function Products() {
  return (
    <div className="grid">
      {products.map(product => (
        <ElectricBorder
          key={product.id}
          href={`/products/${product.id}`}
          preset={product.color}
          title={product.name}
        />
      ))}
    </div>
  );
}
```

📚 [**Full Next.js Documentation →**](./components/nextjs/README.md)

---

### Vue 3

**Installation**

```bash
npm install electric-border-css
```

**Basic Usage**

```vue
<script setup lang="ts">
import ElectricBorder from 'electric-border-css/vue';

const handleClick = () => {
  console.log('Card clicked!');
};
</script>

<template>
  <ElectricBorder
    preset="pink"
    label="Featured"
    title="Electric Border"
    description="Vue 3 Component"
    @click="handleClick"
  />
</template>
```

**With Custom Content (Slots)**

```vue
<template>
  <ElectricBorder preset="green">
    <div class="custom-content">
      <h2>Custom Content</h2>
      <p>Use slots for full control!</p>
      <button @click="handleAction">Click Me</button>
    </div>
  </ElectricBorder>
</template>

<style scoped>
.custom-content {
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

**Reactive State**

```vue
<script setup lang="ts">
import { ref } from 'vue';
import ElectricBorder from 'electric-border-css/vue';

const currentColor = ref('#00fffb');
const intensity = ref(0.5);
</script>

<template>
  <input type="color" v-model="currentColor" />
  <input type="range" min="0.1" max="1" step="0.1" v-model="intensity" />

  <ElectricBorder
    :color="currentColor"
    :glow-intensity="intensity"
    label="Live Preview"
    title="Customizable"
  />
</template>
```

📚 [**Full Vue Documentation →**](./components/vue/README.md)

---

### Svelte

**Installation**

```bash
npm install electric-border-css
```

**Basic Usage**

```svelte
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';

  function handleClick() {
    console.log('Card clicked!');
  }
</script>

<ElectricBorder
  preset="orange"
  label="Featured"
  title="Electric Border"
  description="Svelte Component"
  on:click={handleClick}
/>
```

**With Reactive Bindings**

```svelte
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';

  let currentColor = '#00fffb';
  let speed = 3;
  let intensity = 0.5;
</script>

<div class="controls">
  <label>Color: <input type="color" bind:value={currentColor} /></label>
  <label>Speed: <input type="range" min="1" max="10" step="0.5" bind:value={speed} /></label>
  <label>Intensity: <input type="range" min="0.1" max="1" step="0.1" bind:value={intensity} /></label>
</div>

<ElectricBorder
  color={currentColor}
  animationSpeed={speed}
  glowIntensity={intensity}
  label="Live Preview"
  title="Customizable"
/>
```

**SvelteKit**

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import ElectricBorder from 'electric-border-css/svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  function navigateToProduct(id: number) {
    goto(`/products/${id}`);
  }
</script>

<div class="grid">
  {#each data.products as product}
    <ElectricBorder
      preset={product.colorPreset}
      label={product.category}
      title={product.name}
      on:click={() => navigateToProduct(product.id)}
    />
  {/each}
</div>
```

📚 [**Full Svelte Documentation →**](./components/svelte/README.md)

---

## 🎨 Color Presets

All components support 8 beautiful color presets:

| Preset | Color Code | Use Case |
|--------|-----------|----------|
| **cyan** *(default)* | `#00fffb` | Tech, Modern, Default |
| **yellow** | `#f2ff00` | Attention, Bright, Energetic |
| **purple** | `#b000ff` | Premium, Luxury, Royal |
| **pink** | `#ff00ff` | Bold, Creative, Fun |
| **green** | `#00ff88` | Success, Nature, Matrix |
| **orange** | `#ff6600` | Warm, Energetic, Action |
| **red** | `#ff0044` | Alert, Important, Bold |
| **blue** | `#0088ff` | Professional, Cool, Trust |

**Usage:**

```tsx
// Framework components
<ElectricBorder preset="purple" />

// Vanilla CSS
<div class="card-container electric-purple">
```

**Custom Colors:**

```tsx
// Any hex, rgb, hsl color
<ElectricBorder color="#ff6600" />
<ElectricBorder color="rgb(255, 102, 0)" />
<ElectricBorder color="hsl(24, 100%, 50%)" />
```

---

## 🎛️ Customization

### Component Props

All framework components share these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `350` | Card width in pixels |
| `height` | `number` | `500` | Card height in pixels |
| `color` | `string` | - | Custom border color (overrides preset) |
| `preset` | `'cyan' \| 'yellow' \| 'purple' \| ...` | `'cyan'` | Color preset |
| `animationSpeed` | `number` | `3` | Animation duration in seconds (1-10) |
| `glowIntensity` | `number` | `0.5` | Glow opacity (0.1 - 1.0) |
| `blurAmount` | `number` | `28` | Background blur in pixels (10-50) |
| `borderRadius` | `number` | `24` | Border radius in pixels |
| `label` | `string` | - | Small label text |
| `title` | `string` | - | Main title text |
| `description` | `string` | - | Description text |
| `disableHover` | `boolean` | `false` | Disable hover effects |

### CSS Variables (Vanilla)

```css
:root {
  /* Primary color */
  --electric-border-color: #00fffb;

  /* Auto-calculated (no need to change) */
  --electric-light-color: oklch(from var(--electric-border-color) l c h);
  --gradient-color: oklch(from var(--electric-border-color) 0.3 calc(c / 2) h / 0.4);
}
```

### Animation Speed

```css
/* Slow and elegant */
.glow-layer-1 { animation-duration: 5s; }

/* Fast and energetic */
.glow-layer-1 { animation-duration: 1.5s; }
```

### Glow Intensity

```css
/* Subtle */
.glow-layer-1 { opacity: 0.3; }
.glow-layer-2 { opacity: 0.2; }

/* Intense */
.glow-layer-1 { opacity: 0.8; }
.glow-layer-2 { opacity: 0.5; }
```

---

## 📘 Props/API

### React/Next.js

```tsx
interface ElectricBorderProps {
  width?: number;
  height?: number;
  color?: string;
  preset?: 'cyan' | 'purple' | 'pink' | 'green' | 'orange' | 'red' | 'blue' | 'yellow';
  animationSpeed?: number;
  glowIntensity?: number;
  blurAmount?: number;
  borderRadius?: number;
  label?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  disableHover?: boolean;
  onClick?: () => void;

  // Next.js only
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}
```

### Vue 3

```typescript
interface ElectricBorderProps {
  width?: number;
  height?: number;
  color?: string;
  preset?: 'cyan' | 'purple' | 'pink' | 'green' | 'orange' | 'red' | 'blue' | 'yellow';
  animationSpeed?: number;
  glowIntensity?: number;
  blurAmount?: number;
  borderRadius?: number;
  label?: string;
  title?: string;
  description?: string;
  customClass?: string;
  disableHover?: boolean;
}

// Events
@click - Emitted when card is clicked

// Slots
<slot> - Default slot for custom content
```

### Svelte

```typescript
// Props
export let width: number = 350;
export let height: number = 500;
export let color: string | undefined = undefined;
export let preset: 'cyan' | 'purple' | ... = 'cyan';
export let animationSpeed: number = 3;
export let glowIntensity: number = 0.5;
export let blurAmount: number = 28;
export let borderRadius: number = 24;
export let label: string | undefined = undefined;
export let title: string | undefined = undefined;
export let description: string | undefined = undefined;
export let customClass: string = '';
export let disableHover: boolean = false;

// Events
on:click - Fired when card is clicked

// Slots
<slot /> - Default slot for custom content
```

---

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome/Edge | ✅ Full | All features work |
| Firefox | ✅ Full | All features work |
| Safari | ✅ Full | iOS 15+ recommended |
| Opera | ✅ Full | All features work |
| IE 11 | ❌ No | Not supported |

**Required CSS Features:**
- CSS Custom Properties (CSS Variables)
- CSS Animations
- SVG Filters
- OKLCH color space (with fallbacks)

---

## 💡 Examples

### Pricing Cards

```tsx
const plans = [
  { name: 'Basic', price: '$9', features: ['5 projects', 'Basic support'], color: 'cyan' },
  { name: 'Pro', price: '$29', features: ['Unlimited projects', 'Priority support'], color: 'purple' },
  { name: 'Enterprise', price: '$99', features: ['Everything', 'Dedicated support'], color: 'pink' },
];

<div className="pricing-grid">
  {plans.map(plan => (
    <ElectricBorder key={plan.name} preset={plan.color}>
      <div className="pricing-card">
        <h3>{plan.name}</h3>
        <p className="price">{plan.price}/mo</p>
        <ul>
          {plan.features.map(feature => <li key={feature}>{feature}</li>)}
        </ul>
        <button>Subscribe</button>
      </div>
    </ElectricBorder>
  ))}
</div>
```

### Hero Section

```tsx
<section className="hero">
  <ElectricBorder preset="purple" width={600} height={400}>
    <div className="hero-content">
      <h1>Welcome to Our Platform</h1>
      <p>Build amazing things with our tools</p>
      <button>Get Started →</button>
    </div>
  </ElectricBorder>
</section>
```

### Dashboard Widget

```tsx
<ElectricBorder preset="green" width={300} height={200}>
  <div className="stat-widget">
    <h4>Total Users</h4>
    <p className="stat">1,250</p>
    <span className="change">+12.5% ↑</span>
  </div>
</ElectricBorder>
```

📚 [**More Examples →**](./EXAMPLES.md)

---

## 🔧 Troubleshooting

### Common Issues

**Issue: Colors not displaying**
```
Solution: Ensure your browser supports OKLCH color space.
For older browsers, add fallback colors in CSS.
```

**Issue: Animations not working**
```
Solution: Check that SVG filter ID matches in both <filter> and filter: url(#...).
Each page should have unique filter IDs if multiple instances.
```

**Issue: Performance issues with many cards**
```
Solution:
1. Limit to 5-10 cards per page
2. Use lazy loading with Intersection Observer
3. Reduce numOctaves in SVG filter (mobile)
4. Add will-change: transform to animated elements
```

**Issue: TypeScript errors**
```
Solution: Ensure you have @types/react installed for React/Next.js:
npm install --save-dev @types/react
```

**Issue: Component not found**
```
Solution: Check your import path:
✅ import { ElectricBorder } from 'electric-border-css/react';
❌ import { ElectricBorder } from 'electric-border-css';
```

### React Specific

**Issue: CSS not loading**
```tsx
// Make sure to import CSS
import 'electric-border-css/react/ElectricBorder.css';
```

### Next.js Specific

**Issue: Hydration mismatch**
```tsx
// The component uses 'use client' directive, so it should work.
// If issues persist, wrap in a client component:

// components/ClientCard.tsx
'use client';
import { ElectricBorder } from 'electric-border-css/nextjs';
export default function ClientCard(props) {
  return <ElectricBorder {...props} />;
}
```

### Vue Specific

**Issue: Component not rendering**
```vue
<!-- Ensure proper import -->
<script setup lang="ts">
import ElectricBorder from 'electric-border-css/vue';
// NOT: import { ElectricBorder } from 'electric-border-css/vue';
</script>
```

### Svelte Specific

**Issue: Props not reactive**
```svelte
<!-- Use reactive statements if needed -->
<script lang="ts">
  let color = '#00fffb';
  $: dynamicProps = { color };
</script>

<ElectricBorder {...dynamicProps} />
```

---

## ❓ FAQ

**Q: Can I use this in commercial projects?**
A: Yes! MIT License allows commercial use.

**Q: Does this work with Tailwind CSS?**
A: Yes! The component works perfectly with Tailwind. Apply Tailwind classes to the children/slot content.

**Q: Can I customize the animation?**
A: Yes! Use `animationSpeed`, `glowIntensity`, and `blurAmount` props. For advanced customization, modify the CSS.

**Q: How do I add my own colors?**
A: Use the `color` prop with any valid color: `color="#ff6600"` or `color="rgb(255,102,0)"`.

**Q: Is this SSR compatible?**
A: Yes! Works with Next.js SSR, Nuxt (Vue), and SvelteKit.

**Q: How much does this add to bundle size?**
A: Very minimal! CSS-only effect (~5KB gzipped). Component wrappers are tiny (~2KB each).

**Q: Can I use multiple colors on one page?**
A: Yes! Each instance can have its own color preset or custom color.

**Q: Does this affect accessibility?**
A: The effect respects `prefers-reduced-motion`. Animations pause for users who prefer reduced motion.

**Q: How do I contribute?**
A: See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines. Pull requests welcome!

**Q: Where can I see live examples?**
A: Check [examples.html](./examples.html) for an interactive playground, or see [EXAMPLES.md](./EXAMPLES.md) for code examples.

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### Development Setup

```bash
# Clone the repo
git clone https://github.com/hammadxcm/electric-border-css.git
cd electric-border-css

# Open examples
open examples.html

# Test components (for framework components)
cd components/react
npm install
npm test
```

---

## 📄 License

MIT © [Fyniti](https://fyniti.co.uk)

See [LICENSE](./LICENSE) for full details.

---

## 🙏 Acknowledgments

- Inspired by modern UI design trends
- Built with passion for the web development community
- Thanks to all contributors and users!

---

## 📞 Support & Contact

- 🐛 [Report Issues](https://github.com/hammadxcm/electric-border-css/issues)
- 💬 [Discussions](https://github.com/hammadxcm/electric-border-css/discussions)
- 🌐 [Website](https://fyniti.co.uk)
- 📧 Email: contact@fyniti.co.uk

---

## 🔗 Links

- [📦 NPM Package](https://www.npmjs.com/package/electric-border-css)
- [📚 Component Docs](./COMPONENTS.md)
- [💡 Examples](./EXAMPLES.md)
- [🎨 Interactive Playground](./examples.html)
- [📝 Changelog](./CHANGELOG.md)

---

<div align="center">

**Made with ❤️ by [Fyniti](https://fyniti.co.uk)**

If you find this project helpful, please consider:

⭐ **Star this repository**
🐛 **Report issues**
🔗 **Share with others**
☕ **[Buy me a coffee](https://github.com/sponsors/hammadxcm)**

[⬆ back to top](#-electric-border-css)

</div>
