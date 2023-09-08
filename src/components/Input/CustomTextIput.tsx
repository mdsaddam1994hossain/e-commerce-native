import React, { FC } from "react";
import { TextInput, TextInputProps } from "react-native";

interface CustomTextInputProps extends TextInputProps {}

const CustomTextInput: FC<CustomTextInputProps> = ({ ...rest }) => {
  return <TextInput {...rest} />;
};

export default CustomTextInput;
