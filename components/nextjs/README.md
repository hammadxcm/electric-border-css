# Electric Border - Next.js Component

Beautiful animated electric border effect component for Next.js applications (App Router & Pages Router compatible).

## Installation

```bash
npm install electric-border-css
# or
yarn add electric-border-css
# or
pnpm add electric-border-css
```

## Usage

### App Router (Next.js 13+)

The component is marked with `'use client'` directive, so it works seamlessly in Next.js App Router.

```tsx
// app/page.tsx
import { ElectricBorder } from 'electric-border-css/nextjs';

export default function Home() {
  return (
    <ElectricBorder
      preset="purple"
      label="Featured"
      title="Electric Border"
      description="A stunning animated border effect"
    />
  );
}
```

### Pages Router (Next.js 12 and below)

```tsx
// pages/index.tsx
import { ElectricBorder } from 'electric-border-css/nextjs';

export default function Home() {
  return (
    <ElectricBorder
      preset="cyan"
      label="Welcome"
      title="Next.js Project"
      description="Beautiful borders for your app"
    />
  );
}
```

### As a Link Wrapper

```tsx
<ElectricBorder
  href="/dashboard"
  preset="green"
  label="Dashboard"
  title="Go to Dashboard"
  description="View your analytics and insights"
/>
```

### External Link

```tsx
<ElectricBorder
  href="https://example.com"
  target="_blank"
  preset="orange"
  label="External"
  title="Visit Website"
  description="Opens in new tab"
/>
```

### With Custom Content

```tsx
<ElectricBorder preset="pink">
  <div className="p-12">
    <h2 className="text-3xl font-bold">Custom Content</h2>
    <p className="mt-4">Use Tailwind or any styling!</p>
    <button className="mt-6 px-6 py-2 bg-pink-500 rounded-lg">
      Click Me
    </button>
  </div>
</ElectricBorder>
```

### Server Components

To use in Server Components, wrap it in a Client Component:

```tsx
// components/ElectricCard.tsx
'use client';

import { ElectricBorder } from 'electric-border-css/nextjs';

export default function ElectricCard({ data }) {
  return (
    <ElectricBorder
      preset="purple"
      label={data.category}
      title={data.title}
      description={data.description}
    />
  );
}
```

```tsx
// app/page.tsx (Server Component)
import ElectricCard from './components/ElectricCard';

export default async function Page() {
  const data = await fetchData();

  return <ElectricCard data={data} />;
}
```

## Props

All props from the React component, plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | Next.js Link href (makes card clickable) |
| `target` | `'_blank' \| '_self' \| '_parent' \| '_top'` | - | Link target |

See [React component documentation](../react/README.md) for all other props.

## Examples

### Dynamic Routes

```tsx
const products = [
  { id: 1, name: 'Product 1', color: 'purple' },
  { id: 2, name: 'Product 2', color: 'cyan' },
];

export default function Products() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map((product) => (
        <ElectricBorder
          key={product.id}
          href={`/products/${product.id}`}
          preset={product.color}
          label="Product"
          title={product.name}
        />
      ))}
    </div>
  );
}
```

### With Next.js Image

```tsx
import Image from 'next/image';

<ElectricBorder preset="blue" width={400} height={600}>
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <Image
      src="/hero.jpg"
      alt="Hero"
      fill
      style={{ objectFit: 'cover', borderRadius: '24px' }}
    />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
      <h2 style={{ color: 'white', fontSize: '32px' }}>Featured Post</h2>
    </div>
  </div>
</ElectricBorder>
```

### API Integration

```tsx
'use client';

import { ElectricBorder } from 'electric-border-css/nextjs';
import { useEffect, useState } from 'react';

export default function DynamicCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/featured')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <ElectricBorder
      preset={data.colorPreset}
      label={data.category}
      title={data.title}
      description={data.description}
      onClick={() => console.log('Card clicked!')}
    />
  );
}
```

### Tailwind CSS Integration

```tsx
<ElectricBorder preset="green">
  <div className="flex flex-col h-full p-12 justify-between">
    <div>
      <span className="text-sm uppercase tracking-wider opacity-80">Featured</span>
      <h2 className="text-4xl font-bold mt-4">Tailwind Ready</h2>
    </div>
    <div className="space-y-4">
      <p className="opacity-70">
        Works perfectly with Tailwind CSS classes!
      </p>
      <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition">
        Learn More
      </button>
    </div>
  </div>
</ElectricBorder>
```

## TypeScript

Full TypeScript support included:

```tsx
import { ElectricBorder, type ElectricBorderProps } from 'electric-border-css/nextjs';

const props: ElectricBorderProps = {
  preset: 'purple',
  width: 400,
  height: 600,
};

<ElectricBorder {...props} />
```

## Performance

- Component uses CSS animations (GPU-accelerated)
- SVG filters are optimized for performance
- Respects `prefers-reduced-motion` for accessibility
- No runtime JavaScript required for animations

## License

MIT © [Fyniti](https://fyniti.co.uk)
