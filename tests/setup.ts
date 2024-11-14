/// <reference types="@testing-library/jest-dom" />
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/svelte';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
	cleanup();
});
