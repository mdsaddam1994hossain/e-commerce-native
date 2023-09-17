import React, { FC } from "react";
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
  placeholder: string;
  style?: StyleProp<ViewStyle>; // Style for the container View
  inputStyle?: StyleProp<TextStyle>; // Style for the TextInput
  onBlur?: () => void;
  onChange?: (text: string) => void;
  onFocus?: () => void;
  errorMessage?: string | null;
  value?: string;
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
}) => {
  return (
    <ReStyleBox style={[styles.container, style]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChange}
        onFocus={onFocus}
        value={value}
      />
      {errorMessage && (
        <ReStyleText style={styles.error}>{errorMessage}</ReStyleText>
      )}
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "gray",
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
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default MyTextInput;
