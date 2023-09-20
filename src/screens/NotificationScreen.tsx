import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";

import { notificationData } from "../../src/Data/Data";

import { ApplicationScreenProps } from "../types/navigation";
import { TNotiData } from "../../src/Data/data.t";
import NotificationCard from "../components/Notification/NotificationCard";

const NotificationScreen = ({ navigation }: ApplicationScreenProps) => {
  const handlePress = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <ReStyleBox flex={1} paddingTop="l" backgroundColor="white">
      <CustomHeader title={"Notification"} />
      <ReStyleBox paddingTop={"sm"} paddingHorizontal="sm">
        {notificationData.map((item: TNotiData, index) => {
          return (
            <Pressable
              key={index}
              style={styles.padding}
              onPress={() => handlePress(item.screen)}
            >
              <NotificationCard
                img={item.img}
                title={item.title}
                numberOfNotifi={item.numberOfNotifi}
              />
            </Pressable>
          );
        })}
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  img: {
    height: 24,
    width: 24,
  },
  padding: {
    marginBottom: 28,
  },
});
