import { FC } from "react";
import { ImageSourcePropType, TouchableOpacity } from "react-native";
import { Image, StyleSheet } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  title: string;
  discountedPrice: number;
  price: number;
  discount: number;
  navigation: any;
  src: ImageSourcePropType;
};

const ProductCard: FC<Props> = ({
  title,
  discountedPrice,
  price,
  discount,
  src,
  navigation,
}) => {
  const productDetails = () => {
    navigation.navigate("ProductDetails");
  };
  return (
    <ReStyleBox
      padding="sm"
      borderWidth={1}
      borderColor="light"
      borderRadius={5}
      width={141}
      marginRight="sm"
    >
      <ReStyleBox
        height={109}
        backgroundColor="light"
        borderRadius={5}
        justifyContent="center"
        alignItems="center"
      >
        <TouchableOpacity onPress={productDetails}>
          <Image source={src} style={styles.pimage} />
        </TouchableOpacity>
      </ReStyleBox>
      <ReStyleText marginTop="sm" variant="heading6">
        {title}
      </ReStyleText>
      <ReStyleText marginTop="s" variant={"heading6Primary"}>
        ${discountedPrice}
      </ReStyleText>
      <ReStyleBox marginTop="s" gap={"s"} flexDirection="row">
        <ReStyleText
          textDecorationLine={"line-through"}
          variant="bodyTextNormal"
        >
          ${price}
        </ReStyleText>
        <ReStyleText color={"red"} fontFamily="Poppins-Bold" fontSize={10}>
          {discount}% off
        </ReStyleText>
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  pimage: {
    height: 109,
    width: 120,
    borderRadius: 8,
  },
});

export default ProductCard;
