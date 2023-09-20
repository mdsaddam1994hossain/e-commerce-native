import { FC } from "react";
import { Image, Pressable } from "react-native";
import PrimaryButton from "../button/PrimaryButton";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {
  editAddress: () => void;
  deleteAddress: () => void;
  title: string;
  fullAddress: string;
  phone: string;
  focus: boolean;
};
const AddressCard: FC<Props> = ({
  editAddress,
  deleteAddress,
  title,
  phone,
  fullAddress,
  focus,
}) => {
  return (
    <ReStyleBox paddingHorizontal="sm" marginTop={"sm"}>
      <ReStyleBox
        borderWidth={1}
        borderColor={focus ? "blue" : "light"}
        borderRadius={5}
        padding="sm"
      >
        <ReStyleText variant={"heading5"} color="dark">
          {title}
        </ReStyleText>
        <ReStyleText marginTop={"s"} variant="bodyTextSmall" color="grey">
          {fullAddress}
        </ReStyleText>
        <ReStyleText marginTop={"sm"} variant="bodyTextSmall" color="grey">
          {phone}
        </ReStyleText>

        <ReStyleBox
          flexDirection={"row"}
          alignItems="center"
          marginTop={"sm"}
          gap="sm"
        >
          <ReStyleBox width={77} height={57}>
            <PrimaryButton
              text={"Edit"}
              buttonVariant={"primary"}
              textVariant={"textHeader"}
              onPress={editAddress}
            />
          </ReStyleBox>
          <Pressable onPress={deleteAddress}>
            <Image source={require("../../../assets/deleteIcon.png")} />
          </Pressable>
        </ReStyleBox>
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default AddressCard;
