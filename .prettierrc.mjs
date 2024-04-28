// Prettier config

/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	tabWidth: 4,
	trailingComma: "es5",
	semi: true,
	useTabs: true,
};
