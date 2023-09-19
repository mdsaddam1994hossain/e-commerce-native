import { StyleSheet } from "react-native";
import { AddressData } from "../../src/Data/Data";
import AddressCard from "../../src/components/Account/AddressCard";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";

const AddressScreen = ({ navigation }: ApplicationScreenProps) => {
  const editAddress = () => {
    console.log("edit address");
    navigation.navigate("EditAddress", { formData: null, country: "" });
  };
  const deleteAddress = () => {
    console.log("edit address");
    navigation.navigate("DeleteAddress");
  };
  const addAddress = () => {
    navigation.navigate("AddAddress");
    console.log("addAddress");
  };

  return (
    <ReStyleBox flex={1} paddingTop="l" backgroundColor="white">
      <CustomHeader title={"Address"} />
      {AddressData.map((item, index) => {
        return (
          <ReStyleBox key={index}>
            <AddressCard
              editAddress={editAddress}
              deleteAddress={deleteAddress}
              title={item.title}
              phone={item.phone}
              fullAddress={item.fullAddress}
            />
          </ReStyleBox>
        );
      })}

      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Add Address"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={addAddress}
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 57,
    position: "absolute",
    bottom: 30,
    left: 12,
    right: 12,
  },
});

export default AddressScreen;
