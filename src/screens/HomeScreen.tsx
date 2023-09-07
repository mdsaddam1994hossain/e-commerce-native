import { createBox, createText } from "@shopify/restyle";
import React from "react";
import LogoIcon from "./../components/LogoIcon";

import { Theme } from "../theme";
import { ApplicationScreenProps } from "../types/navigation";

const Box = createBox<Theme>();
const Text = createText<Theme>();

const HomeScreen = ({ navigation }: ApplicationScreenProps) => {
  return (
    <Box flex={1} backgroundColor="white" paddingTop="xxxl">
      <LogoIcon />
      <Box paddingTop="m">
        <Text fontSize={16} fontWeight="bold" textAlign="center" color="dark">
          Welcome to Lafyuu
        </Text>
      </Box>
    </Box>
  );
};

export default HomeScreen;
