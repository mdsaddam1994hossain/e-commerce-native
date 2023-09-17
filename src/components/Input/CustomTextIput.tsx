import React from "react";
import {
  InputAccessoryViewProps,
  StyleProp,
  TextStyle,
  ViewProps,
} from "react-native";
import { TThimeProps } from "../../../src/theme/type";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";
import { ReStyleTextInput } from "../ReStyleTextInput/ReStyleTextInput";

type TInpuText = {
  placeholder: string;
  onChangeText?: any;
  onFocus: any;
  onBlur: any;
  value?: any;
  error?: any;
  style: StyleProp<any>;
};
const InpuText: React.FC<TInpuText> = ({
  placeholder,
  onChangeText,
  onBlur,
  onFocus,
  value,
  error,
  style,
}) => {
  return (
    <ReStyleBox paddingVertical={"sm"}>
      <ReStyleTextInput
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        style={style}
      />
      {error ? (
        <ReStyleText color="red" marginVertical="none">
          {error}
        </ReStyleText>
      ) : null}
    </ReStyleBox>
  );
};

export default InpuText;
