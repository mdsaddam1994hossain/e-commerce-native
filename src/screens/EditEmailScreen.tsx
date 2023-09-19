import { Image, StyleSheet } from "react-native";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import MyTextInput from "../../src/components/Input/MyInput";
import { space } from "../../src/theme/spacing";

const emailLogo = require("../../assets/Message.png");

const { s, sm } = space;
// const { light, blue, white } = palette;

const EditEmailScreen = () => {
  const changeEmail = () => {
    console.log(" change Email");
  };
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title="Email" />
      <ReStyleBox paddingHorizontal="sm" paddingTop="sm">
        <ReStyleBox>
          <MyTextInput
            label="Change Email"
            placeholder="Derlaxy@yahoo.com"
            inputStyle={{ paddingLeft: 45 }}
          />
          <Image
            style={[styles.logoPosition, styles.eSize]}
            source={emailLogo}
          />
        </ReStyleBox>
        <ReStyleText variant="bodyTextSmall" color="blue">
          We Will Send Verification to your New Email
        </ReStyleText>
      </ReStyleBox>
      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Change Email"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={changeEmail}
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
    top: 45,
  },
  eSize: {
    height: 22,
    width: 22,
  },
});

export default EditEmailScreen;
