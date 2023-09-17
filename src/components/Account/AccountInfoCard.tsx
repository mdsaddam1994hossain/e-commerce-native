import { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  icon: ImageSourcePropType;
  accountDetails: (v: string) => void;
  title: string;
  screen: string;
};

const AccoutInfoCard: FC<Props> = ({ icon, accountDetails, title, screen }) => {
  return (
    <Pressable onPress={() => accountDetails(screen)}>
      <ReStyleBox
        marginVertical="m"
        flexDirection="row"
        gap="m"
        alignItems="center"
      >
        <Image source={icon} style={styles.iconSize} resizeMode="contain" />
        <ReStyleText variant="heading6">{title}</ReStyleText>
      </ReStyleBox>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    height: 20,
    width: 20,
  },
});

export default AccoutInfoCard;
