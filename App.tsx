import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

import StackNavigation from "./src/navigation";
import theme from "./src/theme/theme";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { ReStyleBox } from "./src/components/ReStyleBox/ReStyleBox";

const customFonts = {
  "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
};

async function loadFonts() {
  try {
    await Font.loadAsync(customFonts);
  } catch (error) {
    console.error("Font loading error:", error);
  }
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  if (!fontsLoaded) {
    return (
      <ReStyleBox style={styles.loading}>
        <ActivityIndicator size="large" color="#40BFFF" />
      </ReStyleBox>
    );
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

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
