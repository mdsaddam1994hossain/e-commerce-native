import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import CreditCard from "../../src/components/CreditCard/CreditCard";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import MyTextInput from "../../src/components/Input/MyInput";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { palette } from "../../src/theme/palette";
import { space } from "../../src/theme/spacing";

const { white } = palette;
const { l } = space;

const CardPreViewScreen = ({ route, navigation }: ApplicationScreenProps) => {
  const { cardNumber, expiDate, secCode, cadHolder } = route.params;
  console.log(cardNumber);
  const seveCard = () => {
    navigation.navigate("Payment");
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomHeader title={"Lailyfa Febrina Card"} />

      <ScrollView>
        <ReStyleBox paddingHorizontal="sm" paddingTop="sm">
          <CreditCard bgColor="blue" />
          <ReStyleText marginTop={"lg"} variant="heading5" color="dark">
            Card Number
          </ReStyleText>
          <MyTextInput placeholder="Enter Card Number" value={cardNumber} />

          <ReStyleBox marginTop={"sm"} flexDirection="row" gap="sm">
            <ReStyleBox flex={1}>
              <ReStyleText variant="heading5" color="dark">
                Expiration Date
              </ReStyleText>
              <MyTextInput placeholder="Expiration Date" value={expiDate} />
            </ReStyleBox>
            <ReStyleBox flex={1}>
              <ReStyleText variant="heading5" color="dark">
                Security Code
              </ReStyleText>
              <MyTextInput placeholder="Security Code" value={secCode} />
            </ReStyleBox>
          </ReStyleBox>
          <ReStyleText marginTop={"sm"} variant="heading5" color="dark">
            Card Holder
          </ReStyleText>
          <MyTextInput placeholder="Enter Card Nmber" value={cadHolder} />
          <ReStyleBox style={styles.button}>
            <PrimaryButton
              text={"Save"}
              buttonVariant={"primary"}
              textVariant={"textHeader"}
              onPress={seveCard}
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
  button: {
    height: 57,
    position: "relative",

    marginTop: 60,
  },
});

export default CardPreViewScreen;
