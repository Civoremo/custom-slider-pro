# custom-slider-pro

A highly customizable slider component for SvelteKit featuring multiple shapes, styles, and custom color options.

## Installation

```bash
npm install custom-slider-pro
```

## Usage

```svelte
<script lang="ts">
  import { CustomSliderPro } from 'custom-slider-pro';

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
  colors={{
    filled: "#4296e5",   // Color of the filled track and active markers
    track: "#e5e7eb",    // Color of the unfilled track and inactive markers
    thumb: "#ffffff",    // Color of the thumb center
    border: "#4296e5"    // Color of the thumb border
  }}
/>
```

## Props

| Prop             | Type                                                                                 | Default   | Description                                      |
| ---------------- | ------------------------------------------------------------------------------------ | --------- | ------------------------------------------------ |
| value           | number                                                                               | 0         | Current value of the slider                      |
| min             | number                                                                               | 0         | Minimum value                                    |
| max             | number                                                                               | 5         | Maximum value                                    |
| step            | number                                                                               | 1         | Step increment                                   |
| type            | 'default' \| 'info' \| 'warning' \| 'error'                                          | 'default' | Predefined color schemes (optional if using custom colors) |
| shape           | 'circle' \| 'roundedSquare' \| 'square' \| 'triangle' \| 'triangleDown' \| 'diamond' | 'circle'  | Shape of markers and thumb                       |
| labels          | string[]                                                                             | []        | Labels for each marker position                  |
| trackHeight     | number                                                                               | 6         | Height of the track in pixels                    |
| thumbSize       | number                                                                               | 20        | Size of the thumb in pixels                      |
| thumbBorderWidth| number                                                                               | 2         | Border width of the thumb in pixels              |
| colors          | { filled: string, track: string, thumb: string, border: string }                     | undefined | Custom color scheme (overrides type)             |

## Features

- Multiple shape options
- Predefined color schemes
- Custom color support
- Customizable dimensions
- TypeScript support
- Accessible
- Responsive
- Keyboard navigation

## Development

```bash
npm install        # Install dependencies
npm run dev       # Start development server
npm run test      # Run tests
npm run package   # Build package
```

## License

MIT © [Civoremo](https://github.com/Civoremo)

## Repository

[GitHub](https://github.com/Civoremo/custom-slider-pro)

## Issues

Report issues at [GitHub Issues](https://github.com/Civoremo/custom-slider-pro/issues)