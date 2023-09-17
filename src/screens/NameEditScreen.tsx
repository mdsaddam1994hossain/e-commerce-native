import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { space } from "../../src/theme/spacing";
import { palette } from "../../src/theme/palette";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";
import PrimaryButton from "../../src/components/button/PrimaryButton";

const { light, blue } = palette;
const { s } = space;

const NameEditScreen = ({ navigation }: ApplicationScreenProps) => {
  const [isFNameFocused, setIsFNameFocused] = useState(false);
  const [isSNameFocused, setIsSNameFocused] = useState(false);

  const nameChange = () => {
    console.log("nave change success");
    navigation.navigate("Profile");
  };
  const handleFocusFirst = () => {
    setIsFNameFocused(true);
  };

  const handleBlurFirst = () => {
    setIsFNameFocused(false);
  };
  const handleFocusSecond = () => {
    setIsSNameFocused(true);
  };

  const handleBlurSecond = () => {
    setIsSNameFocused(false);
  };

  return (
    <ReStyleBox
      flex={1}
      backgroundColor="white"
      paddingTop="xl"
      paddingHorizontal="sm"
    >
      <ReStyleText variant={"heading5"} color="dark">
        First Name
      </ReStyleText>
      <TextInput
        placeholder={"Maximus"}
        onFocus={handleFocusFirst}
        onBlur={handleBlurFirst}
        style={[styles.input, isFNameFocused ? styles.focusedInput : null]}
      />

      <ReStyleText variant={"heading5"} color="dark">
        Last Name
      </ReStyleText>
      <TextInput
        placeholder={"Gold"}
        onFocus={handleFocusSecond}
        onBlur={handleBlurSecond}
        style={[styles.input, isSNameFocused ? styles.focusedInput : null]}
      />
      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Save"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={nameChange}
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  input: {
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
  button: {
    height: 57,
    position: "absolute",
    bottom: 30,
    left: 12,
    right: 12,
  },
});

export default NameEditScreen;
