
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./*.html",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: "#333333",
				input: "#222222",
				ring: "#444444",
				background: "#111111",
				foreground: "#f7f7f7",
				primary: {
					DEFAULT: "#e0e0e0",
					foreground: "#111111"
				},
				secondary: {
					DEFAULT: "#222222",
					foreground: "#e0e0e0"
				},
				destructive: {
					DEFAULT: "#505050",
					foreground: "#f7f7f7"
				},
				muted: {
					DEFAULT: "#292929",
					foreground: "#a0a0a0"
				},
				accent: {
					DEFAULT: "#333333",
					foreground: "#f0f0f0"
				},
				popover: {
					DEFAULT: "#171717",
					foreground: "#f0f0f0"
				},
				card: {
					DEFAULT: "#1a1a1a",
					foreground: "#f0f0f0"
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Roboto Mono', 'monospace'],
			},
			borderRadius: {
				lg: '0.5rem',
				md: '0.375rem',
				sm: '0.25rem'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.5s ease-out forwards',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
