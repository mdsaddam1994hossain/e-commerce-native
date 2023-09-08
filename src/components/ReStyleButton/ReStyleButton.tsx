import {
  BackgroundColorProps,
  SpacingProps,
  VariantProps,
  backgroundColor,
  createRestyleComponent,
  createVariant,
  spacing,
} from "@shopify/restyle";
import { ViewStyle } from "react-native";
import { NativeProps } from "react-native-safe-area-context/lib/typescript/src/specs/NativeSafeAreaView";
import { ReStyleTheme } from "../../../src/theme/theme";

type ButtonPops = SpacingProps<ReStyleTheme> &
  VariantProps<ReStyleTheme, "buttonVariants"> &
  BackgroundColorProps<ReStyleTheme> &
  NativeProps &
  ViewStyle;
export const ReStyleButton = createRestyleComponent<ButtonPops, ReStyleTheme>([
  spacing,
  backgroundColor,
  createVariant({ themeKey: "buttonVariants" }),
]);
