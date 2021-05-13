module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['Open Sans', ],
      'Lato':['Lato','sans-serif']
    },
    
    extend: {
      inset: {
        'n-1':"2px",
        'n-54':'54px',
        'n-50':'50px',
        'n-60':'62px',
      },
      height: {
        '0.5': "2px",
        'n-1':'1.5px',
        'n-470':'470px',
        'n-420':'420px',
        'n-100':'100px',
        'n-160':'160px',
        'n-200': '200px',
        'n-240': '240px',
        'n-350': '350px',
        'n-400':'400px',
        'n-600': '600px',
      },
      width: {
        '100':'100px',
        "160":'160px',
        '250':'250px',
        '330': '330px',
        '300':'346.391px',
        '340': '340px',
        '350': '350px',
        '360': '360px',
        '370': '370px',
        '380': '380px',
        '400': '400px',
        '440':'440px',
        '460': '460px',
        '475': '475px',
        '525': '525px',
        '555': '555px',
        '610': '610px',
        '670': '670px',
        '680': '680px',
        '900':"900px"
        
      },
      maxWidth: {
        "400": "400px",
        "330":"330px",
        "350":"350px",
        "380":"380px",
        '1110':'1110px',
        '1200':'1220px'
      },
      screens: {
        '1360': '1360px',
      },
      fontSize: {
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '17': '17px',
        '18': '1.125rem',
        '20': '1.25rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '25': '1.5625rem',
        '28': '1.75rem',
        '34': '2.125rem',
        '42': '2.625rem',
        '50': '3.125rem',
        '52': '3.25rem',
        '60': '3.75rem',
        '80': '5rem',
        '150': '9rem',
        '200': '12.5rem'
      },
      lineHeight:{
        'l-67':'67px',
      },
      zIndex: {
        'a': '-1'
      },
      color: {
        "black-01": "#222831",
        'orange': '#ff5722',
        'orange-01': '#dd2c00',
        'blue-01': '#10375C',
        'white': "#fff"
      },
      textColor: {
        "black-01": "#222831",
        "black-02":"#0D2C4A",
        'orange': '#ff5722',
        'orange-01': '#dd2c00',
        'blue-01': '#10375C',
        'white': "#fff",
        'gray-01':'#6A6A6A',
        'gray-02':"#9A9A9A",
      },
      backgroundColor: {
        "black-01": "#222831",
        'orange': '#ff5722',
        'orange-01': '#dd2c00',
        'blue-01': '#10375C',
        'blue-02':'#0D2C4A',
        'white': "#fff",
        'gray-01':'#6A6A6A',
        'gray-02':'#DFDFDF'

      },
      borderColor: {
        "black-01": "#222831",
        'orange': '#ff5722',
        'orange-01': '#dd2c00',
        'blue-01': '#10375C',
        'white': "#fff"
      },
      padding: {
        'a':'1px',
        '01': '10px',
        '02': '20px',
        '03': '30px',
        '04': '40px',
        '05': '50px',
        '06': '60px',
        '100': '100px',
        '150': '150px',
        '035': '35px',
        '03': '30px',
        '03': '30px',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
