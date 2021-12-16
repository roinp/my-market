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
				'red-sales': '#ff3b30'
			},
			width: {
				'375': ' 375px',
				'300': '300px',
				'1200': '1200px',
				'176': '176px',
				'590': '590px',
				'nav-lg': 'calc(33% - 20px)',
				'nav-xl': 'calc(25% - 20px)',
			},
			height: {
				'320': '320px',
				'600': '600px'
			},

			maxWidth: {
				'640': '640px',
				'300': '300px',
				'1200': '1200px'
			},
			borderWidth: {
				3: '3px'
			},
			fontSize: {
				0: '0'
			}
		},
		fontFamily: {
			'helvetica': ['helvetica-geo'],
		}
	},
	plugins: [],
}