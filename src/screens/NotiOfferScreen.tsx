import { StyleSheet } from "react-native";
import React from "react";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import { OfferData } from "../../src/Data/Data";
import NotificationDescription from "../../src/components/Notification/NotificationDescription";
import { TNotification } from "../../src/Data/data.t";

const NotiOfferScreen = () => {
  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title="Offer" />
      <ReStyleBox paddingTop="sm" paddingHorizontal={"sm"}>
        {OfferData.map((item: TNotification, index: number) => {
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

export default NotiOfferScreen;

const styles = StyleSheet.create({});
