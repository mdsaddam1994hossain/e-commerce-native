import { Image, ImageBackground, StyleSheet } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

const RecomendedBanner = () => {
  return (
    <ReStyleBox>
      <ImageBackground
        source={require("../../../assets/recomenImg.png")}
        style={styles.bgImg}
        imageStyle={{ borderRadius: 5 }}
      >
        <ReStyleText fontFamily={"Poppins-Bold"} fontSize={24} color="white">
          Recomended
        </ReStyleText>
        <ReStyleText fontFamily={"Poppins-Bold"} fontSize={24} color="white">
          Product
        </ReStyleText>

        <ReStyleText
          marginTop="m"
          fontFamily={"Poppins-Regular"}
          fontSize={12}
          color="white"
        >
          We recommend the best for you
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
