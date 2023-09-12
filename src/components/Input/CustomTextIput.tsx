import React from "react";
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
};
const InpuText: React.FC<TInpuText> = ({
  placeholder,
  onChangeText,
  onBlur,
  onFocus,
  value,
  error,
}) => {
  return (
    <ReStyleBox height={85} paddingVertical={"sm"}>
      <ReStyleTextInput
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {error ? <ReStyleText marginVertical="sm">{error}</ReStyleText> : null}
    </ReStyleBox>
  );
};

export default InpuText;
