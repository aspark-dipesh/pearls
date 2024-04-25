/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
			  mytheme:{
				primary: "#A67C00",    // Gold
				secondary: "#C0C0C0",  // Silver
				accent: "#800020",     // Burgundy
				neutral: "#202f42",    // Keeping your original neutral color
				"base-100": "#221f2f",   // Keeping your original base-100 color
				info: "#008080",       // Teal
				success: "#004953",    // Dark Turquoise
				warning: "#FFD700",    // Golden
				error: "#B22222"       // Firebrick
			   }
			}
		  ],
		dark: false,
		styled: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
}
