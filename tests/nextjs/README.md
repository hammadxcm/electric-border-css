# Next.js Component Test

This test application verifies the Electric Border component with Next.js App Router.

## Running the Test

```bash
cd tests/nextjs
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Tests Included

1. ✅ Basic Usage - Tests with App Router
2. ✅ Link Integration - Tests href and Next.js routing
3. ✅ All Color Presets - Tests all 8 presets
4. ✅ Dynamic State - Tests useState integration
5. ✅ Custom Content - Tests children prop
6. ✅ Client Component - Verifies 'use client' works
7. ✅ Responsive Sizes - Tests different dimensions
8. ✅ Custom Props - Tests all customization options

## Features Tested

- ✅ App Router compatibility ('use client')
- ✅ Next.js Link integration (href prop)
- ✅ Internal routing
- ✅ External links (target="_blank")
- ✅ State management with useState
- ✅ TypeScript support
- ✅ All color presets
- ✅ Custom content rendering

## Expected Results

- Component should work with 'use client' directive
- Internal links should navigate without page reload
- External links should open in new tab
- State updates should trigger re-renders
- All animations should be smooth
- TypeScript should have no errors

## Pages Router Test

To test with Pages Router, see the `pages-router` branch or create:
```tsx
// pages/index.tsx
import { ElectricBorder } from 'electric-border-css/nextjs';

export default function Home() {
  return <ElectricBorder preset="cyan" title="Pages Router" />;
}
```
