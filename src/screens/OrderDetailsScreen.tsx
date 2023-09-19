import { ScrollView, StyleSheet } from "react-native";
import Cart from "../../src/components/ProductCard/Cart";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import OrderCard from "../../src/components/ProductCard/OrderCard";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";
import PaymentDetails from "../../src/components/common/PaymentDetails";
import PrimaryButton from "../../src/components/button/PrimaryButton";

const OrderDetailsScreen = ({ navigation }: ApplicationScreenProps) => {
  const handleNotify = () => {
    console.log("notify meee");
  };
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title={"Order Details"} />
      <ScrollView>
        <ReStyleBox paddingHorizontal="sm">
          {[1, 2].map((item, index) => {
            return (
              <ReStyleBox key={index}>
                <Cart product={"fg"} isCalculate={false} />
              </ReStyleBox>
            );
          })}

          <ReStyleText marginTop="sm" variant="heading5" color="dark">
            Shipping Details
          </ReStyleText>
          <ReStyleBox
            borderWidth={1}
            borderColor="light"
            borderRadius={5}
            padding="sm"
            flexDirection={"row"}
            justifyContent="space-between"
            gap="sm"
            marginTop={"s"}
          >
            <ReStyleBox flex={1}>
              <ReStyleText variant="bodyTextSmall" color="grey">
                Date Shipping
              </ReStyleText>
              <ReStyleText
                marginVertical="s"
                variant="bodyTextSmall"
                color="grey"
              >
                Shipping
              </ReStyleText>
              <ReStyleText variant="bodyTextSmall" color="grey">
                No. Resi
              </ReStyleText>
              <ReStyleText
                marginVertical="s"
                variant="bodyTextSmall"
                color="grey"
              >
                Address
              </ReStyleText>
            </ReStyleBox>
            <ReStyleBox flex={1}>
              <ReStyleText
                variant="bodyTextSmall"
                color="dark"
                textAlign="right"
              >
                January 16,2023
              </ReStyleText>
              <ReStyleText
                variant="bodyTextSmall"
                color="dark"
                textAlign="right"
                marginVertical="s"
              >
                POS Reggular
              </ReStyleText>
              <ReStyleText
                variant="bodyTextSmall"
                color="dark"
                textAlign="right"
              >
                010093856745
              </ReStyleText>
              <ReStyleText
                variant="bodyTextSmall"
                color="dark"
                textAlign="right"
                marginVertical="s"
              >
                2727 Lakeshore Rd undefined Nampa, Tennessee 78547
              </ReStyleText>
            </ReStyleBox>
          </ReStyleBox>
          <ReStyleText
            marginTop="sm"
            marginBottom="s"
            variant="heading5"
            color="dark"
          >
            Payment Details
          </ReStyleText>
          <PaymentDetails item={null} />
          <ReStyleBox marginTop="sm" paddingBottom="sm">
            <PrimaryButton
              text={"Notify Me"}
              buttonVariant={"primary"}
              textVariant={"textHeader"}
              onPress={handleNotify}
            />
          </ReStyleBox>
        </ReStyleBox>
      </ScrollView>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({});
export default OrderDetailsScreen;
