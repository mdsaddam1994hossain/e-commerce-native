import { FC } from "react";
import { ReStyleBox } from "../ReStyleBox/ReStyleBox";
import { ReStyleText } from "../ReStyleText/ReStyleText";

type Props = {};

const Specification = () => {
  return (
    <ReStyleBox>
      <ReStyleText variant="heading5" color="dark" marginVertical="m">
        Specification
      </ReStyleText>
      <ReStyleBox flexDirection="row" justifyContent="space-between">
        <ReStyleBox>
          <ReStyleText variant={"bodyTextSmall"} color="dark">
            Shown:
          </ReStyleText>
        </ReStyleBox>
        <ReStyleBox>
          <ReStyleText
            variant={"bodyTextSmall"}
            color="grey"
            textAlign={"right"}
          >
            Laser
          </ReStyleText>
          <ReStyleText
            variant={"bodyTextSmall"}
            color="grey"
            textAlign={"right"}
          >
            Blue/Anthracite/Watermel
          </ReStyleText>
          <ReStyleText
            variant={"bodyTextSmall"}
            color="grey"
            textAlign={"right"}
          >
            on/White
          </ReStyleText>
        </ReStyleBox>
      </ReStyleBox>
      <ReStyleBox
        marginVertical="m"
        flexDirection="row"
        justifyContent="space-between"
      >
        <ReStyleText variant="bodyTextSmall" color="dark">
          Style:
        </ReStyleText>
        <ReStyleText variant="bodyTextSmall" color="grey">
          CD0113-400
        </ReStyleText>
      </ReStyleBox>
      <ReStyleText variant="bodyTextSmall" color="grey">
        The Nike Air Max 270 React ENT combines a ful-length React foam midsole
        with a 270 Max Air unit for unirvaled comfort and strikng
      </ReStyleText>
    </ReStyleBox>
  );
};

export default Specification;
