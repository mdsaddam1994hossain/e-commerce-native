import { ResponsiveValue } from "@shopify/restyle";
import { FC } from "react";
import { StyleSheet } from "react-native";

import { palette } from "../../theme/palette";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

const { gray } = palette;

type Props = {
  bgColor?: any;
};
const CreditCard: FC<Props> = ({ bgColor }) => {
  return (
    <ReStyleBox
      alignItems={"center"}
      backgroundColor={bgColor}
      borderRadius={5}
      height={190}
      justifyContent="center"
    >
      <ReStyleBox style={styles.boxStyle}></ReStyleBox>
      <ReStyleBox style={styles.boxStyle2}></ReStyleBox>
      <ReStyleBox>
        <ReStyleText
          letterSpacing={1.5}
          variant="heading2"
          color="white"
          textAlign="center"
        >
          6326 9124 8124 9875
        </ReStyleText>
        <ReStyleBox style={styles.details}>
          <ReStyleBox flexDirection="row" gap="l">
            <ReStyleText variant="bodyTextWhite">CARD HOLDER</ReStyleText>
            <ReStyleText variant="bodyTextWhite">CARD SAVE</ReStyleText>
          </ReStyleBox>
          <ReStyleBox marginTop={"xs"} flexDirection="row" gap="m">
            <ReStyleText variant="bodyTextBold" color="white">
              Lailyfa Febrina
            </ReStyleText>
            <ReStyleText variant="bodyTextBold" color="white">
              19/2042
            </ReStyleText>
          </ReStyleBox>
        </ReStyleBox>
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: gray,
    height: 22,
    width: 22,
    borderRadius: 11,
    opacity: 0.4,
    top: 20,
    left: 30,
    position: "absolute",
  },
  boxStyle2: {
    backgroundColor: gray,
    height: 22,
    width: 22,
    borderRadius: 11,
    opacity: 0.4,
    top: 20,
    left: 45,
    position: "absolute",
  },
  details: {
    position: "absolute",
    top: 50,
  },
});

export default CreditCard;
