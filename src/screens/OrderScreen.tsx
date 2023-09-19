import { Pressable, ScrollView, StyleSheet } from "react-native";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import OrderCard from "../../src/components/ProductCard/OrderCard";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";

const OrderScreen = ({ navigation }: ApplicationScreenProps) => {
  const orderDetails = () => {
    navigation.navigate("OrderDetails");
  };
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title={"Order"} />
      <ScrollView>
        <ReStyleBox paddingHorizontal="sm">
          {[1, 2].map((item, index) => {
            return (
              <Pressable key={index} onPress={orderDetails}>
                <ReStyleBox marginVertical="s">
                  <OrderCard
                    orderId="LQNSU346JK"
                    date="August 1, 2023"
                    orderStatus="Shipping"
                    numItems={2}
                    price={29943}
                  />
                </ReStyleBox>
              </Pressable>
            );
          })}
        </ReStyleBox>
      </ScrollView>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({});
export default OrderScreen;
