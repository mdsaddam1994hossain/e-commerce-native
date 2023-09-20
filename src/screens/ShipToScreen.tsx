import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { AddressData } from "../../src/Data/Data";
import AddressCard from "../../src/components/Account/AddressCard";
import { ApplicationScreenProps } from "../types/navigation";
import PrimaryButton from "../../src/components/button/PrimaryButton";

const plusicon = require("../../assets/plusActive.png");

const ShipToScreen = ({ navigation }: ApplicationScreenProps) => {
  const [focus, setFocus] = useState(false);
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
  };

  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };
  const handlePress = () => {
    navigation.navigate("Payment", { prevRouter: "checkout" });
  };
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader
        title={"Ship To"}
        pluseIcon={plusicon}
        handePress={addAddress}
      />
      <ScrollView>
        {AddressData.map((item, index) => {
          return (
            <AddressCard
              editAddress={editAddress}
              deleteAddress={deleteAddress}
              title={item.title}
              phone={item.phone}
              fullAddress={item.fullAddress}
              focus={focus}
            />
          );
        })}
      </ScrollView>
      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Next"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={handlePress}
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default ShipToScreen;

const styles = StyleSheet.create({
  button: {
    height: 57,
    position: "absolute",
    bottom: 30,
    left: 12,
    right: 12,
  },
});
