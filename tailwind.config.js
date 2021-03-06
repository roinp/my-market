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
				'red-sales': '#ff3b30',
				'border-color':'#cad7e5'
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
				'600': '600px',
				'500': '500px'
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
				0: '0',
				'9' : '9px',
				'10' : '10px',
				'12' : '12px'
			},
			padding: {
				'9px':'9px',
				'12px':'12px'
			}
		},
		fontFamily: {
			'helvetica': ['helvetica-geo'],
		}
	},
	plugins: [],
}