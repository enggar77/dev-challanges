/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontSize: {
			heading: "32px",
			title: "20px",
			body: "16px",
			small: "12px",
		},
		colors: {
			dark: "#111729",
			grey: {
				50: "#CDD5E0",
				100: "#97A3B6",
				200: "#364153",
				300: "#20293A",
			},
			accent: {
				blue: "#1D1B48",
			},
		},
		fontWeight: {
			semiBold: "500",
			medium: "400",
			normal: "300",
		},
		fontFamily: {
			sans: ["Be Vietnam Pro", "system-ui"],
		},
		extend: {},
	},
	plugins: [],
};
