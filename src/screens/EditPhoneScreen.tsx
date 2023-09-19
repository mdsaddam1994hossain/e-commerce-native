import { Image, StyleSheet } from "react-native";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import { space } from "../../src/theme/spacing";
import MyTextInput from "../../src/components/Input/MyInput";
import { useState } from "react";

const phoneLogo = require("../../assets/phoneIcon.png");

const { s, sm } = space;

const EditPhoneScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const onChangePhone = (text: string) => {
    setPhoneNumber(text);
  };
  const changePhoneNumber = () => {
    console.log(" change phne number", phoneNumber);
  };
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title="Phone Number" />
      <ReStyleBox paddingHorizontal="sm" paddingTop="sm">
        <ReStyleBox>
          <MyTextInput
            label="Phone Number"
            placeholder="(307) 555-0133"
            onChange={(text: string) => onChangePhone(text)}
            inputStyle={{ paddingLeft: 45 }}
          />
          <Image
            style={[styles.logoPosition, styles.eSize]}
            source={phoneLogo}
          />
        </ReStyleBox>
      </ReStyleBox>
      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Save"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={changePhoneNumber}
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
  logoPosition: {
    position: "absolute",
    left: sm,
    top: 47,
  },
  eSize: {
    height: 18,
    width: 12,
  },
});

export default EditPhoneScreen;
