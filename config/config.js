const appRoot = "#root";

const Colors = {
  primary: '#FEA501',
  secondary: '#397886',
  tertiary: '#C26508',
  alert: '#d11616',
  success: '#4BB543',

  dark: '#090909',
  light: '#E9E9E9',

  black: '#000000',
  white: '#ffffff',

  transparent: 'transparent',
}

const Sizes = {
  title: '1.5rem',
  bigText: '1rem',
  normalText: '.8rem',
  smallText: '.6rem',

  pageWidth: "1024px",
}

const Fonts = {
  fontsUrl: [
    "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');",
    "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');",
  ],

  primary: "Roboto, sans-serif",
  secondary: "Open Sans, sans-serif",
}

const BreakPoints = {
  mobile: window.matchMedia('(max-width: 767px)'),
  tablet: window.matchMedia('(min-width: 768px) and (max-width: 1023px)'),
  desktop: window.matchMedia('(min-width: 1024px)')
}

export { appRoot, Colors, Sizes, Fonts, BreakPoints }