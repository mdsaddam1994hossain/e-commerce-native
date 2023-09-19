import { ApplicationScreenProps } from "../types/navigation";

import Confirmation from "../../src/components/common/Confirmation";

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
    <Confirmation action={deleteAddress} cancel={onCancel} imgSrc={alerIcon} />
  );
};

export default DeleteAddressScreen;
