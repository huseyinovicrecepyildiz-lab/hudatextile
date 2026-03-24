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
          50: '#f6f6f6',
          100: '#e7e7e8',
          200: '#cfd0d2',
          300: '#afb1b5',
          400: '#8b8e95',
          500: '#6a6e76',
          600: '#53575e',
          700: '#3e4147',
          800: '#2a2c30',
          900: '#16171a',
          950: '#0a0b0d',
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
          50: '#fbf9f4',
          100: '#f5efdf',
          200: '#eadfbf',
          300: '#d9c693',
          400: '#c5a572',
          500: '#b5935e',
          600: '#94754a',
          700: '#6f5738',
          800: '#4a3a25',
          900: '#251d13',
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