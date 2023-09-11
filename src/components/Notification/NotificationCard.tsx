import { FC } from "react";
import { Image } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  feed?: boolean;
  icon?: string;
  title: string;
  description: string;
  date: string;
};

const NotificationCard: FC<Props> = ({
  feed,
  icon,
  title,
  description,
  date,
}) => {
  return (
    <ReStyleBox
      flex={1}
      gap={"s"}
      flexDirection="row"
      backgroundColor={"white"}
    >
      <ReStyleBox flex={1}>
        <Image
          source={require("../../../assets/Offer.png")}
          style={{ width: 24, height: 24 }}
        />
      </ReStyleBox>
      <ReStyleBox flex={6}>
        <ReStyleText variant={"heading"}>{title}</ReStyleText>
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

export default NotificationCard;
