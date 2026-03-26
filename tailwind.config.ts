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
        onyx: {
          50: '#f6f5f4',
          100: '#e8e6e5',
          200: '#d0ccca',
          300: '#b1adaa',
          400: '#8e8a86',
          500: '#6d6864',
          600: '#56504c',
          700: '#413b37',
          800: '#2d2724',
          900: '#1a1614',
          950: '#0d0b0a',
        },
        silver: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        gold: {
          50: '#fdfbf4',
          100: '#f9f2df',
          200: '#f0e3bf',
          300: '#e5d193',
          400: '#F2D06B',
          500: '#D4A930',
          600: '#A88425',
          700: '#7d631c',
          800: '#534213',
          900: '#2a210a',
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