/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 50s linear infinite',
        'spin-slower': 'spin 120s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0d662d',
          secondary: '#d4af37',
          accent: '#ffffff',
          neutral: '#1a1a1a',
          'base-100': '#ffffff',
          'base-200': '#f2f2f2',
        },
      },
      'dark'
    ],
    darkTheme: 'mytheme'
  }
}

