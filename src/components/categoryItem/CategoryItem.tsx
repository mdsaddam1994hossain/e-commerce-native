import { FC } from "react";
import { Image, ImageSourcePropType } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  title: string;
  src: ImageSourcePropType;
};

const CategoryItem: FC<Props> = ({ title, src }) => {
  return (
    <ReStyleBox
      gap="s"
      flexWrap="wrap"
      alignItems="center"
      width={70}
      marginRight="sm"
    >
      <ReStyleBox
        height={70}
        width={70}
        borderRadius={35}
        borderWidth={1}
        borderColor="light"
        justifyContent="center"
        alignItems="center"
      >
        <Image source={src} style={{ width: 24, height: 24 }} />
      </ReStyleBox>
      <ReStyleText variant="bodyTextNormal">{title}</ReStyleText>
    </ReStyleBox>
  );
};

export default CategoryItem;
