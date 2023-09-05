import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { Pressable } from "react-native";

import { Theme } from "../theme";
import { ApplicationScreenProps } from "../types/navigation";

const Box = createBox<Theme>();
const Text = createText<Theme>();

const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
  return (
    <Box width={"100%"} backgroundColor="cardPrimaryBackground">
      <Text color="mainBackground">Home SCREEN</Text>
      <Pressable
        onPress={() =>
          navigation.navigate("Profile", {
            id: 1,
            name: "Profile",
            email: "jon.420@gmail.com",
          })
        }
      >
        <Text color="mainForeground">See Profile</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate("About", {
            id: "djfkas",
            name: "About",
            details: "This is about page of frist react native...",
          })
        }
      >
        <Text color="mainForeground">See About</Text>
      </Pressable>
    </Box>
  );
};

export default HomeScreen;
