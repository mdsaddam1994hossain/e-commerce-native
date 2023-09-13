import { FC } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  title: string;
  discount: number;
};

const DiscountBanner: FC<Props> = ({ title, discount }) => {
  return (
    <ReStyleBox>
      <ImageBackground
        source={require("../../../assets/discountOffer.png")}
        style={styles.bgImg}
        imageStyle={{ borderRadius: 5 }}
      >
        <ReStyleText fontFamily={"Poppins-Bold"} fontSize={24} color="white">
          {title}
        </ReStyleText>
        <ReStyleText fontFamily={"Poppins-Bold"} fontSize={24} color="white">
          {discount}% Off
        </ReStyleText>
        <ReStyleBox
          marginTop="l"
          alignItems="center"
          flexDirection="row"
          gap="xs"
        >
          <ReStyleBox
            backgroundColor="light"
            borderRadius={5}
            width={42}
            height={41}
            alignItems="center"
            justifyContent="center"
          >
            <ReStyleText variant="heading4">08</ReStyleText>
          </ReStyleBox>
          <ReStyleText variant="buttonText">:</ReStyleText>
          <ReStyleBox
            backgroundColor="light"
            borderRadius={5}
            width={42}
            height={41}
            alignItems="center"
            justifyContent="center"
          >
            <ReStyleText variant="heading4">34</ReStyleText>
          </ReStyleBox>
          <ReStyleText variant="buttonText">:</ReStyleText>
          <ReStyleBox
            backgroundColor="light"
            borderRadius={5}
            width={42}
            height={41}
            alignItems="center"
            justifyContent="center"
          >
            <ReStyleText variant="heading4">52</ReStyleText>
          </ReStyleBox>
        </ReStyleBox>
      </ImageBackground>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    height: 206,
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
});

export default DiscountBanner;
