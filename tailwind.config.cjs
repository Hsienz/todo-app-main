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

				Very_Light_Gray: "hsl(0, 0%, 98%)",
				Very_Light_Grayish_Blue: "hsl(236, 33%, 92%)",
				Light_Grayish_Blue: "hsl(233, 11%, 84%)",
				Dark_Grayish_Blue: "hsl(236, 9%, 61%)",
				Very_Dark_Grayish_Blue: "hsl(235, 19%, 35%)",

				// Dark Theme

				Very_Dark_Blue: "hsl(235, 21%, 11%)",
				Very_Dark_Desaturated_Blue: "hsl(235, 24%, 19%)",
				Light_Grayish_Blue: "hsl(234, 39%, 85%)",
				Light_Grayish_Blue_hover /*(hover)*/: "hsl(236, 33%, 92%)",
				Dark_Grayish_Blue: "hsl(234, 11%, 52%)",
				Very_Dark_Grayish_Blue: "hsl(233, 14%, 35%)",
				Very_Dark_Grayish_Blue: "hsl(237, 14%, 26%)",
			},
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif']
      }
		},
	},
	plugins: [],
};
