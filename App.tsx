import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";

import StackNavigation from "./src/navigation";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="green" />
        <StackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
