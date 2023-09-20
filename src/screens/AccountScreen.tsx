import React from "react";
import AccoutInfoCard from "../../src/components/Account/AccountInfoCard";
import { accountData } from "../../src/Data/Data";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import { ScrollView } from "react-native";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";

const AccountScreen = ({ navigation }: ApplicationScreenProps) => {
  const accountDetails = (screen: string) => {
    if (screen === "Payment") {
      navigation.navigate(screen, { prevRouter: "account" });
    } else {
      navigation.navigate(screen);
    }
  };

  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop={"l"}>
      <CustomHeader title="Account" backIcon={false} />
      <ScrollView>
        <ReStyleBox paddingTop="sm" paddingHorizontal="sm">
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
      </ScrollView>
    </ReStyleBox>
  );
};

export default AccountScreen;
