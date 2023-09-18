import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  title: string;
};

const CustomHeader: FC<Props> = ({ title }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ReStyleBox
      borderBottomWidth={1}
      flexDirection="row"
      borderBottomColor={"light"}
      height={50}
      alignItems="center"
      paddingHorizontal={"sm"}
    >
      <ReStyleBox flex={2}>
        <Pressable onPress={goBack}>
          <Image
            source={require("../../../assets/back.png")}
            style={styles.img}
            resizeMode="contain"
          />
        </Pressable>
      </ReStyleBox>
      <ReStyleBox flex={14}>
        <ReStyleText variant="heading4">{title}</ReStyleText>
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 6,
    height: 12,
  },
});

export default CustomHeader;
