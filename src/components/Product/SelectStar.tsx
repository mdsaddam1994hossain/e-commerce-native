import { FC } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { TReiew } from "../../../src/Data/data.t";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  item: TReiew;
  setSelectedReview: (item: TReiew) => void;
  selectedReview: TReiew;
  isStar: boolean;
};

const SelectStar: FC<Props> = ({
  item,
  setSelectedReview,
  selectedReview,
  isStar,
}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedReview(item)}>
      <ReStyleBox
        borderWidth={1}
        borderColor={selectedReview?.id === item.id ? "blueLight" : "light"}
        backgroundColor={selectedReview?.id === item.id ? "blueLight" : "white"}
        borderRadius={5}
        paddingHorizontal="m"
        height={50}
        justifyContent="center"
        alignItems="center"
        marginTop="s"
        marginRight={"sm"}
      >
        <ReStyleBox flexDirection={"row"} gap="sm" alignItems={"center"}>
          {isStar && (
            <Image
              source={require("../../../assets/star.png")}
              style={styles.img}
            />
          )}
          <ReStyleText
            variant="heading5"
            color={selectedReview?.id === item.id ? "blue" : "dark"}
          >
            {item.value}
          </ReStyleText>
        </ReStyleBox>
      </ReStyleBox>
    </TouchableOpacity>
  );
};

export default SelectStar;

const styles = StyleSheet.create({
  img: {
    width: 16,
    height: 16,
  },
});
