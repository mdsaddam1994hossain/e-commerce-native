import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import { StyleSheet } from "react-native";

import CreditCard from "../../src/components/CreditCard/CreditCard";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";

const CreditCardSecreen = ({ navigation }: ApplicationScreenProps) => {
  const addCard = () => {
    navigation.navigate("AddCard");
    console.log("card add");
  };
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title={"Credit Card And Debit"} />

      <ReStyleBox paddingTop={"sm"} paddingHorizontal="sm">
        <CreditCard bgColor="blue" />

        <ReStyleBox paddingTop={"sm"}>
          <CreditCard bgColor="purpel" />
        </ReStyleBox>
      </ReStyleBox>
      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Add Card"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={addCard}
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

export default CreditCardSecreen;
