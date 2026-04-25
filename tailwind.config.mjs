/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        space:  '#000005',
        gold:   '#ffd54f',
        muted:  '#90a4ae',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulsar':      'pulsar 1.2s ease-in-out infinite',
        'nebula-drift':'nebula-drift 40s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
