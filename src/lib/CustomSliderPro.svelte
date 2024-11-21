<script lang="ts">
	import type { SliderShape, ShapeStyles } from './types';
	import { defaultColorSchemes, defaultShapeStyles, defaultProps, type ColorScheme } from './types';

	export let value = defaultProps.value;
	export let min = defaultProps.min;
	export let max = defaultProps.max;
	export let step = defaultProps.step;
	export let type = defaultProps.type;
	export let labels = defaultProps.labels;
	export let shape = defaultProps.shape;
	export let trackHeight = defaultProps.trackHeight;
	export let thumbSize = defaultProps.thumbSize;
	export let thumbBorderWidth = defaultProps.thumbBorderWidth;
	export let colors: ColorScheme | undefined = undefined;

	const colorSchemes = defaultColorSchemes;
	const getShapeStyles = (shapeType: SliderShape): ShapeStyles => defaultShapeStyles[shapeType];
	const markerSize = thumbSize - 4 <= trackHeight ? thumbSize : thumbSize - 4;

	$: shapeStyle = getShapeStyles(shape);
	$: colors = colors || colorSchemes[type];
	$: totalSteps = Math.ceil((max - min) / step);
	$: markers = Array.from({ length: totalSteps + 1 }, (_, i) => ({
		value: min + i * step,
		label: labels[i] || (min + i * step).toString()
	}));
	$: percentage = ((value - min) / (max - min)) * 100;

	function handleInput(event: Event): void {
		const input = event.target as HTMLInputElement;
		const newValue = parseFloat(input.value);
		value = Math.round(newValue * (1 / step)) * step;
	}

	function handleMarkerClick(markerValue: number): void {
		value = markerValue;
	}
</script>

<div class="slider-container">
	<div class="slider-with-markers">
		<div class="track-container">
			<div class="track-wrapper">
				<div
					class="track"
					style="
					height: {trackHeight}px;
					background: linear-gradient(
						to right,
						{colors.filled} 0%,
						{colors.filled} {percentage}%,
						{colors.track} {percentage}%,
						{colors.track} 100%
					)
					"
				>
					{#each markers as marker}
						<button
							class="marker"
							on:click={() => handleMarkerClick(marker.value)}
							style="
							left: {((marker.value - min) / (max - min)) * 100}%;
							width: {markerSize}px;
							height: {markerSize}px;
							background-color: {value >= marker.value ? colors.filled : colors.track};
							{shapeStyle.shape}
							"
						/>
					{/each}
				</div>

				<div
					class="thumb"
					style="
					left: {percentage}%;
					width: {thumbSize}px;
					height: {thumbSize}px;
					background: {colors.thumb};
					border: {shapeStyle.useClipPath ? 0 : thumbBorderWidth}px solid {colors.border};
					{shapeStyle.shape}
					"
				>
					{#if shapeStyle.useClipPath}
						<div
							class="thumb-border"
							style="
							position: absolute;
							inset: 0;
							width: 100%;
							height: 100%;
							clip-path: {typeof shapeStyle.borderShape === 'function'
								? shapeStyle.borderShape(thumbBorderWidth)
								: shapeStyle.borderShape};
							background-color: {colors.border};
							"
						>
							<div
								class="thumb-inner"
								style="
								position: absolute;
								inset: 0;
								width: 100%;
								height: 100%;
								clip-path: {typeof shapeStyle.innerShape === 'function'
									? shapeStyle.innerShape(thumbBorderWidth)
									: shapeStyle.innerShape};
								background-color: {colors.thumb};
								"
							/>
						</div>
					{/if}
				</div>
			</div>

			<div class="input-wrapper">
				<input
					type="range"
					bind:value
					{min}
					{max}
					{step}
					aria-orientation="horizontal"
					aria-label="Select value"
					class="slider"
					on:input={handleInput}
				/>
			</div>
		</div>

		<div class="labels-container">
			{#each markers as marker, index}
				<button
					class="label"
					on:click={() => handleMarkerClick(marker.value)}
					style="
					left: {((marker.value - min) / (max - min)) * 100}%;
					font-weight: {value === marker.value ? '600' : '400'};
					color: {value === marker.value ? '#1f2937' : '#6b7280'};
					text-align: {index === 0 ? 'left' : index === markers.length - 1 ? 'right' : 'center'};
					transform: translateX(-50%);"
				>
					<span
						class="label-text"
						style="display: inline-block; {index === 0
							? 'transform: translateX(50%);'
							: index === markers.length - 1
								? 'transform: translateX(-50%);'
								: ''}"
					>
						{marker.label}
					</span>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.slider-container {
		width: 100%;
		padding: 10px 0;
		--thumb-overflow: calc(var(--thumb-size, 20px) / 2);
	}

	.slider-with-markers {
		position: relative;
		padding: 5px 0 25px;
		min-width: 300px;
	}

	.track-container {
		position: relative;
		height: var(--thumb-size, 20px);
	}

	.track-wrapper {
		position: relative;
		margin: 0 var(--thumb-overflow);
	}

	.track {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		border-radius: 9999px;
	}

	.marker {
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		width: var(--marker-size, 16px);
		height: var(--marker-size, 16px);
		border: none;
		background-color: inherit;
		cursor: pointer;
		border-radius: inherit;
	}

	.marker::after {
		content: '';
		position: absolute;
		top: -24px; 
		left: 50%;
		transform: translateX(-50%);
		width: 32px;
		height: 24px;
		background: transparent;
	}

	.thumb {
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		cursor: grab;
		z-index: 2;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		border-style: solid;
	}

	.thumb-border {
		z-index: -1;
	}

	.thumb-inner {
		z-index: 1;
	}

	.input-wrapper {
		position: absolute;
		top: -12px;
		left: calc(var(--thumb-overflow) * -1);
		right: calc(var(--thumb-overflow) * -1);
		bottom: -12px;
		width: calc(100% + var(--thumb-overflow) * 2);
	}

	.slider {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		height: calc(var(--thumb-size, 20px) + 24px);
		opacity: 0;
		cursor: grab;
		z-index: 3;
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		margin: 0;
		padding: 0;
	}

	.labels-container {
		position: relative;
		margin-top: 10px;
	}

	.label {
		position: absolute;
		font-size: 12px;
		max-width: calc(100% - 8px);
		word-wrap: break-word;
		hyphens: auto;
		line-height: 1.2;
		transition:
			font-weight 0.15s ease,
			color 0.15s ease;
		white-space: nowrap;
		background: none;
		border: none;
		padding: 4px;
		margin: -4px;
		cursor: pointer;
	}

	.label-text {
		transition: transform 0.15s ease;
	}
</style>