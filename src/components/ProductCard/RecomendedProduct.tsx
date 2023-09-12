import { FC } from "react";
import { Image } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  title: string;
  discountedPrice: number;
  price: number;
  discount: number;
  index: number;
};

const RecomendedProduct: FC<Props> = ({
  title,
  discountedPrice,
  price,
  discount,
  index,
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
      <ReStyleBox
        height={109}
        backgroundColor="light"
        borderRadius={5}
        justifyContent="center"
        alignItems="center"
      >
        <Image source={require("../../../assets/shirt.png")} />
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

export default RecomendedProduct;
