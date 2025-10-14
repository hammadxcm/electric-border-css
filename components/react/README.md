# Electric Border - React Component

Beautiful animated electric border effect component for React applications.

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

```tsx
import { ElectricBorder } from 'electric-border-css/react';
import 'electric-border-css/react/ElectricBorder.css';

function App() {
  return (
    <ElectricBorder
      label="Featured"
      title="Electric Border"
      description="A stunning animated border effect"
    />
  );
}
```

### With Color Presets

```tsx
<ElectricBorder
  preset="purple"
  label="Premium"
  title="Purple Power"
  description="Perfect for premium designs"
/>
```

### Custom Colors

```tsx
<ElectricBorder
  color="#ff6600"
  label="Custom"
  title="Custom Color"
  description="Use any color you want"
/>
```

### Custom Size and Animation

```tsx
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

### Custom Content

```tsx
<ElectricBorder preset="pink">
  <div style={{ padding: '48px' }}>
    <h2>Custom Content</h2>
    <p>Put any JSX here!</p>
    <button>Click Me</button>
  </div>
</ElectricBorder>
```

### With Click Handler

```tsx
<ElectricBorder
  preset="green"
  label="Interactive"
  title="Click Me"
  description="This card is clickable"
  onClick={() => console.log('Card clicked!')}
/>
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
| `children` | `React.ReactNode` | - | Custom content (overrides label, title, description) |
| `className` | `string` | `''` | Additional CSS class |
| `style` | `CSSProperties` | `{}` | Custom inline styles |
| `disableHover` | `boolean` | `false` | Disable hover effects |
| `onClick` | `() => void` | - | Click handler |

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

Full TypeScript support included with type definitions.

## Examples

### Grid of Cards

```tsx
function CardGrid() {
  const presets = ['cyan', 'purple', 'pink', 'green', 'orange', 'red', 'blue', 'yellow'] as const;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
      {presets.map((preset) => (
        <ElectricBorder
          key={preset}
          preset={preset}
          label={preset.toUpperCase()}
          title={`${preset.charAt(0).toUpperCase() + preset.slice(1)} Border`}
          description={`Beautiful ${preset} electric effect`}
        />
      ))}
    </div>
  );
}
```

### Pricing Cards

```tsx
function PricingCard() {
  return (
    <ElectricBorder
      preset="purple"
      width={320}
      height={480}
    >
      <div style={{ padding: '48px', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '14px', opacity: 0.8 }}>PRO</span>
        <h2 style={{ fontSize: '48px', margin: '20px 0' }}>$49</h2>
        <p style={{ opacity: 0.7, marginBottom: '30px' }}>per month</p>
        <ul style={{ flex: 1, listStyle: 'none', padding: 0 }}>
          <li>✓ Unlimited projects</li>
          <li>✓ Priority support</li>
          <li>✓ Advanced analytics</li>
        </ul>
        <button style={{ padding: '12px', borderRadius: '8px', border: 'none', background: '#b000ff', color: 'white', cursor: 'pointer' }}>
          Get Started
        </button>
      </div>
    </ElectricBorder>
  );
}
```

## License

MIT © [Fyniti](https://fyniti.co.uk)
