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
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
