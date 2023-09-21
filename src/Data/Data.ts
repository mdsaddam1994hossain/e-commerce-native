import { ImageSourcePropType } from "react-native";
import {
  TCategoryData,
  TColorData,
  TSizeData,
  TRecomended,
  TAccountCard,
  TAddressData,
  TNotiData,
  TNotification,
  TReiew,
} from "./data.t";

const shirt = require("../../assets/shirt.png");
const dress = require("../../assets/dress.png");
const equipment = require("../../assets/equipment.png");
const womanBag = require("../../assets/womanBag.png");
const manShoes = require("../../assets/shoes.png");
const manPants = require("../../assets/pants.png");
const manTshirt = require("../../assets/tshirt.png");
const manUnderPent = require("../../assets/underPent.png");
const womanTShirt = require("../../assets/womanTShirt.png");
const womanPants = require("../../assets/womanPants.png");
const highHeels = require("../../assets/highHeels.png");
const bikini = require("../../assets/bikini.png");
const skirt = require("../../assets/skirt.png");
const p1 = require("../../assets/p1.png");
const p2 = require("../../assets/p2.png");
const p3 = require("../../assets/p3.png");
const p4 = require("../../assets/p4.png");
const p5 = require("../../assets/p5.png");
const p6 = require("../../assets/p6.png");
const cardIcon = require("../../assets/card.png");
const paypal = require("../../assets/Paypal.png");
const bank = require("../../assets/bank.png");
const notiIcon = require("../../assets/Offer.png");
const feedIcon = require("../../assets/feed.png");
const actiIcon = require("../../assets/activity.png");
const activityIcon = require("../../assets/activityIcon.png");

const userIcon = require("../../assets/userActive.png");
const orderIcon = require("../../assets/order.png");
const addressIcon = require("../../assets/location.png");

export const categorylData: TCategoryData[] = [
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
  { id: "3", title: "Man Work Equipment", img: equipment },
  { id: "4", title: "Woman Bag", img: womanBag },
  { id: "5", title: "Man Shoes", img: manShoes },
  { id: "6", title: "Man Pants", img: manPants },
];

export const MenFashonData: TCategoryData[] = [
  { id: "1", title: "Man Shirt", img: shirt },
  { id: "2", title: "Man Work Equipment", img: equipment },
  { id: "3", title: "Man T-Shirt", img: manTshirt },
  { id: "4", title: "Man Shoes", img: manShoes },
  { id: "5", title: "Man Pants", img: manPants },
  { id: "6", title: "Man Underwear", img: manUnderPent },
];
export const WomanFashonData: TCategoryData[] = [
  { id: "1", title: "Dress", img: dress },
  { id: "2", title: "Woman T-Shirt", img: womanTShirt },
  { id: "3", title: "Woman Pants", img: womanPants },
  { id: "4", title: "Skirt", img: skirt },
  { id: "5", title: "Woman Bag", img: womanBag },
  { id: "6", title: "High Heels", img: highHeels },
  { id: "7", title: "Bikini", img: bikini },
];

export const productData = [
  {
    id: "1",
    title: "FS - Nike Air Max 270 React..",
    discountedPrice: 29943,
    price: 53433,
    discount: 24,
    imgSrc: p1,
  },
  {
    id: "2",
    title: "FS - QUILTED MAXI CROS",
    discountedPrice: 28543,
    price: 56254,
    discount: 32,
    imgSrc: p2,
  },
  {
    id: "3",
    title: "XX - MAXI Air Max Cross",
    discountedPrice: 29943,
    price: 53433,
    discount: 20,
    imgSrc: p3,
  },
  {
    id: "4",
    title: "Nike - Nike Air Max 270 ..",
    discountedPrice: 589674,
    price: 58666,
    discount: 35,
    imgSrc: p4,
  },
];
export const megaData: TRecomended[] = [
  {
    id: "1",
    title: "FS - Nike Air Max 270 React..",
    discountedPrice: 29943,
    price: 53433,
    discount: 24,
    imgSrc: p3,
  },
  {
    id: "2",
    title: "FS - QUILTED MAXI CROS",
    discountedPrice: 28543,
    price: 56254,
    discount: 32,
    imgSrc: p4,
  },
  {
    id: "3",
    title: "XX - MAXI Air Max Cross",
    discountedPrice: 29943,
    price: 53433,
    discount: 20,
    imgSrc: p2,
  },
  {
    id: "4",
    title: "Nike - Nike Air Max 270 ..",
    discountedPrice: 589674,
    price: 58666,
    discount: 35,
    imgSrc: p1,
  },
];
export const recoData: TRecomended[] = [
  {
    id: "1",
    title: "FS - Nike Air Max 270 React..",
    discountedPrice: 29943,
    price: 53433,
    discount: 24,
    imgSrc: p5,
  },
  {
    id: "2",
    title: "FS - QUILTED MAXI CROS",
    discountedPrice: 28543,
    price: 56254,
    discount: 32,
    imgSrc: p3,
  },
  {
    id: "3",
    title: "XX - MAXI Air Max Cross",
    discountedPrice: 29943,
    price: 53433,
    discount: 20,
    imgSrc: p2,
  },
  {
    id: "4",
    title: "Nike - Nike Air Max 270 ..",
    discountedPrice: 589674,
    price: 58666,
    discount: 35,
    imgSrc: p6,
  },
];

export const sizeData: TSizeData[] = [
  { id: 1, value: "6" },
  { id: 2, value: "7" },
  { id: 3, value: "8" },
  { id: 4, value: "9" },
  { id: 5, value: "10" },
  { id: 6, value: "12" },
];

export const reviewItem: TReiew[] = [
  { id: 1, value: "All Review", isStar: false },
  { id: 2, value: "1", isStar: true },
  { id: 3, value: "2", isStar: true },
  { id: 4, value: "3", isStar: true },
  { id: 5, value: "4", isStar: true },
  { id: 6, value: "5", isStar: true },
];
export const colorData: TColorData[] = [
  { id: 1, value: "yellow" },
  { id: 2, value: "blue" },
  { id: 3, value: "red" },
  { id: 4, value: "green" },
  { id: 5, value: "purpel" },
  { id: 6, value: "dark" },
];

export const paymentData: TAccountCard[] = [
  {
    id: 1,
    icon: cardIcon,
    title: "Credit Card Or Debit",
    screen: "CreditCard",
  },
  { id: 1, icon: paypal, title: "Paypal", screen: "Paypal" },
  { id: 1, icon: bank, title: "Bank Transfer", screen: "BankTransfer" },
];
export const accountData: TAccountCard[] = [
  {
    id: 1,
    icon: userIcon,
    title: "Profile",
    screen: "Profile",
  },
  { id: 1, icon: orderIcon, title: "Order", screen: "Order" },
  { id: 1, icon: addressIcon, title: "Address", screen: "Address" },
  { id: 1, icon: cardIcon, title: "Payment", screen: "Payment" },
];

export const AddressData: TAddressData[] = [
  {
    id: 1,
    title: "Priscekila",
    fullAddress:
      "3711 Spring Hill Rd undefined Tailahassee, Nevada 52874 United States",
    phone: "+99 1234567890",
  },
  {
    id: 2,
    title: "Ahmad Khaidir",
    fullAddress:
      "4858 Spring Hill Rd undefined Tailahassee, Nevada 52874 United States",
    phone: "+99 123456448570",
  },
];

export const notificationData: TNotiData[] = [
  {
    id: 1,
    img: notiIcon,
    title: "Offer",
    numberOfNotifi: 4,
    screen: "NotiOffer",
  },
  {
    id: 2,
    img: feedIcon,
    title: "Feed",
    numberOfNotifi: 8,
    screen: "NotiFeed",
  },
  {
    id: 3,
    img: actiIcon,
    title: "Activity",
    numberOfNotifi: 2,
    screen: "NotiActivity",
  },
];

export const OfferData: TNotification[] = [
  {
    id: 1,
    img: notiIcon,
    title: "The Best Title",
    description:
      "Culpa cillum consectetur labore nulla nullamagna liruree. Id veniam culpa officia aute dolor amet deserunt ex prodent commodo",
    date: "April 30 , 2023 1:01pm",
  },
  {
    id: 2,
    img: notiIcon,
    title: "SUMMER OFFER 98% Cashback",
    description:
      "Culpa cillum consectetur labore nulla nullamagna liruree. Id veniam culpa officia aute dolor amet deserunt ex prodent commodo",
    date: "April 30 , 2023 1:01pm",
  },
  {
    id: 3,
    img: notiIcon,
    title: "Special Offer 25% OFF",
    description:
      "Culpa cillum consectetur labore nulla nullamagna liruree. Id veniam culpa officia aute dolor amet deserunt ex prodent commodo",
    date: "April 30 , 2023 1:01pm",
  },
];
export const FeedData: TNotification[] = [
  {
    id: 1,
    img: p1,
    title: "New Product",
    description: " Nike Air Zoom Pegasus 36 Miami - Special For your Activity",
    date: "Jue 30 , 2023 5:06 PM",
  },
  {
    id: 2,
    img: p5,
    title: "Best Product",
    description:
      "Culpa cillum consectetur labore nulla nullamagna liruree. Id veniam culpa officia aute dolor amet deserunt ex prodent commodo",
    date: "April 30 , 2023 1:01pm",
  },
  {
    id: 3,
    img: p6,
    title: "New Product",
    description:
      "Culpa cillum consectetur labore nulla nullamagna liruree. Id veniam culpa officia aute dolor amet deserunt ex prodent commodo",
    date: "April 30 , 2023 1:01pm",
  },
];
export const ActivityData: TNotification[] = [
  {
    id: 1,
    img: activityIcon,
    title: "Transaction Nike Air Zoom Product",
    description:
      "Culpa cillum consectetur labore nulla nullamagna liruree. Id veniam culpa officia aute dolor amet deserunt ex prodent commodo",
    date: "April 30 , 2023 1:01pm",
  },
  {
    id: 2,
    img: activityIcon,
    title: "Transaction Nike Air Xoom Pegasus 36 Miami",
    description:
      "Culpa cillum consectetur labore nulla nullamagna liruree. Id veniam culpa officia aute dolor amet deserunt ex prodent commodo",
    date: "April 30 , 2023 1:01pm",
  },
  {
    id: 3,
    img: activityIcon,
    title: "Transaction Nike Air Max",
    description:
      "Culpa cillum consectetur labore nulla nullamagna liruree. Id veniam culpa officia aute dolor amet deserunt ex prodent commodo",
    date: "April 30 , 2023 1:01pm",
  },
];
