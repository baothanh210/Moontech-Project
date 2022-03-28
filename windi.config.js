import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,js,jsx,tsx}', '**/**/*.php', '*.html'],
    exclude: ['node_modules', '.git'],
  },
  preflight: {
    blocklist: 'img',
  },
  shortcuts: {
    'icon-svg': 'inline-block leading-0'
  },
  theme: {
    extend: {
      colors: {
        primary: {
          '400': '#24B1E6',
        }, // primary-color from design
        gray: {
          '40': '#FCFCFD',
          '480': '#777E90',
          '720': '#353945',
        },
        'cool-gray': {
          '850': '#112137'
        },
        dark: {
          '150': '#383838',
          '840': '#131313',
          '850': '#121212',
        },
        orange: {
          '60': '#FFEECC'
        },
        neutral: {
        '900': '#23262F'
        },
        header:{
            'DODO':'#D0D0D0'
        }
      },
      boxShadow:{
        'textShadow':'0px 0px 12px rgba(255, 254, 235, 0.4), 0px 0px 16px rgba(255, 254, 235, 0.24), 0px 0px 4px rgba(255, 254, 235, 0.12), 0px 0px 4px rgba(255, 254, 235, 0.26), 0px 0px 4px rgba(255, 254, 235, 0.12)',
        'bg-shadow-blue':'0px 32px 64px rgba(57, 20, 0, 0.04);'
      },
      spacing:{
        '30x':'30px'
      },
      
      scale: {
        '175': '1.75'
      },
      fontFamily: {
        gotham:['Gotham Pro','Gotham Pro Black','Gotham Pro Light','Gotham Pro Medium']
     
      }, // custom font from design
      container: {
        center: true,
        padding: '0.9375rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },

      },
      lineClamp: {
        sm: '2',
      },// custom container Width
      // like bootstrap
    }
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/aspect-ratio'),
  ],
})
