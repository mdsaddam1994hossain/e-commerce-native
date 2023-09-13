import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import ReviewCard from "../../src/components/ProductCard/ReviewCard";
import PrimaryButton from "../../src/components/button/PrimaryButton";

const ReviewScreen = ({ navigation }: ApplicationScreenProps) => {
  const writeReview = () => {
    navigation.navigate("WriteReview");
  };
  return (
    <ScrollView>
      <ReStyleBox
        paddingHorizontal="sm"
        backgroundColor="white"
        paddingTop={"lg"}
      >
        {[1, 2, 3, 4].map((item, index) => (
          <ReStyleBox key={index}>
            <ReStyleBox marginVertical="sm">
              <ReviewCard
                name="James Lawson"
                rating={4}
                description="air max are always very comfortable fit, clean and just perfecct in every way. just the box was too small and scrunched the "
              />
            </ReStyleBox>
          </ReStyleBox>
        ))}

        <ReStyleBox marginVertical="sm">
          <PrimaryButton
            text={"Write Review"}
            buttonVariant={"primary"}
            textVariant={"textHeader"}
            onPress={writeReview}
          />
        </ReStyleBox>
      </ReStyleBox>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ReviewScreen;
