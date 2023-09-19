import React, { FC, useState } from "react";
import {
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { palette } from "../../../src/theme/palette";
import { space } from "../../../src/theme/spacing";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

interface TextInputProps {
  placeholder?: string;
  style?: StyleProp<ViewStyle>; // Style for the container View
  inputStyle?: StyleProp<TextStyle>; // Style for the TextInput
  onBlur?: () => void;
  onChange?: (text: string) => void;
  onFocus?: () => void;
  errorMessage?: string | null;
  value?: string;
  focus?: boolean;
  editable?: boolean;
  label?: string;
  password?: boolean;
}

const { light, blue } = palette;
const { s } = space;

const MyTextInput: FC<TextInputProps> = ({
  placeholder,
  style,
  inputStyle,
  onBlur,
  onChange,
  onFocus,
  errorMessage,
  value,
  focus,
  editable,
  label,
  password = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };
  return (
    <ReStyleBox style={[styles.container, style]}>
      {label && (
        <ReStyleText variant="heading5" color="dark">
          {label}
        </ReStyleText>
      )}
      <TextInput
        style={[
          styles.input,
          isFocused ? styles.focusedInput : null,
          inputStyle,
        ]}
        secureTextEntry={password ? true : false}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChangeText={onChange}
        onFocus={handleFocus}
        value={value}
        editable={editable}
      />
      {errorMessage && (
        <ReStyleText style={styles.error}>{errorMessage}</ReStyleText>
      )}
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    fontSize: 12,
    height: 48,
    borderWidth: 1,
    borderColor: light,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: s,
    fontFamily: "Poppins-Regular",
  },
  focusedInput: {
    borderColor: blue, // Border color when focused
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default MyTextInput;
