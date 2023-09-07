import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

import StackNavigation from "./src/navigation";
import theme from "./src/theme";
import { View, Text, StyleSheet } from "react-native";

const customFonts = {
  "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),

  // Add more font weights and styles as needed
};

async function loadFonts() {
  try {
    await Font.loadAsync(customFonts);
    console.log("Fonts loaded successfully");
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
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
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
