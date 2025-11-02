/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GoogleSans: ['GoogleSans', 'sans'],
        sans: ['GoogleSans', ...defaultTheme.fontFamily.sans],
        RobotoMono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'Blue500': '#4285f4',
        'Red500': '#ea4335',
        'Yellow500': '#fbbc04',
        'Green500': '#34a853',
        'Grey200': '#e8eaed',
        'Grey900': '#202124',
        'LightBlue': '#BBDEFB',
        // DevFest 2025 Theme Colors
        'DFBlue': '#3b82f6', // Primary blue
        'DFLightBlue': '#7dd3fc', // Light blue (location badge)
        'DFSkyBlue': '#60a5fa', // Sky blue accent
        'DFGreen': '#22c55e', // Primary green
        'DFLightGreen': '#86efac', // Light green
        'DFTeal': '#2dd4bf', // Teal accent
        'DFPink': '#f472b6', // Reduced pink
        'DFLightPink': '#fce7f3', // Very light pink
        'DFYellow': '#fbbf24', // Amber yellow
        'DFBackground': '#f8fafc', // Light gray-blue background
        'DFBlueAccent': '#3b82f6' // Blue accent
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
