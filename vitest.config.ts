/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['./tests/**/*.{test,spec}.ts'], // Changed from src to tests
		setupFiles: ['./tests/setup.ts'],
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
