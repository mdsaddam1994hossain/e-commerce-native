import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type MainParamsList = {
  Home: undefined;
  Profile: undefined;
  About: undefined;
  Login: undefined;
};

export type ApplicationStackParamList = {
  Home: undefined;
  Profile: NavigatorScreenParams<MainParamsList>;
  About: NavigatorScreenParams<MainParamsList>;
  Login: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
