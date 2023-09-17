import { space } from "../../src/theme/spacing";
import { palette } from "../../src/theme/palette";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";
import { Picker } from "@react-native-picker/picker";

import { ApplicationScreenProps } from "../types/navigation";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import { StyleSheet } from "react-native";
import { useState } from "react";

const { light, blue } = palette;
const { s } = space;

const items = ["Male", "Female", "Other"];

const GenderEditScreen = ({ navigation }: ApplicationScreenProps) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const genderChange = () => {
    console.log("nave change success");
    navigation.navigate("Profile");
  };

  const handleItemChange = (itemValue: string) => {
    setSelectedItem(itemValue);
  };
  return (
    <ReStyleBox
      flex={1}
      backgroundColor="white"
      paddingTop="xl"
      paddingHorizontal="sm"
    >
      <ReStyleText variant={"heading5"} color="dark">
        Choose Gender
      </ReStyleText>
      <Picker
        mode="dropdown"
        selectedValue={selectedItem}
        onValueChange={handleItemChange}
        style={styles.input}
      >
        {items.map((item, index) => (
          <Picker.Item
            key={index}
            label={item}
            value={item}
            fontFamily="Poppins-Bold"
          />
        ))}
      </Picker>

      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Save"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={genderChange}
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

export default GenderEditScreen;
