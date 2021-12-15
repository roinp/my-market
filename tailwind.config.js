module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			spacing: {
				'12xl': '128rem',
			},
			colors: {
				'main-color': '#fec900',
				'red-sales':'#ff3b30'
			},
			width: {
				'375': ' 375px',
				'300': '300px',
				'1200':'1200px'

			},
			maxWidth: {
				'640': '640px',
				'300': '300px',
				'1200':'1200px'
			},
			borderWidth: {
				3:'3px'
			  },
		},
		fontFamily: {
			'helvetica': ['helvetica-geo'],
		}
	},
	plugins: [],
}