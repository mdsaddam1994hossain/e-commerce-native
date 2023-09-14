import { FC } from "react";
import { StyleSheet } from "react-native";
import { Image, ImageSourcePropType } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  icon: ImageSourcePropType;
  title: string;
  value: string;
};

const forwordIcon = require("../../../assets/forword.png");

const ProfileInfoCard: FC<Props> = ({ icon, title, value }) => {
  return (
    <ReStyleBox
      flexDirection="row"
      alignItems={"center"}
      justifyContent="space-between"
    >
      <ReStyleBox flexDirection="row" gap="m" alignItems={"center"}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
        <ReStyleText variant="heading6" color="dark">
          {title}
        </ReStyleText>
      </ReStyleBox>
      <ReStyleBox flexDirection="row" gap="m" alignItems={"center"}>
        <ReStyleText variant="bodyTextSmall" color="grey">
          {value}
        </ReStyleText>
        <Image
          source={forwordIcon}
          style={styles.forword}
          resizeMode="contain"
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  forword: {
    width: 6,
    height: 12,
  },
});

export default ProfileInfoCard;
