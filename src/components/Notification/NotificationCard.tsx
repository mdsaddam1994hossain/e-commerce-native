import { FC } from "react";
import { StyleSheet } from "react-native";
import { Image, ImageSourcePropType, Pressable } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  img: ImageSourcePropType;
  title: string;
  numberOfNotifi?: number;
};

const NotificationCard: FC<Props> = ({ img, title, numberOfNotifi }) => {
  return (
    <ReStyleBox
      flexDirection="row"
      gap={"sm"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <ReStyleBox alignItems={"center"} flexDirection="row" gap={"sm"}>
        <Image source={img} style={styles.img} />
        <ReStyleText variant="heading6" color="dark">
          {title}
        </ReStyleText>
      </ReStyleBox>
      <ReStyleBox
        backgroundColor={"red"}
        height={24}
        width={24}
        borderRadius={12}
        justifyContent={"center"}
        alignItems="center"
      >
        <ReStyleText variant={"bodyTextBold"} color="white">
          {numberOfNotifi}
        </ReStyleText>
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  img: {
    height: 26,
    width: 24,
  },
});
