import { paymentData } from "../../src/Data/Data";
import AccoutInfoCard from "../../src/components/Account/AccountInfoCard";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";

const PaymentScreen = ({ navigation, route }: ApplicationScreenProps) => {
  const { prevRouter }: any = route?.params;
  const accountDetails = (screen: string) => {
    navigation.navigate(screen);
  };

  console.log(prevRouter, "prev router...");

  return (
    <ReStyleBox flex={1} backgroundColor="white" paddingTop="l">
      <CustomHeader title={"Payment"} />
      <ReStyleBox paddingHorizontal="sm">
        {paymentData.map((item, index) => {
          return (
            <ReStyleBox key={index}>
              <AccoutInfoCard
                icon={item.icon}
                title={item.title}
                screen={prevRouter === "checkout" ? "ChooseCard" : item.screen}
                accountDetails={accountDetails}
              />
            </ReStyleBox>
          );
        })}
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default PaymentScreen;
