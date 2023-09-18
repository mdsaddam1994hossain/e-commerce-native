import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import BottomTab from "./bottomNavigation";
import AddAddressScreen from "./screens/AddAddressScreen";
import AddCardScreen from "./screens/AddCardScreen";
import AddressScreen from "./screens/AddressScreen";
import CardPreViewScreen from "./screens/CardPreviewScreen";
import CreditCardSecreen from "./screens/CreditCardSecreen";
import GenderEditScreen from "./screens/GenderEdit";

import LoginScreen from "./screens/LoginScreen";
import NameEditScreen from "./screens/NameEditScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ProductDetailsScreen from "./screens/ProductDetails";
import ProfileScreen from "./screens/ProfileScreen";
import ReviewScreen from "./screens/ReviewScreen";
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
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="CreditCard" component={CreditCardSecreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="CardPreview" component={CardPreViewScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="AddAddress" component={AddAddressScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="WriteReview" component={WriteReviewScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
