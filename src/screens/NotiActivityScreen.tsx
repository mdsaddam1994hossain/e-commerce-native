import { StyleSheet } from "react-native";
import React from "react";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import { ActivityData } from "../../src/Data/Data";
import NotificationDescription from "../../src/components/Notification/NotificationDescription";

const NotiActivityScreen = () => {
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title="Activity" />
      <ReStyleBox paddingTop="sm" paddingHorizontal={"sm"}>
        {ActivityData.map((item, index) => {
          return (
            <ReStyleBox key={index} paddingBottom="l">
              <NotificationDescription
                icon={item.img}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            </ReStyleBox>
          );
        })}
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default NotiActivityScreen;

const styles = StyleSheet.create({});
