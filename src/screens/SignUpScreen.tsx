import React, { useState } from "react";
import { Image, ScrollView, TextInput } from "react-native";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import LogoIcon from "../../src/components/LogoIcon";

import { ApplicationScreenProps } from "../types/navigation";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import { space } from "../../src/theme/spacing";
import { palette } from "../../src/theme/palette";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";

const userLogo = require("../../assets/User.png");
const emailLogo = require("../../assets/Message.png");
const passwordLogo = require("../../assets/lock.png");

const { s, sm } = space;
const { light, blue, white } = palette;

const SignUpScreen = ({ navigation }: ApplicationScreenProps) => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isRePasswordFocused, setIsRePasswordFocused] = useState(false);

  const handleFocusName = () => {
    setIsNameFocused(true);
  };

  const handleBlurName = () => {
    setIsNameFocused(false);
  };
  const handleFocusEmail = () => {
    setIsEmailFocused(true);
  };

  const handleBlurEmail = () => {
    setIsEmailFocused(false);
  };
  const handleFocusPassword = () => {
    setIsPasswordFocused(true);
  };

  const handleBlurPassword = () => {
    setIsPasswordFocused(false);
  };
  const handleFocusAgainPassword = () => {
    setIsRePasswordFocused(true);
  };

  const handleBlurAgainPassword = () => {
    setIsRePasswordFocused(false);
  };
  const onSignin = () => {
    console.log("onSignin button click");
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.siteSpace}>
        <ReStyleBox flex={1} paddingTop="xxxl">
          <LogoIcon />

          <ReStyleText variant={"heading4"} textAlign="center" paddingTop="m">
            Let's Get Started
          </ReStyleText>
          <ReStyleText
            variant={"bodyTextSmall"}
            marginTop="xs"
            textAlign="center"
            color="grey"
          >
            create an new account
          </ReStyleText>
          <ReStyleBox marginTop="m">
            <TextInput
              placeholder="Full Name"
              style={[styles.input, isNameFocused ? styles.focusedInput : null]}
              onFocus={handleFocusName}
              onBlur={handleBlurName}
            />

            <Image
              style={[styles.logoPosition, styles.uSize]}
              source={userLogo}
            />
          </ReStyleBox>
          <ReStyleBox>
            <TextInput
              placeholder="Your Email"
              style={[
                styles.input,
                isEmailFocused ? styles.focusedInput : null,
              ]}
              onFocus={handleFocusEmail}
              onBlur={handleBlurEmail}
            />
            <Image
              style={[styles.logoPosition, styles.uSize]}
              source={emailLogo}
            />
          </ReStyleBox>
          <ReStyleBox>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={[
                styles.input,
                isPasswordFocused ? styles.focusedInput : null,
              ]}
              onFocus={handleFocusPassword}
              onBlur={handleBlurPassword}
            />
            <Image
              style={[styles.logoPosition, styles.lSize]}
              source={passwordLogo}
            />
          </ReStyleBox>
          <ReStyleBox>
            <TextInput
              placeholder="Password Again"
              secureTextEntry={true}
              style={[
                styles.input,
                isRePasswordFocused ? styles.focusedInput : null,
              ]}
              onFocus={handleFocusAgainPassword}
              onBlur={handleBlurAgainPassword}
            />
            <Image
              style={[styles.logoPosition, styles.lSize]}
              source={passwordLogo}
            />
          </ReStyleBox>

          <ReStyleBox marginVertical="sm">
            <PrimaryButton
              text={"Sign Up"}
              buttonVariant={"primary"}
              textVariant={"buttonText"}
              onPress={onSignin}
            />
          </ReStyleBox>

          <ReStyleText
            marginTop="s"
            color="grey"
            textAlign="center"
            variant="bodyTextSmall"
          >
            have a account?
            <ReStyleText
              onPress={() => navigation.navigate("Login")}
              fontSize={12}
              color="blue"
              fontFamily="Poppins-Bold"
            >
              {" "}
              Sign In
            </ReStyleText>
          </ReStyleText>
        </ReStyleBox>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    height: "100%",
  },

  input: {
    height: 48,
    marginVertical: s,
    borderWidth: 1,
    borderColor: light,
    paddingHorizontal: 10,
    paddingLeft: 40,
    borderRadius: 5,
    fontFamily: "Poppins-Regular",
  },

  logoPosition: {
    position: "absolute",
    left: sm,
    top: 20,
  },
  uSize: {
    height: 20,
    width: 20,
  },
  lSize: {
    height: 18,
    width: 18,
  },

  focusedInput: {
    borderColor: blue, // Border color when focused
  },
  siteSpace: {
    paddingHorizontal: sm,
  },
});

export default SignUpScreen;
