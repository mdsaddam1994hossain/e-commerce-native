import { createTheme } from "@shopify/restyle";

import { palette } from "./palette";
import { space } from "./spacing";
import { TThimeProps } from "./type";
import deviceHelper from "../utils/deviceHelper";

const theme = createTheme<TThimeProps>({
  colors: {
    ...palette,
  },
  spacing: {
    ...space,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
  textInputVariants: {
    defaults: {
      height: 48,
      fontSize: 12,
      borderRadius: 5,
      borderWidth: 1,
      fontFamily: "Poppins-Bold",
      paddingHorizontal: "sm",
    },
  },
  textVariants: {
    defaults: {
      fontSize: 14,
      color: "black",
    },
    heading: {
      fontSize: 14,
      color: "dark",
      fontFamily: "Poppins-Bold",
    },
    headingBlue: {
      fontSize: 14,
      color: "blue",
      fontFamily: "Poppins-Bold",
    },
    heading3: {
      fontSize: 20,
      fontFamily: "Poppins-Bold",
    },
    heading5: {
      fontSize: 14,
      fontFamily: "Poppins-Bold",
    },
    heading4: {
      fontSize: 16,
      color: "dark",
      fontFamily: "Poppins-Bold",
    },
    heading6: {
      fontSize: 12,
      color: "dark",
      fontFamily: "Poppins-Bold",
    },
    heading6Primary: {
      fontSize: 12,
      color: "blue",
      fontFamily: "Poppins-Bold",
    },
    subHeading: {
      fontSize: 18,
      color: "primary",
    },
    buttonText: {
      fontSize: 14,
      color: "white",
      fontFamily: "Poppins-Bold",
    },
    bodyTextSmall: {
      fontSize: 12,
      fontFamily: "Poppins-Regular",
      lineHeight: 20,
    },
    bodyTextSmallBold: {
      fontSize: 12,
      fontFamily: "Poppins-Bold",
      color: "white",
    },
    bodyTextNormal: {
      fontSize: 10,
      color: "grey",
      fontFamily: "Poppins-Regular",
    },
    bodyTextBold: {
      fontSize: 10,
      color: "grey",
      fontFamily: "Poppins-Bold",
    },
    bodyTextBoldBlue: {
      fontSize: 10,
      color: "blue",
      fontFamily: "Poppins-Bold",
    },
    bodyTextSoSmall: {
      fontSize: 10,
      color: "dark",
      fontFamily: "Poppins-Regular",
    },
  },
  boxVariants: {
    elevated: {
      padding: {
        phone: "s",
        tablet: "m",
      },
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 15,
      elevation: 5,
    },
  },
  buttonVariants: {
    defaults: {
      height: 57,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginEnd: "sm",
      borderColor: "limsPlusGrey",
      borderRadius: 5,
    },
    primary: {
      backgroundColor: "blue",
      flex: 1,
      shadowOpacity: 0.4,
      elevation: 20,
      borderRadius: 5,
      shadowColor: "blue",
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 30,
    },
    secondary: {
      backgroundColor: "white",
      flex: 1,
      shadowOpacity: 0.4,
      elevation: 20,
      borderRadius: 5,
      shadowColor: "blue",
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 30,
    },
  },
  cardVariants: {
    defaults: {
      shadowColor: "limsPlusGrey",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 9,
      borderColor: "limsPlusGrey5",
      borderWidth: 1,
      borderRadius: 10,
      padding: "lg",
    },
    small: {
      width: deviceHelper.calculateWidthRatio(232),
    },
    medium: {
      width: deviceHelper.calculateWidthRatio(301),
    },
    large: {
      width: deviceHelper.calculateWidthRatio(286),
    },
    row: {
      width: deviceHelper.calculateWidthRatio(373),
    },
    floating: {
      height: 50,
      borderRadius: 50,
      paddingHorizontal: "lg",
      paddingVertical: "none",
    },
  },
  avatarVariants: {
    small: {
      width: deviceHelper.calculateWidthRatio(40),
      height: deviceHelper.calculateWidthRatio(40),
    },
    medium: {
      width: deviceHelper.calculateWidthRatio(55),
      height: deviceHelper.calculateWidthRatio(55),
    },
    large: {
      width: deviceHelper.calculateWidthRatio(70),
      height: deviceHelper.calculateWidthRatio(70),
    },
  },
  dividerVariants: {
    small: {
      height: 1,
      color: "limsPlusGrey6",
      width: "100%",
    },
  },
  iconVariants: {
    small: {
      width: deviceHelper.calculateWidthRatio(25),
      height: deviceHelper.calculateWidthRatio(25),
    },
    medium: {
      width: deviceHelper.calculateWidthRatio(50),
      height: deviceHelper.calculateWidthRatio(50),
    },
  },
});

export type ReStyleTheme = typeof theme;
type textVariants = typeof theme.textVariants;
export type TTextVariants = keyof textVariants;
export default theme;
