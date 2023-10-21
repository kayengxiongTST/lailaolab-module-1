import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				primaryText: '#000',
				secondaryText: '#fff',
				accentText: '#000',
				primaryBackground: '#000',
				secondaryBackground: '#000',
				accentBackground: '#000'
			}
		}
	}
}
