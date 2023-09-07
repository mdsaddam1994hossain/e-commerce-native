import { createTheme } from "@shopify/restyle";



const palette = {
  blue: "#40BFFF",
  white: "#FFFFFF",
  grey: "#9098B1",
  yellow: "#FFC833",
  red: "#FB7181",
  green: "#53D1B6",
  purpel: "#5C61F4",
  dark: "#223263",
  light: "#EBF0FF",
 
  
};

const theme = createTheme({
  colors: {
    blue: palette.blue,
    white: palette.white,
    grey:palette.grey,
    yellow:palette.yellow,
    red:palette.red, 
    green:palette.green, 
    purpel:palette.purpel, 
    dark:palette.dark, 
    light:palette.light, 
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 80,
    xxxl: 120,
  },
 
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 50,
      fontFamily: 'Poppins-Bold',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Poppins-Regular',
    },
    defaults: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Poppins-Regular',
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export default theme;
