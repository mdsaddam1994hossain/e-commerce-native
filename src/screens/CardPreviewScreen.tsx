import { StyleSheet } from "react-native";
import CreditCard from "../../src/components/CreditCard/CreditCard";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import MyTextInput from "../../src/components/Input/MyInput";

const CardPreViewScreen = ({ route, navigation }: ApplicationScreenProps) => {
  const { cardNumber, expiDate, secCode, cadHolder } = route.params;
  console.log(cardNumber);
  const seveCard = () => {
    navigation.navigate("Payment");
  };
  return (
    <ReStyleBox
      flex={1}
      backgroundColor="white"
      paddingTop="xl"
      paddingHorizontal="sm"
    >
      <ReStyleBox>
        <CreditCard bgColor="blue" />
      </ReStyleBox>

      <ReStyleText marginTop={"lg"} variant="heading5" color="dark">
        Card Number
      </ReStyleText>
      <MyTextInput
        editable={false}
        placeholder="Enter Card Number"
        value={cardNumber}
      />

      <ReStyleBox marginTop={"sm"} flexDirection="row" gap="sm">
        <ReStyleBox flex={1}>
          <ReStyleText variant="heading5" color="dark">
            Expiration Date
          </ReStyleText>
          <MyTextInput
            editable={false}
            placeholder="Expiration Date"
            value={expiDate}
          />
        </ReStyleBox>
        <ReStyleBox flex={1}>
          <ReStyleText variant="heading5" color="dark">
            Security Code
          </ReStyleText>
          <MyTextInput
            editable={false}
            placeholder="Security Code"
            value={secCode}
          />
        </ReStyleBox>
      </ReStyleBox>
      <ReStyleText marginTop={"sm"} variant="heading5" color="dark">
        Card Holder
      </ReStyleText>
      <MyTextInput
        editable={false}
        placeholder="Enter Card Nmber"
        value={cadHolder}
      />

      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Save"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={seveCard}
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

export default CardPreViewScreen;
