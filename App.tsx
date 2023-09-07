import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import StackNavigation from "./src/navigation";
import theme from "./src/theme";

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/Poppins/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="white" />
        <StackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
