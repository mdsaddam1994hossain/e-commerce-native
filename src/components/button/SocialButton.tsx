import { TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  onPress: () => void;
  style: Object;
  title: string;
};

const SocialButton: FC<Props> = ({ onPress, style, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <ReStyleText variant="heading5" color="grey" textAlign="center">
        {title}
      </ReStyleText>
    </TouchableOpacity>
  );
};

export default SocialButton;
