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
import SearchHeader from "../../src/components/CustomHeader/SearchHeader";

const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
  const handleFavorite = () => {
    navigation.navigate("Favorite");
  };
  const handleNotification = () => {
    navigation.navigate("Notification");
  };
  return (
    <ReStyleBox paddingTop="l" flex={1} backgroundColor="white">
      <SearchHeader
        handleFavorite={handleFavorite}
        handleNotification={handleNotification}
      />
      <ScrollView>
        <ReStyleBox>
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
                <CategoryItem
                  title={item.title}
                  src={item.img}
                  isCatagory={true}
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
            <RecomendedBanner
              title="Recomended"
              subTitle="Product"
              description="We recommend the best for you"
            />
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
    </ReStyleBox>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
