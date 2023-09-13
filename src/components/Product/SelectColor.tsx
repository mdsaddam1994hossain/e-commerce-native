import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { TColorData } from "src/Data/data.t";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";

type Props = {
  item: TColorData;
  setSelectedColor: (item: TColorData) => void;
  selectedColor: TColorData;
};

const SelectColor: FC<Props> = ({ item, setSelectedColor, selectedColor }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedColor(item)}>
      <ReStyleBox
        backgroundColor={item?.value as any}
        borderRadius={24}
        height={48}
        width={48}
        justifyContent="center"
        alignItems="center"
        marginTop="s"
        marginRight={"sm"}
      >
        {selectedColor?.id === item.id && (
          <ReStyleBox
            height={12}
            width={12}
            borderRadius={6}
            backgroundColor={"white"}
          ></ReStyleBox>
        )}
      </ReStyleBox>
    </TouchableOpacity>
  );
};

export default SelectColor;
