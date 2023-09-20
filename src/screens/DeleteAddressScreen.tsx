import { ApplicationScreenProps } from "../types/navigation";

import Confirmation from "../../src/components/common/Confirmation";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";

const alerIcon = require("../../assets/alertIcon.png");

const DeleteAddressScreen = ({ navigation }: ApplicationScreenProps) => {
  const deleteAddress = () => {
    navigation.navigate("Address");
  };
  const onCancel = () => {
    console.log("cancel address success");
    navigation.navigate("Address");
  };

  return (
    <ReStyleBox flex={1} backgroundColor="white">
      <Confirmation
        title="Confirmation"
        message=" Are You sure wanna delete address"
        buttonLable="Delete"
        action={deleteAddress}
        cancel={onCancel}
        imgSrc={alerIcon}
      />
    </ReStyleBox>
  );
};

export default DeleteAddressScreen;
