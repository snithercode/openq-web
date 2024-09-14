/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'purple-light': 'var(--color-purple-light)',
        'purple-dark': 'var(--color-purple-dark)',
        'purple-dark-muted': 'var(--color-purple-dark-muted)',
        'red': 'var(--color-red)',
        'dark-red': 'var(--color-dark-red)',
        'orange': 'var(--color-orange)',
        'green': 'var(--color-green)',
        'background': 'var(--color-background)',
        'background-secondary': 'var(--color-background-secondary)',
        'white': 'var(--color-text)',
      },
    },
  },
  plugins: []
};