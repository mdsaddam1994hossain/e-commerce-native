import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LogoIcon from "./../components/LogoIcon";

import { Theme } from "../theme";
import { ApplicationScreenProps } from "../types/navigation";
import SocialButton from "../../src/components/button/SocialButton";

const Box = createBox<Theme>();
const Text = createText<Theme>();

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
  return (
    <Box flex={1} backgroundColor="white" paddingTop="xxxl">
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

        <Box>
          <TextInput placeholder="Your Email" style={styles.input} />
          <Ionicons
            style={styles.logoPosition}
            name={"person"}
            size={16}
            color={"#9098B1"}
          />
        </Box>
        <Box position="relative">
          <TextInput placeholder="Password" style={styles.input} />
          <Ionicons
            style={styles.logoPosition}
            name={"person"}
            size={16}
            color={"#9098B1"}
          />
        </Box>

        <TouchableOpacity onPress={onSignin} style={styles.loginButton}>
          <Text color="white" textAlign="center" fontFamily="Poppins-Regular">
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
            <Text textAlign="center" fontFamily="Poppins-Bold" color="grey">
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
            style={styles.logoPosition}
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
            style={styles.logoPosition}
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
        >
          Forgot Password?
        </Text>
        <Text
          marginTop="s"
          color="grey"
          textAlign="center"
          fontFamily="Poppins-Regular"
        >
          Don't have a account?
          <Text color="blue" fontFamily="Poppins-Bold">
            Register
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    margin: 12,
    borderWidth: 1,
    borderColor: "#EBF0FF",
    paddingHorizontal: 10,
    paddingLeft: 30,
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
    padding: 10,
    elevation: 30,
    borderRadius: 5,
    shadowColor: "#40BFFF",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 30,
  },
  socialButton: {
    height: 57,
    margin: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "RED",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EBF0FF",
  },
  logoPosition: {
    position: "absolute",
    left: 20,
    top: 25,
  },
});

export default LoginScreen;
