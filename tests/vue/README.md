# Vue 3 Component Test

This test application verifies all features of the Electric Border Vue 3 component.

## Running the Test

```bash
cd tests/vue
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Tests Included

1. ✅ Basic Usage - Tests default props with Composition API
2. ✅ Custom Content (Slots) - Tests slot functionality
3. ✅ All Color Presets - Tests all 8 color presets
4. ✅ Reactive State - Tests v-model and reactive bindings
5. ✅ Event Handling - Tests @click event emitter
6. ✅ Different Sizes - Tests width/height props
7. ✅ Computed Properties - Tests with computed() API
8. ✅ v-bind Props Object - Tests props spreading

## Vue 3 Features Tested

- ✅ Composition API (`<script setup>`)
- ✅ TypeScript support
- ✅ Reactive state with `ref()`
- ✅ Computed properties with `computed()`
- ✅ Event emitters (`@click`)
- ✅ Slots (default slot)
- ✅ v-model bindings
- ✅ v-bind with objects
- ✅ v-for loops

## Expected Results

- All 8 color presets should display correctly
- Reactive controls should update the card in real-time
- Event handlers should work (@click)
- Slots should render custom content
- Computed properties should update automatically
- TypeScript should have no errors

## Composition API

The test uses `<script setup>` syntax with TypeScript:

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import ElectricBorder from 'electric-border-css/vue';

const color = ref('#00fffb');
const clickCount = ref(0);

const title = computed(() => `Clicked ${clickCount.value} times`);
</script>
```

## Troubleshooting

If you see errors:
1. Make sure you're in the `tests/vue` directory
2. Run `npm install` to install dependencies
3. Check that Vue 3.3+ is installed
4. Verify TypeScript is configured properly
