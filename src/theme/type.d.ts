import { TextStyle } from "react-native";
import { palette } from "./palette";
import {
  IAvatarVariants,
  IBoxVariants,
  IBreakPoints,
  IButton,
  IButtonVariants,
  ICardsVariant,
  TtextVariants,
} from "./restyleThemeType";
import { space } from "./spacing";

export type TThimeProps = {
  colors: typeof palette;
  spacing: typeof space;
  breakpoints: {
    phone: number;
    tablet: number;
    largeTablet?: number;
  };
  textInputVariants: {
    customTextInput?: TextStyle;
    defaults?: TextStyle | any;
    padding?: TextStyle | any;
    paddingVertical?: TextStyle;
    paddingHorizontal?: TextStyle;
    borderRadius?: TextStyle;
    marginBottom?: TextStyle;
  };
  textVariants: {
    title?: TextStyle;
    defaults?: TextStyle;
    heading?: TextStyle;
    headingBlue?: TextStyle;
    heading3Grey?: TextStyle;
    heading4?: TextStyle;
    heading6?: TextStyle;
    heading6Primary?: TextStyle;
    buttonText?: TextStyle;
    subHeading?: TextStyle;
    textHeader?: TextStyle;
    textHeaderBold?: TextStyle;
    header?: TextStyle;
    bodyText?: TextStyle;
    bodyTextBold?: TextStyle;
    bodyTextSoSmall?: TextStyle;
    bodyTextSmall?: TextStyle;
    bodyTextNormal?: TextStyle;
  };
  boxVariants: IBoxVariants;
  buttonVariants: IButtonVariants;
  cardVariants: ICardsVariant;
  avatarVariants: IAvatarVariants;
  dividerVariants: IDividerVariants;
  iconVariants: IIconVariants;
};
