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
  textVariants: {
    defaults: {
      fontSize: 14,
      color: "black",
    },
    heading: {
      fontSize: 20,
      color: "primary",
    },
    subHeading: {
      fontSize: 18,
      color: "primary",
    },
    textHeader: {
      fontSize: 16,
      color: "black",
    },
    textHeaderBold: {
      fontSize: 16,
      color: "black",
      fontWeight: "bold",
    },
    bodyText: {
      fontSize: 14,
      color: "black",
    },
    bodyTextBold: {
      fontSize: 16,
      fontWeight: "bold",
    },
    bodyTextWhite: {
      fontSize: 16,
      color: "primary",
    },
    bodyTextRegular: {
      fontSize: 16,
      color: "primary",
    },
    bodyTextSmall: {
      fontSize: 14,
      color: "primary",
    },
    bodyTextSmallWhite: {
      fontSize: 14,
      color: "primary",
    },
    caption: {
      fontSize: 12,
      color: "primary",
    },
    hyperLinkOrange: {
      color: "primary",
      fontSize: 16,
    },
    hyperLinkBlue: {
      color: "primary",
      fontSize: 16,
    },
    sectionHeader: {
      fontSize: 18,
      color: "primary",
      marginBottom: "lg",
    },
    navBarHeaderLight: {
      fontSize: 20,
      color: "white",
    },
    primaryButton: {
      fontSize: 16,
      fontFamily: "Inter_600SemiBold",
      fontWeight: "bold",
      color: "white",
      paddingHorizontal: "lg",
      textTransform: "capitalize",
    },
    defaultButton: {
      fontSize: 16,
      color: "limsPlusGrey",
      textTransform: "capitalize",
    },
    smallPrimaryButton: {
      fontSize: 12,
      paddingHorizontal: "sm",
      textTransform: "uppercase",
      color: "white",
    },
    smallDefaultButton: {
      fontSize: 12,
      color: "limsPlusGrey",
      textTransform: "uppercase",
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
      height: 50,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: "lg",
      marginEnd: "sm",
      borderColor: "limsPlusGrey",
      borderRadius: 10,
    },
    primary: {
      backgroundColor: "limsPlusGrey",
    },
    secondary: {
      backgroundColor: "white",
    },
    listPrimary: {
      height: 34,
      paddingHorizontal: "sm",
      backgroundColor: "limsPlusGrey",
    },
    listSecondary: {
      height: 34,
      paddingHorizontal: "sm",
      backgroundColor: "white",
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
