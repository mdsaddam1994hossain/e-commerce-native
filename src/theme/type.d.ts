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
  //   textInputVariants: {
  //     customTextInput: TextStyle;
  //     defaults: TextStyle;
  //     padding: string;
  //     paddingVertical: TextStyle;
  //     paddingHorizontal: TextStyle;
  //     borderRadius: TextStyle;
  //     marginBottom: TextStyle;
  //   };
  textVariants: {
    title?: TextStyle;
    defaults: TextStyle;
    heading: TextStyle;
    subHeading: TextStyle;
    textHeader: TextStyle;
    textHeaderBold: TextStyle;
    header?: TextStyle;
    body?: TextStyle;
    bodyText: TextStyle;
    bodyTextBold: TextStyle;
    bodyTextWhite: TextStyle;
    bodyTextRegular: TextStyle;
    bodyTextSmall: TextStyle;
    bodyTextSmallWhite: TextStyle;
    caption: TextStyle;
    hyperLinkOrange: TextStyle;
    hyperLinkBlue: TextStyle;
    sectionHeader: ISectionHeader;
    navBarHeaderLight: TextStyle;
    primaryButton: IButton;
    defaultButton: IButton;
    smallPrimaryButton: IButton;
    smallDefaultButton: IButton;
  };
  boxVariants: IBoxVariants;
  buttonVariants: IButtonVariants;
  cardVariants: ICardsVariant;
  avatarVariants: IAvatarVariants;
  dividerVariants: IDividerVariants;
  iconVariants: IIconVariants;
};
