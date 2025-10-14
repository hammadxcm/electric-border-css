# Electric Border - Svelte Component

Beautiful animated electric border effect component for Svelte applications with TypeScript support.

## Installation

```bash
npm install electric-border-css
# or
yarn add electric-border-css
# or
pnpm add electric-border-css
```

## Usage

### Basic Example

```svelte
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';
</script>

<ElectricBorder
  label="Featured"
  title="Electric Border"
  description="A stunning animated border effect"
/>
```

### With Color Presets

```svelte
<ElectricBorder
  preset="purple"
  label="Premium"
  title="Purple Power"
  description="Perfect for premium designs"
/>
```

### Custom Colors

```svelte
<ElectricBorder
  color="#ff6600"
  label="Custom"
  title="Custom Color"
  description="Use any color you want"
/>
```

### Custom Size and Animation

```svelte
<ElectricBorder
  width={400}
  height={600}
  animationSpeed={5}
  glowIntensity={0.8}
  blurAmount={40}
  preset="cyan"
  label="Intense"
  title="High Intensity"
  description="More dramatic effects"
/>
```

### Custom Content (Slots)

```svelte
<ElectricBorder preset="pink">
  <div class="custom-content">
    <h2>Custom Content</h2>
    <p>Use slots for complete control!</p>
    <button on:click={handleAction}>Click Me</button>
  </div>
</ElectricBorder>

<style>
  .custom-content {
    padding: 48px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
```

### With Click Handler

```svelte
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';

  function handleCardClick() {
    console.log('Card clicked!');
    // Navigate or perform action
  }
</script>

<ElectricBorder
  preset="green"
  label="Interactive"
  title="Click Me"
  description="This card is clickable"
  on:click={handleCardClick}
/>
```

### With SvelteKit Navigation

```svelte
<script lang="ts">
  import { goto } from '$app/navigation';
  import ElectricBorder from 'electric-border-css/svelte';

  function navigateToDetails() {
    goto('/details');
  }
</script>

<ElectricBorder
  preset="blue"
  label="Navigate"
  title="View Details"
  description="Click to navigate"
  on:click={navigateToDetails}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `350` | Card width in pixels |
| `height` | `number` | `500` | Card height in pixels |
| `color` | `string \| undefined` | `undefined` | Custom border color (hex, rgb, etc.) |
| `preset` | `'cyan' \| 'purple' \| 'pink' \| 'green' \| 'orange' \| 'red' \| 'blue' \| 'yellow'` | `'cyan'` | Color preset |
| `animationSpeed` | `number` | `3` | Animation speed in seconds |
| `glowIntensity` | `number` | `0.5` | Glow intensity (0.1 - 1) |
| `blurAmount` | `number` | `28` | Background blur in pixels |
| `borderRadius` | `number` | `24` | Border radius in pixels |
| `label` | `string \| undefined` | `undefined` | Label text |
| `title` | `string \| undefined` | `undefined` | Title text |
| `description` | `string \| undefined` | `undefined` | Description text |
| `customClass` | `string` | `''` | Additional CSS class |
| `disableHover` | `boolean` | `false` | Disable hover effects |

## Events

| Event | Description |
|-------|-------------|
| `on:click` | Fired when card is clicked |

## Slots

| Slot | Description |
|------|-------------|
| Default | Custom content (overrides label, title, description) |

## Available Presets

- `cyan` - Default cyan/turquoise
- `yellow` - Bright yellow/gold
- `purple` - Deep purple
- `pink` - Vibrant pink
- `green` - Matrix green
- `orange` - Energetic orange
- `red` - Bold red
- `blue` - Cool blue

## TypeScript Support

Full TypeScript support included:

```svelte
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';

  interface CardData {
    preset: 'cyan' | 'purple' | 'pink' | 'green';
    label: string;
    title: string;
    description: string;
  }

  const cardData: CardData = {
    preset: 'purple',
    label: 'Featured',
    title: 'My Card',
    description: 'This is a card',
  };
</script>

<ElectricBorder {...cardData} />
```

## Examples

### Grid of Cards

```svelte
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';

  const presets = ['cyan', 'purple', 'pink', 'green', 'orange', 'red', 'blue', 'yellow'] as const;
</script>

<div class="grid">
  {#each presets as preset}
    <ElectricBorder
      {preset}
      label={preset.toUpperCase()}
      title={`${preset.charAt(0).toUpperCase() + preset.slice(1)} Border`}
      description={`Beautiful ${preset} electric effect`}
    />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
  }
</style>
```

### With Svelte Stores

```svelte
<script lang="ts">
  import { writable } from 'svelte/store';
  import ElectricBorder from 'electric-border-css/svelte';

  const currentPreset = writable<'cyan' | 'purple' | 'pink' | 'green'>('cyan');
  const presets = ['cyan', 'purple', 'pink', 'green'] as const;

  function cyclePreset() {
    currentPreset.update(current => {
      const currentIndex = presets.indexOf(current);
      return presets[(currentIndex + 1) % presets.length];
    });
  }
</script>

<ElectricBorder
  preset={$currentPreset}
  label="Dynamic"
  title="Click to Change"
  on:click={cyclePreset}
/>
```

### Dynamic Data with Each Block

```svelte
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';

  interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    color: 'cyan' | 'purple' | 'pink' | 'green';
  }

  const products: Product[] = [
    { id: 1, name: 'Product 1', category: 'Tech', description: 'Amazing product', color: 'cyan' },
    { id: 2, name: 'Product 2', category: 'Design', description: 'Beautiful design', color: 'purple' },
  ];

  function viewProduct(id: number) {
    console.log('Viewing product:', id);
  }
</script>

<div class="products">
  {#each products as product (product.id)}
    <ElectricBorder
      preset={product.color}
      label={product.category}
      title={product.name}
      description={product.description}
      on:click={() => viewProduct(product.id)}
    />
  {/each}
</div>

<style>
  .products {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }
</style>
```

### SvelteKit Page Component

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Electric Border Gallery</title>
</svelte:head>

<main>
  <h1>Our Products</h1>

  <div class="grid">
    {#each data.products as product}
      <ElectricBorder
        preset={product.colorPreset}
        label={product.category}
        title={product.name}
        description={product.description}
      />
    {/each}
  </div>
</main>

<style>
  main {
    padding: 40px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    margin-top: 40px;
  }
</style>
```

### Reactive Binding

```svelte
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';

  let currentColor = '#00fffb';
  let intensity = 0.5;
  let speed = 3;
</script>

<div class="controls">
  <label>
    Color: <input type="color" bind:value={currentColor} />
  </label>
  <label>
    Intensity: <input type="range" min="0.1" max="1" step="0.1" bind:value={intensity} />
  </label>
  <label>
    Speed: <input type="range" min="1" max="10" step="0.5" bind:value={speed} />
  </label>
</div>

<ElectricBorder
  color={currentColor}
  glowIntensity={intensity}
  animationSpeed={speed}
  label="Live Preview"
  title="Customizable"
  description="Adjust the controls above"
/>
```

### With Transitions

```svelte
<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import ElectricBorder from 'electric-border-css/svelte';

  let visible = true;
</script>

<button on:click={() => visible = !visible}>
  Toggle Card
</button>

{#if visible}
  <div transition:scale>
    <ElectricBorder
      preset="purple"
      label="Animated"
      title="With Transitions"
      description="Smooth enter/exit animations"
    />
  </div>
{/if}
```

## License

MIT © [Fyniti](https://fyniti.co.uk)
