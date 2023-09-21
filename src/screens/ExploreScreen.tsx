import React from "react";
import { FlatList, ScrollView } from "react-native";
import SearchHeader from "../../src/components/CustomHeader/SearchHeader";
import CategoryItem from "../../src/components/categoryItem/CategoryItem";
import { MenFashonData, WomanFashonData } from "../../src/Data/Data";
import { ReStyleBox } from "../components/ReStyleBox/ReStyleBox";
import { ReStyleText } from "../components/ReStyleText/ReStyleText";

import { ApplicationScreenProps } from "../types/navigation";

const ExploreScreen = ({ navigation }: ApplicationScreenProps) => {
  const handlePress = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <ReStyleBox paddingTop="l" flex={1} backgroundColor="white">
      <SearchHeader handlePress={handlePress} title={"Search Product"} />
      <ReStyleBox paddingHorizontal="sm" paddingTop="sm">
        <ReStyleText variant="heading5" color="dark">
          {" "}
          Man Fashion
        </ReStyleText>
        <ReStyleBox marginTop="xs">
          <FlatList
            data={MenFashonData}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CategoryItem
                title={item.title}
                src={item.img}
                isCatagory={false}
              />
            )}
          />
        </ReStyleBox>

        <ReStyleText variant="heading5" color="dark" marginTop={"m"}>
          {" "}
          Woman Fashion
        </ReStyleText>
        <ReStyleBox marginTop="xs">
          <FlatList
            data={WomanFashonData}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CategoryItem
                title={item.title}
                src={item.img}
                isCatagory={false}
              />
            )}
          />
        </ReStyleBox>
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default ExploreScreen;
