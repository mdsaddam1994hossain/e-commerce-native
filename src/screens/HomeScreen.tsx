import React from "react";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import CategoryItem from "../../src/components/categoryItem/CategoryItem";
import { FlatList, StyleSheet } from "react-native";
import ProductCard from "../../src/components/ProductCard/ProductCard";
import { ScrollView } from "react-native";
import RecomendedBanner from "../components/Banner/RecomendedBanner";
import RecomendedProduct from "../../src/components/ProductCard/RecomendedProduct";
import ReviewCard from "../../src/components/ProductCard/ReviewCard";
import DiscountBanner from "../../src/components/Banner/DiscountBanner";
import { categorylData, megaData, productData, recoData } from "../Data/Data";

const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
  return (
    <ScrollView>
      <ReStyleBox flex={1} backgroundColor="white" paddingTop="lg">
        <ReStyleBox margin="sm">
          <DiscountBanner title="Super Flash Sale" discount={50} />
        </ReStyleBox>
        <ReStyleBox
          paddingHorizontal="sm"
          flexDirection="row"
          justifyContent="space-between"
          paddingVertical="sm"
        >
          <ReStyleText variant="heading">Category</ReStyleText>
          <ReStyleText variant="headingBlue">More Category</ReStyleText>
        </ReStyleBox>
        {/* category item */}

        <ReStyleBox marginLeft="sm">
          <FlatList
            data={categorylData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CategoryItem title={item.title} src={item.img} />
            )}
          />
        </ReStyleBox>
        <ReStyleBox
          paddingHorizontal="sm"
          flexDirection="row"
          justifyContent="space-between"
          paddingVertical="m"
        >
          <ReStyleText variant="heading">Flash Sale</ReStyleText>
          <ReStyleText variant="headingBlue">See More</ReStyleText>
        </ReStyleBox>
        <ReStyleBox marginLeft="sm">
          <FlatList
            data={productData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <ProductCard
                title={item.title}
                discountedPrice={item.discountedPrice}
                price={item.price}
                discount={item.discount}
                src={item.imgSrc}
                navigation={navigation}
              />
            )}
          />
        </ReStyleBox>
        <ReStyleBox
          paddingHorizontal="sm"
          flexDirection="row"
          justifyContent="space-between"
          paddingVertical="m"
        >
          <ReStyleText variant="heading">Mega Sale</ReStyleText>
          <ReStyleText variant="headingBlue">See More</ReStyleText>
        </ReStyleBox>
        <ReStyleBox marginLeft="sm">
          <FlatList
            data={megaData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <ProductCard
                title={item.title}
                discountedPrice={item.discountedPrice}
                price={item.price}
                discount={item.discount}
                src={item.imgSrc}
                navigation={navigation}
              />
            )}
          />
        </ReStyleBox>
        <ReStyleBox paddingHorizontal="sm" marginTop="sm" borderRadius={5}>
          <RecomendedBanner />
        </ReStyleBox>
        <ReStyleBox marginHorizontal="sm" marginTop="sm">
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
                isFav={false}
              />
            )}
          />
        </ReStyleBox>
      </ReStyleBox>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
