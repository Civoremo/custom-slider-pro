/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

interface CustomMatchers<R = unknown> {
	toBeInTheDocument(): R;
	toHaveAttribute(attr: string, value?: string): R;
	toHaveStyle(style: Record<string, any>): R;
	toHaveValue(value: string | number): R;
	toHaveLength(length: number): R;
}

declare module 'vitest' {
	interface Assertion<T = any> extends CustomMatchers<T> {}
	interface AsymmetricMatchersContaining extends CustomMatchers {}
}
