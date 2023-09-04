import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import StackNavigation from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="green" />
      <StackNavigation />
    </NavigationContainer>
  );
}
