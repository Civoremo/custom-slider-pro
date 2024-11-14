/**
 * @type {import('@sveltejs/package').Config}
 */

export default {
  source: "src/lib",
  dir: "dist",
  exports: (filepath) => !/^_|\/_/.test(filepath),
};
