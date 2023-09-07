import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type MainParamsList = {
  Login: undefined;
  Profile: undefined;
  About: undefined;

};

export type ApplicationStackParamList = {
  Login: undefined;
  Profile: NavigatorScreenParams<MainParamsList>;
  About: NavigatorScreenParams<MainParamsList>;
 
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
