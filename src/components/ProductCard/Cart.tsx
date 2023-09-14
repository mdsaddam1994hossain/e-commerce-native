import { FC } from "react";
import { Pressable } from "react-native";
import { Image, StyleSheet } from "react-native";
import { palette } from "../../../src/theme/palette";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  product: any;
};

const { white, light } = palette;

const Cart: FC<Props> = ({ product }) => {
  console.log(product);

  const onResuceProduct = () => {
    console.log("reduce-------");
  };
  const onIncrementProduct = () => {
    console.log("increemnt+++++++");
  };
  return (
    <ReStyleBox
      borderWidth={1}
      borderColor="light"
      borderRadius={5}
      padding="sm"
      flexDirection="row"
      gap="m"
      marginVertical={"s"}
    >
      <ReStyleBox flex={2}>
        <Image source={require("../../../assets/p5.png")} style={styles.img} />
      </ReStyleBox>
      <ReStyleBox flex={7}>
        <ReStyleBox flexDirection="row" flexWrap="wrap">
          <ReStyleBox flex={5}>
            <ReStyleText variant="heading6">
              Nike Air Zoom Pegasus 36 Miami
            </ReStyleText>
          </ReStyleBox>
          <ReStyleBox
            flex={2}
            flexDirection="row"
            justifyContent="flex-end"
            gap="s"
          >
            <Image
              source={require("../../../assets/heartActive.png")}
              style={styles.heart}
            />
            <Image
              source={require("../../../assets/deleteIcon.png")}
              style={styles.delete}
            />
          </ReStyleBox>
        </ReStyleBox>

        <ReStyleBox
          marginTop="sm"
          flexDirection="row"
          justifyContent="space-between"
        >
          <ReStyleText variant="heading6Primary">$29943</ReStyleText>
          <ReStyleBox flexDirection="row">
            <Pressable
              onPress={onResuceProduct}
              style={[styles.button, styles.leftRadious]}
            >
              <ReStyleText color="grey" fontFamily={"Poppins-Bold"}>
                -
              </ReStyleText>
            </Pressable>
            <ReStyleBox style={styles.textBox}>
              <ReStyleText color="grey">1</ReStyleText>
            </ReStyleBox>
            <Pressable
              onPress={onIncrementProduct}
              style={[styles.button, styles.rightRadious]}
            >
              <ReStyleText color="grey">+</ReStyleText>
            </Pressable>
          </ReStyleBox>
        </ReStyleBox>
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 72,
    width: 72,
  },
  heart: {
    height: 18,
    width: 20,
  },
  delete: {
    height: 18,
    width: 18,
  },
  button: {
    width: 32,
    height: 24,
    backgroundColor: white,
    borderWidth: 0.5,
    borderColor: light,
    alignItems: "center",
  },
  textBox: {
    width: 32,
    height: 24,
    backgroundColor: light,
    alignItems: "center",
    justifyContent: "center",
  },
  leftRadious: {
    borderTopLeftRadius: 5, // Adjust this value to control the top-left corner radius
    borderBottomLeftRadius: 5,
  },
  rightRadious: {
    borderTopRightRadius: 5, // Adjust this value to control the top-left corner radius
    borderBottomRightRadius: 5,
  },
});

export default Cart;
