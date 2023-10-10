import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ApplicationScreenProps } from "../../src/types/navigation";
import SearchHeader from "../../src/components/CustomHeader/SearchHeader";

const SearchResultScreen = ({ navigation }: ApplicationScreenProps) => {
  const handlePress = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <ReStyleBox paddingTop="l" flex={1} backgroundColor="white">
      <SearchHeader handlePress={handlePress} title={"Search Product"} />
      <ReStyleBox></ReStyleBox>
    </ReStyleBox>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({});
