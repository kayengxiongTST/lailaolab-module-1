import tailwindConfig from './tailwind.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['nuxt-icon', '@nuxtjs/tailwindcss', 'nuxt-swiper', '@hypernym/nuxt-anime'],
	css: ['~/assets/main.css', '~/assets/media.css'],
	tailwindcss: {
		config: {
			plugins: [tailwindConfig]
		}
	},
	app: {
		head: {
			charset: 'utf8',
			viewport: 'width=device-width, initial-scale=1'
		}
	}
})
