# Electric Border CSS - Framework Components

This package provides ready-to-use components for all major JavaScript frameworks with full TypeScript support.

## 🚀 Available Frameworks

- ⚛️ **React** - Full TypeScript support
- ⚡ **Next.js** - App Router & Pages Router compatible
- 💚 **Vue 3** - Composition API with TypeScript
- 🔥 **Svelte** - SvelteKit compatible with TypeScript

## 📦 Installation

```bash
npm install electric-border-css
# or
yarn add electric-border-css
# or
pnpm add electric-border-css
```

## 🎨 Quick Start

### React

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

### Next.js

```tsx
// Works with App Router and Pages Router
import { ElectricBorder } from 'electric-border-css/nextjs';

export default function Page() {
  return (
    <ElectricBorder
      href="/details"
      preset="cyan"
      label="Navigate"
      title="Click Me"
    />
  );
}
```

### Vue 3

```vue
<script setup lang="ts">
import ElectricBorder from 'electric-border-css/vue';
</script>

<template>
  <ElectricBorder
    preset="pink"
    label="Featured"
    title="Electric Border"
    @click="handleClick"
  />
</template>
```

### Svelte

```svelte
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';
</script>

<ElectricBorder
  preset="green"
  label="Featured"
  title="Electric Border"
  on:click={handleClick}
/>
```

## 🎭 Props / Attributes

All components share these common props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `350` | Card width in pixels |
| `height` | `number` | `500` | Card height in pixels |
| `color` | `string` | - | Custom border color (overrides preset) |
| `preset` | `string` | `'cyan'` | Color preset: `cyan`, `purple`, `pink`, `green`, `orange`, `red`, `blue`, `yellow` |
| `animationSpeed` | `number` | `3` | Animation speed in seconds |
| `glowIntensity` | `number` | `0.5` | Glow intensity (0.1 - 1) |
| `blurAmount` | `number` | `28` | Background blur in pixels |
| `borderRadius` | `number` | `24` | Border radius in pixels |
| `label` | `string` | - | Small label text |
| `title` | `string` | - | Main title text |
| `description` | `string` | - | Description text |
| `disableHover` | `boolean` | `false` | Disable hover effects |

### Framework-Specific Props

**React/Next.js:**
- `className` - Additional CSS class
- `style` - Inline styles object
- `onClick` - Click handler
- `children` - Custom content

**Next.js Only:**
- `href` - Next.js Link href
- `target` - Link target

**Vue:**
- `customClass` - Additional CSS class
- `@click` - Click event

**Svelte:**
- `customClass` - Additional CSS class
- `on:click` - Click event

## 🎨 Available Presets

```tsx
// All presets
'cyan' | 'yellow' | 'purple' | 'pink' | 'green' | 'orange' | 'red' | 'blue'
```

### Color Reference

- **cyan** - `#00fffb` - Default turquoise/cyan
- **yellow** - `#f2ff00` - Bright yellow/gold
- **purple** - `#b000ff` - Deep purple
- **pink** - `#ff00ff` - Vibrant magenta
- **green** - `#00ff88` - Matrix-style green
- **orange** - `#ff6600` - Energetic orange
- **red** - `#ff0044` - Bold red
- **blue** - `#0088ff` - Cool blue

## 💡 Advanced Examples

### React with Custom Content

```tsx
<ElectricBorder preset="purple" width={400} height={600}>
  <div className="p-12">
    <h1 className="text-4xl font-bold">Custom Content</h1>
    <p className="mt-4">Full control over the content!</p>
    <button className="mt-6 px-6 py-3 bg-purple-500 rounded">
      Action
    </button>
  </div>
</ElectricBorder>
```

### Next.js with Dynamic Routes

```tsx
const products = [
  { id: 1, name: 'Product 1', preset: 'cyan' },
  { id: 2, name: 'Product 2', preset: 'purple' },
];

export default function Products() {
  return (
    <>
      {products.map(product => (
        <ElectricBorder
          key={product.id}
          href={`/products/${product.id}`}
          preset={product.preset}
          title={product.name}
        />
      ))}
    </>
  );
}
```

### Vue with Composition API

```vue
<script setup lang="ts">
import { ref } from 'vue';
import ElectricBorder from 'electric-border-css/vue';

const currentPreset = ref<'cyan' | 'purple'>('cyan');

function togglePreset() {
  currentPreset.value = currentPreset.value === 'cyan' ? 'purple' : 'cyan';
}
</script>

<template>
  <ElectricBorder
    :preset="currentPreset"
    label="Dynamic"
    title="Click to Change"
    @click="togglePreset"
  />
</template>
```

### Svelte with Stores

```svelte
<script lang="ts">
  import { writable } from 'svelte/store';
  import ElectricBorder from 'electric-border-css/svelte';

  const color = writable('#00fffb');

  function randomColor() {
    $color = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
</script>

<ElectricBorder
  color={$color}
  label="Random"
  title="Click for Random Color"
  on:click={randomColor}
/>
```

## 📚 Detailed Documentation

Each framework has its own detailed documentation:

- **[React Documentation](./components/react/README.md)**
- **[Next.js Documentation](./components/nextjs/README.md)**
- **[Vue Documentation](./components/vue/README.md)**
- **[Svelte Documentation](./components/svelte/README.md)**

## 🛠️ TypeScript

All components include full TypeScript support with type definitions.

```tsx
// React/Next.js
import type { ElectricBorderProps } from 'electric-border-css/react';

// Vue
import type { ElectricBorderProps } from 'electric-border-css/vue';

// Svelte (types inferred from props)
```

## ♿ Accessibility

All components:
- Respect `prefers-reduced-motion` for users who prefer less animation
- Use semantic HTML
- Support keyboard navigation (Svelte includes `role` and `tabindex`)

## 🎯 Use Cases

- **Hero Sections** - Eye-catching landing page elements
- **Pricing Cards** - Premium pricing tiers
- **Feature Highlights** - Showcase key features
- **Product Cards** - E-commerce product displays
- **Call-to-Action** - Important CTAs that need attention
- **Dashboard Widgets** - Highlighted metrics or stats
- **Profile Cards** - User or team member profiles
- **Notification Cards** - Important alerts or announcements

## 🌐 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (iOS 15+)
- Opera: ✅ Full support

## 📝 Vanilla CSS/HTML

If you don't use any framework, check out:
- **[Basic Demo](./index.html)** - Simple HTML/CSS example
- **[Quick Start Template](./quick-start.html)** - Single-file starter
- **[Interactive Examples](./examples.html)** - Playground with customization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Fyniti](https://fyniti.co.uk)

## 🔗 Links

- [GitHub Repository](https://github.com/hammadxcm/electric-border-css)
- [NPM Package](https://www.npmjs.com/package/electric-border-css)
- [Report Issues](https://github.com/hammadxcm/electric-border-css/issues)
- [Author Website](https://fyniti.co.uk)

---

Made with ❤️ by [Fyniti](https://fyniti.co.uk) for the developer community
