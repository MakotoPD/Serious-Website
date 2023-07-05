// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
		head: {
			title: 'SeriousPack',
			htmlAttrs: {
			  lang: 'en',
			},
			meta: [
			  { charset: 'utf-8' },
			  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
			  { hid: 'description', name: 'description', content: '' },
			  { name: 'format-detection', content: 'telephone=no' },
			  { name: 'description', content: ''},
			  { name: 'keywords', content: 'SeriousPack, ModPack, ReourcePack, Pack, Mod, Mods, Resource, Resources, Packs, Minecraft'},
			  { name: 'og:image', content: '/banner.png' }
			],
			link: [
			  { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
			  { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },
			],
		},

	},

  plugins: [
		{ src: "@/plugins/aos", ssr: false, mode: "client" }
	],

  modules: [
		'@nuxtjs/tailwindcss',  	//css framework
		'~/modules/sitemap',		//sitemap creator
		'@nuxt/image-edge',			//images
		'@nuxtjs/google-fonts',		//google fonts
	],

  tailwindcss: {
		configPath: 'tailwind.config',
	},

  sitemap: {
		hostname: 'https://seriouspack.vercel.app',
	},

  googleFonts: {
		display: 'swap',
		families: {
			Roboto: true,
		}
	},

  css: [
		'@/assets/css/global.css',
	]
})
