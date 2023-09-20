import { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { Image, Pressable, StyleSheet } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";
import { useNavigation } from "@react-navigation/native";
import MyTextInput from "../Input/MyInput";

type Props = {
  title?: string;
  backIcon?: boolean;
  pluseIcon?: ImageSourcePropType;
  handleFavorite?: () => void;
  handleNotification?: () => void;
};

const SearchHeader: FC<Props> = ({
  title,
  backIcon = true,
  pluseIcon,
  handleFavorite,
  handleNotification,
}) => {
  return (
    <ReStyleBox
      borderBottomWidth={1}
      borderBottomColor={"light"}
      height={80}
      paddingHorizontal={"sm"}
      justifyContent="center"
    >
      <ReStyleBox alignItems={"center"} flexDirection={"row"} gap="sm">
        <ReStyleBox flex={8} height={60}>
          <MyTextInput placeholder={title} inputStyle={styles.input} />
          <Image
            source={require("../../../assets/search.png")}
            style={styles.serch}
            resizeMode="contain"
          />
        </ReStyleBox>
        <ReStyleBox flexDirection={"row"} flex={2} gap="sm">
          <Pressable style={styles.press} onPress={handleFavorite}>
            <Image
              source={require("../../../assets/love.png")}
              style={styles.img}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable style={styles.press} onPress={handleNotification}>
            <Image
              source={require("../../../assets/notification.png")}
              style={styles.img}
              resizeMode="contain"
            />
          </Pressable>
        </ReStyleBox>
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
  },
  input: {
    paddingLeft: 40,
  },
  plusImg: {
    width: 24,
    height: 24,
  },
  press: {
    width: 16,
  },
  serch: {
    position: "absolute",
    width: 14,
    height: 14,
    left: 15,
    top: 25,
  },
});

export default SearchHeader;
