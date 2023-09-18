import { paymentData } from "../../src/Data/Data";
import AccoutInfoCard from "../../src/components/Account/AccountInfoCard";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";

const PaymentScreen = ({ navigation }: ApplicationScreenProps) => {
  const accountDetails = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <ReStyleBox
      flex={1}
      backgroundColor="white"
      paddingTop="xl"
      paddingHorizontal="sm"
    >
      {paymentData.map((item, index) => {
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

export default PaymentScreen;
