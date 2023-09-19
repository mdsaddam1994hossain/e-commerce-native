import { useState } from "react";
import { StyleSheet } from "react-native";
import { space } from "../../src/theme/spacing";
import { palette } from "../../src/theme/palette";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import MyTextInput from "../../src/components/Input/MyInput";

const { light, blue } = palette;
const { s } = space;

const NameEditScreen = ({ navigation }: ApplicationScreenProps) => {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");

  const saveChange = () => {
    console.log("nave change success fname=", fName, "and last name", lName);
    navigation.navigate("Profile");
  };

  const handleInputChangeFname = (text: string) => {
    setFName(text);
  };
  const handleInputChangeLname = (text: string) => {
    setLName(text);
  };

  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title={"Name"} />

      <ReStyleBox paddingHorizontal="sm" marginTop="sm">
        <MyTextInput
          label="First Name"
          placeholder={"Maximus"}
          onChange={(text) => handleInputChangeFname(text)}
        />

        <MyTextInput
          label="Last Name"
          placeholder={"Gold"}
          onChange={(text) => handleInputChangeLname(text)}
        />
      </ReStyleBox>

      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Save"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={saveChange}
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
