import { FC } from "react";
import { ViewProps } from "react-native";
import { Image, StyleSheet } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  title: string;
  price: number;
  viewStyle?: ViewProps;
};

const ProductDetailsFront: FC<Props> = ({ title, price, viewStyle }) => {
  return (
    <ReStyleBox>
      <Image source={require("../../../assets/pd1.png")} style={styles.img} />
      <ReStyleBox
        flexDirection="row"
        gap="l"
        paddingHorizontal="sm"
        marginTop="l"
      >
        <ReStyleBox flex={8}>
          <ReStyleText variant="heading3" color="dark">
            {title}
          </ReStyleText>
        </ReStyleBox>
        <ReStyleBox justifyContent="flex-end" flexDirection="row" flex={2}>
          <Image
            source={require("../../../assets/loveIcon.png")}
            style={styles.loveIcon}
          />
        </ReStyleBox>
      </ReStyleBox>
      <ReStyleBox paddingHorizontal="sm" marginTop="xs">
        <Image
          source={require("../../../assets/rating.png")}
          style={styles.rating}
        />
        <ReStyleText marginTop="sm" variant="heading3" color="blue">
          ${price}
        </ReStyleText>
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 238,
    width: "100%",
  },
  loveIcon: {
    height: 18,
    width: 20,
    marginTop: 8,
  },
  rating: {
    height: 16,
    width: 96,
  },
});

export default ProductDetailsFront;
