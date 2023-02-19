/**
 * Rollup config
 */
export default {
	input: "./src/index.ts",
	output: [
		{
			file: "bundle.js",
			format: "cjs",
		},
	],
};
