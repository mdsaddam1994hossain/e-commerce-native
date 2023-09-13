import React, { useState } from "react";
import { ReStyleText } from "../../src/components/ReStyleText/ReStyleText";
import { ReStyleBox } from "../../src/components/ReStyleBox/ReStyleBox";
import { ApplicationScreenProps } from "../types/navigation";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import ProductDetailsFront from "../../src/components/Product/ProductDetailsFront";
import SelectSize from "../components/Product/SelectSize";
import SelectColor from "../../src/components/Product/SelectColor";
import { TColorData, TSizeData } from "../../src/Data/data.t";
import { colorData, megaData, sizeData } from "../../src/Data/Data";
import Specification from "../../src/components/Product/Specification";
import ReviewCard from "../../src/components/ProductCard/ReviewCard";
import ProductCard from "../../src/components/ProductCard/ProductCard";
import PrimaryButton from "../../src/components/button/PrimaryButton";

const ProductDetailsScreen = ({ navigation }: ApplicationScreenProps) => {
  const [selectedSize, setSelectedSize] = useState<TSizeData>({
    id: 1,
    value: "6",
  });
  const [selectedColor, setSelectedColor] = useState<TColorData>({
    id: 1,
    value: "yellow",
  });

  const addToCart = () => {
    console.log(
      "add to card size=",
      selectedSize.value,
      "selected color ",
      selectedColor
    );
  };

  return (
    <ScrollView>
      <ReStyleBox backgroundColor="white" flex={1}>
        <ProductDetailsFront
          title="Nike Air Zoom Pegasus 36 Miami"
          price={29943}
        />
        <ReStyleBox paddingLeft="sm" marginTop="sm">
          <ReStyleText variant="heading5" color="dark">
            Select Size
          </ReStyleText>
          <FlatList
            data={sizeData}
            renderItem={({ item }) => (
              <SelectSize
                item={item}
                setSelectedSize={setSelectedSize}
                selectedSize={selectedSize}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <ReStyleText marginTop={"l"} variant="heading5" color="dark">
            Select Color
          </ReStyleText>
          <FlatList
            data={colorData}
            renderItem={({ item }) => (
              <SelectColor
                item={item}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ReStyleBox>
        <ReStyleBox paddingHorizontal="sm">
          <Specification />
          <ReStyleBox
            flexDirection="row"
            justifyContent="space-between"
            marginTop="m"
          >
            <ReStyleText variant="heading5" color="dark">
              Review Product
            </ReStyleText>
            <Pressable onPress={() => navigation.navigate("Review")}>
              <ReStyleText variant="heading5" color="blue">
                See More
              </ReStyleText>
            </Pressable>
          </ReStyleBox>
          <ReStyleBox marginVertical="s" flexDirection="row" gap="sm">
            <Image
              source={require("../../assets/rating.png")}
              style={styles.rating}
            />
            <ReStyleText variant="bodyTextBold">
              4.5{" "}
              <ReStyleText variant="bodyTextNormal" color="grey">
                (5 Review){" "}
              </ReStyleText>
            </ReStyleText>
          </ReStyleBox>
          <ReStyleBox marginVertical="sm">
            <ReviewCard
              name="James Lawson"
              rating={4}
              description="air max are always very comfortable fit, clean and just perfecct in every way. just the box was too small and scrunched the "
            />
          </ReStyleBox>
          <ReStyleText variant="heading5" color="dark">
            You Might Also Like
          </ReStyleText>
        </ReStyleBox>
        <ReStyleBox marginLeft="sm" marginTop="s">
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
        <ReStyleBox paddingHorizontal="sm" marginVertical="l">
          <PrimaryButton
            text={"Add To Cart"}
            buttonVariant={"primary"}
            textVariant={"textHeader"}
            onPress={addToCart}
          />
        </ReStyleBox>
      </ReStyleBox>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rating: {
    height: 16,
    width: 96,
  },
});
export default ProductDetailsScreen;
