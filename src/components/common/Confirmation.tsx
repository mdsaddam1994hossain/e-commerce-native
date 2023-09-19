import { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { Image, StyleSheet } from "react-native";
import OutlineButton from "../button/OutlineButton";
import PrimaryButton from "../button/PrimaryButton";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  action: () => void;
  cancel: () => void;
  imgSrc: ImageSourcePropType;
};

const Confirmation: FC<Props> = ({ action, cancel, imgSrc }) => {
  return (
    <ReStyleBox
      paddingHorizontal="sm"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Image source={imgSrc} style={styles.img} resizeMode="contain" />
      <ReStyleText variant="heading2" color="dark">
        Confirmation
      </ReStyleText>
      <ReStyleText variant="bodyTextNormal">
        Are You sure wanna delete address
      </ReStyleText>
      <ReStyleBox height={57} marginTop="sm" width="100%">
        <PrimaryButton text="Delete" buttonVariant="primary" onPress={action} />
      </ReStyleBox>
      <ReStyleBox height={57} marginTop="sm" width="100%">
        <OutlineButton text="Cancel" buttonVariant="outline" onPress={cancel} />
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 72,
    height: 72,
  },
});

export default Confirmation;
