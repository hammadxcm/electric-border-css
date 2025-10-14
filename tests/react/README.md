# React Component Test

This test application verifies all features of the Electric Border React component.

## Running the Test

```bash
cd tests/react
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Tests Included

1. ✅ Basic Usage - Tests default props and preset colors
2. ✅ Custom Content - Tests children prop
3. ✅ All Color Presets - Tests all 8 color presets
4. ✅ Interactive Controls - Tests real-time prop updates
5. ✅ Click Handler - Tests onClick event
6. ✅ Custom Sizes - Tests width/height props
7. ✅ Disabled Hover - Tests disableHover prop
8. ✅ TypeScript Types - Verifies all type definitions

## Expected Results

- All 8 color presets should display correctly
- Animations should be smooth (60 FPS)
- Interactive controls should update the card in real-time
- Click handler should trigger alert
- Custom content should render properly
- TypeScript should have no errors

## Troubleshooting

If you see errors:
1. Make sure you're in the `tests/react` directory
2. Run `npm install` to install dependencies
3. Check that React 18+ is installed
4. Verify TypeScript types are available
