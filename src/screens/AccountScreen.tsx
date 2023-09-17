import React from "react";
import { StyleSheet } from "react-native";
import AccoutInfoCard from "../../src/components/Account/AccountInfoCard";
import { accountData } from "../../src/Data/Data";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";

const AccountScreen = ({ navigation }: ApplicationScreenProps) => {
  const accountDetails = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <ReStyleBox
      flex={1}
      backgroundColor="white"
      paddingTop="sm"
      paddingHorizontal="sm"
    >
      {accountData.map((item, index) => {
        return (
          <ReStyleBox key={index}>
            <AccoutInfoCard
              icon={item.icon}
              title={item.title}
              screen={item.screen}
              accountDetails={accountDetails}
            />
          </ReStyleBox>
        );
      })}
    </ReStyleBox>
  );
};

export default AccountScreen;
