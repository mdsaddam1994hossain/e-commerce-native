import { ScrollView, StyleSheet } from "react-native";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { palette } from "../../src/theme/palette";
import { space } from "../../src/theme/spacing";
import { KeyboardAvoidingView } from "react-native";
import MyTextInput from "../../src/components/Input/MyInput";
import { ApplicationScreenProps } from "../types/navigation";
import { TAddress } from "../../src/Data/data.t";

const { light, white } = palette;
const { s, l } = space;

const items = [
  "United States",
  "United Kingdom",
  "Afghanistan",
  "Albania",
  "American Samoa",
];

const AddAddressScreen = ({ navigation }: ApplicationScreenProps) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const [formData, setFormData] = useState<TAddress>({
    fName: "",
    lName: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    stateProvince: "",
    zipCode: "",
    phoneNumber: "",
  });

  const handleInputChange = (field: string, text: string) => {
    setFormData((prevData: TAddress) => ({
      ...prevData,
      [field]: text,
    }));
  };

  const addAddress = () => {
    console.log("address ...", formData);
    navigation.navigate("EditAddress", {
      formData: formData,
      country: selectedItem,
    });
  };
  const handleItemChange = (itemValue: string) => {
    setSelectedItem(itemValue);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomHeader title={"Add Address"} />
      <ScrollView>
        <ReStyleBox marginTop="sm" paddingHorizontal="sm">
          <ReStyleBox>
            <ReStyleText variant="heading5" color="dark">
              Country or region
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

            <MyTextInput
              label="First Name"
              onChange={(text) => handleInputChange("fName", text)}
            />
            <MyTextInput
              label="Last Name"
              onChange={(text) => handleInputChange("lName", text)}
            />
            <MyTextInput
              label="Street Address"
              onChange={(text) => handleInputChange("streetAddress", text)}
            />
            <MyTextInput
              label="Street Address 2 (Optional)"
              onChange={(text) => handleInputChange("streetAddress2", text)}
            />
            <MyTextInput
              label="City"
              onChange={(text) => handleInputChange("city", text)}
            />
            <MyTextInput
              label="State/Province/Region"
              onChange={(text) => handleInputChange("stateProvince", text)}
            />
            <MyTextInput
              label="Zip Code"
              onChange={(text) => handleInputChange("zipCode", text)}
            />
            <MyTextInput
              label="Phone Number"
              onChange={(text) => handleInputChange("phoneNumber", text)}
            />
          </ReStyleBox>

          <ReStyleBox paddingVertical={"sm"}>
            <PrimaryButton
              text={"Add Address"}
              buttonVariant={"primary"}
              textVariant={"textHeader"}
              onPress={addAddress}
            />
          </ReStyleBox>
        </ReStyleBox>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: l,
    backgroundColor: white,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: light,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: s,
    fontFamily: "Poppins-Regular",
  },
});

export default AddAddressScreen;
