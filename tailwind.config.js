/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: 
  {
    
    extend: {

      //agrega font-size//
      fontSize: {'base':'16px'},

      boxShadow: {
        custom: '8px 14px 0px 0px black',
      },
      backgroundImage: {
        'bgpattop-desk': "url('/images/bg-pattern-top-desktop.svg')",

        'bgpatbottom-desk': "url('/images/bg-pattern-bottom-desktop.svg')",

        'bgtop-mobile': "url('/images/bg-pattern-top-mobile.svg')",

        'bgbottom-mobile': "url('/images/bg-pattern-bottom-mobile.svg')",

      },
      colors:{
        primary: { 
                  PaleViolet: 'hsl(276, 100%, 81%)',
                  ModeraViolet: 'hsl(276, 55%, 52%)',
                  DesaturatedDarkViolet: 'hsl(271, 15%, 43%)',
                  GrayishBlue: 'hsl(206, 6%, 79%)',
                  VeryDarkDesaturatedViolet: 'hsl(271, 36%, 24%)',
                  DarkGrayishViolet: 'hsl(270, 7%, 64%)',
      },

       Secondary:{

                  White: 'hsl(0, 0%, 100%)',
                  LightGrayishViolet: 'hsl(270, 20%, 96%)',
                  VeryDarkDesaturatedViolet: 'hsl(271, 36%, 24%)',
                  VeryLightMagenta: 'hsl(289, 100%, 72%)',
       },
    
    
        Gradients: {
                  LightMagenta: 'hsl(293, 100%, 63%)',
                  LightViolet: 'hsl(264, 100%, 61%)',},
                },

                fontFamily: {
                  "primary-font": ["Figtree", "sans-serif"],
                },
              },
             
             
            },
            plugins: [],
          }  

      








 
      
      
    
     
    

