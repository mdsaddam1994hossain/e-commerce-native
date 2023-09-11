import { createText, ResponsiveValue } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ReStyleTheme, TTextVariants } from "../../theme/theme";
import { ReStyleButton } from "../ReStyleButton/ReStyleButton";
import { ReStyleText } from "../ReStyleText/ReStyleText";

// const Text = createText<ReStyleTheme>();

type TPrimaryButtonProps = {
  text: string;
  onPress(): void;
  isChecked?: boolean;
  buttonVariant?:
    | ResponsiveValue<
        "primary" | "secondary" | "listPrimary" | "listSecondary",
        {
          phone: number;
          tablet: number;
          largeTablet?: number | undefined;
        }
      >
    | undefined;
  textVariant?: TTextVariants | keyof ReStyleTheme["textVariants"];
};

const PrimaryButton: React.FC<TPrimaryButtonProps> = ({
  text,
  buttonVariant,
  textVariant,
  onPress,
  isChecked = true,
}) => {
  return (
    <ReStyleButton variant={buttonVariant}>
      <TouchableOpacity onPress={onPress} disabled={!isChecked}>
        <ReStyleText variant={"buttonText"}>{text}</ReStyleText>
      </TouchableOpacity>
    </ReStyleButton>
  );
};

export default PrimaryButton;
