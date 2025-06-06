/// <reference types="vitest" />
import { defineConfig } from 'vite';
// import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
	plugins: [ sveltekit()],
	test: {
		globals: true, // This is important!
		environment: 'jsdom',
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		setupFiles: ['tests/setup.ts'],
		alias: {
			$lib: path.resolve(__dirname, './src/lib')
		}
	},
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, './src/lib')
		}
	}
});
