import React from "react";
import RecomendedBanner from "../../src/components/Banner/RecomendedBanner";
import DiscountBanner from "../../src/components/Banner/DiscountBanner";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";

const OfferScreen = ({ navigation }: ApplicationScreenProps) => {
  return (
    <ReStyleBox
      paddingTop="sm"
      paddingHorizontal="sm"
      flex={1}
      backgroundColor="white"
    >
      <ReStyleBox padding="m" borderRadius={5} backgroundColor="blue">
        <ReStyleText variant="heading4" color="white">
          Use "MEGLS" Cupon For
        </ReStyleText>
        <ReStyleText variant="heading4" color="white">
          Get 90% off
        </ReStyleText>
      </ReStyleBox>
      <ReStyleBox marginTop="m">
        <DiscountBanner title="Super Flash Sale" discount={50} />
      </ReStyleBox>
      <ReStyleBox marginTop="m">
        <RecomendedBanner
          title="90% Off Super Mega Sale"
          description="Special birthday Lafyuu"
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default OfferScreen;
