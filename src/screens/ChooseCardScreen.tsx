import { StyleSheet } from "react-native";
import React from "react";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { ApplicationScreenProps } from "../types/navigation";
import CreditCard from "../../src/components/CreditCard/CreditCard";
import PrimaryButton from "../../src/components/button/PrimaryButton";

const plusicon = require("../../assets/plusActive.png");

const ChooseCardScreen = ({ navigation }: ApplicationScreenProps) => {
  const addCard = () => {
    navigation.navigate("AddCard");
  };
  const handlePress = () => {
    navigation.navigate("OrderSuccess");
  };
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader
        title={"Choose Card"}
        pluseIcon={plusicon}
        handePress={addCard}
      />

      <ReStyleBox paddingTop={"sm"} paddingHorizontal="sm">
        <CreditCard bgColor="blue" />
      </ReStyleBox>
      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Pay $768.80"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={handlePress}
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default ChooseCardScreen;

const styles = StyleSheet.create({
  button: {
    height: 57,
    position: "absolute",
    bottom: 30,
    left: 12,
    right: 12,
  },
});
