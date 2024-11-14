import CustomSliderProComponent from './CustomSliderPro.svelte';
import type { SvelteComponent } from 'svelte';
import type {
	CustomSliderProps,
	SliderShape,
	ShapeStyles,
	SliderType,
	defaultProps
} from './types';

// Export the component
export { CustomSliderProComponent as CustomSliderPro };

// Export types
export type { CustomSliderProps, SliderShape, ShapeStyles, SliderType, defaultProps };

// Export the component type with a different name
export type CustomSliderProType = SvelteComponent<
	CustomSliderProps,
	{
		// Event types if any
		input: InputEvent;
		change: Event;
	},
	{
		// Slot types if any
		default: {};
	}
>;
