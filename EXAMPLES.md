# Electric Border CSS - Online Examples & Demos

Live examples and playgrounds to test Electric Border CSS in your browser.

## 🎨 Interactive Playgrounds

### CodePen Examples

We have interactive CodePen examples for each framework. Fork and customize them!

**Vanilla CSS/HTML:**
- [Basic Electric Border](https://codepen.io/your-username/pen/example1) - Single card example
- [Multiple Colors](https://codepen.io/your-username/pen/example2) - All 8 presets
- [Custom Colors](https://codepen.io/your-username/pen/example3) - Color picker demo

**React:**
- [React Basic](https://codepen.io/your-username/pen/react-basic) - Simple React component
- [React Grid](https://codepen.io/your-username/pen/react-grid) - Multiple cards
- [React Interactive](https://codepen.io/your-username/pen/react-interactive) - With state

**Vue 3:**
- [Vue Basic](https://codepen.io/your-username/pen/vue-basic) - Simple Vue component
- [Vue Composition](https://codepen.io/your-username/pen/vue-comp) - Composition API
- [Vue Interactive](https://codepen.io/your-username/pen/vue-interactive) - With reactivity

**Svelte:**
- [Svelte Basic](https://codepen.io/your-username/pen/svelte-basic) - Simple Svelte component
- [Svelte Stores](https://codepen.io/your-username/pen/svelte-stores) - With stores
- [Svelte Interactive](https://codepen.io/your-username/pen/svelte-interactive) - With bindings

### CodeSandbox Templates

Full working environments with all dependencies:

**React Templates:**
- [React TypeScript Starter](https://codesandbox.io/s/electric-border-react)
- [React with Tailwind](https://codesandbox.io/s/electric-border-react-tailwind)
- [React Pricing Cards](https://codesandbox.io/s/electric-border-pricing)

**Next.js Templates:**
- [Next.js App Router](https://codesandbox.io/s/electric-border-nextjs-app)
- [Next.js Pages Router](https://codesandbox.io/s/electric-border-nextjs-pages)
- [Next.js with TypeScript](https://codesandbox.io/s/electric-border-nextjs-ts)

**Vue 3 Templates:**
- [Vue 3 Composition API](https://codesandbox.io/s/electric-border-vue)
- [Vue 3 with Vite](https://codesandbox.io/s/electric-border-vue-vite)
- [Vue 3 TypeScript](https://codesandbox.io/s/electric-border-vue-ts)

**Svelte Templates:**
- [Svelte Basic](https://codesandbox.io/s/electric-border-svelte)
- [SvelteKit](https://codesandbox.io/s/electric-border-sveltekit)
- [Svelte TypeScript](https://codesandbox.io/s/electric-border-svelte-ts)

### StackBlitz Templates

Edit and run directly in the browser:

- [Vanilla HTML/CSS](https://stackblitz.com/edit/electric-border-vanilla)
- [React](https://stackblitz.com/edit/electric-border-react)
- [Vue 3](https://stackblitz.com/edit/electric-border-vue)
- [Svelte](https://stackblitz.com/edit/electric-border-svelte)

## 📱 Real-World Use Cases

### Hero Section Example

```html
<!-- Vanilla HTML -->
<section class="hero">
  <div class="card-container electric-purple">
    <!-- Card content -->
  </div>
</section>
```

```tsx
// React/Next.js
<section className="hero">
  <ElectricBorder preset="purple" width={500} height={300}>
    <div className="hero-content">
      <h1>Welcome to Our Platform</h1>
      <button>Get Started</button>
    </div>
  </ElectricBorder>
</section>
```

### Pricing Cards

```tsx
// React
const plans = [
  { name: 'Basic', price: 9, color: 'cyan' },
  { name: 'Pro', price: 29, color: 'purple' },
  { name: 'Enterprise', price: 99, color: 'pink' }
];

<div className="pricing-grid">
  {plans.map(plan => (
    <ElectricBorder key={plan.name} preset={plan.color}>
      <div className="pricing-card">
        <h3>{plan.name}</h3>
        <p className="price">${plan.price}/mo</p>
        <button>Subscribe</button>
      </div>
    </ElectricBorder>
  ))}
</div>
```

### Product Showcase

```vue
<!-- Vue 3 -->
<template>
  <div class="products">
    <ElectricBorder
      v-for="product in products"
      :key="product.id"
      :preset="product.color"
      @click="viewProduct(product)"
    >
      <div class="product-card">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </ElectricBorder>
  </div>
</template>
```

### Dashboard Widget

```svelte
<!-- Svelte -->
<script lang="ts">
  let stats = {
    users: 1250,
    revenue: '$45.2K',
    growth: '+12.5%'
  };
</script>

<div class="dashboard">
  <ElectricBorder preset="green" width={300} height={200}>
    <div class="stat-card">
      <h4>Total Users</h4>
      <p class="stat">{stats.users}</p>
      <p class="growth">{stats.growth}</p>
    </div>
  </ElectricBorder>
</div>
```

## 🎯 Integration Examples

### With Tailwind CSS

```tsx
<ElectricBorder preset="purple">
  <div className="flex flex-col h-full p-12 justify-between">
    <div>
      <span className="text-sm uppercase">Featured</span>
      <h2 className="text-4xl font-bold mt-4">Tailwind Integration</h2>
    </div>
    <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg">
      Learn More
    </button>
  </div>
</ElectricBorder>
```

### With Material-UI (React)

```tsx
import { Card, CardContent, Typography, Button } from '@mui/material';

<ElectricBorder preset="blue">
  <Card sx={{ background: 'transparent', boxShadow: 'none' }}>
    <CardContent>
      <Typography variant="h5">MUI Integration</Typography>
      <Typography variant="body2">Works perfectly with Material-UI</Typography>
      <Button variant="contained">Action</Button>
    </CardContent>
  </Card>
</ElectricBorder>
```

### With Vuetify (Vue)

```vue
<template>
  <ElectricBorder preset="pink">
    <v-card class="transparent">
      <v-card-title>Vuetify Integration</v-card-title>
      <v-card-text>Combine with Vuetify components</v-card-text>
      <v-card-actions>
        <v-btn color="pink">Click Me</v-btn>
      </v-card-actions>
    </v-card>
  </ElectricBorder>
</template>
```

## 🚀 Performance Tips

1. **Limit Cards Per Page**: Use 5-10 cards maximum for best performance
2. **Use `will-change`**: For heavy animations, add `will-change: transform`
3. **Reduce Complexity**: Lower `numOctaves` in SVG filter for mobile
4. **Lazy Load**: Only animate visible cards using Intersection Observer

```tsx
// React Performance Example
import { useInView } from 'react-intersection-observer';

function PerformantCard() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView && (
        <ElectricBorder preset="cyan" />
      )}
    </div>
  );
}
```

## 📚 Additional Resources

- [Component Documentation](./COMPONENTS.md)
- [Main README](./README.md)
- [GitHub Repository](https://github.com/hammadxcm/electric-border-css)
- [Report Issues](https://github.com/hammadxcm/electric-border-css/issues)

## 🤝 Share Your Implementation

Using Electric Border CSS in your project? We'd love to feature it!

- Tweet with #ElectricBorderCSS
- Submit a showcase PR
- Share on [Show HN](https://news.ycombinator.com/showhn.html)

---

Made with ❤️ by [Fyniti](https://fyniti.co.uk)
