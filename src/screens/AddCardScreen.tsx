import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import { StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import MyTextInput from "../../src/components/Input/MyInput";

const AddCardScreen = ({ navigation }: ApplicationScreenProps) => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiDate, setExpiDate] = useState<string>("");
  const [secCode, setSecCode] = useState<string>("");
  const [cadHolder, setCadHolder] = useState<string>("");
  const [isCardFocus, setIsCardFocus] = useState(false);
  const [cardHolder, setCardHolder] = useState(false);
  const [expirDate, setExpirDate] = useState(false);
  const [securityCode, setCecurityCode] = useState(false);

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

  const handleFocusCardNumber = () => {
    setIsCardFocus(true);
  };

  const handleBlurCardNumber = () => {
    setIsCardFocus(false);
  };
  const handleFocusCardHolder = () => {
    setCardHolder(true);
  };

  const handleBlurCardHolder = () => {
    setCardHolder(false);
  };
  const handleFocusExpirDate = () => {
    setExpirDate(true);
  };

  const handleBlurExpirDate = () => {
    setExpirDate(false);
  };
  const handleFocusSecurityCode = () => {
    setCecurityCode(true);
  };

  const handleBlurSecurityCode = () => {
    setCecurityCode(false);
  };
  return (
    <ReStyleBox
      flex={1}
      backgroundColor="white"
      paddingTop="xl"
      paddingHorizontal="sm"
    >
      <MyTextInput
        label="Card Number"
        placeholder="Enter Card Number"
        onFocus={handleFocusCardNumber}
        onBlur={handleBlurCardNumber}
        onChange={onChangeCard}
        focus={isCardFocus}
      />
      <ReStyleBox marginTop={"sm"} flexDirection="row" gap="sm">
        <ReStyleBox flex={1}>
          <MyTextInput
            label="Expiration Date"
            placeholder="Expiration Date"
            onFocus={handleFocusExpirDate}
            onBlur={handleBlurExpirDate}
            onChange={onChangeExpDate}
            focus={expirDate}
          />
        </ReStyleBox>
        <ReStyleBox flex={1}>
          <MyTextInput
            label="Security Code"
            placeholder="Security Code"
            onFocus={handleFocusSecurityCode}
            onBlur={handleBlurSecurityCode}
            onChange={onChangeSecuCode}
            focus={securityCode}
          />
        </ReStyleBox>
      </ReStyleBox>

      <MyTextInput
        label="Card Holder"
        placeholder="Enter Card Nmber"
        onFocus={handleFocusCardHolder}
        onBlur={handleBlurCardHolder}
        onChange={onChangeHolder}
        focus={cardHolder}
      />

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

export default AddCardScreen;
