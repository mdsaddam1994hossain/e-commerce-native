import { FlatList, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";

import { ApplicationScreenProps } from "../types/navigation";
import { recoData } from "../../src/Data/Data";
import RecomendedProduct from "../../src/components/ProductCard/RecomendedProduct";

const FavouriteScreen = ({ navigation }: ApplicationScreenProps) => {
  return (
    <ReStyleBox flex={1} paddingTop="l" backgroundColor="white">
      <CustomHeader title={"Favorite Product"} />
      <ScrollView>
        <ReStyleBox paddingTop={"sm"} paddingHorizontal="sm">
          <FlatList
            data={recoData}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <RecomendedProduct
                title={item.title}
                discountedPrice={item.discountedPrice}
                price={item.price}
                discount={item.discount}
                index={index}
                src={item.imgSrc}
                isFav={true}
              />
            )}
          />
        </ReStyleBox>
      </ScrollView>
    </ReStyleBox>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
