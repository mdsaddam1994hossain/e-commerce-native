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
import DiscountBanner from "../../src/components/Banner/DiscountBanner";
import { categorylData, megaData, productData, recoData } from "../Data/Data";
import SearchHeader from "../../src/components/CustomHeader/SearchHeader";
import { TouchableOpacity } from "react-native";

const icon1 = require("../../assets/love.png");
const icon2 = require("../../assets/love.png");

const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
  const handlePress = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <ReStyleBox paddingTop="l" flex={1} backgroundColor="white">
      <SearchHeader
        handlePress={handlePress}
        title={"Search Product"}
        icon1={icon1}
        icon2={icon2}
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
            <TouchableOpacity onPress={() => handlePress("Explore")}>
              <ReStyleText variant="headingBlue">More Category</ReStyleText>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => handlePress("FlashSale")}>
              <ReStyleText variant="headingBlue">See More</ReStyleText>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => handlePress("FlashSale")}>
              <ReStyleText variant="headingBlue">See More</ReStyleText>
            </TouchableOpacity>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ReStyleBox marginHorizontal="sm" marginTop="sm">
              <FlatList
                data={recoData}
                numColumns={2}
                showsVerticalScrollIndicator={false}
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

const styles = StyleSheet.create({});

export default HomeScreen;
