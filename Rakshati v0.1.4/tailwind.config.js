/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            redit: '"Reddit Sans", sans-serif;"',
         },
         colors: {
            success: '#00B386',
            primary: '#44475B',
            secondary: '#7C7E8C',
         },
         fontSize: {
            6.5: '64px',
         },
         height: {
            screenWithoutNavbar: 'calc(100vh - 80px)'
         }
      },
   },
   plugins: [],
};
