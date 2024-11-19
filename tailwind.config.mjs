import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark': {
					950: '#010101',
					900: '#121218',
				},
				'purple': {
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
				'gradient-orb': 'radial-gradient(circle at 70% 30%, var(--tw-gradient-stops))',
				'gradient-glow': 'linear-gradient(to right, rgba(124, 58, 237, 0.2), rgba(167, 139, 250, 0.2))',
				'grid-white': `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
				'gradient-text': 'linear-gradient(to right, #c4b5fd, #7c3aed)',
				'gradient-banner': 'linear-gradient(to bottom, rgba(10, 10, 15, 1), rgba(10, 10, 15, 0.8), rgba(10, 10, 15, 1))',
			},
			boxShadow: {
				'glow': '0 0 20px rgba(124, 58, 237, 0.5)',
				'button': '0 0 20px rgba(124, 58, 237, 0.3)',
			},
			animation: {
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			}
		},
	},
	plugins: [
		animations,
		function({ addComponents }) {
			addComponents({
				'.btn-primary': {
					'@apply flex items-center justify-center bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105 shadow-button hover:shadow-glow': {},
				},
				'.btn-secondary': {
					'@apply flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105 border border-white/10 hover:border-purple-500/30': {},
				},
				'.nav-link': {
					'@apply text-gray-400 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all hover:after:w-full': {},
				},
				'.gradient-text': {
					'@apply bg-clip-text text-transparent bg-gradient-text': {},
				},
			})
		},
		function({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide': {
					/* IE and Edge */
					'-ms-overflow-style': 'none',
					/* Firefox */
					'scrollbar-width': 'none',
					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				}
			})
		}
	],
}