import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { Image, StyleSheet } from "react-native";
import { ReStyleText } from "./components/ReStyleText/ReStyleText";
import AccountScreen from "./screens/AccountScreen";
import CartScreen from "./screens/CartScreen";
import ExploreScreen from "./screens/ExploreScreen";
import HomeScreen from "./screens/HomeScreen";
import OfferScreen from "./screens/OfferScreen";
import { ApplicationStackParamList } from "./types/navigation";

const Tab = createBottomTabNavigator<ApplicationStackParamList>();

type Props = {
  focused: boolean;
  label: string;
};
const CustomLabel: FC<Props> = ({ focused, label }) => {
  return (
    <ReStyleText
      paddingTop={"s"}
      variant={focused ? "bodyTextBoldBlue" : "bodyTextNormal"}
    >
      {label}
    </ReStyleText>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingVertical: 16 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomLabel focused={focused} label="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/homeActive.png")
                  : require("../assets/home.png")
              }
              style={styles.iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomLabel focused={focused} label="Explore" />
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/serchExActive.png")
                  : require("../assets/serchEx.png")
              }
              style={styles.iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomLabel focused={focused} label="Cart" />
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/cartActive.png")
                  : require("../assets/cart.png")
              }
              style={styles.iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomLabel focused={focused} label="Offer" />
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/Offer.png")
                  : require("../assets/offerIcon.png")
              }
              style={styles.iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomLabel focused={focused} label="Account" />
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/userActive.png")
                  : require("../assets/User.png")
              }
              style={styles.iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  iconSize: {
    height: 18,
    width: 18,
  },
});
export default BottomTab;
