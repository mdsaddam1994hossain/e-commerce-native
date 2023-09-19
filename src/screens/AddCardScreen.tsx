import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import { ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import MyTextInput from "../../src/components/Input/MyInput";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { palette } from "../../src/theme/palette";
import { space } from "../../src/theme/spacing";
import { KeyboardAvoidingView } from "react-native";

const { white } = palette;
const { l } = space;

const AddCardScreen = ({ navigation }: ApplicationScreenProps) => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiDate, setExpiDate] = useState<string>("");
  const [secCode, setSecCode] = useState<string>("");
  const [cadHolder, setCadHolder] = useState<string>("");

  const onChangeCard = (v: string) => {
    setCardNumber(v);
  };
  const onChangeExpDate = (v: string) => {
    setExpiDate(v);
  };
  const onChangeSecuCode = (v: string) => {
    setSecCode(v);
  };
  const onChangeHolder = (v: string) => {
    setCadHolder(v);
  };

  const addCard = () => {
    navigation.navigate("CardPreview", {
      cardNumber: cardNumber,
      expiDate: expiDate,
      secCode: secCode,
      cadHolder: cadHolder,
    });
    console.log("card add");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomHeader title={"Add Card"} />
      <ScrollView>
        <ReStyleBox paddingHorizontal="sm" paddingTop="sm">
          <MyTextInput
            label="Card Number"
            placeholder="Enter Card Number"
            onChange={onChangeCard}
          />
          <ReStyleBox marginTop={"sm"} flexDirection="row" gap="sm">
            <ReStyleBox flex={1}>
              <MyTextInput
                label="Expiration Date"
                placeholder="Expiration Date"
                onChange={onChangeExpDate}
              />
            </ReStyleBox>
            <ReStyleBox flex={1}>
              <MyTextInput
                label="Security Code"
                placeholder="Security Code"
                onChange={onChangeSecuCode}
              />
            </ReStyleBox>
          </ReStyleBox>
          <MyTextInput
            label="Card Holder"
            placeholder="Enter Card Nmber"
            onChange={onChangeHolder}
          />
        </ReStyleBox>
      </ScrollView>
      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Add Card"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={addCard}
        />
      </ReStyleBox>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    paddingTop: l,
    flex: 1,
  },
  button: {
    height: 57,
    position: "absolute",
    bottom: 12,
    left: 12,
    right: 12,
  },
});

export default AddCardScreen;
