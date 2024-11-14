import { render, fireEvent, type RenderResult } from '@testing-library/svelte';
import CustomSliderPro from '../src/lib/CustomSliderPro.svelte';
import type { SliderShape, SliderType } from '../src/lib/types';

// Define the props interface
export interface SliderProps {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	type?: SliderType;
	labels?: string[];
	shape?: SliderShape;
	trackHeight?: number;
	thumbSize?: number;
	thumbBorderWidth?: number;
}

export function renderSlider(props: Partial<SliderProps> = {}): RenderResult<CustomSliderPro> {
	return render(CustomSliderPro, { props });
}

export function getSliderValue(container: HTMLElement): number {
	const input = container.querySelector('input[type="range"]') as HTMLInputElement;
	return Number(input.value);
}

export function getComputedStyle(element: Element | null): CSSStyleDeclaration {
	if (!element) throw new Error('Element not found');
	return window.getComputedStyle(element);
}

export function getExpectedStepValue(
	value: number,
	step: number,
	min: number,
	max: number
): number {
	const steps = Math.round((value - min) / step);
	return Math.min(Math.max(steps * step + min, min), max);
}

export function getShapeStyle(shape: SliderShape): Record<string, string> {
	const clipPathValues = {
		triangle: 'polygon(50% 0%, 100% 100%, 0% 100%)',
		triangleDown: 'polygon(0% 0%, 100% 0%, 50% 100%)',
		diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
	};

	switch (shape) {
		case 'circle':
			return { 'border-radius': '50%' };
		case 'roundedSquare':
			return { 'border-radius': '4px' };
		case 'square':
			return { 'border-radius': '0' };
		case 'triangle':
		case 'triangleDown':
		case 'diamond':
			return { 'clip-path': clipPathValues[shape] };
		default:
			return {};
	}
}

export function getNearestStepValue(value: number, step: number, min: number, max: number): number {
	const steps = Math.round((value - min) / step);
	const snappedValue = min + steps * step;
	return Math.min(Math.max(snappedValue, min), max);
}

export function getMarkerCount(min: number, max: number, step: number): number {
	return Math.floor((max - min) / step) + 1;
}

export function getAllMarkers(container: HTMLElement): NodeListOf<Element> {
	return container.querySelectorAll('.marker');
}

export function getLabelElements(container: HTMLElement): NodeListOf<Element> {
	return container.querySelectorAll('.label');
}

export function getSliderInput(container: HTMLElement): HTMLInputElement | null {
	return container.querySelector('input[type="range"]');
}

export function simulateValueChange(input: HTMLInputElement, value: number): Promise<void> {
	return fireEvent.input(input, { target: { value: value.toString() } });
}
