/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content kısmını daha geniş kapsamlı hale getirdik
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Bu satır src altındaki HER ŞEYİ tarar
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Eğer src dışında app varsa onu da tarar
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e0f0',
          200: '#b3c1e1',
          300: '#8da2d2',
          400: '#6783c3',
          500: '#4164b4',
          600: '#345090',
          700: '#273c6c',
          800: '#1a2848',
          900: '#0d1424',
          950: '#060a12',
        },
        gold: {
          50: '#fdf9ef',
          100: '#faf0d3',
          200: '#f5e1a7',
          300: '#f0d27b',
          400: '#ebc34f',
          500: '#d4a930',
          600: '#a88425',
          700: '#7d631c',
          800: '#534213',
          900: '#2a210a',
        },
        charcoal: {
          50: '#f5f5f6',
          100: '#e5e5e8',
          200: '#cbcbd1',
          300: '#b1b1ba',
          400: '#9797a3',
          500: '#7d7d8c',
          600: '#646470',
          700: '#4b4b54',
          800: '#323238',
          900: '#19191c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};