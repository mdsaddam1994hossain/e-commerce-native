import { TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { createText } from "@shopify/restyle";
import { Theme } from "src/theme";

const Text = createText<Theme>();

type Props = {
  onPress: () => void;
  style: Object;
  title: string;
};

const SocialButton: FC<Props> = ({ onPress, style, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text color="grey" textAlign="center" fontFamily="Poppins-Bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
