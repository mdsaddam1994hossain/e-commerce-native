import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { TSizeData } from "../../../src/Data/data.t";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  item: TSizeData;
  setSelectedSize: (item: TSizeData) => void;
  selectedSize: TSizeData;
};

const SelectSize: FC<Props> = ({ item, setSelectedSize, selectedSize }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedSize(item)}>
      <ReStyleBox
        borderWidth={1}
        borderColor={selectedSize?.id === item.id ? "blue" : "light"}
        borderRadius={24}
        height={48}
        width={48}
        justifyContent="center"
        alignItems="center"
        marginTop="s"
        marginRight={"sm"}
      >
        <ReStyleText variant="heading5" color="dark">
          {item.value}
        </ReStyleText>
      </ReStyleBox>
    </TouchableOpacity>
  );
};

export default SelectSize;
