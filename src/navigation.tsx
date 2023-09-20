import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import BottomTab from "./bottomNavigation";
import AddAddressScreen from "./screens/AddAddressScreen";
import AddCardScreen from "./screens/AddCardScreen";
import AddressScreen from "./screens/AddressScreen";
import CardPreViewScreen from "./screens/CardPreviewScreen";
import ChooseCardScreen from "./screens/ChooseCardScreen";
import CreditCardSecreen from "./screens/CreditCardSecreen";
import DeleteAddressScreen from "./screens/DeleteAddressScreen";
import EditAddressScreen from "./screens/EditAddressScreen";
import EditBirthDateScreen from "./screens/EditBirthDateScreen";
import EditEmailScreen from "./screens/EditEmailScreen";
import EditPasswordScreen from "./screens/EditPasswordScreen";
import EditPhoneScreen from "./screens/EditPhoneScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import GenderEditScreen from "./screens/GenderEdit";

import LoginScreen from "./screens/LoginScreen";
import NameEditScreen from "./screens/NameEditScreen";
import NotiActivityScreen from "./screens/NotiActivityScreen";
import NotiFeedScreen from "./screens/NotiFeedScreen";
import NotificationScreen from "./screens/NotificationScreen";
import NotiOfferScreen from "./screens/NotiOfferScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderSuccessScreen from "./screens/OrderSuccessScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ProductDetailsScreen from "./screens/ProductDetails";
import ProfileScreen from "./screens/ProfileScreen";
import ReviewScreen from "./screens/ReviewScreen";
import ShipToScreen from "./screens/ShipToScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WriteReviewScreen from "./screens/WriteReviewScreen";
import { ApplicationStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<ApplicationStackParamList>();

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="Tabs"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Name" component={NameEditScreen} />
      <Stack.Screen name="Gender" component={GenderEditScreen} />
      <Stack.Screen name="EditBirthday" component={EditBirthDateScreen} />
      <Stack.Screen name="EditEmail" component={EditEmailScreen} />
      <Stack.Screen name="EditPhone" component={EditPhoneScreen} />
      <Stack.Screen name="EditPassword" component={EditPasswordScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="CreditCard" component={CreditCardSecreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="CardPreview" component={CardPreViewScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="AddAddress" component={AddAddressScreen} />
      <Stack.Screen name="EditAddress" component={EditAddressScreen} />
      <Stack.Screen name="DeleteAddress" component={DeleteAddressScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="WriteReview" component={WriteReviewScreen} />
      <Stack.Screen name="ShipTo" component={ShipToScreen} />
      <Stack.Screen name="ChooseCard" component={ChooseCardScreen} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
      <Stack.Screen name="Favorite" component={FavouriteScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="NotiOffer" component={NotiOfferScreen} />
      <Stack.Screen name="NotiFeed" component={NotiFeedScreen} />
      <Stack.Screen name="NotiActivity" component={NotiActivityScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
