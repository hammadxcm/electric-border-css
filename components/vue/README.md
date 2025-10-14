# Electric Border - Vue 3 Component

Beautiful animated electric border effect component for Vue 3 applications with Composition API and TypeScript support.

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

```vue
<script setup lang="ts">
import ElectricBorder from 'electric-border-css/vue';
</script>

<template>
  <ElectricBorder
    label="Featured"
    title="Electric Border"
    description="A stunning animated border effect"
  />
</template>
```

### With Color Presets

```vue
<template>
  <ElectricBorder
    preset="purple"
    label="Premium"
    title="Purple Power"
    description="Perfect for premium designs"
  />
</template>
```

### Custom Colors

```vue
<template>
  <ElectricBorder
    color="#ff6600"
    label="Custom"
    title="Custom Color"
    description="Use any color you want"
  />
</template>
```

### Custom Size and Animation

```vue
<template>
  <ElectricBorder
    :width="400"
    :height="600"
    :animation-speed="5"
    :glow-intensity="0.8"
    :blur-amount="40"
    preset="cyan"
    label="Intense"
    title="High Intensity"
    description="More dramatic effects"
  />
</template>
```

### Custom Content (Slots)

```vue
<template>
  <ElectricBorder preset="pink">
    <div class="custom-content">
      <h2>Custom Content</h2>
      <p>Use slots for complete control!</p>
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

### With Click Handler

```vue
<script setup lang="ts">
import ElectricBorder from 'electric-border-css/vue';

const handleCardClick = () => {
  console.log('Card clicked!');
  // Navigate or perform action
};
</script>

<template>
  <ElectricBorder
    preset="green"
    label="Interactive"
    title="Click Me"
    description="This card is clickable"
    @click="handleCardClick"
  />
</template>
```

### With Vue Router

```vue
<script setup lang="ts">
import { useRouter } from 'vue-router';
import ElectricBorder from 'electric-border-css/vue';

const router = useRouter();

const navigateToDetails = () => {
  router.push('/details');
};
</script>

<template>
  <ElectricBorder
    preset="blue"
    label="Navigate"
    title="View Details"
    description="Click to navigate"
    @click="navigateToDetails"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `350` | Card width in pixels |
| `height` | `number` | `500` | Card height in pixels |
| `color` | `string` | - | Custom border color (hex, rgb, etc.) |
| `preset` | `'cyan' \| 'purple' \| 'pink' \| 'green' \| 'orange' \| 'red' \| 'blue' \| 'yellow'` | `'cyan'` | Color preset |
| `animationSpeed` | `number` | `3` | Animation speed in seconds |
| `glowIntensity` | `number` | `0.5` | Glow intensity (0.1 - 1) |
| `blurAmount` | `number` | `28` | Background blur in pixels |
| `borderRadius` | `number` | `24` | Border radius in pixels |
| `label` | `string` | - | Label text |
| `title` | `string` | - | Title text |
| `description` | `string` | - | Description text |
| `customClass` | `string` | `''` | Additional CSS class |
| `disableHover` | `boolean` | `false` | Disable hover effects |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | - | Emitted when card is clicked |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Custom content (overrides label, title, description) |

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

Full TypeScript support included with type definitions:

```vue
<script setup lang="ts">
import ElectricBorder, { type ElectricBorderProps } from 'electric-border-css/vue';

const props: ElectricBorderProps = {
  preset: 'purple',
  width: 400,
  height: 600,
};
</script>

<template>
  <ElectricBorder v-bind="props" />
</template>
```

## Examples

### Grid of Cards

```vue
<script setup lang="ts">
import ElectricBorder from 'electric-border-css/vue';

const presets = ['cyan', 'purple', 'pink', 'green', 'orange', 'red', 'blue', 'yellow'] as const;
</script>

<template>
  <div class="grid">
    <ElectricBorder
      v-for="preset in presets"
      :key="preset"
      :preset="preset"
      :label="preset.toUpperCase()"
      :title="`${preset.charAt(0).toUpperCase() + preset.slice(1)} Border`"
      :description="`Beautiful ${preset} electric effect`"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}
</style>
```

### Dynamic Data

```vue
<script setup lang="ts">
import { ref } from 'vue';
import ElectricBorder from 'electric-border-css/vue';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  color: 'cyan' | 'purple' | 'pink' | 'green';
}

const products = ref<Product[]>([
  { id: 1, name: 'Product 1', category: 'Tech', description: 'Amazing product', color: 'cyan' },
  { id: 2, name: 'Product 2', category: 'Design', description: 'Beautiful design', color: 'purple' },
]);

const viewProduct = (id: number) => {
  console.log('Viewing product:', id);
};
</script>

<template>
  <div class="products">
    <ElectricBorder
      v-for="product in products"
      :key="product.id"
      :preset="product.color"
      :label="product.category"
      :title="product.name"
      :description="product.description"
      @click="viewProduct(product.id)"
    />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
</style>
```

### With Pinia Store

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/product';
import ElectricBorder from 'electric-border-css/vue';

const productStore = useProductStore();
const { featuredProduct } = storeToRefs(productStore);
</script>

<template>
  <ElectricBorder
    v-if="featuredProduct"
    :preset="featuredProduct.colorPreset"
    :label="featuredProduct.category"
    :title="featuredProduct.name"
    :description="featuredProduct.description"
  />
</template>
```

### Composition API Hook

```typescript
// composables/useElectricCard.ts
import { ref, computed } from 'vue';

export function useElectricCard() {
  const currentPreset = ref<string>('cyan');
  const isHovered = ref(false);

  const presets = ['cyan', 'purple', 'pink', 'green', 'orange', 'red', 'blue', 'yellow'];

  const cyclePreset = () => {
    const currentIndex = presets.indexOf(currentPreset.value);
    currentPreset.value = presets[(currentIndex + 1) % presets.length];
  };

  return {
    currentPreset,
    isHovered,
    cyclePreset,
  };
}
```

```vue
<script setup lang="ts">
import ElectricBorder from 'electric-border-css/vue';
import { useElectricCard } from '@/composables/useElectricCard';

const { currentPreset, cyclePreset } = useElectricCard();
</script>

<template>
  <ElectricBorder
    :preset="currentPreset"
    label="Dynamic"
    title="Click to Change Color"
    @click="cyclePreset"
  />
</template>
```

## License

MIT © [Fyniti](https://fyniti.co.uk)
