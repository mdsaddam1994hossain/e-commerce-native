import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import ReviewCard from "../../src/components/ProductCard/ReviewCard";
import PrimaryButton from "../../src/components/button/PrimaryButton";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { reviewItem } from "../../src/Data/Data";
import SelectStar from "../../src/components/Product/SelectStar";
import { TReiew } from "../../src/Data/data.t";

const ReviewScreen = ({ navigation }: ApplicationScreenProps) => {
  const [selectedReview, setSelectedReview] = useState<TReiew>({
    id: 1,
    value: "All Review",
    isStar: false,
  });
  const writeReview = () => {
    navigation.navigate("WriteReview");
  };
  return (
    <ReStyleBox flex={1} paddingTop={"sm"} backgroundColor="white">
      <CustomHeader title={""} />

      <ReStyleBox paddingVertical={"sm"} paddingLeft="sm">
        <FlatList
          data={reviewItem}
          renderItem={({ item }) => (
            <ReStyleBox>
              <SelectStar
                item={item}
                setSelectedReview={setSelectedReview}
                selectedReview={selectedReview}
                isStar={item.isStar}
              />
            </ReStyleBox>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ReStyleBox>

      <ScrollView>
        <ReStyleBox paddingHorizontal="sm">
          <ReStyleBox>
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
          </ReStyleBox>
          <ReStyleBox position={"relative"} paddingBottom="sm">
            <PrimaryButton
              text={"Write Review"}
              buttonVariant={"primary"}
              textVariant={"textHeader"}
              onPress={writeReview}
            />
          </ReStyleBox>
        </ReStyleBox>
      </ScrollView>
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({});

export default ReviewScreen;
