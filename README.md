# custom-slider-pro

A highly customizable slider component for SvelteKit featuring multiple shapes, styles, and custom color options.

## Preview Page

[Preview](https://custom-slider-pro.netlify.app/)

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

| Prop              | Type                                 | Default   | Description                                      |
|-------------------|--------------------------------------|-----------|--------------------------------------------------|
| value             | number                               | 0         | Current value of the slider                      |
| min               | number                               | 0         | Minimum value allowed                            |
| max               | number                               | 5         | Maximum value allowed                            |
| step              | number                               | 1         | Step increment between values                    |
| type              | 'default' \| 'info' \| 'warning' \| 'error' | 'default' | Visual style variant of the slider               |
| labels            | string[]                             |           | Labels for each marker position                  |
| showLabels        | boolean                              | true      | Whether to show labels                           |
| showMarkers       | boolean                              | true      | Whether to show markers                          |
| showValue         | boolean                              | false     | Whether to show current value above thumb        |
| valueDisplay      | string \| (value: number) => string   |           | Custom value display above thumb (string or function) |
| valueDisplayBg    | string                               |           | Custom background color for value display        |
| valueDisplayColor | string                               |           | Custom text color for value display              |
| valueDisplayFontSize | string                           |           | Custom font size for value display (e.g. '16px', '1.2rem') |
| valueDisplayFont  | string                               |           | Custom font family for value display (e.g. 'Arial', 'Roboto') |
| shape             | 'circle' \| 'roundedSquare' \| 'square' \| 'triangle' \| 'triangleDown' \| 'diamond' | 'circle' | Shape of the markers and thumb                   |
| trackHeight       | number                               | 6         | Height of the track in pixels                    |
| thumbSize         | number                               | 20        | Size of the thumb in pixels                      |
| thumbBorderWidth  | number                               | 2         | Border width of the thumb in pixels              |
| colors            | ColorScheme                          |           | Custom color for all parts                       |

## Custom Value Display

You can fully customize the value display above the thumb:
- **Text:** Pass a string or a function to `valueDisplay`.
- **Background:** Use `valueDisplayBg` for background color. Leave empty or undefined for transparent.
- **Text color:** Use `valueDisplayColor` for text color.
- **Font size:** Use `valueDisplayFontSize` to set custom font size (e.g. '16px', '1.2rem').
- **Font family:** Use `valueDisplayFont` to set custom font family (e.g. 'Arial', 'Roboto').

### Examples

```svelte
<!-- Custom string value, custom background and text color -->
<CustomSliderPro
  value={2000}
  min={0}
  max={5000}
  showValue={true}
  valueDisplay="$2,000"
  valueDisplayBg="#fffbe6"
  valueDisplayColor="#b91c1c"
  showMarkers={false}
  showLabels={false}
/>

<!-- Custom function value, custom background and text color -->
<CustomSliderPro
  value={2000}
  min={0}
  max={5000}
  showValue={true}
  valueDisplay={v => v === 2000 ? 'two thousand' : v}
  valueDisplayBg="black"
  valueDisplayColor="lime"
  showMarkers={false}
  showLabels={false}
/>

<!-- Default formatting, custom colors -->
<CustomSliderPro
  value={1500}
  min={0}
  max={5000}
  showValue={true}
  valueDisplayBg="#e0f7fa"
  valueDisplayColor="#006064"
  showMarkers={false}
  showLabels={false}
/>

<!-- No background (transparent) -->
<CustomSliderPro
  value={2000}
  min={0}
  max={5000}
  showValue={true}
  valueDisplay="No background"
  valueDisplayBg=""
  valueDisplayColor="#b91c1c"
  showMarkers={false}
  showLabels={false}
/>

<!-- Custom font and size -->
<CustomSliderPro
  value={2000}
  min={0}
  max={5000}
  showValue={true}
  valueDisplay="$2,000"
  valueDisplayFontSize="1.2rem"
  valueDisplayFont="Roboto, sans-serif"
  valueDisplayBg="#fffbe6"
  valueDisplayColor="#b91c1c"
  showMarkers={false}
  showLabels={false}
/>
```

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