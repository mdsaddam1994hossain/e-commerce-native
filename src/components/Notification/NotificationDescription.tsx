import { FC } from "react";
import { Image, ImageSourcePropType } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  icon: ImageSourcePropType;
  title: string;
  description: string;
  date: string;
};

const NotificationDescription: FC<Props> = ({
  icon,
  title,
  description,
  date,
}) => {
  return (
    <ReStyleBox gap={"xs"} flexDirection="row" backgroundColor={"white"}>
      <ReStyleBox flex={1}>
        <Image
          source={icon}
          style={{ width: 28, height: 28 }}
          resizeMode={"contain"}
        />
      </ReStyleBox>
      <ReStyleBox flex={6}>
        <ReStyleText variant={"heading5"} color="dark">
          {title}
        </ReStyleText>
        <ReStyleText
          lineHeight={20}
          paddingVertical={"s"}
          variant={"bodyTextSmall"}
        >
          {description}
        </ReStyleText>
        <ReStyleText variant={"bodyTextSoSmall"}>{date}</ReStyleText>
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default NotificationDescription;
