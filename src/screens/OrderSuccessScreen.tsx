import { StyleSheet } from "react-native";
import React from "react";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import Confirmation from "../../src/components/common/Confirmation";
import { ApplicationScreenProps } from "../types/navigation";
const alerIcon = require("../../assets/successIcon.png");

const OrderSuccessScreen = ({ navigation }: ApplicationScreenProps) => {
  const backToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ReStyleBox flex={1} backgroundColor="white">
      <Confirmation
        title={"Success"}
        message="thank you for shopping using lafyuu"
        buttonLable="Back To Order"
        action={backToHome}
        imgSrc={alerIcon}
        cancelVisible={false}
      />
    </ReStyleBox>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({});
