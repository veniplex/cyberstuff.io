/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				background: "var(--color-background)",
				text: "var(--color-text)",
				primary: "var(--color-primary)"
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	]
}
