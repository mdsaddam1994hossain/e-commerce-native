import { createBox, createText } from "@shopify/restyle";
import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LogoIcon from "./../components/LogoIcon";

import { ReStyleTheme } from "../theme/theme";
import { ApplicationScreenProps } from "../types/navigation";
import SocialButton from "../../src/components/button/SocialButton";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";

const Box = createBox<ReStyleTheme>();
const Text = createText<ReStyleTheme>();

const onSignin = () => {
  console.log("onSignin button click");
};
const onSigninGoogle = () => {
  console.log("onSigninGoogle button click");
};
const onSinginFacebook = () => {
  console.log("onSinginFacebook button click");
};

const LoginScreen = ({ navigation }: ApplicationScreenProps) => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

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
      <ScrollView>
        <Box flex={1} paddingTop="xxxl">
          <LogoIcon />
          <Box paddingTop="m">
            <Text
              color="dark"
              fontFamily="Poppins-Bold"
              fontSize={16}
              textAlign="center"
            >
              Welcome to Lafyuu
            </Text>
            <Text
              color="grey"
              fontFamily="Poppins-Regular"
              fontSize={12}
              textAlign="center"
            >
              Sign in to continue
            </Text>

            <Box marginTop="m">
              <TextInput
                placeholder="Your Email"
                style={[
                  styles.input,
                  isEmailFocused ? styles.focusedInput : null,
                ]}
                onFocus={handleFocusEmail}
                onBlur={handleBlurEmail}
              />
              <Ionicons
                style={styles.logoPosition}
                name={"person"}
                size={16}
                color={"#9098B1"}
              />
            </Box>
            <Box position="relative">
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
              <Ionicons
                style={styles.logoPosition}
                name={"person"}
                size={16}
                color={"#9098B1"}
              />
            </Box>

            <TouchableOpacity onPress={onSignin} style={styles.loginButton}>
              <Text
                color="white"
                textAlign="center"
                fontFamily="Poppins-Bold"
                fontSize={14}
              >
                {" "}
                Sign In
              </Text>
            </TouchableOpacity>

            <Box
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="s"
              margin="s"
            >
              <Box flex={4} backgroundColor="light" height={1}></Box>
              <Box flex={2}>
                <Text
                  textAlign="center"
                  fontSize={14}
                  fontFamily="Poppins-Bold"
                  color="grey"
                >
                  OR
                </Text>
              </Box>
              <Box height={1} backgroundColor="light" flex={4}></Box>
            </Box>
            <Box position="relative">
              <SocialButton
                style={styles.socialButton}
                title="Login with Google"
                onPress={onSigninGoogle}
              />
              <Ionicons
                style={styles.buttonIcon}
                name={"person"}
                size={20}
                color={"#9098B1"}
              />
            </Box>
            <Box position="relative">
              <SocialButton
                style={styles.socialButton}
                title=" Login with facebook"
                onPress={onSinginFacebook}
              />
              <Ionicons
                style={styles.buttonIcon}
                name={"person"}
                size={20}
                color={"#9098B1"}
              />
            </Box>

            <Text
              marginTop="s"
              color="blue"
              textAlign="center"
              fontFamily="Poppins-Bold"
              fontSize={12}
            >
              Forgot Password?
            </Text>

            <Text
              marginTop="s"
              color="grey"
              textAlign="center"
              fontFamily="Poppins-Regular"
              fontSize={12}
            >
              Don't have a account?
              <Text
                onPress={() => navigation.navigate("SignUp")}
                fontSize={12}
                color="blue"
                fontFamily="Poppins-Bold"
              >
                Register
              </Text>
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  input: {
    height: 48,
    margin: 6,
    borderWidth: 1,
    borderColor: "#EBF0FF",
    paddingHorizontal: 10,
    paddingLeft: 35,
    borderRadius: 5,
    fontFamily: "Poppins-Regular",
  },
  loginButton: {
    height: 57,
    margin: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40BFFF",
    shadowOpacity: 0.4,
    padding: 10,
    elevation: 20,
    borderRadius: 5,
    shadowColor: "#40BFFF",
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 30,
  },
  socialButton: {
    height: 57,
    margin: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EBF0FF",
  },
  logoPosition: {
    position: "absolute",
    left: 16,
    top: 20,
  },
  buttonIcon: {
    position: "absolute",
    left: 16,
    top: 25,
  },
  focusedInput: {
    borderColor: "#40BFFF", // Border color when focused
  },
});

export default LoginScreen;
