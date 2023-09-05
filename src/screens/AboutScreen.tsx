import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { Button } from "react-native";

import { Theme } from "../theme";
import { ApplicationScreenProps } from "../types/navigation";

const Box = createBox<Theme>();
const Text = createText<Theme>();

const AboutScreen = ({ route, navigation }: ApplicationScreenProps) => {
  const { id, name, details } = route.params;

  console.log(id, name, details);

  return (
    <Box backgroundColor="mainBackground">
      <Text color="mainForeground">ABOUT SCREEN</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </Box>
  );
};

export default AboutScreen;
