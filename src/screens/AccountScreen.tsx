import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";

const userIcon = require("../../assets/userActive.png");
const orderIcon = require("../../assets/order.png");
const addressIcon = require("../../assets/location.png");
const cardIcon = require("../../assets/card.png");

const AccountScreen = ({ navigation }: ApplicationScreenProps) => {
  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <ReStyleBox
      flex={1}
      backgroundColor="white"
      paddingTop="sm"
      paddingHorizontal="sm"
    >
      <Pressable onPress={goToProfile}>
        <ReStyleBox
          paddingTop="sm"
          marginBottom="m"
          flexDirection="row"
          gap="m"
          alignItems="center"
        >
          <Image
            source={userIcon}
            style={styles.iconSize}
            resizeMode="contain"
          />
          <ReStyleText variant="heading6">Profile</ReStyleText>
        </ReStyleBox>
      </Pressable>

      <ReStyleBox
        marginVertical="m"
        flexDirection="row"
        gap="m"
        alignItems="center"
      >
        <Image
          source={orderIcon}
          style={styles.iconSize}
          resizeMode="contain"
        />
        <ReStyleText variant="heading6">Order</ReStyleText>
      </ReStyleBox>
      <ReStyleBox
        marginVertical="m"
        flexDirection="row"
        gap="m"
        alignItems="center"
      >
        <Image
          source={addressIcon}
          style={styles.iconSize}
          resizeMode="contain"
        />
        <ReStyleText variant="heading6">Address</ReStyleText>
      </ReStyleBox>
      <ReStyleBox
        marginVertical="m"
        flexDirection="row"
        gap="m"
        alignItems="center"
      >
        <Image source={cardIcon} style={styles.iconSize} resizeMode="contain" />
        <ReStyleText variant="heading6">Payment</ReStyleText>
      </ReStyleBox>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    height: 24,
    width: 24,
  },
});

export default AccountScreen;
