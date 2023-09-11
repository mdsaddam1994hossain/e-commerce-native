import {
  BackgroundColorProps,
  SpacingProps,
  VariantProps,
  backgroundColor,
  createRestyleComponent,
  createText,
  createVariant,
  spacing,
} from "@shopify/restyle";
import {
  TextInputProps as NativeProps,
  TextInput,
  ViewStyle,
} from "react-native";
import { ReStyleTheme } from "../../src/theme/theme";

export const RestyleText = createText<ReStyleTheme>();
type TextInputProps = SpacingProps<ReStyleTheme> &
  VariantProps<ReStyleTheme, "textInputVariants"> &
  BackgroundColorProps<ReStyleTheme> &
  NativeProps &
  ViewStyle;
export const ReStyleTextInput = createRestyleComponent<
  TextInputProps,
  ReStyleTheme
>(
  [spacing, backgroundColor, createVariant({ themeKey: "textInputVariants" })],
  TextInput
);
