import { FC } from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  title: string;
  subTitle?: string;
  description: string;
};

const RecomendedBanner: FC<Props> = ({ title, description, subTitle }) => {
  return (
    <ReStyleBox>
      <ImageBackground
        source={require("../../../assets/recomenImg.png")}
        style={styles.bgImg}
        imageStyle={{ borderRadius: 5 }}
      >
        <ReStyleText fontFamily={"Poppins-Bold"} fontSize={24} color="white">
          {title}
        </ReStyleText>
        {subTitle && (
          <ReStyleText fontFamily={"Poppins-Bold"} fontSize={24} color="white">
            {subTitle}
          </ReStyleText>
        )}

        <ReStyleText
          marginTop="m"
          fontFamily={"Poppins-Regular"}
          fontSize={12}
          color="white"
        >
          {description}
        </ReStyleText>
      </ImageBackground>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    height: 206,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
});

export default RecomendedBanner;
