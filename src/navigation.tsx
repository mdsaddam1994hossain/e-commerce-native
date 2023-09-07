import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
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
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
