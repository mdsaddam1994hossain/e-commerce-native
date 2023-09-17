import { FC } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  orderId: string;
  date: string;
  orderStatus: string;
  numItems: number;
  price: number;
};

const OrderCard: FC<Props> = ({
  orderId,
  date,
  orderStatus,
  numItems,
  price,
}) => {
  return (
    <ReStyleBox
      padding="sm"
      borderRadius={5}
      borderWidth={1}
      borderColor="light"
    >
      <ReStyleText variant="heading5" color="dark">
        {orderId}
      </ReStyleText>
      <ReStyleText paddingTop={"s"} variant={"bodyTextSmall"} color="grey">
        Order at Lafyuu : {date}
      </ReStyleText>
      <Image
        source={require("../../../assets/line.png")}
        style={styles.dottedLine}
      />
      <ReStyleBox flexDirection="row" justifyContent="space-between">
        <ReStyleBox>
          <ReStyleText variant={"bodyTextSmall"} color="grey">
            Order Status
          </ReStyleText>
          <ReStyleText
            paddingVertical={"sm"}
            variant={"bodyTextSmall"}
            color="grey"
          >
            Items
          </ReStyleText>
          <ReStyleText variant={"bodyTextSmall"} color="grey">
            Price{" "}
          </ReStyleText>
        </ReStyleBox>
        <ReStyleBox>
          <ReStyleText variant={"bodyTextSmall"} color="dark" textAlign="right">
            {orderStatus}
          </ReStyleText>
          <ReStyleText
            textAlign="right"
            variant={"bodyTextSmall"}
            color="dark"
            paddingVertical={"sm"}
          >
            {numItems} Items purchased
          </ReStyleText>
          <ReStyleText variant={"heading6Primary"} textAlign="right">
            ${price}{" "}
          </ReStyleText>
        </ReStyleBox>
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

export default OrderCard;
