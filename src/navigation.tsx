import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "./screens/HomeScreen";

import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignUpScreen from "./screens/SignUpScreen";
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
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
