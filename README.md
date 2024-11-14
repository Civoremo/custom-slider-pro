# CustomSliderPro

A highly customizable slider component for SvelteKit with multiple shapes and styles.

## Installation

```bash
npm install @civoremon/custom-slider-pro
```

## Usage

```svelte
<script lang="ts">
	import { CustomSliderPro } from '@civoremon/custom-slider-pro';

	let value = 0;
</script>

<CustomSliderPro
	bind:value
	min={0}
	max={5}
	step={1}
	type="default"
	shape="circle"
	labels={['1 Day', '1 Week', '1 Month', '3 Months', '6 Months', '1 Year']}
/>
```

## Props

| Prop             | Type                                                                                 | Default   | Description                         |
| ---------------- | ------------------------------------------------------------------------------------ | --------- | ----------------------------------- |
| value            | number                                                                               | 0         | Current value of the slider         |
| min              | number                                                                               | 0         | Minimum value                       |
| max              | number                                                                               | 5         | Maximum value                       |
| step             | number                                                                               | 1         | Step increment                      |
| type             | 'default' \| 'info' \| 'warning' \| 'error'                                          | 'default' | Visual style variant                |
| shape            | 'circle' \| 'roundedSquare' \| 'square' \| 'triangle' \| 'triangleDown' \| 'diamond' | 'circle'  | Shape of markers and thumb          |
| labels           | string[]                                                                             | [...]     | Labels for each marker position     |
| trackHeight      | number                                                                               | 6         | Height of the track in pixels       |
| thumbSize        | number                                                                               | 20        | Size of the thumb in pixels         |
| thumbBorderWidth | number                                                                               | 2         | Border width of the thumb in pixels |

## Features

- Multiple shape options
- Different style variants
- Customizable dimensions
- Typescript support
- Accessible
- Responsive
- Keyboard navigation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build package
npm run package
```

## License

MIT © [Civoremon]
