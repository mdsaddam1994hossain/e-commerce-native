import { ScrollView, StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { palette } from "../../src/theme/palette";
import { space } from "../../src/theme/spacing";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ApplicationScreenProps } from "../types/navigation";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import MyTextInput from "../../src/components/Input/MyInput";
import { TAddress } from "../../src/Data/data.t";
import PrimaryButton from "../../src/components/button/PrimaryButton";

const { light, white } = palette;
const { s, l } = space;

const items = [
  "United States",
  "United Kingdom",
  "Afghanistan",
  "Albania",
  "American Samoa",
];

const EditAddressScreen = ({ route, navigation }: ApplicationScreenProps) => {
  const { formData, country } = route?.params;
  const [selectedItem, setSelectedItem] = useState<string>(
    country ? country : ""
  );
  const [addressData, setAddressData] = useState<TAddress>(
    formData
      ? formData
      : {
          fName: "",
          lName: "",
          streetAddress: "",
          streetAddress2: "",
          city: "",
          stateProvince: "",
          zipCode: "",
          phoneNumber: "",
        }
  );

  const handleInputChange = (field: string, text: string) => {
    setAddressData((prevData: TAddress) => ({
      ...prevData,
      [field]: text,
    }));
  };

  const saveAddress = () => {
    console.log(addressData, "save address");
    navigation.navigate("Address");
  };

  console.log(formData, "form data....");

  const handleItemChange = (itemValue: string) => {
    setSelectedItem(itemValue);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomHeader title={"Edit Address"} />
      <ScrollView>
        <ReStyleBox paddingHorizontal="sm" paddingTop="sm">
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
            value={addressData.fName}
          />
          <MyTextInput
            label="Last Name"
            onChange={(text) => handleInputChange("lName", text)}
            value={addressData.lName}
          />
          <MyTextInput
            label="Street Address"
            onChange={(text) => handleInputChange("streetAddress", text)}
            value={addressData.streetAddress}
          />
          <MyTextInput
            label="Street Address 2 (Optional)"
            onChange={(text) => handleInputChange("streetAddress2", text)}
            value={addressData.streetAddress2}
          />
          <MyTextInput
            label="City"
            onChange={(text) => handleInputChange("city", text)}
            value={addressData.city}
          />
          <MyTextInput
            label="State/Province/Region"
            onChange={(text) => handleInputChange("stateProvince", text)}
            value={addressData.stateProvince}
          />
          <MyTextInput
            label="Zip Code"
            onChange={(text) => handleInputChange("zipCode", text)}
            value={addressData.zipCode}
          />
          <MyTextInput
            label="Phone Number"
            onChange={(text) => handleInputChange("phoneNumber", text)}
            value={addressData.phoneNumber}
          />

          <ReStyleBox paddingBottom={"l"}>
            <PrimaryButton
              text={"Save"}
              buttonVariant={"primary"}
              textVariant={"textHeader"}
              onPress={saveAddress}
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

export default EditAddressScreen;
