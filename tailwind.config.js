/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF2F2',
          100: '#FCE4E6',
          200: '#F8BFC3',
          300: '#F28F96',
          400: '#E7535D',
          500: '#D92732', // Brand Primary
          600: '#B81D26',
          700: '#99151C',
          800: '#7F151B',
          900: '#69161B',
          950: '#3A070A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F7F7F5',
          muted: '#EFEFEF',
          border: '#EAEAEA',
        },
        ink: {
          DEFAULT: '#252525',
          muted: '#666666',
          light: '#8E8E8E',
        },
        leaf: {
          50: '#F0FDF4',
          500: '#15803D',
          600: '#166534',
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 25px -5px rgba(217, 39, 50, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'elevated': '0 20px 30px -10px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
