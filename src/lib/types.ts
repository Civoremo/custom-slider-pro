/**
 * Available shapes for the slider thumb and markers
 */

export type SliderShape =
	| 'circle'
	| 'roundedSquare'
	| 'square'
	| 'triangle'
	| 'triangleDown'
	| 'diamond';

/** Available visual variants of the slider */
export type SliderType = 'default' | 'info' | 'warning' | 'error';

/** Configuration for shape-specific styling */
export interface ShapeStyles {
	/** CSS shape definition */
	shape: string;
	/** Whether to use clip-path for the shape */
	useClipPath: boolean;
	/** Function to generate border clip-path for complex shapes */
	borderShape?: (width: number) => string;
	/** Function to generate inner shape clip-path for complex shapes */
	innerShape?: (width: number) => string;
}

/** Props for CustomSliderPro component */
export interface CustomSliderProps {
	/** Current value of the slider */
	value?: number;
	/** Minimum value allowed */
	min?: number;
	/** Maximum value allowed */
	max?: number;
	/** Step increment between values */
	step?: number;
	/** Visual style variant of the slider */
	type?: SliderType;
	/** Labels for each marker position */
	labels?: string[];
	/** Whether to show labels */
	showLabels?: boolean;
	/** Shape of the markers and thumb */
	shape?: SliderShape;
	/** Height of the track in pixels */
	trackHeight?: number;
	/** Size of the thumb in pixels */
	thumbSize?: number;
	/** Border width of the thumb in pixels */
	thumbBorderWidth?: number;
	/** Custom color for all parts */
	colors?: ColorScheme;
}

/** Color configuration for slider variants */
export interface ColorScheme {
	track: string;
	filled: string;
	thumb: string;
	border: string;
}

/** Default color schemes for different slider types */
export const defaultColorSchemes: Record<SliderType, ColorScheme> = {
	default: {
		track: '#e2e8f0',
		filled: '#3b82f6',
		thumb: '#ffffff',
		border: '#3b82f6'
	},
	info: {
		track: '#e2e8f0',
		filled: '#3b82f6',
		thumb: '#ffffff',
		border: '#3b82f6'
	},
	warning: {
		track: '#e2e8f0',
		filled: '#f59e0b',
		thumb: '#ffffff',
		border: '#f59e0b'
	},
	error: {
		track: '#e2e8f0',
		filled: '#ef4444',
		thumb: '#ffffff',
		border: '#ef4444'
	}
};

/** Default shape configurations */
export const defaultShapeStyles: Record<SliderShape, ShapeStyles> = {
	circle: {
		shape: 'border-radius: 50%;',
		useClipPath: false
	},
	roundedSquare: {
		shape: 'border-radius: 4px;',
		useClipPath: false
	},
	square: {
		shape: 'border-radius: 0;',
		useClipPath: false
	},
	triangle: {
		shape: 'clip-path: polygon(50% 0%, 100% 100%, 0% 100%);',
		useClipPath: true,
		borderShape: (width: number) =>
			`polygon(50% 0%, calc(100% + ${width}px) 100%, -${width}px 100%)`,
		innerShape: (width: number) =>
			`polygon(50% ${width}px, calc(100% - ${width}px) calc(100% - ${width}px), ${width}px calc(100% - ${width}px))`
	},
	triangleDown: {
		shape: 'clip-path: polygon(0% 0%, 100% 0%, 50% 100%);',
		useClipPath: true,
		borderShape: (width: number) =>
			`polygon(-${width}px 0%, calc(100% + ${width}px) 0%, 50% calc(100% + ${width}px))`,
		innerShape: (width: number) =>
			`polygon(${width}px ${width}px, calc(100% - ${width}px) ${width}px, 50% calc(100% - ${width}px))`
	},
	diamond: {
		shape: 'clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);',
		useClipPath: true,
		borderShape: (width: number) =>
			`polygon(50% 0%, calc(100% + ${width}px) 50%, 50% 100%, -${width}px 50%)`,
		innerShape: (width: number) =>
			`polygon(50% ${width}px, calc(100% - ${width}px) 50%, 50% calc(100% - ${width}px), ${width}px 50%)`
	}
};

/** Default prop values */
export const defaultProps = {
	value: 0,
	min: 0,
	max: 5,
	step: 1,
	type: 'default' as SliderType,
	labels: ['1 Day', '1 Week', '1 Month', '3 Months', '6 Months', '1 Year'],
	showLabels: true,
	shape: 'circle' as SliderShape,
	trackHeight: 6,
	thumbSize: 20,
	thumbBorderWidth: 2
};
