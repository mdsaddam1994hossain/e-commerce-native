import { Image, StyleSheet } from "react-native";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import { space } from "../../src/theme/spacing";
import MyTextInput from "../../src/components/Input/MyInput";

const passwordLogo = require("../../assets/lock.png");

const { s, sm } = space;

const EditPasswordScreen = () => {
  const changePassword = () => {
    console.log(" change password");
  };
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title="Change Password" />
      <ReStyleBox paddingHorizontal="sm" paddingTop="sm">
        <ReStyleBox>
          <MyTextInput
            label="Old Password"
            placeholder="Old Password"
            password={true}
            value="oldpassword"
            inputStyle={{ paddingLeft: 45 }}
          />
          <Image
            style={[styles.logoPosition, styles.eSize]}
            source={passwordLogo}
          />
        </ReStyleBox>
        <ReStyleBox>
          <MyTextInput
            label="New Password"
            placeholder="New Password"
            password={true}
            value="newpassword"
            inputStyle={{ paddingLeft: 45 }}
          />
          <Image
            style={[styles.logoPosition, styles.eSize]}
            source={passwordLogo}
          />
        </ReStyleBox>
        <ReStyleBox>
          <MyTextInput
            label="New Password Again"
            placeholder="New Password Again"
            value="newpassword"
            password={true}
            inputStyle={{ paddingLeft: 45 }}
          />
          <Image
            style={[styles.logoPosition, styles.eSize]}
            source={passwordLogo}
          />
        </ReStyleBox>
      </ReStyleBox>
      <ReStyleBox style={styles.button}>
        <PrimaryButton
          text={"Save"}
          buttonVariant={"primary"}
          textVariant={"textHeader"}
          onPress={changePassword}
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
    height: 20,
    width: 20,
  },
});

export default EditPasswordScreen;
