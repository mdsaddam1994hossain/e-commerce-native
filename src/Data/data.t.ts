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

export interface TAddress {
  fName: string;
  lName: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  stateProvince: string;
  zipCode: string;
  phoneNumber: string;
}

export interface TAddressData {
  id: number;
  title: string;
  fullAddress: string;
  phone: string;
}

export interface TNotiData {
  id: number;
  img: ImageSourcePropType;
  title: string;
  numberOfNotifi: number;
  screen: string;
}

export interface TNotification {
  id: number;
  img: ImageSourcePropType;
  title: string;
  description: string;
  date: string;
}
