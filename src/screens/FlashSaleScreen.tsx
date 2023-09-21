import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import CustomHeader from "../../src/components/CustomHeader/CustomHeader";
import DiscountBanner from "../../src/components/Banner/DiscountBanner";
import { recoData } from "../../src/Data/Data";
import RecomendedProduct from "../../src/components/ProductCard/RecomendedProduct";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";

const serchIcon = require("../../assets/serchEx.png");

const FlashSaleScreen = () => {
  return (
    <ReStyleBox flex={1} paddingTop="l" backgroundColor="white">
      <CustomHeader title={"Super Flash Sale"} pluseIcon={serchIcon} />

      <ScrollView>
        <ReStyleBox paddingTop={"sm"} paddingHorizontal="sm">
          <DiscountBanner title="Super Flash Sale" discount={50} />

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ReStyleBox paddingTop={"sm"}>
              <FlatList
                data={recoData}
                scrollEnabled={true}
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
                    isFav={false}
                  />
                )}
              />
            </ReStyleBox>
          </ScrollView>
        </ReStyleBox>
      </ScrollView>
    </ReStyleBox>
  );
};

export default FlashSaleScreen;

const styles = StyleSheet.create({});
