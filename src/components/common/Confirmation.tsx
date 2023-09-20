import { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { Image, StyleSheet } from "react-native";
import OutlineButton from "../button/OutlineButton";
import PrimaryButton from "../button/PrimaryButton";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  title: string;
  message: string;
  buttonLable: string;
  action: () => void;
  cancel?: () => void;
  imgSrc: ImageSourcePropType;
  cancelVisible?: boolean;
};

const Confirmation: FC<Props> = ({
  title,
  message,
  buttonLable,
  action,
  cancel,
  imgSrc,
  cancelVisible = true,
}) => {
  return (
    <ReStyleBox
      paddingHorizontal="sm"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Image source={imgSrc} style={styles.img} resizeMode="contain" />
      <ReStyleText variant="heading2" color="dark">
        {title}
      </ReStyleText>
      <ReStyleText variant="bodyTextNormal">{message}</ReStyleText>
      <ReStyleBox height={57} marginTop="sm" width="100%">
        <PrimaryButton
          text={buttonLable}
          buttonVariant="primary"
          onPress={action}
        />
      </ReStyleBox>
      {cancelVisible && cancel && (
        <ReStyleBox height={57} marginTop="sm" width="100%">
          <OutlineButton
            text="Cancel"
            buttonVariant="outline"
            onPress={cancel}
          />
        </ReStyleBox>
      )}
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
