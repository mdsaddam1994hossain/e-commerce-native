import { ResponsiveValue } from "@shopify/restyle";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
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

const PrimaryButton: React.FC<TPrimaryButtonProps> = ({
  text,
  buttonVariant,
  textVariant,
  onPress,
  isChecked = true,
}) => {
  return (
    <ReStyleButton variant={buttonVariant}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={!isChecked}
      >
        <ReStyleText variant={"buttonText"}>{text}</ReStyleText>
      </TouchableOpacity>
    </ReStyleButton>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
