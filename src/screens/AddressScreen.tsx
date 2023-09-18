import { StyleSheet } from "react-native";
import AddressCard from "../../src/components/Account/AddressCard";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";

const AddressScreen = ({ navigation }: ApplicationScreenProps) => {
  const editAddress = () => {
    console.log("edit address");
  };
  const addAddress = () => {
    navigation.navigate("AddAddress");
    console.log("addAddress");
  };

  const AddressData = [
    {
      id: 1,
      title: "Priscekila",
      fullAddress:
        "3711 Spring Hill Rd undefined Tailahassee, Nevada 52874 United States",
      phone: "+99 1234567890",
    },
    {
      id: 2,
      title: "Ahmad Khaidir",
      fullAddress:
        "4858 Spring Hill Rd undefined Tailahassee, Nevada 52874 United States",
      phone: "+99 123456448570",
    },
  ];
  return (
    <ReStyleBox flex={1} paddingTop="l" backgroundColor="white">
      <CustomHeader title={"Address"} />
      {AddressData.map((item, index) => {
        return (
          <ReStyleBox key={index}>
            <AddressCard
              editAddress={editAddress}
              title={item.title}
              phone={item.phone}
              fullAddress={item.fullAddress}
            />
          </ReStyleBox>
        );
      })}

      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Add Address"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={addAddress}
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 57,
    position: "absolute",
    bottom: 30,
    left: 12,
    right: 12,
  },
});

export default AddressScreen;
