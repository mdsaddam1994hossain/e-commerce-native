import { ResponsiveValue } from "@shopify/restyle";
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
        "primary" | "secondary" | "outline",
        {
          phone: number;
          tablet: number;
          largeTablet?: number | undefined;
        }
      >
    | undefined;
  textVariant?: TTextVariants | keyof ReStyleTheme["textVariants"];
};

const OutlineButton: React.FC<TPrimaryButtonProps> = ({
  text,
  buttonVariant,
  textVariant,
  onPress,
  isChecked = true,
}) => {
  return (
    <ReStyleButton variant={buttonVariant}>
      <TouchableOpacity onPress={onPress} disabled={!isChecked}>
        <ReStyleText variant={"buttonText"} color="grey">
          {text}
        </ReStyleText>
      </TouchableOpacity>
    </ReStyleButton>
  );
};

export default OutlineButton;
