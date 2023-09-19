import React, { useState } from "react";
import { StyleSheet, TextInput, Platform, Image } from "react-native";
import LogoIcon from "./../components/LogoIcon";

import { ApplicationScreenProps } from "../types/navigation";
import SocialButton from "../../src/components/button/SocialButton";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { space } from "../../src/theme/spacing";

import PrimaryButton from "../../src/components/button/PrimaryButton";
import { palette } from "../../src/theme/palette";

import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";

const emailLogo = require("../../assets/Message.png");
const passwordLogo = require("../../assets/lock.png");
const googleLogo = require("../../assets/google.png");
const facebookLogo = require("../../assets/facebook.png");

const { s, sm } = space;
const { light, blue, white } = palette;

const LoginScreen = ({ navigation }: ApplicationScreenProps) => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const onSignin = () => {
    console.log("onSignin button click");
    navigation.navigate("Tabs");
  };
  const onSigninGoogle = () => {
    console.log("onSigninGoogle button click");
  };
  const onSinginFacebook = () => {
    console.log("onSinginFacebook button click");
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
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.siteSpace}>
        <ReStyleBox flex={1} paddingTop="xxxl">
          {/* <NotificationCard
           
            title="The Best Title"
            description="Culpa cillum consectetur labore nulla nulla mag irure. Id cupla officia aute dolor amet deserunt ex proident."
            date="April 30,2023 1:01 PM"
          /> */}
          <LogoIcon />
          <ReStyleBox paddingTop="m">
            <ReStyleText variant={"heading4"} textAlign="center">
              Welcome to Lafyuu
            </ReStyleText>
            <ReStyleText variant={"bodyTextSmall"} textAlign="center">
              Sign in to continue
            </ReStyleText>

            <ReStyleBox marginTop="m">
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
                style={[styles.logoPosition, styles.eSize]}
                source={emailLogo}
              />
            </ReStyleBox>
            <ReStyleBox position="relative">
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                onFocus={handleFocusPassword}
                onBlur={handleBlurPassword}
                style={[
                  styles.input,
                  isPasswordFocused ? styles.focusedInput : null,
                ]}
              />
              <Image
                style={[styles.logoPosition, styles.lSize]}
                source={passwordLogo}
              />
            </ReStyleBox>

            <ReStyleBox marginVertical="sm">
              <PrimaryButton
                text={"Sign In"}
                buttonVariant={"primary"}
                textVariant={"textHeader"}
                onPress={onSignin}
              />
            </ReStyleBox>

            <ReStyleBox
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="s"
            >
              <ReStyleBox
                flex={4}
                backgroundColor="light"
                height={1}
              ></ReStyleBox>
              <ReStyleBox flex={2}>
                <ReStyleText
                  textAlign="center"
                  fontSize={14}
                  fontFamily="Poppins-Bold"
                  color="grey"
                >
                  OR
                </ReStyleText>
              </ReStyleBox>
              <ReStyleBox
                height={1}
                backgroundColor="light"
                flex={4}
              ></ReStyleBox>
            </ReStyleBox>
            <ReStyleBox position="relative">
              <SocialButton
                style={styles.socialButton}
                title="Login with Google"
                onPress={onSigninGoogle}
              />

              <Image
                style={[styles.buttonIcon, styles.gSize]}
                source={googleLogo}
              />
            </ReStyleBox>
            <ReStyleBox position="relative">
              <SocialButton
                style={styles.socialButton}
                title=" Login with facebook"
                onPress={onSinginFacebook}
              />
              <Image
                style={[styles.buttonIcon, styles.fSize]}
                source={facebookLogo}
              />
            </ReStyleBox>

            <ReStyleText
              marginTop="s"
              color="blue"
              textAlign="center"
              fontFamily="Poppins-Bold"
              fontSize={12}
            >
              Forgot Password?
            </ReStyleText>

            <ReStyleText
              marginTop="s"
              color="grey"
              textAlign="center"
              fontFamily="Poppins-Regular"
              fontSize={12}
            >
              Don't have a account?
              <ReStyleText
                onPress={() => navigation.navigate("SignUp")}
                fontSize={12}
                color="blue"
                fontFamily="Poppins-Bold"
              >
                {" "}
                Register
              </ReStyleText>
            </ReStyleText>
          </ReStyleBox>
        </ReStyleBox>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: light,
    paddingHorizontal: 10,
    paddingLeft: 40,
    borderRadius: 5,
    marginVertical: s,
    fontFamily: "Poppins-Regular",
  },

  socialButton: {
    height: 57,
    marginVertical: s,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: light,
  },
  logoPosition: {
    position: "absolute",
    left: sm,
    top: 20,
  },
  eSize: {
    height: 22,
    width: 22,
  },
  lSize: {
    height: 20,
    width: 20,
  },
  gSize: {
    height: 16,
    width: 16,
  },
  fSize: {
    height: 20,
    width: 11,
    marginLeft: 5,
  },
  buttonIcon: {
    position: "absolute",
    left: 16,
    top: 26,
  },
  focusedInput: {
    borderColor: blue, // Border color when focused
  },
  siteSpace: {
    paddingHorizontal: sm,
  },
});

export default LoginScreen;
