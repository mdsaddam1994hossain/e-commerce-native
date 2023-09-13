import { FC } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  title: string;
  discountedPrice: number;
  price: number;
  discount: number;
  index: number;
  src: ImageSourcePropType;
  isFav: boolean;
};

const RecomendedProduct: FC<Props> = ({
  title,
  discountedPrice,
  price,
  discount,
  index,
  src,
  isFav,
}) => {
  return (
    <ReStyleBox
      padding="sm"
      borderWidth={1}
      borderColor="light"
      borderRadius={5}
      width={"48%"}
      marginBottom="sm"
      marginRight={index % 2 !== 0 ? "none" : "sm"}
    >
      <ReStyleBox borderRadius={5} justifyContent="center" alignItems="center">
        <Image source={src} style={styles.pimage} />
      </ReStyleBox>
      <ReStyleText marginTop="sm" variant="heading6">
        {title}
      </ReStyleText>
      <ReStyleBox>
        <Image
          source={require("../../../assets/rating.png")}
          style={styles.rating}
        />
      </ReStyleBox>
      <ReStyleText marginTop="sm" variant={"heading6Primary"}>
        ${discountedPrice}
      </ReStyleText>
      <ReStyleBox gap={"s"} flexDirection="row" alignItems="center">
        <ReStyleBox>
          <ReStyleText
            textDecorationLine={"line-through"}
            variant="bodyTextNormal"
          >
            ${price}
          </ReStyleText>
        </ReStyleBox>
        <ReStyleBox>
          <ReStyleText color={"red"} fontFamily="Poppins-Bold" fontSize={10}>
            {discount}% off
          </ReStyleText>
        </ReStyleBox>
        {isFav && (
          <ReStyleBox position="relative">
            <Image
              source={require("../../../assets/deleteIcon.png")}
              style={styles.delete}
            />
          </ReStyleBox>
        )}
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  pimage: {
    height: 109,
    width: "100%",
    borderRadius: 8,
  },
  rating: {
    height: 12,
    width: 68,
  },
  delete: {
    height: 18,
    width: 18,
    marginLeft: 25,
    marginTop: -5,
  },
});

export default RecomendedProduct;
