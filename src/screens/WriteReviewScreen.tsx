import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";

import { palette } from "../../src/theme/palette";
import { Rating } from "react-native-ratings";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import { space } from "../../src/theme/spacing";
import PrimaryButton from "../../src/components/button/PrimaryButton";

const { white, light, grey, blue } = palette;
const { l } = space;

const WriteReviewScreen = ({ navigation }: ApplicationScreenProps) => {
  const [text, setText] = useState("");
  const [isTextFocused, setIsTextFocused] = useState(false);
  const [ratingValue, setRatingValue] = useState(2);

  const reviewPost = () => {
    console.log("review description", text, "and star value", ratingValue);
  };

  const handleFocusText = () => {
    setIsTextFocused(true);
  };

  const handleBlurText = () => {
    setIsTextFocused(false);
  };

  const ratingCompleted = (rating: any) => {
    setRatingValue(rating);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <CustomHeader title={"Write Review"} />
      <ScrollView>
        <ReStyleBox
          backgroundColor="white"
          paddingHorizontal="sm"
          paddingTop="sm"
        >
          <ReStyleText variant="heading5" color="dark">
            Please write Overall level of satisfaction with your shipping /
            Delivery Service
          </ReStyleText>
          <ReStyleBox flexDirection="row" alignItems="center" gap="sm">
            <Rating
              showRating={false}
              onFinishRating={ratingCompleted}
              style={{ paddingVertical: 10 }}
              imageSize={30}
            />
            <ReStyleText variant="heading5" color="grey">
              {ratingValue}/5
            </ReStyleText>
          </ReStyleBox>
          <ReStyleText marginTop="l" variant="heading5" color="dark">
            Write Your Review
          </ReStyleText>

          <TextInput
            multiline
            numberOfLines={8} // You can adjust the number of lines as needed
            placeholder="Write your review here"
            value={text}
            onChangeText={(newText) => setText(newText)}
            textAlignVertical="top"
            style={[
              styles.textArea,
              isTextFocused ? styles.focusedInput : null,
            ]}
            onFocus={handleFocusText}
            onBlur={handleBlurText}
          />
          <ReStyleText marginTop="l" variant="heading5" color="dark">
            Add Phone
          </ReStyleText>
          <ReStyleBox
            height={72}
            width={72}
            borderWidth={1}
            borderColor="light"
            borderRadius={5}
            justifyContent="center"
            alignItems="center"
            marginTop="s"
          >
            <Image
              source={require("../../assets/Plus.png")}
              style={styles.plus}
            />
          </ReStyleBox>
          <ReStyleBox marginTop={"xxxl"}>
            <PrimaryButton
              text={"Save"}
              buttonVariant={"primary"}
              textVariant={"textHeader"}
              onPress={reviewPost}
            />
          </ReStyleBox>
        </ReStyleBox>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingTop: l,
  },
  textArea: {
    borderWidth: 1,
    borderColor: light,
    color: grey,
    borderRadius: 5,
    padding: 12,
    minHeight: 100,
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    marginTop: 12,
  },
  plus: {
    height: 24,
    width: 24,
  },
  focusedInput: {
    borderColor: blue,
  },
});

export default WriteReviewScreen;
