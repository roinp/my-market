module.exports = {
	content: ["./src/**/*.{html,js}", "./*.{html,js}"],
	theme: {
		extend: {
			spacing: {
				'12xl': '128rem',

			},
			colors: {
				'main-color': '#fec900',
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
			}
		},
		fontFamily: {
			'helvetica': ['helvetica-geo'],
		}
	},
	plugins: [],
}