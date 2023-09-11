import { createBox, createText } from "@shopify/restyle";
import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import LogoIcon from "../../src/components/LogoIcon";
import Ionicons from "react-native-vector-icons/Ionicons";

import { ReStyleTheme } from "../theme/theme";
import { ApplicationScreenProps } from "../types/navigation";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import { space } from "../../src/theme/spacing";

const Box = createBox<ReStyleTheme>();
const Text = createText<ReStyleTheme>();

const { sm } = space;

const SignUpScreen = ({ navigation }: ApplicationScreenProps) => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleFocusEmail = () => {
    setIsEmailFocused(true);
  };

  const handleBlurEmail = () => {
    setIsEmailFocused(false);
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
        <Box flex={1} paddingTop="xxxl">
          <LogoIcon />

          <Text
            color="dark"
            fontFamily="Poppins-Bold"
            fontSize={16}
            textAlign="center"
            paddingTop={"m"}
          >
            Let's Get Started
          </Text>
          <Text
            color="grey"
            fontFamily="Poppins-Regular"
            fontSize={12}
            textAlign="center"
          >
            create an new account
          </Text>
          <Box marginTop="m">
            <TextInput
              placeholder="Full Name"
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
          <Box>
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
          <Box>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
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
          <Box>
            <TextInput
              placeholder="Password Again"
              secureTextEntry={true}
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

          <TouchableOpacity onPress={onSignin} style={styles.signUpButton}>
            <Text
              color="white"
              fontSize={14}
              textAlign="center"
              fontFamily="Poppins-Bold"
            >
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>

          <Text
            marginTop="s"
            color="grey"
            textAlign="center"
            fontFamily="Poppins-Regular"
            fontSize={12}
          >
            have a account?
            <Text
              onPress={() => navigation.navigate("Login")}
              fontSize={12}
              color="blue"
              fontFamily="Poppins-Bold"
            >
              {" "}
              Sign In
            </Text>
          </Text>
          <PrimaryButton
            text={"Test Primary"}
            buttonVariant={"primary"}
            textVariant={"textHeader"}
            onPress={onSignin}
          />
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: "100%",
  },

  input: {
    height: 48,
    marginVertical: 6,
    width: "100%",
    borderWidth: 1,
    borderColor: "#EBF0FF",
    paddingHorizontal: 10,
    paddingLeft: 35,
    borderRadius: 5,
    fontFamily: "Poppins-Regular",
  },
  signUpButton: {
    height: 57,
    marginVertical: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40BFFF",
    padding: 10,
    elevation: 20,
    shadowOpacity: 0.4,
    borderRadius: 5,
    shadowColor: "#40BFFF",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 30,
  },

  logoPosition: {
    position: "absolute",
    left: 16,
    top: 20,
  },

  focusedInput: {
    borderColor: "#40BFFF", // Border color when focused
  },
  siteSpace: {
    paddingHorizontal: sm,
  },
});

export default SignUpScreen;
