import { ImageSourcePropType } from "react-native";

export interface TCategoryData {
  id: string;
  title: string;
  img: ImageSourcePropType;
}
export interface TRecomended {
  id: string;
  title: string;
  discountedPrice: number;
  price: number;
  discount: number;
  imgSrc: ImageSourcePropType;
  isFav?: boolean;
}
export interface TSizeData {
  id: number;
  value: string;
}
export interface TColorData {
  id: number;
  value: string;
}
export interface TAccountCard {
  id: number;
  icon: ImageSourcePropType;
  title: string;
  screen: string;
}
