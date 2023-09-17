import { StyleSheet } from "react-native";
import OrderCard from "../../src/components/ProductCard/OrderCard";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";

const OrderScreen = ({ navigation }: ApplicationScreenProps) => {
  return (
    <ReStyleBox
      flex={1}
      backgroundColor="white"
      paddingTop="xl"
      paddingHorizontal="sm"
    >
      {[1, 2].map((item, index) => {
        return (
          <ReStyleBox key={index} marginVertical="s">
            <OrderCard
              orderId="LQNSU346JK"
              date="August 1, 2023"
              orderStatus="Shipping"
              numItems={2}
              price={29943}
            />
          </ReStyleBox>
        );
      })}
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({});
export default OrderScreen;
