import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type MainParamsList = {
  Login: undefined;
  Account: undefined;
  SignUp: undefined;
  Home: undefined;
  ProductDetails: undefined;
  Review: undefined;
  WriteReview: undefined;
  Explore: undefined;
  Profile: undefined;
  "Your Cart": undefined;
  Offer: undefined;
  Tabs: undefined;
  Name: undefined;
  Gender: undefined;
  EditBirthday: undefined;
  EditEmail: undefined;
  EditPhone: undefined;
  EditPassword: undefined;
  Order: undefined;
  OrderDetails: undefined;
  Payment: undefined;
  CreditCard: undefined;
  AddCard: undefined;
  CardPreview: undefined;
  Address: undefined;
  AddAddress: undefined;
  EditAddress: undefined;
  DeleteAddress: undefined;
};

export type ApplicationStackParamList = {
  Login: undefined;
  Account: NavigatorScreenParams<MainParamsList>;
  SignUp: NavigatorScreenParams<MainParamsList>;
  Home: NavigatorScreenParams<MainParamsList>;
  ProductDetails: NavigatorScreenParams<MainParamsList>;
  Review: NavigatorScreenParams<MainParamsList>;
  WriteReview: NavigatorScreenParams<MainParamsList>;
  Explore: NavigatorScreenParams<MainParamsList>;
  Profile: NavigatorScreenParams<MainParamsList>;
  "Your Cart": NavigatorScreenParams<MainParamsList>;
  Offer: NavigatorScreenParams<MainParamsList>;
  Tabs: NavigatorScreenParams<MainParamsList>;
  Name: NavigatorScreenParams<MainParamsList>;
  Gender: NavigatorScreenParams<MainParamsList>;
  EditBirthday: NavigatorScreenParams<MainParamsList>;
  EditEmail: NavigatorScreenParams<MainParamsList>;
  EditPhone: NavigatorScreenParams<MainParamsList>;
  EditPassword: NavigatorScreenParams<MainParamsList>;
  Order: NavigatorScreenParams<MainParamsList>;
  OrderDetails: NavigatorScreenParams<MainParamsList>;
  Payment: NavigatorScreenParams<MainParamsList>;
  CreditCard: NavigatorScreenParams<MainParamsList>;
  AddCard: NavigatorScreenParams<MainParamsList>;
  CardPreview: NavigatorScreenParams<MainParamsList>;
  Address: NavigatorScreenParams<MainParamsList>;
  AddAddress: NavigatorScreenParams<MainParamsList>;
  EditAddress: NavigatorScreenParams<MainParamsList>;
  DeleteAddress: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
