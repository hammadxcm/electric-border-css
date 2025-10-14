# Svelte Component Test

This test application verifies all features of the Electric Border Svelte component.

## Running the Test

```bash
cd tests/svelte
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Tests Included

1. ✅ Basic Usage - Tests default props
2. ✅ Custom Content (Slots) - Tests slot functionality
3. ✅ All Color Presets - Tests all 8 presets
4. ✅ Reactive Bindings - Tests bind:value
5. ✅ Event Handling - Tests on:click
6. ✅ Svelte Stores - Tests writable and derived stores
7. ✅ Different Sizes - Tests width/height props
8. ✅ Reactive Statements - Tests $: syntax
9. ✅ Conditional Rendering - Tests {#if} blocks
10. ✅ Props Spreading - Tests {...props} syntax

## Svelte Features Tested

- ✅ Reactive declarations (`let`)
- ✅ Reactive statements (`$:`)
- ✅ Two-way bindings (`bind:value`)
- ✅ Event handlers (`on:click`)
- ✅ Slots (default slot)
- ✅ Stores (`writable`, `derived`)
- ✅ Store auto-subscriptions (`$store`)
- ✅ Conditional rendering (`{#if}`)
- ✅ Each blocks (`{#each}`)
- ✅ Props spreading (`{...props}`)
- ✅ TypeScript support

## Expected Results

- All 8 color presets should display correctly
- Reactive bindings should update the card in real-time
- Event handlers should work (on:click)
- Slots should render custom content
- Stores should update automatically
- Reactive statements should recalculate
- TypeScript should have no errors

## Svelte Reactivity

The test demonstrates various reactivity patterns:

```svelte
<script lang="ts">
  // Reactive variable
  let color = '#00fffb';

  // Reactive statement
  $: displayColor = color.toUpperCase();

  // Two-way binding
  <input type="color" bind:value={color} />

  // Store
  import { writable } from 'svelte/store';
  const count = writable(0);
  $count++; // Auto-subscribe
</script>
```

## SvelteKit Compatibility

This component works with SvelteKit. To test:

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import ElectricBorder from 'electric-border-css/svelte';
</script>

<ElectricBorder preset="cyan" title="SvelteKit" />
```

## Troubleshooting

If you see errors:
1. Make sure you're in the `tests/svelte` directory
2. Run `npm install` to install dependencies
3. Check that Svelte 4+ is installed
4. Verify TypeScript is configured properly
5. Run `npm run check` to check for type errors
