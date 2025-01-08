/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontSize: {
			heading: "32px",
			body: "16px",
			label: "14px",
			price: "12px",
			small: "10px",
		},
		colors: {
			white: "#FEF7EE",
			dark: {
				1: "#111315",
				2: "#1B1D1F",
			},
			grey: {
				1: "#6F757C",
				2: "#4D5562",
			},
			accent: {
				yellow: "#F6C768",
				green: "#BEE3CC",
				red: "#ED735D",
				chocolate: "#302522",
			},
		},
	},
	plugins: [],
};
