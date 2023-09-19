import { FC } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  item: any;
};
const PaymentDetails: FC<Props> = ({ item }) => {
  return (
    <ReStyleBox
      borderRadius={5}
      borderWidth={1}
      borderColor="light"
      padding="m"
    >
      <ReStyleBox
        flexDirection="row"
        paddingTop={"s"}
        justifyContent="space-between"
      >
        <ReStyleBox>
          <ReStyleText variant="bodyTextSmall" color="grey">
            Items (3)
          </ReStyleText>
          <ReStyleText
            variant="bodyTextSmall"
            color="grey"
            marginVertical={"s"}
          >
            Shipping
          </ReStyleText>
          <ReStyleText variant="bodyTextSmall" color="grey">
            Import Charges
          </ReStyleText>
        </ReStyleBox>
        <ReStyleBox>
          <ReStyleText variant="bodyTextSmall" color="dark" textAlign={"right"}>
            $598.86
          </ReStyleText>
          <ReStyleText
            variant="bodyTextSmall"
            color="dark"
            textAlign={"right"}
            marginVertical={"s"}
          >
            $40.00
          </ReStyleText>
          <ReStyleText variant="bodyTextSmall" color="dark" textAlign={"right"}>
            $128.00
          </ReStyleText>
        </ReStyleBox>
      </ReStyleBox>
      <ReStyleBox></ReStyleBox>
      <Image
        source={require("../../../assets/line.png")}
        style={styles.dottedLine}
      />
      <ReStyleBox flexDirection="row" justifyContent="space-between">
        <ReStyleText variant="heading6" color="dark">
          Total Price
        </ReStyleText>
        <ReStyleText variant="heading6" color="blue">
          $766.86
        </ReStyleText>
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  dottedLine: {
    marginVertical: 12,
    width: "100%",
    height: 1,
  },
});

export default PaymentDetails;
