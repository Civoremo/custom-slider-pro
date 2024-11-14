import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Specify path aliases here instead of tsconfig.json
		alias: {
			$lib: './src/lib'
		},
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

export default config;
