import React from "react";
import AccoutInfoCard from "../../src/components/Account/AccountInfoCard";
import { accountData } from "../../src/Data/Data";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import { ScrollView } from "react-native";

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
      <ScrollView>
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
      </ScrollView>
    </ReStyleBox>
  );
};

export default AccountScreen;
