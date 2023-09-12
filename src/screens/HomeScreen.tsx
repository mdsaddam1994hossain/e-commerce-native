import React from "react";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";

import { ApplicationScreenProps } from "../types/navigation";
import CategoryItem from "../../src/components/categoryItem/CategoryItem";
import { FlatList } from "react-native";
import ProductCard from "../../src/components/ProductCard/ProductCard";
import { ScrollView } from "react-native";
import RecomendedBanner from "../../src/components/RecomendedBanner/RecomendedBanner";
import RecomendedProduct from "../../src/components/ProductCard/RecomendedProduct";
import ReviewCard from "../../src/components/ProductCard/ReviewCard";

const shirt = require("../../assets/shirt.png");
const dress = require("../../assets/dress.png");

const categorylData = [
  {
    id: "1",
    title: "Man Shirt",
    img: shirt,
  },
  {
    id: "2",
    title: "Dress",
    img: dress,
  },
  { id: "3", title: "Man Work Equipment", img: shirt },
  { id: "4", title: "Woman Bag", img: dress },
];
const productData = [
  {
    id: "1",
    title: "FS - Nike Air Max 270 React..",
    discountedPrice: 29943,
    price: 53433,
    discount: 24,
  },
  {
    id: "2",
    title: "FS - QUILTED MAXI CROS",
    discountedPrice: 28543,
    price: 56254,
    discount: 32,
  },
  {
    id: "3",
    title: "XX - MAXI Air Max Cross",
    discountedPrice: 29943,
    price: 53433,
    discount: 20,
  },
  {
    id: "4",
    title: "Nike - Nike Air Max 270 ..",
    discountedPrice: 589674,
    price: 58666,
    discount: 35,
  },
];

const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
  return (
    <ScrollView>
      <ReStyleBox flex={1} backgroundColor="white" paddingTop="lg">
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
                index={index}
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
                index={index}
              />
            )}
          />
        </ReStyleBox>
        <ReStyleBox paddingHorizontal="sm" marginTop="sm" borderRadius={5}>
          <RecomendedBanner />
        </ReStyleBox>
        <ReStyleBox marginHorizontal="sm" marginTop="sm">
          <FlatList
            data={productData}
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
              />
            )}
          />
        </ReStyleBox>

        <ReStyleBox paddingHorizontal="sm">
          <ReviewCard
            name="James Lawson"
            rating={4}
            description="air max are always very comfortable fit, clean and just perfecct in every way. just the box was too small and scrunched the "
          />
        </ReStyleBox>
      </ReStyleBox>
    </ScrollView>
  );
};

export default HomeScreen;
