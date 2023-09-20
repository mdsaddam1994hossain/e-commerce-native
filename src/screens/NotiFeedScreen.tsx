import { StyleSheet } from "react-native";
import React from "react";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import { FeedData } from "../../src/Data/Data";
import NotificationDescription from "../../src/components/Notification/NotificationDescription";
import { TNotification } from "../../src/Data/data.t";

const NotiFeedScreen = () => {
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title="Feed" />
      <ReStyleBox paddingTop="sm" paddingHorizontal={"sm"}>
        {FeedData.map((item: TNotification, index: number) => {
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

export default NotiFeedScreen;

const styles = StyleSheet.create({});
