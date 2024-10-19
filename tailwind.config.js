/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#674188', // Deep purple
        secondary: '#E2BFD9', // Soft pink
        tertiary: '#C8A1E0', // Light lavender
        neutral: '#F7EFE5',  // Light cream
      },
    },
  },
  plugins: [],
};
