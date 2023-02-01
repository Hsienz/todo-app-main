/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Bright_Blue: "hsl(220, 98%, 61%)",
				Cyan: "hsl(192, 100%, 67%)",
				Pink: "hsl(280, 87%, 65%)",

				// Neutral

				// Light Theme

				Light_Very_Light_Gray: "hsl(0, 0%, 98%)",
				Light_Very_Light_Grayish_Blue: "hsl(236, 33%, 92%)",
				Light_Light_Grayish_Blue: "hsl(233, 11%, 84%)",
				Light_Dark_Grayish_Blue: "hsl(236, 9%, 61%)",
				Light_Very_Dark_Grayish_Blue: "hsl(235, 19%, 35%)",

				// Dark Theme

				Dark_Very_Dark_Blue: "hsl(235, 21%, 11%)",
				Dark_Very_Dark_Desaturated_Blue: "hsl(235, 24%, 19%)",
				Dark_Light_Grayish_Blue: "hsl(234, 39%, 85%)",
				Dark_Light_Grayish_Blue_hover /*(hover)*/: "hsl(236, 33%, 92%)",
				Dark_Dark_Grayish_Blue: "hsl(234, 11%, 52%)",
				Dark_Very_Dark_Grayish_Blue: "hsl(233, 14%, 35%)",
				Dark_Very_Dark_Grayish_Blue_alt: "hsl(237, 14%, 26%)",
			},
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif']
      }
		},
	},
	plugins: [],
};
