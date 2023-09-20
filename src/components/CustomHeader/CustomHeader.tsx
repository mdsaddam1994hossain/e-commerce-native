import { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { Image, Pressable, StyleSheet } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  backIcon?: boolean;
  pluseIcon?: ImageSourcePropType;
  handePress?: () => void;
};

const CustomHeader: FC<Props> = ({
  title,
  backIcon = true,
  pluseIcon,
  handePress,
}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ReStyleBox
      borderBottomWidth={1}
      borderBottomColor={"light"}
      height={60}
      paddingHorizontal={"sm"}
      justifyContent="center"
    >
      <ReStyleBox
        flexDirection="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <ReStyleBox
          justifyContent={"center"}
          flexDirection="row"
          gap={"m"}
          alignItems="center"
        >
          {backIcon && (
            <Pressable style={styles.press} onPress={goBack}>
              <Image
                source={require("../../../assets/back.png")}
                style={styles.img}
                resizeMode="contain"
              />
            </Pressable>
          )}
          <ReStyleText variant="heading4">{title}</ReStyleText>
        </ReStyleBox>
        {pluseIcon && (
          <Pressable onPress={handePress}>
            <ReStyleBox>
              <Image
                source={pluseIcon}
                resizeMode="contain"
                style={styles.plusImg}
              />
            </ReStyleBox>
          </Pressable>
        )}
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 8,
    height: 16,
  },
  plusImg: {
    width: 24,
    height: 24,
  },
  press: {
    width: 16,
  },
});

export default CustomHeader;
