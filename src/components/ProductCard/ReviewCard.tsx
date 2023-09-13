import { FC } from "react";
import { Image, StyleSheet } from "react-native";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  name: string;
  rating: number;
  description: string;
  profilePic?: string;
  img?: string[];
};
const ReviewCard: FC<Props> = ({
  name,
  rating,
  description,
  profilePic,
  img,
}) => {
  return (
    <ReStyleBox>
      <ReStyleBox flexDirection="row" gap="xs">
        <ReStyleBox flex={2}>
          <Image
            source={require("../../../assets/ProfilePicture.png")}
            style={styles.image}
          />
        </ReStyleBox>
        <ReStyleBox flex={8}>
          <ReStyleText variant="heading">{name}</ReStyleText>
          <Image
            source={require("../../../assets/rating.png")}
            style={styles.rating}
          />
        </ReStyleBox>
      </ReStyleBox>
      <ReStyleText marginTop="sm" variant="bodyTextSmall">
        {description}
      </ReStyleText>
      <ReStyleBox paddingVertical="sm" flexDirection="row" gap="s">
        <Image
          source={require("../../../assets/revproduct.png")}
          style={styles.pimage}
        />
        <Image
          source={require("../../../assets/revproduct2.png")}
          style={styles.pimage}
        />
        <Image
          source={require("../../../assets/revproduct1.png")}
          style={styles.pimage}
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  pimage: {
    height: 72,
    width: 72,
    borderRadius: 8,
  },
  rating: {
    height: 16,
    width: 96,
  },
});

export default ReviewCard;
