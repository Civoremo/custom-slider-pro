<script lang="ts">
	// import { type SliderShape, type SliderType, type defaultProps } from '$lib';
	// import CustomSliderPro from '$lib';
	// In +page.svelte, change:
	import { CustomSliderPro, type SliderShape, type SliderType, type defaultProps } from '$lib';

	let value: number = 2;
</script>

<div class="container">
	<h1 class="title">Custom Slider Pro Demo</h1>
	<div class="sliders-container">
		<div class="slider-wrapper">
			<h3 class="slider-title">Default Circle</h3>
			<CustomSliderPro bind:value />
		</div>

		<div class="slider-wrapper">
			<h3 class="slider-title">Custom Colors Circle</h3>
			<CustomSliderPro bind:value colors={{
				filled: "#4296e5",
				track: "#e523eb",
				thumb: "#ff99ff",
				border: "#6e5"
			}}  />
		</div>

		<div class="slider-wrapper">
			<h3 class="slider-title">Rounded Square</h3>
			<CustomSliderPro
				bind:value
				min={0}
				max={5}
				type="default"
				shape="roundedSquare"
				thumbBorderWidth={1}
				labels={['A', 'B', 'C', 'D', 'E', 'F']}
			/>
		</div>

		<div class="slider-wrapper">
			<h3 class="slider-title">Square Warning</h3>
			<CustomSliderPro
				bind:value
				min={0}
				max={5}
				type="warning"
				shape="square"
				trackHeight={10}
				thumbSize={30}
				thumbBorderWidth={4}
				labels={['1 Day', '2 Days', '2 Days', '4 Days', '5 Days', '6 Days']}
			/>
		</div>

		<div class="slider-wrapper">
			<h3 class="slider-title">Triangle Error</h3>
			<CustomSliderPro
				bind:value
				min={0}
				max={3}
				type="error"
				shape="triangle"
				trackHeight={10}
				thumbSize={24}
				thumbBorderWidth={2}
				labels={['Short', 'Medium', 'Large', 'Extra Large']}
			/>
		</div>

		<div class="slider-wrapper">
			<h3 class="slider-title">Triangle Down</h3>
			<CustomSliderPro
				bind:value
				min={0}
				max={2}
				type="default"
				shape="triangleDown"
				trackHeight={6}
				thumbSize={18}
				thumbBorderWidth={4}
				labels={['Yes', 'No', 'Maybe']}
			/>
		</div>

		<div class="slider-wrapper">
			<h3 class="slider-title">Diamond Warning</h3>
			<CustomSliderPro
				bind:value
				min={0}
				max={5}
				type="warning"
				shape="diamond"
				trackHeight={18}
				thumbSize={40}
				thumbBorderWidth={1}
				labels={['1', '2', '3', '4', '5', '6']}
			/>
		</div>

		<div class="slider-wrapper">
			<h3 class="slider-title">No Labels Circle</h3>
			<CustomSliderPro
				bind:value
				min={0}
				max={5}
				type="default"
				shape="circle"
				trackHeight={8}
				thumbSize={24}
				thumbBorderWidth={2}
				showLabels={false}
			/>
		</div>

		<div class="slider-wrapper">
			<h3 class="slider-title">With Value Display</h3>
			<CustomSliderPro
				bind:value
				min={0}
				max={5}
				type="info"
				shape="circle"
				trackHeight={8}
				thumbSize={24}
				thumbBorderWidth={2}
				showLabels={false}
				showValue={true}
			/>
		</div>

		<h2>Custom Value Display Examples</h2>

		<!-- Example 1: Custom string value -->
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

		<!-- Example 2: Custom function value -->
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

		<!-- Example 3: Default formatting, but custom colors -->
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

		<!-- Example 4: No background for value display -->
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
	</div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.title {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 1.5rem;
		color: #1f2937;
	}

	.sliders-container {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 4rem;
		padding: 2rem;
	}

	.slider-wrapper {
		width: 100%;
		padding: 1.5rem;
		background-color: #f8fafc;
		border-radius: 1rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.slider-title {
		text-align: center;
		margin-bottom: 1.5rem;
		font-size: 1rem;
		color: #4b5563;
		font-weight: 500;
	}

	/* Optional: Add hover effect */
	.slider-wrapper:hover {
		background-color: #f1f5f9;
		transform: translateY(-2px);
		transition: all 0.2s ease;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.container {
			padding: 1rem;
		}

		.sliders-container {
			padding: 1rem;
			gap: 2rem;
		}

		.title {
			font-size: 2rem;
			margin-bottom: 2rem;
		}
	}
</style>
